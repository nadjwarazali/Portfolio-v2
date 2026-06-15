import React from "react";
import Image from "next/image";
import { assetPath } from "../lib/assetPath";

const experience = [
  {
    title: "Creative Developer",
    company: "alt-arkib",
    companyUrl: "https://nadjwarazali.my",
    date: "2024 – Present",
    description:
      "Building interactive web experiences for clients and personal projects.",
  },
  {
    title: "Frontend Developer",
    company: "[Previous Company]",
    companyUrl: "#",
    date: "2022 – 2024",
    description: "Built and maintained web interfaces for various clients.",
  },
  {
    title: "Freelance Designer",
    company: "Self-employed",
    companyUrl: "#",
    date: "2021 – 2022",
    description: "UI/UX design and branding for early stage startups.",
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

type AboutSectionProps = {
  onExpand: () => void;
  isExpanded?: boolean;
};

export default function AboutSection({
  onExpand,
  isExpanded = false,
}: AboutSectionProps) {
  const visibleExperience = isExpanded ? experience : experience.slice(0, 1);

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
            Creative Developer and founder of alt-arkib, based in Kuala
            Lumpur. I build interactive web experiences that sit at the
            intersection of design and engineering. 4 years in, I still care
            most about how something feels to use.
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

      {isExpanded && (
        <>
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
        </>
      )}

      {!isExpanded && (
        <div className="flex justify-center mt-16 mb-8">
          <button
            onClick={onExpand}
            className="font-mono text-xs text-[#6B6560] hover:text-[#8B0000] transition-colors"
          >
            ↓ more
          </button>
        </div>
      )}
    </div>
  );
}
