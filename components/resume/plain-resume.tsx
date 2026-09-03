import { Fragment } from "react";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

import { durationMonths, formatDuration, formatMonths } from "./period";
import { parseBold } from "./rich-text";

import type {
  CertificationItem,
  ContactItem,
  EducationItem,
  Experience,
  LanguageItem,
  Project,
  SkillKeywordRow,
} from "./types";

/**
 * 「純表格模式」列印用的資料，由 ResumeLayout 從 children 的 props 收集而來。
 * 每個欄位對應一個履歷區塊元件，缺少的區塊直接不渲染。
 */
export type PlainResumeData = {
  locale: string;
  profile?: {
    name: string;
    jobTitle: string;
    location: string;
    description: string;
    contacts: ContactItem[];
  };
  work?: {
    title: string;
    experiences: Experience[];
  };
  projects?: {
    title: string;
    projects: Project[];
    highlightsLabel?: string;
    contributionsLabel?: string;
    personalProjectsLabel?: string;
    companyProjectsLabel?: string;
  };
  skills?: {
    title: string;
    rows: SkillKeywordRow[];
  };
  education?: {
    sectionTitle: string;
    educationLabel: string;
    educations: EducationItem[];
    certLabel: string;
    certifications: CertificationItem[];
    languageLabel: string;
    languages: LanguageItem[];
  };
};

const profileLabels: Record<string, string> = {
  "en": "Profile",
  "zh-TW": "個人簡介",
  "ja": "プロフィール",
};

const contactIcons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  website: Globe,
} as const satisfies Record<ContactItem["type"], unknown>;

const stackLabels: Record<string, string> = {
  "en": "Stack",
  "zh-TW": "技術棧",
  "ja": "技術スタック",
};

const subprojectsLabels: Record<string, string> = {
  "en": "Projects",
  "zh-TW": "相關專案",
  "ja": "関連プロジェクト",
};

const contributionsFallback: Record<string, string> = {
  "en": "Key Contributions",
  "zh-TW": "重大貢獻",
  "ja": "主な貢献",
};


/**
 * 顯示用的短網址（buy.line.me）。
 * 一定要去掉 https:// 與 www. 前綴：PDF 閱讀器會掃描文字圖層，把這兩種前綴開頭的字串
 * 自動偵測成可點連結，即使 PDF 本身沒有 /Link 註記也一樣，結果就是那段文字選不起來。
 */
function hrefText(href: string) {
  return href
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

/** mailto: 只是協定前綴，去掉後顯示 email 本身。 */
function contactText(contact: ContactItem) {
  return contact.href.startsWith("mailto:")
    ? contact.href.slice("mailto:".length)
    : hrefText(contact.href);
}

/** jobTitle 允許多行（\n），第一行併入姓名，其餘行獨立顯示。 */
function splitJobTitle(jobTitle: string) {
  const [first, ...rest] = jobTitle.split("\n").map((line) => line.trim()).filter(Boolean);
  return { headline: first ?? "", subLines: rest };
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="plain-cv__bullets">
      {items.map((item) => (
        <li key={item}>{parseBold(item)}</li>
      ))}
    </ul>
  );
}

/** contributions：剛好 1 條時當作一段文字（標籤內嵌行首），2 條以上維持條列（標籤獨立一行）。 */
function Contributions({ items, label }: { items: string[]; label: string }) {
  if (items.length === 1) {
    return (
      <p className="plain-cv__contrib">
        <span className="plain-cv__proj-block-label">{label}｜</span>
        {parseBold(items[0])}
      </p>
    );
  }
  return (
    <>
      <p className="plain-cv__proj-block-label">{label}</p>
      <Bullets items={items} />
    </>
  );
}

type ProjectEntryProps = {
  project: Project;
  stackLabel: string;
  contributionsLabel: string;
};

/** 純表格 PDF 的專案只保留「在做什麼（summary）＋ 重大貢獻」，不放技術亮點。 */
function ProjectBody({ project, stackLabel, contributionsLabel }: ProjectEntryProps) {
  return (
    <>
      <p className="plain-cv__entry-summary">{project.summary}</p>
      {project.contributions && project.contributions.length > 0 && (
        <Contributions items={project.contributions} label={contributionsLabel} />
      )}
      <p className="plain-cv__meta-line">
        {stackLabel}: {project.stack.join(", ")}
      </p>
    </>
  );
}

function ProjectEntry(props: ProjectEntryProps) {
  const { project } = props;
  return (
    <article className="plain-cv__entry">
      <div className="plain-cv__entry-meta">
        {project.url ? hrefText(project.url) : ""}
      </div>
      <div className="plain-cv__entry-body">
        <h2 className="plain-cv__entry-title">
          {project.name}
          {project.company && (
            <>
              <span className="plain-cv__dash">—</span>
              {project.company}
            </>
          )}
        </h2>
        <ProjectBody {...props} />
      </div>
    </article>
  );
}

/** 巢狀在工作經歷底下的第二層專案：比 ProjectEntry 再縮排、標題更小。 */
function NestedProjectEntry(props: ProjectEntryProps) {
  const { project } = props;
  return (
    <article className="plain-cv__subproject">
      <h3 className="plain-cv__subproject-title">
        {project.name}
        {project.url && (
          <span className="plain-cv__subproject-url"> ({hrefText(project.url)})</span>
        )}
      </h3>
      <ProjectBody {...props} />
    </article>
  );
}

export function PlainResume({
  data,
  includeProjects = true,
}: {
  data: PlainResumeData;
  /** 純表格 PDF 是否納入「專案」內容（個人專案區塊＋工作經歷底下的關聯專案）。預設納入。 */
  includeProjects?: boolean;
}) {
  const { locale, profile, work, projects, skills, education } = data;
  const profileLabel = profileLabels[locale] ?? profileLabels.en;
  const stackLabel = stackLabels[locale] ?? stackLabels.en;
  const subprojectsLabel = subprojectsLabels[locale] ?? subprojectsLabels.en;
  const cjk = locale !== "en";
  const contributionsLabel =
    projects?.contributionsLabel ?? contributionsFallback[locale] ?? contributionsFallback.en;
  const projectLabels = { stackLabel, contributionsLabel };
  const allProjects = includeProjects ? projects?.projects ?? [] : [];
  const personalProjects = allProjects.filter((p) => !p.company);
  const projectsForCompany = (company: string) =>
    allProjects.filter((p) => p.company === company);
  const { headline, subLines } = splitJobTitle(profile?.jobTitle ?? "");

  // 純表格 PDF：有要點或有關聯專案的經歷照常展開，其餘（僅標題的早期經歷）
  // 收合成時間軸上的一行，字體縮小。
  const allExps = work?.experiences ?? [];
  const isDetailed = (e: Experience) =>
    e.highlights.length > 0 || projectsForCompany(e.company).length > 0;
  const detailedExps = allExps.filter(isDetailed);
  const briefExps = allExps.filter((e) => !isDetailed(e));
  const splitPeriod = (p: string) => p.split(/\s*[–—-]\s*/).map((s) => s.trim());
  const briefRange =
    briefExps.length > 0
      ? `${splitPeriod(briefExps[briefExps.length - 1].period)[0]} – ${
          splitPeriod(briefExps[0].period).slice(-1)[0]
        }`
      : "";
  const briefMonths = briefExps.reduce(
    (sum, e) => sum + (durationMonths(e.period) ?? 0),
    0,
  );
  const briefTotal = briefMonths > 0 ? formatMonths(briefMonths, cjk) : "";

  return (
    <div id="plain-resume" className="plain-cv" aria-hidden="true">
      {profile && (
        <>
          <div className="plain-cv__topbar">{profile.location}</div>

          <header className="plain-cv__header">
            <h1 className="plain-cv__name">
              {profile.name}
              {headline ? `, ${headline}` : ""}
            </h1>
            {subLines.map((line) => (
              <p key={line} className="plain-cv__subtitle">
                {line}
              </p>
            ))}
            <p className="plain-cv__contacts">
              {profile.contacts.map((contact, idx) => {
                const Icon = contactIcons[contact.type];
                return (
                  <Fragment key={contact.type}>
                    {idx > 0 ? ", " : null}
                    {/* 刻意不用 <a>：Chrome 會為每個連結在 PDF 產生 /Link 註記，
                        註記優先於文字選取層，導致這行在 PDF 閱讀器裡選不到、複製不了。
                        文字本身也要是短網址，理由見 hrefText。 */}
                    <span className="plain-cv__contact">
                      <Icon className="plain-cv__contact-icon" />
                      <span>{contactText(contact)}</span>
                    </span>
                  </Fragment>
                );
              })}
            </p>
          </header>

          <section className="plain-cv__section plain-cv__section--inline">
            <div className="plain-cv__label">{profileLabel}</div>
            <p className="plain-cv__text">{parseBold(profile.description)}</p>
          </section>
        </>
      )}

      {work && allExps.length > 0 && (
        <section className="plain-cv__section">
          <div className="plain-cv__label">{work.title}</div>
          <div className="plain-cv__entries">
            {detailedExps.map((exp) => {
              const duration = formatDuration(exp.period, cjk);
              return (
              <article key={exp.company} className="plain-cv__entry">
                <div className="plain-cv__entry-meta">
                  {exp.period}
                  {duration && (
                    <span className="plain-cv__entry-duration">
                      {cjk ? `（${duration}）` : `(${duration})`}
                    </span>
                  )}
                </div>
                <div className="plain-cv__entry-body">
                  <h2 className="plain-cv__entry-title">
                    {exp.role}
                    <span className="plain-cv__dash">—</span>
                    {exp.company}
                  </h2>
                  <Bullets items={exp.highlights} />
                  {projectsForCompany(exp.company).length > 0 && (
                    <div className="plain-cv__subprojects">
                      <p className="plain-cv__subprojects-label">▸ {subprojectsLabel}</p>
                      {projectsForCompany(exp.company).map((project) => (
                        <NestedProjectEntry
                          key={project.name}
                          project={project}
                          {...projectLabels}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </article>
              );
            })}
            {briefExps.length > 0 && (
              <article className="plain-cv__entry plain-cv__entry--brief">
                <div className="plain-cv__entry-meta">
                  {briefRange}
                  {briefTotal && (
                    <span className="plain-cv__entry-duration">
                      {cjk ? `（共 ${briefTotal}）` : `(${briefTotal} total)`}
                    </span>
                  )}
                </div>
                <div className="plain-cv__entry-body">
                  <p className="plain-cv__brief-roles">
                    {briefExps.map((exp, i) => (
                      <Fragment key={exp.company}>
                        {i > 0 && <span className="plain-cv__brief-sep"> · </span>}
                        <span className="plain-cv__brief-role">{exp.role}</span>
                        <span className="plain-cv__brief-company">, {exp.company}</span>
                        <span className="plain-cv__brief-period"> ({exp.period})</span>
                      </Fragment>
                    ))}
                  </p>
                </div>
              </article>
            )}
          </div>
        </section>
      )}

      {projects && personalProjects.length > 0 && (
        <section className="plain-cv__section">
          <div className="plain-cv__label">{projects.title}</div>
          <div className="plain-cv__entries">
            {personalProjects.map((project) => (
              <ProjectEntry key={project.name} project={project} {...projectLabels} />
            ))}
          </div>
        </section>
      )}

      {education && education.educations.length > 0 && (
        <section className="plain-cv__section">
          <div className="plain-cv__label">{education.educationLabel}</div>
          <div className="plain-cv__entries">
            {education.educations.map((item) => (
              <article key={`${item.institution}-${item.period}`} className="plain-cv__entry">
                <div className="plain-cv__entry-meta">{item.period}</div>
                <div className="plain-cv__entry-body">
                  <h2 className="plain-cv__entry-title">{item.degree}</h2>
                  <p className="plain-cv__meta-line">{item.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {education && education.certifications.length > 0 && (
        <section className="plain-cv__section plain-cv__section--inline">
          <div className="plain-cv__label">{education.certLabel}</div>
          <Bullets
            items={education.certifications.map((cert) =>
              cert.description ? `${cert.name} — ${cert.description}` : cert.name
            )}
          />
        </section>
      )}

      {skills && skills.rows.length > 0 && (
        <section className="plain-cv__section plain-cv__section--inline">
          <div className="plain-cv__label">{skills.title}</div>
          <div>
            {skills.rows.map((row, idx) => (
              <p key={idx} className="plain-cv__skill-row">
                {row.keywords.join(", ")}
              </p>
            ))}
          </div>
        </section>
      )}

      {education && education.languages.length > 0 && (
        <section className="plain-cv__section plain-cv__section--inline">
          <div className="plain-cv__label">{education.languageLabel}</div>
          <p className="plain-cv__text">
            {education.languages.map((lang) => lang.name).join("　·　")}
          </p>
        </section>
      )}
    </div>
  );
}
