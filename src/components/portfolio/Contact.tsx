"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, Code2, Globe, Loader2, Mail, Send, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const links = [
  {
    icon: UserCheck,
    label: "Upwork",
    value: "Hire me on Upwork",
    href: "https://www.upwork.com/freelancers/~01e47a43df9cae032f",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/arifaslamdev",
    href: "https://github.com/arifaslamdev",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "arifaslamdev.github.io",
    href: "https://arifaslamdev.github.io",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shohag0310@gmail.com",
    href: "mailto:shohag0310@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "your_web3forms_access_key_here");
    formData.append("subject", `Portfolio Contact: ${formData.get("subject")}`);
    formData.append("from_name", "Arif Aslam Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        form.reset();
        setFormSubmitted(true);
        toast.success("Message sent successfully", {
          description: "Thank you for reaching out. I will respond as soon as possible.",
        });
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Please use the email or Upwork link instead.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Please use the email or Upwork link instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.018] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Contact
          </span>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Need help with a <span className="gradient-text">.NET backend?</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Need help with a .NET backend, ERP, FinTech system, API, or database performance issue? Let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-8">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Message sent</h3>
                  <p className="mb-6 text-muted-foreground">Thanks for the details. I will review the request and respond soon.</p>
                  <Button onClick={() => setFormSubmitted(false)} variant="outline" className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                      <Input id="name" name="name" placeholder="Your name" required className="h-12 rounded-xl border-border/50 bg-secondary/50 focus:border-emerald-500/50 focus:ring-emerald-500/20" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required className="h-12 rounded-xl border-border/50 bg-secondary/50 focus:border-emerald-500/50 focus:ring-emerald-500/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Project Type</label>
                    <Input id="subject" name="subject" placeholder="ERP, API optimization, legacy .NET, SQL performance, FinTech, etc." required className="h-12 rounded-xl border-border/50 bg-secondary/50 focus:border-emerald-500/50 focus:ring-emerald-500/20" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell me about the current system, the problem, tech stack, and expected outcome..." required rows={6} className="resize-none rounded-xl border-border/50 bg-secondary/50 focus:border-emerald-500/50 focus:ring-emerald-500/20" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-xl bg-emerald-500 font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:shadow-emerald-500/40">
                    {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Project Details</>}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border/60 bg-card/70 p-6">
              <h3 className="mb-5 text-lg font-semibold text-foreground">Direct Links</h3>
              <div className="space-y-4">
                {links.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 rounded-xl border border-border/50 bg-secondary/35 p-4 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                      <link.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{link.label}</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.055] p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Best fit projects</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                SaaS, ERP, FinTech, Microfinance, logistics, accounting, reporting, legacy ASP.NET, slow API, SQL performance, RBAC, and backend refactoring work.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

