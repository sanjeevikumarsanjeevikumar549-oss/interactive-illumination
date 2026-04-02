import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/40"
        aria-hidden
      />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="inline-flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-border/60 bg-secondary/40 text-foreground transition-colors hover:bg-secondary hover:text-primary"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <Moon className="h-[1.1rem] w-[1.1rem]" /> : <Sun className="h-[1.1rem] w-[1.1rem]" />}
    </button>
  );
};

export default ThemeToggle;
