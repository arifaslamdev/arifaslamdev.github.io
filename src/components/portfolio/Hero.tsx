"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Mail, MapPin, BadgeCheck, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  "15+ years building production business systems",
  "ERP, FinTech, Microfinance, SaaS, Logistics",
  "APIs, SQL optimization, RBAC, reporting, transactions",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_36%)]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance and backend consulting work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-3 text-base text-muted-foreground">Hello, I am Arif Aslam</p>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                Senior .NET Backend Developer
              </h1>
              <p className="mb-5 text-lg font-semibold text-emerald-300 sm:text-xl">
                ERP &bull; FinTech &bull; Scalable APIs &bull; SQL Optimization
              </p>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                I help businesses build, fix, and scale reliable .NET backend systems for ERP, FinTech, Microfinance, SaaS, Logistics, and business automation platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start"
            >
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />Dhaka, Bangladesh</span>
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:block" />
              <span>Serving international freelance clients</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-xl bg-emerald-500 px-7 font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600">
                <a href="https://www.upwork.com/freelancers/~01e47a43df9cae032f" target="_blank" rel="noopener noreferrer">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Hire Me on Upwork
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-emerald-500/30 px-7 font-semibold text-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200">
                <a href="https://github.com/arifaslamdev" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-4 w-4" />
                  View GitHub
                </a>
              </Button>
              <Button size="lg" variant="ghost" onClick={() => scrollTo("contact")} className="rounded-xl px-7 font-semibold text-foreground hover:bg-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {proofPoints.map((point) => (
                <div key={point} className="rounded-xl border border-border/60 bg-card/50 p-4 text-left text-sm text-muted-foreground">
                  <BadgeCheck className="mb-2 h-4 w-4 text-emerald-400" />
                  {point}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-card shadow-2xl shadow-black/30">
                <Image src="/profile (9).jpg" alt="Arif Aslam, Senior .NET Backend Developer" width={640} height={760} priority className="h-[360px] w-full object-cover object-top sm:h-[460px]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/86 to-transparent p-6 pt-20">
                  <p className="text-xl font-bold text-foreground">Production-ready backend systems</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    .NET 8, ASP.NET Core Web API, EF Core, Dapper, SQL Server, PostgreSQL, Clean Architecture, CQRS, JWT, RBAC.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-emerald-400 sm:flex"
      >
        Scroll Down
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}

