import { motion } from "framer-motion";
import { Github, Linkedin, Triangle } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/sanjeevikumarsanjeevikumar549-oss",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sanjeevikumars",
    label: "LinkedIn",
  },
  {
    icon: Triangle,
    href: "https://vercel.com/sanjeevikumarsanjeevikumar549-oss-projects",
    label: "Vercel",
  },
];

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border/50">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label={s.label}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xs text-muted-foreground sm:text-sm"
        >
          Designed & Built with ♥ — © {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
