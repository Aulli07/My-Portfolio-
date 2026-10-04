import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children }:{ children: ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}