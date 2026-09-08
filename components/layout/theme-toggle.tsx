"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0 rounded-full text-foreground/80 hover:text-foreground"
      onClick={() =>
        setTheme(
          document.documentElement.classList.contains("light")
            ? "dark"
            : "light",
        )
      }
    >
      <Sun className="h-5 w-5 dark:block hidden" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
      <span className="sr-only dark:block hidden">Switch to light mode</span>
      <span className="sr-only dark:hidden">Switch to dark mode</span>
    </Button>
  );
}
