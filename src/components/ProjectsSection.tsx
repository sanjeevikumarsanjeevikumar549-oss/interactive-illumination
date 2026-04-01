import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "3D Portfolio Experience",
    description: "An immersive portfolio built with Three.js featuring interactive 3D elements and cinematic transitions.",
    tags: ["React", "Three.js", "GSAP"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Dashboard",
    description: "Real-time analytics dashboard with AI-powered insights, data visualization and predictive models.",
    tags: ["Next.js", "Python", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management and admin panel.",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket-based chat application with end-to-end encryption, media sharing, and group channels.",
    tags: ["React", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
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
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">03. PROJECTS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
