"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for spotlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    )
    .fromTo(nameRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    )
    .fromTo(roleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-background"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <div className="z-10 text-center max-w-5xl">
        {/* Status Badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>

        {/* Name */}
        <h1 ref={nameRef} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white">
          {personalInfo.name}
        </h1>

        {/* Role */}
        <h2 ref={roleRef} className="text-2xl md:text-4xl text-slate-400 font-light mb-10">
          Building <span className="text-primary font-normal">scalable</span> applications & <br className="hidden md:block" /> 
          crafting <span className="text-accent font-normal">exceptional</span> user experiences.
        </h2>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            href="#projects"
            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            View Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#contact"
            className="px-8 py-4 rounded-full font-medium text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2"
          >
            Contact Me
            <MousePointer2 size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
