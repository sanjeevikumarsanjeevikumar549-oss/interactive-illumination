import { motion } from "framer-motion";

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

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-foreground text-sm font-medium">{name}</span>
      <span className="text-primary text-sm font-mono">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(168, 75%, 42%), hsl(192, 100%, 50%))`,
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
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">02. SKILLS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={0.1 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
