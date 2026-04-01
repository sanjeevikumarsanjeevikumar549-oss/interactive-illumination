import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  { role: "Senior Frontend Developer", company: "Tech Corp", period: "2022 – Present", desc: "Led UI architecture for SaaS platform serving 100K+ users." },
  { role: "Full Stack Developer", company: "StartupXYZ", period: "2020 – 2022", desc: "Built real-time dashboards and payment integrations." },
  { role: "Junior Developer", company: "Agency Co.", period: "2018 – 2020", desc: "Developed responsive websites and e-commerce solutions." },
];

const education = [
  { degree: "B.S. Computer Science", school: "State University", period: "2014 – 2018" },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-primary font-mono text-sm mb-2 tracking-widest">05. RESUME</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              My <span className="text-gradient">Background</span>
            </h2>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn-glow bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-semibold text-sm tracking-wide flex items-center gap-2 hover:scale-105 transition-transform w-fit"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={20} className="text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">Experience</h3>
          </div>

          <div className="relative border-l-2 border-border ml-2 pl-8 space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-primary font-mono text-xs mb-1">{exp.period}</p>
                <h4 className="font-display font-semibold text-foreground">{exp.role}</h4>
                <p className="text-muted-foreground text-sm mb-1">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={20} className="text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
          </div>

          <div className="relative border-l-2 border-border ml-2 pl-8 space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-primary" />
                <p className="text-primary font-mono text-xs mb-1">{edu.period}</p>
                <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
