"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Cloud, Code2, Database, GitBranch, LockKeyhole, Server } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: ["C#", ".NET 8", "ASP.NET Core", "Web API", "REST API", "EF Core", "Dapper"],
  },
  {
    title: "Architecture",
    icon: GitBranch,
    skills: ["Clean Architecture", "CQRS", "MediatR", "DDD", "Microservices", "SOLID", "Repository Pattern"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "Oracle", "MySQL", "Redis", "Query Optimization", "Reporting", "Transactions"],
  },
  {
    title: "Security",
    icon: LockKeyhole,
    skills: ["JWT", "OAuth", "RBAC", "Authentication", "Authorization", "Secure API Design"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Angular", "TypeScript", "Vue.js", "Blazor"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Azure", "AWS", "Docker", "Git", "GitHub", "CI/CD", "NGINX", "Linux"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Skills
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Technical stack for <span className="gradient-text">backend-heavy products</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Primary focus is .NET backend engineering, database performance, secure APIs, and production business systems. Frontend support is available when needed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={itemVariants} className="rounded-2xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10">
                  <group.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border/60 bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
