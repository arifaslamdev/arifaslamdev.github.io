// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import {
//   Send,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
//   CheckCircle2,
//   Loader2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "shohag0310@gmail.com",
//     href: "mailto:shohag0310@gmail.com",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Mirpur, Dhaka, Bangladesh",
//     href: null,
//   },
//   {
//     icon: Clock,
//     label: "Availability",
//     value: "30+ hrs/week | Open to Hire",
//     href: null,
//   },
// ];

// const socialLinks = [
//   {
//     label: "GitHub",
//     href: "https://github.com/arifaslamdev",
//     color: "hover:text-white",
//     svg: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//       </svg>
//     ),
//   },
//   // {
//   //   label: "LinkedIn",
//   //   href: "https://www.linkedin.com/in/arifaslamdev",
//   //   color: "hover:text-blue-400",
//   //   svg: (
//   //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//   //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   //     </svg>
//   //   ),
//   // },
//   {
//     label: "Upwork",
//     href: "https://www.upwork.com/freelancers/~01e47a43df9cae032f",
//     color: "hover:text-emerald-400",
//     svg: (
//       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
//       </svg>
//     ),
//   },
// ];

// export default function Contact() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setIsSubmitting(false);
//     setFormSubmitted(true);

//     toast.success("Message sent successfully!", {
//       description:
//         "Thank you for reaching out. I'll get back to you within 24 hours.",
//     });
//   };

//   return (
//     <section id="contact" className="section-padding relative" ref={ref}>
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
//             Get In Touch
//           </motion.span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//             Let&apos;s Work <span className="gradient-text">Together</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Have a project in mind? I&apos;m always open to discussing new
//             opportunities, complex problems, and innovative ideas.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-3"
//           >
//             <div className="glass rounded-2xl p-6 sm:p-8">
//               {formSubmitted ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="text-center py-12"
//                 >
//                   <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
//                     <CheckCircle2 className="w-8 h-8 text-emerald-400" />
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     Message Sent!
//                   </h3>
//                   <p className="text-muted-foreground mb-6">
//                     Thank you for reaching out. I&apos;ll respond within 24
//                     hours.
//                   </p>
//                   <Button
//                     onClick={() => setFormSubmitted(false)}
//                     variant="outline"
//                     className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
//                   >
//                     Send Another Message
//                   </Button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium text-foreground">
//                         Full Name
//                       </label>
//                       <Input
//                         id="name"
//                         placeholder="Your name"
//                         required
//                         className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium text-foreground">
//                         Email Address
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         required
//                         className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-medium text-foreground">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       placeholder="Project discussion, hiring, etc."
//                       required
//                       className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium text-foreground">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       placeholder="Tell me about your project, requirements, and timeline..."
//                       required
//                       rows={5}
//                       className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl resize-none"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-12 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="lg:col-span-2 space-y-6"
//           >
//             <div className="glass rounded-2xl p-6 space-y-5">
//               <h3 className="font-semibold text-foreground mb-2">
//                 Contact Information
//               </h3>
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center">
//                     <info.icon className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-muted-foreground uppercase tracking-wider">
//                       {info.label}
//                     </p>
//                     {info.href ? (
//                       <a href={info.href} className="text-sm text-foreground hover:text-emerald-400 transition-colors">
//                         {info.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm text-foreground">{info.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="glass rounded-2xl p-6">
//               <h3 className="font-semibold text-foreground mb-4">
//                 Connect With Me
//               </h3>
//               <div className="flex gap-3">
//                 {socialLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 rounded-xl glass text-muted-foreground ${link.color} hover:scale-110 transition-all duration-300`}
//                     aria-label={link.label}
//                   >
//                     {link.svg}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="glass rounded-2xl p-6 glow-emerald">
//               <h3 className="font-semibold text-foreground mb-2">
//                 Open to Opportunities
//               </h3>
//               <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
//                 I&apos;m currently available for freelance work, contract-to-hire,
//                 and consulting engagements. Let&apos;s discuss how I can help your
//                 business.
//               </p>
//               <div className="flex items-center gap-2 text-emerald-400">
//                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="text-sm font-medium">Available Now</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shohag0310@gmail.com",
    href: "mailto:shohag0310@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "30+ hrs/week | Open to Hire",
    href: null,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arifaslamdev",
    color: "hover:text-white",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://www.linkedin.com/in/arifaslamdev",
  //   color: "hover:text-blue-400",
  //   svg: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  //       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //     </svg>
  //   ),
  // },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e47a43df9cae032f",
    color: "hover:text-emerald-400",
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
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
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitting(false);
        setFormSubmitted(true);
        toast.success("Message sent successfully!", {
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
      } else {
        setIsSubmitting(false);
        toast.error("Failed to send message", {
          description: data.message || "Please try again.",
        });
      }
    } catch {
      setIsSubmitting(false);
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4 px-4 py-2 rounded-full glass">
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;m always open to discussing new
            opportunities, complex problems, and innovative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I&apos;ll respond within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project discussion, hiring, etc."
                      required
                      className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, requirements, and timeline..."
                      required
                      rows={5}
                      className="bg-secondary/50 border-border/50 focus:border-emerald-500/50 focus:ring-emerald-500/20 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-12 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-5">
              <h3 className="font-semibold text-foreground mb-2">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-foreground hover:text-emerald-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl glass text-muted-foreground ${link.color} hover:scale-110 transition-all duration-300`}
                    aria-label={link.label}
                  >
                    {link.svg}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 glow-emerald">
              <h3 className="font-semibold text-foreground mb-2">
                Open to Opportunities
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                I&apos;m currently available for freelance work, contract-to-hire,
                and consulting engagements. Let&apos;s discuss how I can help your
                business.
              </p>
              <div className="flex items-center gap-2 text-emerald-400">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
