"use client";

import { useEffect } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealTarget = {
  element: Element | null;
  direction?: RevealDirection;
  delay?: number;
};

const easeStep = 95;

function addReveal({ element, direction = "up", delay = 0 }: RevealTarget) {
  if (!(element instanceof HTMLElement) || element.dataset.revealReady === "true") return;
  element.classList.add("reveal", `reveal-${direction}`);
  element.style.setProperty("--reveal-delay", `${delay}ms`);
  element.dataset.revealReady = "true";
}

function addStaggered(elements: Iterable<Element>, direction: RevealDirection = "up", step = easeStep, start = 0) {
  Array.from(elements).forEach((element, index) => {
    addReveal({ element, direction, delay: start + index * step });
  });
}

export default function ScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector(".site-header");

    const updateHeader = () => {
      if (!(header instanceof HTMLElement)) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    addReveal({ element: header, direction: "down" });
    addStaggered(document.querySelectorAll(".site-header .brand-link, .site-header .nav-link, .site-header .cta-soft"), "down", 45, 80);

    const hero = document.querySelector("#home");
    if (hero) {
      addStaggered(hero.querySelectorAll(".hero-copy .eyebrow, .hero-copy h1, .hero-copy h1 + p, .hero-copy h1 + p + p"), "up", 110, 80);
      addStaggered(hero.querySelectorAll(".hero-actions a"), "up", 90, 520);
      addReveal({ element: hero.querySelector(".hero-card"), direction: "scale", delay: 260 });
      addStaggered(hero.querySelectorAll(".hero-stats > div"), "up", 85, 540);
      addReveal({ element: hero.querySelector(".hero-fit"), direction: "up", delay: 920 });
    }

    document.querySelectorAll("main > section:not(#home)").forEach((section) => {
      addStaggered(section.querySelectorAll(":scope > .section-shell > div:first-child .eyebrow, :scope > .section-shell > div:first-child h2, :scope > .section-shell > div:first-child p"), "up", 90, 60);
    });

    addReveal({ element: document.querySelector("#about .premium-card"), direction: "up", delay: 170 });
    addStaggered(document.querySelectorAll("#about .card-flat"), "up", 85, 260);

    addStaggered(document.querySelectorAll("#services article"), "up", 90, 180);
    addStaggered(document.querySelectorAll("#services article .rounded-2xl:first-child"), "scale", 70, 260);

    const problemSection = document.querySelector(".gradient-panel");
    if (problemSection) {
      addReveal({ element: problemSection.querySelector(".premium-card"), direction: "left", delay: 160 });
      addReveal({ element: problemSection.querySelector(".bg-teal-900"), direction: "right", delay: 220 });
      addStaggered(problemSection.querySelectorAll(".premium-card .space-y-3 > div"), "left", 70, 330);
      addStaggered(problemSection.querySelectorAll(".bg-teal-900 .space-y-3 > div"), "right", 70, 390);
    }

    addStaggered(document.querySelectorAll("#projects article"), "up", 115, 180);
    addStaggered(document.querySelectorAll("#projects article .rounded-2xl, #projects article span.rounded-full"), "up", 45, 320);

    addStaggered(document.querySelectorAll("#skills article"), "up", 100, 180);
    addStaggered(document.querySelectorAll("#skills article span.rounded-xl"), "up", 32, 300);
    addReveal({ element: document.querySelector("#skills .mt-6"), direction: "up", delay: 280 });
    addStaggered(document.querySelectorAll("#skills .mt-6 span.rounded-xl"), "up", 45, 400);

    addStaggered(document.querySelectorAll("#experience article"), "up", 120, 180);
    addStaggered(document.querySelectorAll("#experience article > span, #experience article p.rounded-full"), "scale", 75, 280);
    addStaggered(document.querySelectorAll("#experience article .mt-5 span.rounded-full"), "up", 35, 360);

    addStaggered(document.querySelectorAll("#testimonials article, #testimonials aside"), "up", 125, 180);
    addStaggered(document.querySelectorAll("#testimonials .text-amber-400 svg"), "scale", 45, 300);
    addStaggered(document.querySelectorAll("#testimonials article span.rounded-full, #testimonials aside .rounded-2xl"), "up", 65, 340);

    addReveal({ element: document.querySelector("#contact .section-shell > div"), direction: "scale", delay: 160 });
    addStaggered(document.querySelectorAll("#contact .inline-flex.rounded-full, #contact h2, #contact p, #contact a.inline-flex, #contact .border-t a"), "up", 90, 260);

    const revealElements = Array.from(document.querySelectorAll(".reveal"));

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", updateHeader);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer.disconnect();
    };
  }, []);

  return null;
}

