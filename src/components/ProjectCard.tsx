import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const useFinePointer = () => {
  const [fine, setFine] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
};

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
  const finePointer = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const hasLiveLink = Boolean(liveUrl && liveUrl !== "#");

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

  const handleIconClick = (event: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href || href === "#") {
      event.preventDefault();
    }
  };

  const imageBlock = (
    <div className="relative h-44 overflow-hidden sm:h-48">
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-500 md:group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={
        finePointer
          ? { rotateX, rotateY, transformStyle: "preserve-3d" as const }
          : undefined
      }
      onMouseMove={finePointer ? handleMouse : undefined}
      onMouseLeave={finePointer ? handleLeave : undefined}
      className={`glass-card group touch-manipulation overflow-hidden ${hasLiveLink ? "cursor-pointer" : "cursor-default"}`}
    >
      {hasLiveLink ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {imageBlock}
        </a>
      ) : (
        imageBlock
      )}

      <div className="p-5 sm:p-6">
        {hasLiveLink ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 block font-display text-lg font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-sm"
          >
            {title}
          </a>
        ) : (
          <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
        )}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => handleIconClick(event, githubUrl)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={18} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => handleIconClick(event, liveUrl)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
