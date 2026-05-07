"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
} from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  role: string;
  rating: number;
  text: string;
  badges: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Satisfied Client",
    company: "Upwork",
    role: "ASP.NET Bug Fixing",
    rating: 5.0,
    text: "Arif is very skilled and efficient developer, honesty and straightforward communication is his top quality. The work was done very professionally to our full satisfaction with great cooperation.",
    badges: [
      "Committed to Quality",
      "Reliable",
      "Clear Communicator",
      "Professional",
      "Collaborative",
    ],
  },
  {
    name: "Satisfied Client",
    company: "Upwork",
    role: "Fullstack Web Portal Development",
    rating: 5.0,
    text: "Arif showed a lot of enthusiasm during the project. He is a Full Stack Developer and asp.net core, mssql Expert. He is also a good solution architect. He was extremely knowledgeable and delivered quality work on time.",
    badges: ["Clear Communicator", "Committed to Quality"],
  },
];

const insights = [
  { label: "Clear Communicator", count: 2 },
  { label: "Committed to Quality", count: 2 },
  { label: "Collaborative", count: 2 },
  { label: "Professional", count: 2 },
  { label: "Reliable", count: 2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            Client Feedback
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            100% job success rate with 5-star ratings across all completed
            projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-emerald-500/5" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-amber-400 font-semibold text-lg">
                  {testimonials[activeIndex].rating}
                </span>
              </div>

              {/* Testimonial text */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-lg">
                      {
                        testimonials[activeIndex].name.charAt(0)
                      }
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role} —{" "}
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {testimonials[activeIndex].badges.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-xl glass text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-emerald-400"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-xl glass text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {/* Overall Rating */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-2">5.0</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Average Rating
              </p>
            </motion.div>

            {/* Success Rate */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-2">
                100%
              </div>
              <p className="text-sm text-muted-foreground">
                Job Success Rate
              </p>
            </motion.div>

            {/* Insight Badges */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
              <h4 className="font-semibold text-foreground text-sm mb-4">
                Client Insights
              </h4>
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-muted-foreground">
                      {insight.label}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? {
                                  width: `${(insight.count / 2) * 100}%`,
                                }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 0.8,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        {insight.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
