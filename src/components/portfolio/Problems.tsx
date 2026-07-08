"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, Search, Wrench } from "lucide-react";

const clientProblems = [
  "Their .NET API is slow",
  "Their ERP system is incomplete",
  "Their SQL queries are slow",
  "Their legacy system is hard to maintain",
  "Their financial system needs accurate transactions",
  "Their backend needs RBAC/security",
  "Their codebase needs cleanup and refactoring",
];

const helpSteps = [
  "Review current system",
  "Identify bottlenecks",
  "Improve API/database performance",
  "Refactor backend code",
  "Build secure APIs",
  "Deliver stable production-ready solutions",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problems" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.025] to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            How I Help
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Clients usually hire me when <span className="gradient-text">backend problems affect the business</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I focus on practical diagnosis, backend fixes, database improvements, and production-ready delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10">
                <Search className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Clients usually hire me when...</h3>
            </div>
            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-3">
              {clientProblems.map((problem) => (
                <motion.div key={problem} variants={itemVariants} className="flex items-start gap-3 rounded-xl border border-border/50 bg-secondary/35 p-4">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{problem}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.045] p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10">
                <Wrench className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">How I help</h3>
            </div>
            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-3">
              {helpSteps.map((step) => (
                <motion.div key={step} variants={itemVariants} className="flex items-start gap-3 rounded-xl border border-emerald-500/15 bg-background/35 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
