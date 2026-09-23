import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  ...rest
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <div
    className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
      light ? "text-teal-light" : "text-teal"
    }`}
  >
    <span className={`h-px w-8 ${light ? "bg-teal-light" : "bg-teal"}`} />
    {children}
  </div>
);
