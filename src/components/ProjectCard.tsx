import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="glass-card overflow-hidden group cursor-pointer"
    >
      <div className="h-48 overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
