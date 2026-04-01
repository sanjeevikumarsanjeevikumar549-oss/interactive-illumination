import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center animated-gradient-bg overflow-hidden">
      <ParticleField />
      <FloatingGeometry />

      <div className="section-padding relative z-20 w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient">Creative</span>
          <br />
          <span className="text-foreground">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
        >
          I build immersive digital experiences with modern web technologies,
          combining aesthetics with performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="btn-glow bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display font-semibold text-sm tracking-wide hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-border px-8 py-3 rounded-lg font-display font-semibold text-sm tracking-wide text-foreground hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
