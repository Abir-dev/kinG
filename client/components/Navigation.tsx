import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' }, 
  { name: 'Launchpad', href: '/launchpad' },
  { name: 'Register', href: '/register' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // 👇 handle scroll up/down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down -> hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up -> show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
    variants={{
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",   // natural smooth motion
        stiffness: 80,    // lower = softer bounce
        damping: 20       // higher = less bounce
      } 
    },
    hidden: { 
      y: -100, 
      opacity: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      } 
    },
  }}
  animate={showNavbar ? "visible" : "hidden"}
  initial="visible"
  className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-2xl border-b border-border/40"
>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img src="/logo4.png" alt="Kin-G Logo" className="w-16 h-16 invert dark:invert-0" />
            </div>
            <div className="flex flex-col z-20">
              <span className="text-lg font-bold text-foreground leading-none">Kin-G</span>
              <span className="text-xs text-muted-foreground leading-none">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group ${
                  location.pathname === item.href ? 'text-neon-cyan' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-4 py-4 text-sm rounded-2xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
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
            <Link to="/contact" onClick={closeMenu} className="mt-4 block w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
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
