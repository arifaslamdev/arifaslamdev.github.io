"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2, Database, Landmark, ShieldCheck, Wrench } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "15+", label: "Years Experience" },
  { icon: Landmark, value: "ERP", label: "FinTech & Microfinance" },
  { icon: Database, value: "SQL", label: "Database Optimization" },
  { icon: ShieldCheck, value: "RBAC", label: "Secure Backend Systems" },
];

const focusAreas = [
  "Financial transactions, loan workflows, deposits, accounting, and audit-ready reporting",
  "ERP modules for inventory, sales, finance, operations, and business automation",
  "ASP.NET Core Web API design, backend refactoring, and production support",
  "Database design, SQL query tuning, reporting performance, and transaction accuracy",
  "Clean Architecture, CQRS, MediatR, DDD, SOLID, and maintainable backend code",
  "Authentication, authorization, JWT, RBAC, secure API design, and system hardening",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-emerald-500/30" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            About
          </span>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Hands-on backend development for <span className="gradient-text">business-critical systems</span>
          </h2>
          <div className="space-y-4 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I have 15+ years of experience building production systems involving financial transactions, microfinance operations, ERP modules, accounting, reporting, inventory, loan workflows, APIs, and database-driven business applications.
            </p>
            <p>
              My strongest expertise is backend development, API engineering, database design, SQL optimization, clean architecture, and production-ready business systems. Architecture is part of the work, but my primary value is practical delivery: building, fixing, optimizing, and maintaining systems that need to run reliably.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="rounded-xl border border-border/60 bg-card/60 p-5 text-center transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10">
                <stat.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="mb-1 text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10">
              <Wrench className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">What I am strongest at</h3>
              <p className="text-sm text-muted-foreground">Backend reliability, data accuracy, maintainability, and performance.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary/40 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
