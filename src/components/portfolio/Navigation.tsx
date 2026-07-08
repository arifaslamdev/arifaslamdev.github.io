"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "How I Help", href: "#problems" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                <Image src="/logo_arifaslamdev.jpg" alt="Arif Aslam logo" width={24} height={24} className="rounded-sm" />
              </div>
              <div className="hidden sm:block">
                <span className="block text-base font-semibold text-foreground">Arif Aslam</span>
                <span className="block text-xs text-muted-foreground">Senior .NET Backend Developer</span>
              </div>
            </motion.a>

            <div className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => {
                const section = item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                      activeSection === section
                        ? "text-emerald-400"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {activeSection === section && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg border border-emerald-500/20 bg-emerald-500/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button asChild className="rounded-lg bg-emerald-500 px-5 font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600">
                <a href="https://www.upwork.com/freelancers/~01e47a43df9cae032f" target="_blank" rel="noopener noreferrer">
                  Hire on Upwork
                </a>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground xl:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 xl:hidden"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <nav className="relative mx-auto max-w-7xl px-4 py-6">
              <div className="glass rounded-2xl p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-all",
                      activeSection === item.href.replace("#", "")
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <Button asChild className="mt-3 w-full rounded-xl bg-emerald-500 font-medium text-white hover:bg-emerald-600">
                  <a href="https://www.upwork.com/freelancers/~01e47a43df9cae032f" target="_blank" rel="noopener noreferrer">
                    Hire Me on Upwork
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
