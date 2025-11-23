"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioData from "@/data/portfolio.json";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { projects } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Title Animation
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Sticky Card Animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=100",
          pin: true,
          pinSpacing: false,
          scrub: true,
          // Ensure it doesn't overlap the next section
          endTrigger: containerRef.current,
          end: "bottom bottom-=100", 
        },
        scale: 1 - (projects.length - index) * 0.05,
        opacity: 1 - (projects.length - index) * 0.1,
        filter: "blur(2px)",
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-20">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-20 text-white text-center">
          Selected Works
        </h2>

        <div className="space-y-20 pb-40">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="sticky top-24 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
                
                {/* Project Visual Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center group overflow-hidden">
                   <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      💻
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
