"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { socials } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-40 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <div ref={contentRef} className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-xl mb-12">
            Interested in building something awesome? I&apos;m always open to
            discussing new projects and opportunities.
          </p>

          <a
            href={socials.email}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform mb-16"
          >
            <Mail size={24} />
            Say Hello
          </a>

          <div className="flex justify-center gap-8">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
