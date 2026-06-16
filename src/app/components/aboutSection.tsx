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

export default function AboutSection() {
  const visibleExperience = experience;

  return (
    <div className="col-start-2 mx-auto max-w-2xl px-6 md:px-0 py-20">
      {/* Photo + Bio */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-20">
        <Image
          src={assetPath("/assets/profile.png")}
          alt="Nadjwa Razali"
          width={160}
          height={160}
          className="rounded-2xl w-32 h-32 md:w-40 md:h-40 object-cover"
        />
        <div>
          <p className="font-mono text-sm text-[#6B6560] mb-2">About</p>
          <p className="font-crimson text-xl md:text-2xl text-[#1A1A1A] leading-relaxed">
            Design came first. Before any code, there was illustration, branding,
            making things look like something. Freelancing after school taught me taste.
            Frontend taught me that taste could have a function.
          </p>
          <p className="font-crimson text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mt-6">
            Four years across mobile apps, data platforms, and web products — Flutter,
            React, Next.js, whatever the problem needed. I've always been more interested
            in the experience than the stack.
          </p>
          <p className="font-crimson text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mt-6">
            alt-arkib is the studio I'm building for work that refuses to choose between
            beautiful and functional. Based in Kuala Lumpur. Always in the middle of
            something.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-20">
        <p className="font-mono text-sm text-[#6B6560] mb-6">Experience</p>
        <div>
          {visibleExperience.map((job) => (
            <div
              key={job.title + job.company}
              className="border-b border-[#C8BFB0] py-6 first:pt-0 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <p className="font-mono font-semibold text-[#1A1A1A]">
                  {job.title} ·{" "}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8B0000] transition-colors duration-200"
                  >
                    {job.company}
                  </a>
                </p>
                <p className="font-mono text-sm text-[#6B6560]">{job.date}</p>
              </div>
              <p className="font-crimson text-lg text-[#1A1A1A] mt-2">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div>
          <p className="font-mono text-sm text-[#6B6560] mb-4">Skills</p>
          <p className="font-crimson text-lg text-[#1A1A1A] leading-relaxed">
            {skills.join(", ")}
          </p>
        </div>
        <div>
          <p className="font-mono text-sm text-[#6B6560] mb-4">Tools</p>
          <p className="font-crimson text-lg text-[#1A1A1A] leading-relaxed">
            {tools.join(", ")}
          </p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="font-mono text-sm text-[#6B6560] mb-4">Contact</p>
        <a href="mailto:nadjwarazali@gmail.com">
          <button className="group flex flex-row cursor-pointer items-center mb-6">
            <div className="border border-1 w-7 h-0 mr-3 group-hover:border-[#8B0000] transition-colors duration-200"></div>
            <p className="font-mono text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#8B0000] transition-colors duration-200">
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
              onClick={() => window.open(social.url, "_blank")}
              width={100}
              height={100}
              alt={social.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
