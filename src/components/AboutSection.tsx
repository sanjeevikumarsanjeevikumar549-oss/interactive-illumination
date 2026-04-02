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
          className="mb-12 sm:mb-16"
        >
          <p className="mb-2 text-sm font-mono tracking-widest text-primary">01. ABOUT</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Crafting Digital <span className="text-gradient">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-muted-foreground">
              I'm Sanjeevikumar, a passionate MERN stack developer from Kanniyakumari, Tamil Nadu.
              I specialize in building responsive, modern web applications using HTML, CSS,
              Tailwind CSS, JavaScript, and React.js.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I love turning ideas into clean, functional interfaces that deliver great user
              experiences. I'm always eager to learn new technologies and improve my craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="glass-card group p-4 transition-all duration-300 hover:glow-border sm:p-5"
              >
                <h.icon className="mb-3 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{h.label}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
