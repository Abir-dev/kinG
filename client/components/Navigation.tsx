import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu2, IconX, IconRocket } from '@tabler/icons-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' }, // Added Careers link  
  { name: 'Launchpad', href: '/launchpad' },
  { name: 'Register', href: '/register' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">
                  <img src="/logo4.png" alt="Kin-G Logo" className="w-16 h-16 invert dark:invert-0" />
                </span>
              </div>
              <div className="flex flex-col z-20">
                <span className="text-lg font-bold text-foreground leading-none">
                  Kin-G
                </span>
                <span className="text-xs text-muted-foreground leading-none">Technology</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group ${
                    location.pathname === item.href ? 'text-neon-cyan' : ''
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {location.pathname !== item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-50"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:flex items-center space-x-4"
          >
            <ThemeToggle />
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeMenu}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  location.pathname === item.href
                    ? 'text-neon-cyan'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu}>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
