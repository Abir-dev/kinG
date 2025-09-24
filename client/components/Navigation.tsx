import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  // { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Launchpad", href: "/launchpad" },
  { name: "Register", href: "/register" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // 👇 only track scroll to toggle style (not hide navbar)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-scrolled mt-4 max-w-5xl mx-auto px-4 " : "navbar-top mt-4 max-w-6xl mx-auto px-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img
                src="/logo4.png"
                alt="Kin-G Logo"
                className="w-16 h-16 invert dark:invert-0"
              />
            </div>
            <div className="flex flex-col z-20">
              <span className="text-lg font-bold leading-none text-foreground">
                Kin-G
              </span>
              <span className="text-xs leading-none text-muted-foreground">
                Technologies
              </span>
            </div>
          </Link>

         {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className={`nav-link relative group ${
        location.pathname === item.href ? "text-[#1c949a] active" : ""
      }`}
    >
      {item.name}
    </Link>
  ))}
</div>


          {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* <ThemeToggle/> */}
              <Button asChild variant="outline" size="default" className="no-global-button border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-6 py-2 font-semibold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button className="no-global-button" variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeMenu}
                className={`block w-full nav-link ${
                  location.pathname === item.href ? "text-[#1c949a] active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
           {/* Mobile Contact */}
              <Link to="/contact" onClick={closeMenu} className="mt-4 block w-full">
                <Button asChild variant="outline" size="lg" className="no-global-button w-full border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-8 py-4 text-lg font-semibold">
                  <span>Contact Us</span>
                </Button>
              </Link>

          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
