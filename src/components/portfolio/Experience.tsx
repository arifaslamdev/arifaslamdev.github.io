"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Genie InfoTech",
    role: "Software Engineering Manager",
    period: "May 2025 to Present",
    summary:
      "Leading delivery of production business systems with a strong focus on .NET backend services, API design, database structure, and reliable release execution.",
    highlights: [
      "Build and guide modular .NET 8 backend services using practical clean architecture and CQRS patterns.",
      "Work across API design, PostgreSQL data models, reporting needs, and production support for business operations.",
      "Coordinate backend delivery with frontend, QA, and deployment workflows while staying hands-on in technical decisions.",
    ],
    isCurrent: true,
  },
  {
    company: "Shakti Foundation",
    role: "Senior Software Engineer Team Lead",
    period: "March 2023 to April 2025",
    summary:
      "Led backend and ERP development for microfinance operations, mobile APIs, reporting, database work, and production maintenance.",
    highlights: [
      "Delivered ERP and API features for microfinance, SME, health program, and mobile application workflows.",
      "Translated complex field and business requirements into backend modules, database flows, and maintainable services.",
      "Handled code review, refactoring, SQL/database work, data migration support, and collaboration with DevOps, QA, security, and UX teams.",
    ],
  },
  {
    company: "Shakti Foundation",
    role: "Senior Software Engineer",
    period: "October 2016 to February 2023",
    summary:
      "Built and maintained enterprise microfinance and ERP systems involving loans, accounting, reporting, integrations, and long-running production support.",
    highlights: [
      "Developed backend features for financial transaction workflows, loan assessment, audit management, support ticketing, and reporting.",
      "Designed database structures and service boundaries for database-driven business applications.",
      "Supported production systems, improved maintainability, and mentored team members on practical backend engineering patterns.",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Experience
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Production experience in <span className="gradient-text">ERP, APIs, and financial systems</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Client-friendly view of the recent roles most relevant to .NET backend delivery, ERP, microfinance, database systems, and team leadership.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {experiences.map((experience) => (
            <motion.article key={`${experience.role}-${experience.period}`} variants={itemVariants} className="rounded-2xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  {experience.isCurrent && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Current Position
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <Briefcase className="h-4 w-4" />
                    {experience.company}
                  </p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-3 py-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {experience.period}
                </div>
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {experience.summary}
              </p>

              <div className="mt-6 grid gap-3 lg:grid-cols-3">
                {experience.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 rounded-xl bg-secondary/35 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
