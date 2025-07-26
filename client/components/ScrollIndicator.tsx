import { motion } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center cursor-pointer group"
        onClick={() => {
          window.scrollTo({ 
            top: window.innerHeight, 
            behavior: 'smooth' 
          });
        }}
      >
        <span className="text-sm text-muted-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
          Scroll to explore
        </span>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-12 border-2 border-neon-cyan/30 rounded-full flex justify-center p-2 group-hover:border-neon-cyan/60 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-neon-cyan to-transparent rounded-full"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="mt-2"
        >
          <IconChevronDown className="h-4 w-4 text-neon-cyan/60 group-hover:text-neon-cyan transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
