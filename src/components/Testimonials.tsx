"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolioData from "@/data/portfolio.json";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const { testimonials } = portfolioData;
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    gsap.fromTo(cardsRef.current?.children || [],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-20">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          What People Say
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative">
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < (testimonial.rating || 5) ? "text-yellow-400 fill-yellow-400" : "text-slate-700"
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
