import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BMI Calculator",
    description: "A clean BMI calculator app that lets users quickly calculate their Body Mass Index with a simple, intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    liveUrl: "https://bmi-calculator-ten-lemon.vercel.app/",
  },
  {
    title: "Student Form",
    description: "A student registration form application with form validation and data management capabilities.",
    tags: ["React", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    liveUrl: "https://demo-virid-phi.vercel.app/",
  },
  {
    title: "Responsive Dashboard",
    description: "A fully responsive admin dashboard built with clean layouts, navigation, and interactive UI components.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "https://js-1-sigma.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-2 text-sm font-mono tracking-widest text-primary">03. PROJECTS</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
