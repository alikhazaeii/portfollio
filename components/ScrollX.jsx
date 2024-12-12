import { motion, useScroll, useSpring } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <motion.div className="fixed top-0 left-0 origin-left h-[4px] w-full dark:bg-orange-400 bg-black z-50" style={{ scaleX }} />
    
  );
}
