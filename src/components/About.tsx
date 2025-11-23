"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioData from "@/data/portfolio.json";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { personalInfo } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(expRef.current?.children || [],
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8 text-white">
              About Me
            </h2>
            <p ref={textRef} className="text-slate-400 text-lg leading-relaxed mb-8">
              {personalInfo.about}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
            <div ref={expRef} className="space-y-8 border-l border-slate-800 pl-8 ml-4">
              {personalInfo.experience?.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-slate-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
