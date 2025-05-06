import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-10 h-10 bg-gray-100 dark:bg-accent text-gray-700 dark:text-gray-300"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};
