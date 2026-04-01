import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, label: "UI/UX Design", desc: "Crafting beautiful, intuitive interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimizing for speed and efficiency" },
  { icon: Globe, label: "Full Stack", desc: "End-to-end development capabilities" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">01. ABOUT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with a love for creating immersive web experiences.
              With expertise in modern frontend technologies and a keen eye for design,
              I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to push boundaries.
              I specialize in React ecosystems, 3D web experiences, and performance-driven
              applications that leave lasting impressions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="glass-card p-5 group hover:glow-border transition-all duration-300"
              >
                <h.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{h.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
