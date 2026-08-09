import { Fragment } from "react";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

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
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PlainResume({ data }: { data: PlainResumeData }) {
  const { locale, profile, work, projects, skills, education } = data;
  const profileLabel = profileLabels[locale] ?? profileLabels.en;
  const stackLabel = stackLabels[locale] ?? stackLabels.en;
  const { headline, subLines } = splitJobTitle(profile?.jobTitle ?? "");

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
            <p className="plain-cv__text">{profile.description}</p>
          </section>
        </>
      )}

      {work && work.experiences.length > 0 && (
        <section className="plain-cv__section">
          <div className="plain-cv__label">{work.title}</div>
          <div className="plain-cv__entries">
            {work.experiences.map((exp) => (
              <article key={exp.company} className="plain-cv__entry">
                <div className="plain-cv__entry-meta">{exp.period}</div>
                <div className="plain-cv__entry-body">
                  <h2 className="plain-cv__entry-title">
                    {exp.role}
                    <span className="plain-cv__dash">—</span>
                    {exp.company}
                  </h2>
                  <Bullets items={exp.highlights} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {projects && projects.projects.length > 0 && (
        <section className="plain-cv__section">
          <div className="plain-cv__label">{projects.title}</div>
          <div className="plain-cv__entries">
            {projects.projects.map((project) => (
              <article key={project.name} className="plain-cv__entry">
                <div className="plain-cv__entry-meta">
                  {project.url ? hrefText(project.url) : ""}
                </div>
                <div className="plain-cv__entry-body">
                  <h2 className="plain-cv__entry-title">{project.name}</h2>
                  <p className="plain-cv__entry-summary">{project.summary}</p>
                  {project.contributions && project.contributions.length > 0 && (
                    <Bullets items={project.contributions} />
                  )}
                  {project.highlights && project.highlights.length > 0 && (
                    <Bullets items={project.highlights} />
                  )}
                  <p className="plain-cv__meta-line">
                    {stackLabel}: {project.stack.join(", ")}
                  </p>
                </div>
              </article>
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
