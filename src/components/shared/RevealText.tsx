"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
}

export default function RevealText({
  children,
}: RevealTextProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}