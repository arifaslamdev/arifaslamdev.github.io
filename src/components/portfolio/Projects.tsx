"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  BarChart3,
  Truck,
  Shield,
  Landmark,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "ERP System for Inventory, Sales & Financial Management",
    subtitle: "Multi-Module Enterprise Platform",
    description:
      "A comprehensive enterprise resource planning system covering finance, inventory, HR, and reporting modules. Built with modular architecture supporting multi-tenant operations across organizational departments.",
    image: "/project-erp.jpg",
    tags: [".NET 8", "C#", "SQL Server", "React", "CQRS", "PostgreSQL"],
    icon: Layers,
    category: "ERP",
    highlights: [
      "Multi-module finance & inventory management",
      "Real-time reporting dashboards",
      "Role-based access control system",
    ],
  },
  {
    title: "Fleet Management API",
    subtitle: "Enterprise Logistics Platform",
    description:
      "A complete fleet management system optimizing delivery operations with modules for Shift, Driver, Vehicle, and Order Management. Features real-time tracking and route optimization.",
    image: "/project-fleet.jpg",
    tags: [".NET 8", "C#", "React", "TypeScript", "PostgreSQL", "REST API"],
    icon: Truck,
    category: "Logistics",
    highlights: [
      "Real-time vehicle tracking & route optimization",
      "Driver & shift management modules",
      "Responsive React + TypeScript frontend",
    ],
  },
  {
    title: "Mission Management System",
    subtitle: "Secure Workflow & Operations Backend",
    description:
      "A secure mission management system with workflow automation, team assignments, and operation timelines. Built with emphasis on security, audit trails, and compliance.",
    image: "/project-mission.jpg",
    tags: [".NET Core", "C#", "SQL Server", "Entity Framework", "REST API"],
    icon: Shield,
    category: "Security",
    highlights: [
      "Secure workflow & operations management",
      "Comprehensive audit trail system",
      "Team collaboration & task assignments",
    ],
  },
  {
    title: "Microfinance ERP System",
    subtitle: "End-to-End Financial & Organizational Platform",
    description:
      "A full-scale microfinance management system handling loans, deposits, accounting, and financial transactions. Ensuring data accuracy and compliance with financial regulations.",
    image: "/project-microfinance.jpg",
    tags: [".NET Framework", "C#", "SQL Server", "Oracle", "ASP.NET MVC"],
    icon: Landmark,
    category: "FinTech",
    highlights: [
      "Loan & deposit management lifecycle",
      "Transaction accuracy & audit compliance",
      "Multi-branch organizational support",
    ],
  },
];

const categories = ["All", "ERP", "FinTech", "Logistics", "Security"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of enterprise-grade systems I&apos;ve architected and
            delivered for real-world business operations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "glass text-muted-foreground hover:text-foreground hover:border-emerald-500/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              layout
              className="glass rounded-2xl overflow-hidden group hover:glow-emerald transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <project.icon className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-emerald-400/70 text-sm font-medium mt-1">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border/50">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-lg bg-secondary text-xs text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 rounded-xl px-8 group"
            onClick={() =>
              window.open(
                "https://github.com/arifaslamdev",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
