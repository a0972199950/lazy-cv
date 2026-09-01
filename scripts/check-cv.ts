/**
 * 客製化履歷合規自檢（/cv skill 第四階段）
 *
 * 用法：pnpm check-cv <uuid>
 *
 * 自動檢查 SKILL.md 第四階段表格中可機械判定的 2–7 與 14 項。
 * 第 1 項（技能關鍵字篩選）僅自動確認 skillKeywordRows 區塊存在且非空；
 * 「JD 匹配優先、只留主流、砍掉冷門、JD 明列不漏」需人工核對。
 * 其餘（jobTitle 格式、stack/image 溯源、JD 具名對應、專案排序、事實強度、tsc）需人工或另行核對。
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const RESUME_ROOT = join(process.cwd(), "app", "(download-pdf)");
const LOCALES = ["zh-TW", "en"] as const;
type Locale = (typeof LOCALES)[number];

const SUMMARY_LIMIT: Record<Locale, number> = { "zh-TW": 350, en: 700 };

const WEAK_VERBS = [
	"負責",
	"參與",
	"Responsible for",
	"Participated in",
	"Helped ",
	"Worked on",
	"Utilized",
];

type Failure = { rule: string; detail: string };

/** 抓出 `const <name> ... = [ ... ];` 這個 top-level 區塊（非貪婪，止於行首的 `];`）。 */
function extractBlock(src: string, name: string): string | null {
	const re = new RegExp(`const ${name}[^=]*=\\s*\\[[\\s\\S]*?\\n\\];`, "m");
	return re.exec(src)?.[0] ?? null;
}

function keywordCount(src: string): number {
	const block = extractBlock(src, "skillKeywordRows");
	if (!block) return -1;
	const arrays = block.match(/keywords:\s*\[[\s\S]*?\]/g) ?? [];
	return arrays.reduce((n, a) => n + (a.match(/"[^"]*"/g) ?? []).length, 0);
}

/** 回傳所有 highlights / contributions 陣列（各自為一組 bullet 字串）。 */
function bulletArrays(src: string): string[][] {
	const out: string[][] = [];
	for (const name of ["experiences", "projects"]) {
		const block = extractBlock(src, name);
		if (!block) continue;
		const arrays = block.match(/(?:highlights|contributions):\s*\[[\s\S]*?\n\s*\],/g) ?? [];
		for (const a of arrays) {
			out.push((a.match(/"(?:[^"\\]|\\.)*"/g) ?? []).map((s) => s.slice(1, -1)));
		}
	}
	return out;
}

/** 不含標點與空白的字元數，與 SKILL.md 的定義一致。 */
function countChars(text: string): number {
	return [...text.replace(/[\s]/g, "")].filter((ch) => /[\p{L}\p{N}]/u.test(ch)).length;
}

function checkLocale(uuid: string, locale: Locale): Failure[] {
	const file = join(RESUME_ROOT, uuid, locale, "page.tsx");
	if (!existsSync(file)) return [{ rule: "檔案存在", detail: `找不到 ${file}` }];

	// 統一行尾：git 在 Windows 簽出的舊檔為 CRLF，會讓下方依賴 \n 的區塊切分失效
	const src = readFileSync(file, "utf-8").replace(/\r\n/g, "\n");
	const fails: Failure[] = [];

	// 1. 技能關鍵字：僅確認 skillKeywordRows 區塊存在且非空。
	//    「JD 匹配優先 → 只留主流、砍掉冷門、JD 明列不漏」屬人工核對（見 SKILL.md 第二階段 §5、第四階段）。
	const kw = keywordCount(src);
	if (kw <= 0) {
		fails.push({ rule: "1 技能關鍵字", detail: "找不到 skillKeywordRows 區塊，或關鍵字為空" });
	}

	const arrays = bulletArrays(src);

	// 2. bullet 數量上限
	for (const arr of arrays) {
		if (arr.length > 3) {
			fails.push({ rule: "2 bullet ≤ 3 條", detail: `${arr.length} 條：${arr[0].slice(0, 40)}…` });
		}
	}

	for (const bullet of arrays.flat()) {
		// 3. 句尾句號
		if (/[.。]$/.test(bullet)) {
			fails.push({ rule: "3 句尾句號", detail: bullet.slice(0, 50) });
		}
		// 4. 弱動詞開頭
		const weak = WEAK_VERBS.find((w) => bullet.startsWith(w));
		if (weak) {
			fails.push({ rule: "4 弱動詞開頭", detail: `「${weak}」→ ${bullet.slice(0, 50)}` });
		}
		// 5. 人稱代名詞
		if (/我的|我們|\bI\b|\bmy\b|\bwe\b/i.test(bullet)) {
			fails.push({ rule: "5 人稱代名詞", detail: bullet.slice(0, 50) });
		}
	}

	// 6. 自我介紹字元數
	const desc = /description=\{`([\s\S]*?)`\}/.exec(src)?.[1];
	if (!desc) {
		fails.push({ rule: "6 自我介紹字元數", detail: "找不到 HeroProfile 的 description" });
	} else {
		const n = countChars(desc);
		if (n > SUMMARY_LIMIT[locale]) {
			fails.push({ rule: "6 自我介紹字元數", detail: `${n} 字元，上限 ${SUMMARY_LIMIT[locale]}` });
		}
		if (/我的|我們|\bI\b|\bmy\b|\bwe\b/i.test(desc)) {
			fails.push({ rule: "5 人稱代名詞（自我介紹）", detail: "自我介紹含人稱代名詞" });
		}
	}

	// 7. 個人網站連結
	const site = new RegExp(
		`\\{\\s*href:\\s*"https://lazy-cv\\.com/${uuid}/${locale}"\\s*,\\s*type:\\s*"website"`,
	);
	if (!site.test(src)) {
		fails.push({
			rule: "7 個人網站連結",
			detail: `contacts 缺少 type:"website" 或 href 不是 https://lazy-cv.com/${uuid}/${locale}`,
		});
	}

	// 14. 工作經歷結構：最近 4 段有要點，第 5 段以後為空陣列
	const expBlock = extractBlock(src, "experiences");
	if (!expBlock) {
		fails.push({ rule: "14 工作經歷完整性", detail: "找不到 experiences 區塊" });
	} else {
		const entries = expBlock
			.split(/\n(?=\t\{\n|\s{2}\{\n)/)
			.filter((e) => /company:\s*"/.test(e));
		entries.forEach((entry, i) => {
			const arr = /highlights:\s*\[([\s\S]*?)\]/.exec(entry)?.[1] ?? "";
			const n = (arr.match(/"(?:[^"\\]|\\.)*"/g) ?? []).length;
			const company = /company:\s*"([^"]+)"/.exec(entry)?.[1] ?? `#${i + 1}`;
			if (i < 4 && n === 0) {
				fails.push({ rule: "14 工作經歷結構", detail: `第 ${i + 1} 段（${company}）應有要點，但為空` });
			}
			if (i >= 4 && n > 0) {
				fails.push({
					rule: "14 工作經歷結構",
					detail: `第 ${i + 1} 段（${company}）應僅保留標題，但有 ${n} 條要點`,
				});
			}
		});
	}

	return fails;
}

function main() {
	const uuid = process.argv[2];
	if (!uuid) {
		console.error("用法：pnpm check-cv <uuid>");
		process.exit(2);
	}
	if (!existsSync(join(RESUME_ROOT, uuid))) {
		console.error(`找不到履歷目錄：${join(RESUME_ROOT, uuid)}`);
		process.exit(2);
	}

	console.log(`\n合規自檢：${uuid}\n${"=".repeat(60)}`);

	let total = 0;
	for (const locale of LOCALES) {
		const fails = checkLocale(uuid, locale);
		total += fails.length;

		console.log(`\n[${locale}]`);
		if (fails.length === 0) {
			console.log("  ✅ 2–7、14 項全數通過");
			continue;
		}
		for (const f of fails) console.log(`  ❌ ${f.rule}：${f.detail}`);
	}

	console.log(`\n${"=".repeat(60)}`);
	console.log(
		total === 0
			? "✅ 機械可判定項目（2–7、14）全數通過"
			: `❌ 共 ${total} 項違規，修正後請重跑`,
	);
	console.log(
		"\n仍須人工核對：1 技能關鍵字篩選（JD 匹配優先、只留主流、砍冷門、JD 明列不漏）｜" +
			"8 jobTitle 格式｜9 stack 溯源｜10 image 溯源｜" +
			"11 JD Required 具名對應｜12 專案排序｜13 事實強度｜15 npx tsc --noEmit\n",
	);

	process.exit(total === 0 ? 0 : 1);
}

main();
