"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Server,
  Shield,
  Layers,
  GitBranch,
  Cloud,
  Settings,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Architecture",
    icon: Server,
    color: "emerald",
    skills: [
      { name: ".NET Core / .NET 8+", level: 95 },
      { name: "C#", level: 95 },
      { name: "ASP.NET Core & Web API", level: 93 },
      { name: "Clean Architecture", level: 90 },
      { name: "CQRS & DDD", level: 88 },
      { name: "Microservices", level: 88 },
    ],
  },
  {
    title: "Database & Performance",
    icon: Database,
    color: "emerald",
    skills: [
      { name: "Microsoft SQL Server", level: 92 },
      { name: "PostgreSQL", level: 88 },
      { name: "Database Design & Optimization", level: 90 },
      { name: "Oracle PL/SQL", level: 80 },
      { name: "Entity Framework Core", level: 90 },
      { name: "Query Performance Tuning", level: 88 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "emerald",
    skills: [
      { name: "Microsoft Azure", level: 85 },
      { name: "Docker & Containers", level: 82 },
      { name: "CI/CD Pipelines", level: 83 },
      { name: "Git & Version Control", level: 90 },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Code2,
    color: "emerald",
    skills: [
      { name: "React & TypeScript", level: 78 },
      { name: "Angular", level: 75 },
      { name: "Vue.js", level: 70 },
      { name: "Blazor", level: 82 },
      { name: "Android (Native)", level: 72 },
      { name: "HTML/CSS/Bootstrap", level: 85 },
    ],
  },
  {
    title: "Security & Standards",
    icon: Shield,
    color: "emerald",
    skills: [
      { name: "RBAC & Authorization", level: 90 },
      { name: "Secure API Design", level: 88 },
      { name: "Audit Compliance", level: 85 },
      { name: "Authentication (JWT/OAuth)", level: 88 },
    ],
  },
  {
    title: "Methodologies",
    icon: Settings,
    color: "emerald",
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "System Architecture", level: 92 },
      { name: "Solution Design (UML)", level: 88 },
      { name: "Code Review & Refactoring", level: 90 },
    ],
  },
];

const techStack = [
  { name: ".NET 8", icon: "🟢" },
  { name: "C#", icon: "🟣" },
  { name: "SQL Server", icon: "🔴" },
  { name: "PostgreSQL", icon: "🔵" },
  { name: "Azure", icon: "☁️" },
  { name: "React", icon: "⚛️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "REST API", icon: "🔗" },
  { name: "EF Core", icon: "🗄️" },
  { name: "Blazor", icon: "🟤" },
  { name: "Angular", icon: "🟥" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            Technical Skills
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over 13+ years of professional
            experience in enterprise-grade backend development.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group hover:glow-emerald transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <category.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-emerald-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 rounded-xl glass text-sm font-medium text-foreground hover:glow-emerald hover:text-emerald-400 transition-all duration-300 cursor-default"
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
