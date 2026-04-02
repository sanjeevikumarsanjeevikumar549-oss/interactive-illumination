import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  { role: "Junior Full Stack Developer", company: "Tech Solutions", period: "2023 – Present", desc: "Building responsive web apps with React, Node.js, and PostgreSQL." },
  { role: "Frontend Developer Intern", company: "StartupHub", period: "2022 – 2023", desc: "Developed UI components and integrated REST APIs for client projects." },
  { role: "Freelance Web Developer", company: "Self-employed", period: "2021 – 2022", desc: "Created websites and landing pages for small businesses." },
];

const education = [
  { degree: "B.Tech – Information Technology", school: "CSI Institute of Technology, Anna University", period: "" },
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
          className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-mono tracking-widest text-primary">05. RESUME</p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              My <span className="text-gradient">Background</span>
            </h2>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn-glow flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-105 sm:w-fit"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <Briefcase size={20} className="text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">Experience</h3>
          </div>

          <div className="relative ml-1 space-y-8 border-l-2 border-border pl-5 sm:ml-2 sm:pl-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[1.45rem] top-1 h-3 w-3 rounded-full bg-primary sm:-left-[2.55rem]" />
                <p className="mb-1 text-xs font-mono text-primary">{exp.period}</p>
                <h4 className="font-display text-base font-semibold text-foreground">{exp.role}</h4>
                <p className="mb-1 text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={20} className="text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
          </div>

          <div className="relative ml-1 space-y-8 border-l-2 border-border pl-5 sm:ml-2 sm:pl-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[1.45rem] top-1 h-3 w-3 rounded-full bg-primary sm:-left-[2.55rem]" />
                <p className="mb-1 text-xs font-mono text-primary">{edu.period}</p>
                <h4 className="font-display text-base font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
