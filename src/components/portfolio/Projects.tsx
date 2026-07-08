"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { BarChart3, DatabaseZap, Landmark, Layers, ShieldCheck, Smartphone, Truck } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  features: string[];
  stack: string[];
  value: string;
}

const projects: Project[] = [
  {
    title: "Microfinance ERP System",
    category: "Microfinance ERP",
    image: "/project-microfinance.jpg",
    icon: Landmark,
    problem: "Microfinance operations needed reliable handling for loans, deposits, accounting, reporting, and branch-level business workflows.",
    features: ["Loan and deposit workflows", "Accounting and transaction records", "Reporting and audit support", "Branch and user access control"],
    stack: ["C#", ".NET Framework", "ASP.NET MVC", "SQL Server", "Oracle", "Entity Framework"],
    value: "Improved operational control for financial workflows where transaction accuracy and reporting reliability matter.",
  },
  {
    title: "Microfinance Mobile API",
    category: "FinTech API",
    image: "/project-microfinance.jpg",
    icon: Smartphone,
    problem: "Field and mobile workflows required secure backend APIs for microfinance data access, loan activities, and operational updates.",
    features: ["REST API endpoints", "Secure authentication", "Loan workflow support", "Database-backed mobile operations"],
    stack: ["C#", "ASP.NET Web API", "SQL Server", "JWT", "Entity Framework"],
    value: "Enabled mobile teams to work with central business data through controlled and maintainable backend APIs.",
  },
  {
    title: "ERP System for Inventory, Sales & Accounting",
    category: "ERP",
    image: "/project-erp.jpg",
    icon: Layers,
    problem: "Business operations needed a modular ERP backend covering stock, sales, financial records, reporting, and role-based workflows.",
    features: ["Inventory and sales modules", "Accounting workflows", "Role-based access", "Operational reports"],
    stack: [".NET 8", "ASP.NET Core Web API", "CQRS", "PostgreSQL", "React", "TypeScript"],
    value: "Created a more structured platform for business automation, reporting, and day-to-day operational control.",
  },
  {
    title: "Fleet Management API",
    category: "Logistics",
    image: "/project-fleet.jpg",
    icon: Truck,
    problem: "Logistics teams needed backend services for drivers, vehicles, shifts, orders, delivery operations, and operational visibility.",
    features: ["Driver and vehicle management", "Shift and order modules", "REST API integration", "Operational dashboards"],
    stack: [".NET 8", "ASP.NET Core", "PostgreSQL", "React", "TypeScript", "REST API"],
    value: "Supported logistics operations with maintainable APIs and structured data flows for fleet and order management.",
  },
  {
    title: "Mission Management Backend",
    category: "Secure Backend",
    image: "/project-mission.jpg",
    icon: ShieldCheck,
    problem: "Mission-critical workflows required a secure backend for task management, assignments, audit trails, and controlled access.",
    features: ["Workflow and assignment APIs", "Audit trail support", "Secure access control", "Operational timeline tracking"],
    stack: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "REST API", "Azure"],
    value: "Delivered backend structure for sensitive workflows where security, traceability, and reliability are required.",
  },
  {
    title: ".NET API Performance Optimization",
    category: "Performance",
    image: "/project-erp.jpg",
    icon: DatabaseZap,
    problem: "Existing .NET APIs and database-heavy reports can become slow, unstable, and hard to maintain as business data grows.",
    features: ["Endpoint and query review", "EF Core and SQL tuning", "Index and reporting improvements", "Code cleanup and refactoring"],
    stack: ["ASP.NET Core", "EF Core", "Dapper", "SQL Server", "PostgreSQL", "Clean Architecture"],
    value: "Helps teams reduce slow responses, improve database usage, and stabilize production backend systems without rewriting everything.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.018] to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Featured Projects
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Backend systems for <span className="gradient-text">real business operations</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Representative projects across ERP, FinTech, Microfinance, logistics, secure APIs, and database optimization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article key={project.title} variants={itemVariants} className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="relative h-52 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                <div className="absolute left-5 top-5 rounded-lg border border-emerald-500/20 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                  {project.category}
                </div>
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl glass">
                  <project.icon className="h-5 w-5 text-emerald-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-foreground">{project.title}</h3>

                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">Problem solved</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">Key features</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span key={tag} className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-secondary/35 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      <BarChart3 className="h-4 w-4" /> Business value
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.value}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
