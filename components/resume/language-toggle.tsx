import Link from "next/link";

type LocaleLink = {
  locale: string;
  label: string;
  href: string;
};

type LanguageToggleProps = {
  currentLocale: string;
  locales: LocaleLink[];
};

export function LanguageToggle({ currentLocale, locales }: LanguageToggleProps) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-2 rounded-lg border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur">
        {locales.map(({ locale, label, href }) =>
          locale === currentLocale ? (
            <span key={locale} className="rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
              {label}
            </span>
          ) : (
            <Link key={locale} href={href} className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700">
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
