import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

/**
 * Seamless infinite carousel approach:
 * - The track contains two consecutive copies of the logos array.
 * - A rAF loop advances scrollLeft by speed each frame.
 * - When scrollLeft >= halfWidth, subtract halfWidth to wrap with no visual jump.
 * - Arrows change speed direction briefly without breaking the seamless loop.
 */
export const LogoCardsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const baseSpeed = 0.7;              // px per frame; default auto-scroll speed when not hovered
  const speedRef = useRef<number>(baseSpeed);
  const boostTimeout = useRef<number | null>(null);

  const logoCards = useMemo(
    () => [
      { id: 1, imagePath: "/logocards/LC1.png" },
      { id: 2, imagePath: "/logocards/LC13.png" },
      { id: 3, imagePath: "/logocards/LC3.png" },
      { id: 4, imagePath: "/logocards/LC12.png" },
      { id: 5, imagePath: "/logocards/LC5.png" },
      { id: 6, imagePath: "/logocards/LC6.png" },
      { id: 7, imagePath: "/logocards/LC11.png" },
      { id: 8, imagePath: "/logocards/LC8.png" },
      { id: 9, imagePath: "/logocards/LC9.png" },
      { id: 10, imagePath: "/logocards/LC10.png" },
    ],
    []
  );

  // Start the seamless scroll loop
  useEffect(() => {
    const el = containerRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    let running = true;

    // Ensure starting position is within the first half
    el.scrollLeft = 1;

    const tick = () => {
      if (!running || !el || !track) return;

      el.scrollLeft += speedRef.current;

      // Because track contains duplicated content, halfWidth equals width of one set
      const halfWidth = track.scrollWidth / 2;

      // Wrap forward
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
      // Wrap backward
      if (el.scrollLeft < 0) {
        el.scrollLeft += halfWidth;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    // Pause on tab switch to save CPU
    const onVisibility = () => {
      if (document.hidden) {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      } else {
        frameRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
      if (boostTimeout.current) window.clearTimeout(boostTimeout.current);
    };
  }, []);

  // Hover to slightly slow down; leave to restore
  const handleMouseEnter = () => {
    speedRef.current = baseSpeed * 0.5;
  };
  const handleMouseLeave = () => {
    speedRef.current = baseSpeed;
  };

  // Arrow controls: momentary boost in desired direction
  const nudge = (dir: "left" | "right") => {
    // Clear previous boost
    if (boostTimeout.current) window.clearTimeout(boostTimeout.current);
    const magnitude = baseSpeed * 6; // temporary speed multiplier
    speedRef.current = dir === "left" ? -magnitude : magnitude;
    boostTimeout.current = window.setTimeout(() => {
      speedRef.current = baseSpeed;
      boostTimeout.current = null;
    }, 900);
  };

  return (
    <section className="py-7 px-4 mb-6 relative overflow-hidden">
      {/* Soft background accents (optional) */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/6 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 futuristic-grid opacity-5"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-[#87a7e8] rounded-full text-sm font-medium text-[#0254f4] dark:text-neon-cyan mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#0254f4] dark:bg-neon-cyan rounded-full"></div>
            Trusted Global Partnerships
            <div className="w-2 h-2 bg-[#20b7bf] dark:bg-neon-pink rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {/* {" "} */}
            <span className="bg-clip-text text-transparent dark:from-neon-cyan dark:via-neon-purple dark:to-neon-pink">
             Industry Giants
            </span>
            <br />
            <span className="text-4xl md:text-4xl text-muted-foreground font-normal">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Collaborating with Fortune 500 companies and innovative startups to deliver cutting-edge solutions that transform businesses
          </p>
        </motion.div>

        {/* Carousel with seamless infinite scroll */}
        <div className="relative group">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-16 z-10 bg-gradient-to-l from-background to-transparent" />

          {/* Navigation arrows (speed nudges) */}
          <motion.button
            onClick={() => nudge("left")}
            className="absolute left-1 top-1/2 z-30 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 no-global-button opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll logos left"
          >
            <IconChevronLeft className="h-6 w-6 text-[#1c949a]" />
          </motion.button>

          <motion.button
            onClick={() => nudge("right")}
            className="absolute right-1 top-1/2 z-30 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group no-global-button opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll logos right"
          >
            <IconChevronRight className="h-6 w-6 text-[#1c949a]" />
          </motion.button>

          {/* Scroll container */}
          <div
            ref={containerRef}
            className="overflow-hidden px-12 md:px-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Track: duplicate content once for seamless wrap */}
            <div ref={trackRef} className="flex gap-10 py-2 w-max">
              {[...logoCards, ...logoCards].map((card, idx) => (
                <div key={`${card.id}-${idx}`} className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 group">
                  <div className="w-full h-full bg-card/50 backdrop-blur-sm  rounded-xl p-4 flex items-center justify-center transition-all duration-300
                  ">
                    <img
                      src={card.imagePath}
                      alt={`Logo ${card.id}`}
                      className="max-w-full max-h-full object-contain filter-none transition-all duration-300"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8"
        >
          {[
            { number: "20+", label: "Global Partners", color: "text-[#4729ef]" },
            { number: "98%", label: "Success Rate", color: "text-[#FF08B9]" },
            { number: "24/7", label: "Support", color: "text-[#853cdf]" },
            { number: "10K+", label: "Users Served", color: "text-[#4729ef]" },
          ].map((stat) => (
            <motion.div key={stat.label} className="text-center group" whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className={stat.color}>{stat.number}</span>
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
