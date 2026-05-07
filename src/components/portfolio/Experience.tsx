"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Genie InfoTech",
    role: "Software Engineering Manager",
    period: "May 2025 - Present",
    location: "Dhaka, Bangladesh",
    description:
      "Designed and delivered a Courier Management System optimizing delivery operations with modules for Shift, Driver, Vehicle, and Order Management.",
    highlights: [
      "Built modular backend in .NET 8 using CQRS pattern",
      "Developed responsive React + TypeScript frontend with real-time updates",
      "Implemented RESTful APIs and PostgreSQL for data handling",
      "Delivered production-ready solution reducing delivery times",
    ],
    isCurrent: true,
  },
  {
    company: "Shakti Foundation for Disadvantaged Women",
    role: "Senior Software Engineer Team Lead",
    period: "Mar 2023 - Apr 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Led development of Shakti ERP, Mobile Application, and Web API platforms serving microfinance operations across Bangladesh.",
    highlights: [
      "Analyzed complex requirements and translated into technical components",
      "Collaborated with DevOps, QA, Security, and UX teams",
      "Performed code review and continuous refactoring",
      "Managed data migration including ETL processes",
    ],
  },
  {
    company: "Shakti Foundation for Disadvantaged Women",
    role: "Senior Software Engineer",
    period: "Oct 2016 - Feb 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Architected and led development of Shakti ERP (Microfinance, SME, Health Program) and multiple enterprise systems.",
    highlights: [
      "Designed systems using UML; prepared SRS, DSD documentation",
      "Architected databases with Domain-Driven Design",
      "Led Agile teams and coordinated development",
      "Mentored team members on new concepts and problem-solving",
    ],
  },
  {
    company: "Shakti Foundation for Disadvantaged Women",
    role: "Software Engineer",
    period: "May 2010 - Sep 2016",
    location: "Dhaka, Bangladesh",
    description:
      "Developed and maintained features for Shakti ERP, Health Program modules, and Android-based applications.",
    highlights: [
      "Developed Android apps for digital Loan Assessment",
      "Implemented Finger Authentication System for biometric verification",
      "Built Support Ticketing System for internal issue tracking",
      "Collaborated with senior engineers on design patterns",
    ],
  },
  {
    company: "Honeycom Automation & Security Ptv. Ltd.",
    role: "Programmer",
    period: "Mar 2009 - Apr 2010",
    location: "Dhaka, Bangladesh",
    description:
      "Developed enterprise applications integrating ASP.NET, C#, Java, PHP with multiple database systems.",
    highlights: [
      "Integrated frameworks with ASP.NET, C#, Java, PHP",
      "Mentored colleagues on new technologies",
      "Designed project architecture and database schemas",
    ],
  },
  {
    company: "ICEL Pvt. Ltd.",
    role: "Programmer",
    period: "Mar 2008 - Feb 2009",
    location: "Dhaka, Bangladesh",
    description:
      "Developed enterprise applications from scratch to production, with focus on R&D and real-time technologies.",
    highlights: [
      "Developed enterprise applications end-to-end",
      "Explored and researched new technologies",
      "Implemented real-time technology solutions",
    ],
  },
];

const TimelineItem = ({
  experience,
  index,
  isInView,
}: {
  experience: ExperienceItem;
  index: number;
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            experience.isCurrent
              ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50"
              : "bg-background border-emerald-500/40"
          }`}
        />
      </div>

      {/* Mobile timeline dot */}
      <div className="md:hidden relative z-10">
        <div
          className={`w-3 h-3 rounded-full border-2 mt-2 ${
            experience.isCurrent
              ? "bg-emerald-400 border-emerald-400 shadow-lg shadow-emerald-400/50"
              : "bg-background border-emerald-500/40"
          }`}
        />
      </div>

      {/* Content card */}
      <div
        className={`flex-1 ${
          isEven ? "md:pr-16" : "md:pl-16"
        } pl-6 md:pl-0`}
      >
        <div
          className={`glass rounded-2xl p-6 group hover:glow-emerald transition-all duration-300 ${
            experience.isCurrent ? "border-emerald-500/30" : ""
          }`}
        >
          {experience.isCurrent && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Current Position
            </div>
          )}

          <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
            {experience.role}
          </h3>
          <p className="text-emerald-400 font-medium text-sm mt-1">
            {experience.company}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
            {experience.description}
          </p>

          <ul className="mt-4 space-y-2">
            {experience.highlights.map((highlight, hIndex) => (
              <li
                key={hIndex}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 mt-1.5 shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            Career Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            13+ years of progressive growth from junior developer to engineering
            manager, building enterprise-grade systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />
          
          {/* Timeline line - mobile */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />

          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                experience={exp}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
