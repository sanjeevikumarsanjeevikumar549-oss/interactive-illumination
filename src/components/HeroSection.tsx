import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden animated-gradient-bg">
      <ParticleField />
      <FloatingGeometry />

      <div className="section-padding relative z-20 w-full min-w-0 max-w-4xl pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-sm font-mono tracking-widest text-primary md:text-base"
        >
          Hello, I'm Sanjeevikumar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-4 break-words font-display text-4xl font-bold sm:text-5xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">MERN Stack</span>
          <br />
          <span className="text-foreground">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          I build web applications using HTML, CSS, Tailwind CSS, JavaScript, and React.js,
          focused on creating clean, responsive, and user-friendly experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          <a
            href="#contact"
            className="btn-glow flex w-full items-center justify-center rounded-lg bg-primary px-8 py-3 text-center font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="flex w-full items-center justify-center rounded-lg border border-border px-8 py-3 text-center font-display text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-1/2 z-20 -translate-x-1/2 bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-8"
      >
        <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
