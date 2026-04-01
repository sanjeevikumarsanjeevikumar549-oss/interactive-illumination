import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js / WebGL", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "Python", level: 75 },
  { name: "Framer Motion", level: 88 },
  { name: "Database / SQL", level: 78 },
];

const SkillBar = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-foreground text-sm font-medium">{name}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.5, duration: 0.3 }}
        className="text-primary text-sm font-mono"
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(168, 75%, 42%), hsl(192, 100%, 50%))`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">02. SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={0.2 + i * 0.1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
