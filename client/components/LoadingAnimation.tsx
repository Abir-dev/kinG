import { motion } from 'framer-motion';

export function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <div className="relative">
        {/* Main loading circle */}
        <motion.div
          className="w-16 h-16 border-4 border-neon-cyan/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-neon-cyan rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 w-16 h-16 border-2 border-neon-purple/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-neon-cyan font-medium"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PageLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <motion.div
        className="w-8 h-8 border-2 border-neon-cyan/20 rounded-full border-t-neon-cyan"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
