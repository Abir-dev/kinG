import { motion } from 'framer-motion';
import { IconBuilding, IconUsers, IconTrendingUp, IconRocket, IconBrandLinkedin, IconPhone, IconCode, IconBulb } from '@tabler/icons-react';

const stats = [
  { number: "500+", label: "Projects Delivered", icon: IconRocket },
  { number: "1000+", label: "Careers Launched", icon: IconUsers },
  { number: "50+", label: "Enterprise Clients", icon: IconBuilding },
  { number: "95%", label: "Placement Success", icon: IconTrendingUp },
];

const services = [
  { name: "Telecalling Support", icon: IconPhone, color: "text-neon-blue" },
  { name: "CRM Integration", icon: IconCode, color: "text-neon-purple" },
  { name: "Development Services", icon: IconCode, color: "text-neon-cyan" },
  { name: "Career Training", icon: IconBulb, color: "text-neon-pink" },
];

import { useRef, useEffect, useState } from "react";

export function About() {
  // Timeline animation state
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  // Dots positions (percentages of section height)
  const dotPercents = [0, 0.33, 0.66, 1];
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const section = lineRef.current.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate scroll progress within section
      let progress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      if (rect.bottom < 0 || rect.top > windowHeight) progress = 0;

      // Find which dot we are at
      let dotIdx = 0;
      for (let i = 0; i < dotPercents.length; i++) {
        if (progress >= dotPercents[i]) dotIdx = i;
      }
      setActiveDot(dotIdx);

      // Animate line to next dot
      let nextDotPercent = dotPercents[dotIdx];
      // If scrolling between dots, animate line between them
      if (dotIdx < dotPercents.length - 1) {
        const start = dotPercents[dotIdx];
        const end = dotPercents[dotIdx + 1];
        const localProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        nextDotPercent = start + localProgress * (end - start);
      }
      setLineHeight(nextDotPercent * rect.height);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Our Journey Timeline */}
        <div className="relative mb-16" style={{ minHeight: 300 }}>
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="absolute left-8 top-0 h-full flex flex-col items-center" style={{ width: 32 }}>
            {/* Glowing Dots and Animated Line */}
            <div className="relative w-4 h-full flex flex-col items-center">
              {dotPercents.map((percent, idx) => (
                <>
                  {/* Dot */}
                  <div
                    key={"dot-" + idx}
                    style={{ position: "absolute", top: `calc(${percent * 100}% - 8px)` }}
                    className={`w-4 h-4 rounded-full ${idx === 0 ? "bg-neon-cyan" : idx === dotPercents.length - 1 ? "bg-neon-purple" : "bg-neon-green"} shadow-[0_0_16px_4px_rgba(0,255,255,0.7)]`}
                  />
                </>
              ))}
              {/* Animated Line */}
              <div
                ref={lineRef}
                style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", height: `${lineHeight}px`, transition: "height 0.3s cubic-bezier(.4,0,.2,1)" }}
                className="w-1 bg-gradient-to-b from-neon-cyan to-neon-purple"
              />
            </div>
          </div>
          <div className="ml-20 pt-2">
            <p className="text-lg text-muted-foreground">Kin-G Technologies's journey is marked by innovation, growth, and a commitment to excellence. Scroll to see our story unfold!</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent neon-text-glow">
                Kin-G Technologies
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-neon-cyan">Kin-G Technologies  Pvt. Ltd.</strong> provides comprehensive business solutions that drive growth and innovation.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We specialize in telecalling, inside sales support, CRM integration, website & app development,
              social media management, SEO, and our flagship{" "}
              <span className="text-neon-purple font-semibold">Launchpad Career Development Program</span>.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our unique approach trains job seekers with real corporate workload exposure and industry certifications,
              preparing them for success in both corporate environments and dynamic startups.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40"
                >
                  <service.icon className={`h-5 w-5 ${service.color}`} />
                  <span className="text-sm font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-neon-cyan" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                alt="Kin-G Technologies office and team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 rounded-2xl" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-purple rounded-2xl flex items-center justify-center shadow-lg neon-glow-purple"
            >
              <IconBuilding className="h-8 w-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl flex items-center justify-center shadow-lg neon-glow-cyan"
            >
              <IconBrandLinkedin className="h-6 w-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center shadow-lg"
            >
              <IconRocket className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
