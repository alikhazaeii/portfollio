import { motion, useScroll, useSpring } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <motion.div className="fixed top-0 left-0 origin-left h-[3px] w-full bg-orange-400 z-50" style={{ scaleX }} />
    
  );
}
