"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-cyan-400">Skills</span></h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            I constantly learn new technologies to stay up-to-date with the latest trends.
            Here are some of the technologies I work with.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-center hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all group"
            >
              <div className="font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
