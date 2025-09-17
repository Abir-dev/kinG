import { motion } from 'framer-motion';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden border-[#5d41ff] hover:border-[#4729ef] dark:border-neon-purple/20 dark:hover:border-neon-purple/40 transition-colors"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <IconSun className="h-4 w-4 text-[#4729ef]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <IconMoon className="h-4 w-4 text-neon-purple" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
