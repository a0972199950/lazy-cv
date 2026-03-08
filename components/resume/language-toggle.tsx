import Link from "next/link";

type LanguageToggleProps = {
  currentLocale: "en" | "zh-TW";
  enHref: string;
  zhHref: string;
};

export function LanguageToggle({ currentLocale, enHref, zhHref }: LanguageToggleProps) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-2 rounded-lg border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur">
        {currentLocale === "en" ? (
          <span className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
            EN
          </span>
        ) : (
          <Link href={enHref} className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
            EN
          </Link>
        )}
        {currentLocale === "zh-TW" ? (
          <span className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
            中文
          </span>
        ) : (
          <Link href={zhHref} className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
            中文
          </Link>
        )}
      </div>
    </div>
  );
}
