"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Brand Identity System",
    category: "Branding",
    year: "2024",
    description: "Complete visual identity for a retail brand — logo, typography, color system and brand guidelines.",
    color: "#1a1a1a",
    placeholder: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=900&q=80",
  },
  {
    id: "02",
    title: "Retail Campaign System",
    category: "Campaign Design",
    year: "2024",
    description: "Integrated campaign across OOH, social and in-store touchpoints for a seasonal retail push.",
    color: "#0f0f0f",
    placeholder: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
  },
  {
    id: "03",
    title: "AI Automation Workflow",
    category: "Automation",
    year: "2023",
    description: "n8n-based automation system for a business — reducing manual design ops by 70%.",
    color: "#0a0a0a",
    placeholder: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
  },
  {
    id: "04",
    title: "Export Packaging Design",
    category: "Packaging",
    year: "2023",
    description: "Premium packaging system for international export — structural design, print specs and brand consistency.",
    color: "#111111",
    placeholder: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=900&q=80",
  },
  {
    id: "05",
    title: "Healthcare Communication",
    category: "Print & Digital",
    year: "2022",
    description: "Sales enablement assets, brochures and product communication for a healthcare brand.",
    color: "#0d0d0d",
    placeholder: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = projects.length;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(totalCards - 1) * 100}vw`]
  );

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.round(v * (totalCards - 1));
      setActiveIndex(Math.min(idx, totalCards - 1));
    });
    return unsub;
  }, [scrollYProgress, totalCards]);

  return (
    <>
    <section
      id="portfolio"
      ref={containerRef}
      style={{ height: `${totalCards * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Section label + dots */}
        <div className="absolute top-8 left-6 md:left-8 z-20 flex items-center gap-4 md:gap-6">
          <p className="hidden md:block text-xs uppercase tracking-[0.35em] text-white/40">
            Selected Work
          </p>
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: activeIndex === i ? 24 : 6,
                  backgroundColor: activeIndex === i ? "#FF4301" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-[2px] rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 right-6 md:right-8 z-20 flex items-center gap-3"
          animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Scroll to explore
          </p>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <svg className="h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Cards track */}
        <motion.div style={{ x }} className="flex h-full">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="relative flex h-full w-screen flex-shrink-0"
              style={{ backgroundColor: project.color }}
            >

              {/* IMAGE — full background on mobile, right 55% on desktop */}
              <motion.div
                className="absolute inset-0 md:left-auto md:right-0 md:w-[55%]"
                animate={{ opacity: activeIndex === i ? 1 : 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.placeholder}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                {/* Mobile: dark gradient from bottom so text is readable */}
                <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black via-black/75 to-black/30" />
                {/* Desktop: gradient from left */}
                <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black via-black/60 to-transparent" />
              </motion.div>

              {/* TEXT — bottom on mobile, centered left on desktop */}
              <div className="relative z-10 flex h-full w-full flex-col justify-end px-8 pb-28 md:justify-center md:pb-0 md:px-24 md:max-w-2xl">

                <motion.p
                  animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-4 md:mb-6 text-xs uppercase tracking-[0.4em] text-[#FF4301]"
                >
                  {project.id} — {project.category}
                </motion.p>

                <motion.h2
                  animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-7xl"
                >
                  {project.title}
                </motion.h2>

                <motion.p
                  animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-5 md:mt-8 max-w-sm text-sm md:text-base leading-relaxed text-white/50"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mt-8 md:mt-12 flex items-center gap-6"
                >
                  <a
                    href="https://www.behance.net/ayushpatidar14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3
                      rounded-full border border-white/20
                      px-6 py-3 text-xs md:text-sm uppercase tracking-[0.2em]
                      transition-all duration-300
                      hover:bg-[#FF4301] hover:border-[#FF4301]
                    "
                  >
                    View Project
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>

                  <span className="text-xs uppercase tracking-[0.3em] text-white/20">
                    {project.year}
                  </span>
                </motion.div>

              </div>

              {/* Ghost number */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-0 select-none text-[25vw] md:text-[20vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.03]">
                {project.id}
              </div>

            </div>
          ))}
        </motion.div>

      </div>

    </section>

    {/* Explore Full Portfolio CTA */}
    <div className="flex flex-col items-center justify-center gap-6 py-24 bg-black border-t border-white/5">
      <p className="text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
        Explore Full Portfolio
      </p>
      <a
        href="https://www.behance.net/ayushpatidar14"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          rounded-full
          border
          border-white/20
          px-10
          py-4
          text-sm
          uppercase
          tracking-[0.2em]
          transition-all
          duration-300
          hover:bg-[#FF4301]
          hover:border-[#FF4301]
        "
      >
        View on Behance →
      </a>
    </div>
    </>
  );
}