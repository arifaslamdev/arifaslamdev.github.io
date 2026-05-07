"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  CheckCircle2,
  Users,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const stats = [
  { icon: Briefcase, value: "13+", label: "Years Experience" },
  { icon: CheckCircle2, value: "100%", label: "Job Success Rate" },
  { icon: TrendingUp, value: "$1K+", label: "Total Earnings" },
  { icon: Users, value: "6+", label: "Projects Completed" },
];

const highlights = [
  {
    icon: Briefcase,
    title: "ERP Systems",
    description:
      "Designed enterprise ERP systems covering finance, inventory, HR, and reporting modules used in production environments.",
  },
  {
    icon: Shield,
    title: "Financial Systems",
    description:
      "Built financial systems ensuring transaction accuracy, audit compliance, and data integrity for microfinance operations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimized database queries and backend APIs to significantly improve performance and system scalability.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Led backend architecture for modular and microservices-based systems, mentoring development teams.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-emerald-500/30" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Building Systems That{" "}
            <span className="gradient-text">Actually Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            With over 13 years of hands-on experience, I specialize in taking
            over existing or incomplete systems, identifying architectural
            issues, and delivering stable, scalable solutions that hold up under
            real usage — not just in development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center group hover:glow-emerald transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <stat.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-6 sm:p-8 group hover:glow-emerald transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Deliver */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            What I Deliver
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Scalable and maintainable backend systems",
              "Secure API ecosystems",
              "Financial systems with strong data integrity",
              "Optimized database and query performance",
              "Clean, modular, future-ready architecture",
              "Production-ready solutions",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
