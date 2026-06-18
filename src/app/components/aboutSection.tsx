import React from "react";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";

const experience = [
  {
    title: "Senior Frontend Developer",
    company: "Bateriku.com",
    companyUrl: "https://bateriku.com",
    date: "Jan 2026 – Present",
    description:
      "Building frontend for a workshop management system. Translating UI/UX prototypes into robust features with NuxtJS and VueJS.",
  },
  {
    title: "Frontend Software Engineer",
    company: "FSBM IDesign",
    companyUrl: "#",
    date: "Nov 2023 – Dec 2025",
    description:
      "Built a React-based location intelligence platform using Looker for retail site planning. Designed interactive data dashboards.",
  },
  {
    title: "Software Developer II",
    company: "Adev Ventures (Vimigo)",
    companyUrl: "#",
    date: "May 2021 – Oct 2023",
    description:
      "Developed and maintained the Vimigo mobile app in Flutter. Mentored new hires and contributed to frontend best practices.",
  },
  {
    title: "Founder & Project Manager",
    company: "Compere Technologies",
    companyUrl: "#",
    date: "Jan 2024 – Aug 2024",
    description:
      "Led a team of 4 to build and launch an event management MVP in three months. Pre-Accelerator Cohort 3 by Growth Charger & Cradle.",
  },
];

const skills = [
  "Creative Development",
  "Frontend Engineering",
  "UI/UX Design",
  "Interactive Design",
  "Motion Design",
  "Brand Identity",
];

const tools = [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "GSAP",
  "Tailwind CSS",
  "Supabase",
  "React Native",
];

const socials = [
  {
    icon: "/assets/icons/TablerBrandLinkedin.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/nadjwarazali/",
  },
  {
    icon: "/assets/icons/TablerBrandBehance.svg",
    alt: "Behance",
    url: "https://www.behance.net/nadjwarazali",
  },
  {
    icon: "/assets/icons/TablerBrandGithub.svg",
    alt: "Github",
    url: "https://github.com/nadjwarazali",
  },
];

export default function AboutSection({ isDark = false }: { isDark?: boolean }) {
  const label = isDark ? "#5DD9FF" : "#6B6560";
  const heading = isDark ? "#F5F0E8" : "#482e18";
  const body = isDark ? "#ffffff" : "#1A1A1A";
  const divider = isDark ? "#1e2d50" : "#C8BFB0";
  const accent = isDark ? "#0AFFAD" : "#8B0000";
  const cardBg = isDark ? "#0a1230" : "transparent";

  return (
    <div
      className="col-start-2 mx-auto max-w-2xl px-6 md:px-0 py-10"
      style={{ background: cardBg }}
    >
      {/* Photo + Bio — image floats left, text wraps around */}
      <div className="mb-12 overflow-hidden">
        <Image
          src={assetPath("/assets/profile.png")}
          alt="Nadjwa Razali"
          width={160}
          height={160}
          className="w-[160px] h-[160px] md:w-[225px] md:h-[225px] object-cover block mx-auto mb-6 md:float-left md:mr-8 md:mb-2 md:mx-0"
        />
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "14px",
            color: heading,
            letterSpacing: "0.05em",
          }}
        >
          About
        </p>
        <p
          className="text-sm md:text-md leading-relaxed mt-2"
          style={{ color: body }}
        >
          More than 4 years across mobile apps, data platforms, and web products
          — Flutter, React, Next.js, whatever the problem needed. I've always
          been more interested in the experience than the stack.
        </p>
        <p
          className="text-sm md:text-md leading-relaxed mt-4"
          style={{ color: body }}
        >
          Freelancing as a designer taught me taste. Frontend taught me what to
          do with it. Based in Kuala Lumpur. Always in the middle of something.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-14">
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "12px",
            color: heading,
            marginBottom: 16,
            letterSpacing: "0.05em",
          }}
        >
          Experience
        </p>
        <div>
          {experience.map((job) => (
            <div
              key={job.title + job.company}
              className="py-6 first:pt-0 last:border-b-0"
              style={{ borderBottom: `1px solid ${divider}` }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <p
                  className="text-sm md:text-md font-semibold"
                  style={{ color: body }}
                >
                  {job.title} ·{" "}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                    className="transition-colors duration-200"
                    onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  >
                    {job.company}
                  </a>
                </p>
                <p className="text-sm" style={{ color: label }}>
                  {job.date}
                </p>
              </div>
              <p
                className="text-sm md:text-md leading-relaxed mt-2"
                style={{ color: body }}
              >
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div>
          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
              color: heading,
              marginBottom: 16,
              letterSpacing: "0.05em",
            }}
          >
            Skills
          </p>
          <p
            className="text-sm md:text-md leading-relaxed"
            style={{ color: body }}
          >
            {skills.join(", ")}
          </p>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
              color: heading,
              marginBottom: 16,
              letterSpacing: "0.05em",
            }}
          >
            Tools
          </p>
          <p
            className="text-sm md:text-md leading-relaxed"
            style={{ color: body }}
          >
            {tools.join(", ")}
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-20">
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "12px",
            color: heading,
            marginBottom: 16,
            letterSpacing: "0.05em",
          }}
        >
          Education
        </p>
        <div>
          {[
            {
              degree: "Bachelor of IT (Hons.) in Software Engineering",
              institution: "Universiti Kuala Lumpur (MIIT)",
              note: "CGPA 3.5",
              date: "2017 – 2021",
            },
            {
              degree: "Foundation in Science and Technology",
              institution: "MARA College Kuala Nerang",
              note: "CGPA 3.7",
              date: "2016 – 2017",
            },
            {
              degree: "Sijil Pelajaran Malaysia (SPM)",
              institution: "MARA Junior Science College Pengkalan Chepa",
              note: null,
              date: "2014 – 2015",
            },
          ].map((edu, i, arr) => (
            <div
              key={edu.degree}
              className="py-6 first:pt-0"
              style={{
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${divider}` : "none",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <p
                  className="text-sm md:text-md font-semibold"
                  style={{ color: body }}
                >
                  {edu.degree}
                </p>
                <p className="text-sm shrink-0" style={{ color: label }}>
                  {edu.date}
                </p>
              </div>
              <p
                className="text-sm md:text-md leading-relaxed mt-1"
                style={{ color: body }}
              >
                {edu.institution}
                {edu.note ? ` · ${edu.note}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <p
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "12px",
            color: heading,
            marginBottom: 16,
            letterSpacing: "0.05em",
          }}
        >
          Contact
        </p>
        <a href="mailto:nadjwarazali@gmail.com">
          <button className="group flex flex-row cursor-pointer items-center mb-6">
            <div
              className="w-7 h-0 mr-3 transition-colors duration-200"
              style={{
                borderTop: `1px solid ${isDark ? "#5DD9FF" : "#1A1A1A"}`,
              }}
            />
            <p
              className="font-mono text-lg md:text-xl font-bold transition-colors duration-200"
              style={{ color: body }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = body)}
            >
              nadjwarazali@gmail.com
            </p>
          </button>
        </a>
        <div className="flex flex-row gap-3">
          {socials.map((social) => (
            <Image
              key={social.alt}
              src={assetPath(social.icon)}
              className="h-5 w-fit cursor-pointer hover:opacity-70 transition-opacity duration-200"
              style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
              onClick={() => window.open(social.url, "_blank")}
              width={100}
              height={100}
              alt={social.alt}
            />
          ))}
        </div>

        <a
          href="/assets/resume.pdf"
          download="Nadjwa_Razali_Resume.pdf"
          className="inline-block mt-6 "
        >
          <button
            className="flex items-center gap-3 transition-colors duration-200"
            style={{
              border: `3px solid ${isDark ? "#F5F0E8" : "#1A1A1A"}`,
              background: "transparent",
              cursor: "pointer",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "8px",
              color: isDark ? "#F5F0E8" : "#1A1A1A",
              lineHeight: 1.8,
              padding: "12px 10px",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = isDark ? "#F5F0E8" : "#1A1A1A";
              btn.style.color = isDark ? "#06091a" : "#F5F0E8";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "transparent";
              btn.style.color = isDark ? "#F5F0E8" : "#1A1A1A";
            }}
          >
            ↓ Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
