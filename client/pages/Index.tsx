import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { HeroParallax } from '../components/HeroParallax';
import { BentoGrid } from '../components/BentoGrid';
import { About } from '../components/About';
import { LaunchpadPricing } from '../components/LaunchpadPricing';
import { Contact } from '../components/Contact';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

export default function Index() {
  const { refresh } = useGSAPAnimations();

  useEffect(() => {
    // Refresh GSAP ScrollTrigger after component mount
    setTimeout(() => refresh(), 100);

    // Add cursor trail effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-trail') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [refresh]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Custom cursor trail for desktop */}
      <div className="cursor-trail fixed w-6 h-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 pointer-events-none z-50 mix-blend-difference hidden lg:block transition-all duration-150" />

      <Navigation />

      <main>
        <section id="home">
          <HeroParallax />
        </section>

        <section id="services" className="gsap-fade-in">
          <BentoGrid />
        </section>

        <section id="about" className="gsap-slide-left">
          <About />
        </section>

        <section id="launchpad" className="gsap-scale">
          <LaunchpadPricing />
        </section>

        <section id="contact" className="gsap-slide-right">
          <Contact />
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 bg-secondary/30 border-t border-border/40 dark:electrifying-bg relative">
        <div className="absolute inset-0 dark:futuristic-grid opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center neon-glow-cyan">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Kin-G Technology
                </span>
                <span className="text-sm text-muted-foreground">& Consultancy Pvt. Ltd.</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center gap-8 mb-8 text-sm text-muted-foreground"
            >
              <div>EdTech Solutions</div>
              <div>•</div>
              <div>B2B Services</div>
              <div>•</div>
              <div>Career Development</div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-2"
            >
              © 2025 Kin-G Technology & Consultancy Pvt. Ltd. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              Part of SOH Group • Accelerating Business Growth & Career Success
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
