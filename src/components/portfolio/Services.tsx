"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Gauge, Layers, LockKeyhole, RefreshCw, Shield, WalletCards } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: ".NET Backend Development",
    description: "Build reliable ASP.NET Core Web API backends with C#, EF Core, Dapper, clean layers, validation, logging, and maintainable business logic.",
  },
  {
    icon: Layers,
    title: "ERP System Development",
    description: "Develop ERP modules for inventory, sales, accounting, finance, reporting, operations, workflow automation, and role-based access.",
  },
  {
    icon: WalletCards,
    title: "FinTech & Microfinance Systems",
    description: "Implement loan workflows, deposits, transaction accuracy, accounting flows, audit trails, reporting, and secure financial APIs.",
  },
  {
    icon: Gauge,
    title: "API Performance Optimization",
    description: "Find slow endpoints, inefficient queries, serialization issues, tracking overhead, and service bottlenecks in existing .NET APIs.",
  },
  {
    icon: Database,
    title: "SQL Server & PostgreSQL Optimization",
    description: "Improve schema design, indexes, stored procedures, reporting queries, transaction handling, and database-heavy application performance.",
  },
  {
    icon: RefreshCw,
    title: "Legacy .NET Modernization",
    description: "Stabilize and modernize ASP.NET MVC, Web API, and .NET Framework applications toward .NET 8 and cleaner maintainable code.",
  },
  {
    icon: LockKeyhole,
    title: "Secure API Development with JWT/RBAC",
    description: "Design and implement authentication, authorization, JWT, OAuth, permissions, claims, roles, audit logs, and secure endpoint boundaries.",
  },
  {
    icon: Shield,
    title: "Backend Refactoring & Clean Architecture",
    description: "Refactor tangled codebases into clean, testable, modular services using practical Clean Architecture, CQRS, MediatR, DDD, and SOLID patterns.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.025] to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Services
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Focused backend services for teams that need practical .NET delivery, stable APIs, accurate data, and faster database-driven systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="group rounded-xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                <service.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:text-emerald-300">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
