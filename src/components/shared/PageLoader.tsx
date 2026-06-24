"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while loader is showing
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
        >

          {/* Corner lines — top left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute top-8 left-8"
          >
            <div className="h-px w-10 bg-white/20" />
            <div className="mt-1 h-10 w-px bg-white/20" />
          </motion.div>

          {/* Corner lines — bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute bottom-8 right-8"
          >
            <div className="ml-auto h-10 w-px bg-white/20" />
            <div className="mt-1 h-px w-10 bg-white/20" />
          </motion.div>

          {/* AP Monogram */}
          <div className="relative flex items-center justify-center">

            {/* Rotating ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute h-36 w-36 rounded-full border border-white/10"
            />

            {/* Orange arc — SVG */}
            <motion.svg
              className="absolute h-44 w-44"
              viewBox="0 0 176 176"
              fill="none"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <motion.circle
                cx="88"
                cy="88"
                r="80"
                stroke="#FF4301"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="502"
                initial={{ strokeDashoffset: 502 }}
                animate={{ strokeDashoffset: 120 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              />
            </motion.svg>

            {/* AP Text */}
            <div className="relative z-10 flex items-baseline gap-0.5">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                className="font-heading text-5xl font-semibold tracking-[-0.08em] text-white"
              >
                A
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
                className="font-heading text-5xl font-semibold tracking-[-0.08em] text-[#FF4301]"
              >
                P
              </motion.span>
            </div>

          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-white/30"
          >
            Visual Designer
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
            <motion.div
              className="h-full bg-[#FF4301]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}