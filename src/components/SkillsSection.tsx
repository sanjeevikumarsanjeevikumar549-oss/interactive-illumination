import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js / WebGL", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "CSS / Tailwind", level: 92 },
  { name: "Framer Motion", level: 88 },
  { name: "Database / SQL", level: 78 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    className="mb-5 sm:mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="mb-2 flex items-center justify-between gap-3">
      <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-foreground sm:text-base">{name}</span>
      <span className="shrink-0 text-sm font-mono text-primary">{level}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-secondary">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
        }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-2 text-sm font-mono tracking-widest text-primary">02. SKILLS</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-12">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={0.1 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
