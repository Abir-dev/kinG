import { FC, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { IconArrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "./ui/button";

type Highlight = {
  title: string;
  description: string;
  features: string[];
  logoSrcDark: string;
  logoSrcLight: string;
  logoAlt: string;
};

const highlights: Highlight[] = [
  {
    title: "Microsoft Data Analyst Training",
    description: "Preparing Data for Analysis with Microsoft Excel",
    features: ["Upon completion, you'll earn the coveted Microsoft Azure Data Analyst Certification."],
    logoSrcDark: "/Microsoft.png",
    logoSrcLight: "/Microsoft-light.png",
    logoAlt: "Microsoft",
  },
  {
    title: "Google Data Analyst Training",
    description: "Google Data Analytics Capstone Project",
    features: ["This phase culminates in the Google Data Analyst Certification, validating your expertise."],
    logoSrcDark: "/Google.png",
    logoSrcLight: "/Google-light.png",
    logoAlt: "Google",
  },
  {
    title: "Meta Data Analytics Training",
    description: "Meta Data Analyst Professional Certification",
    features: ["Completion of this phase awards you the Meta Data Analyst Professional Certification"],
    logoSrcDark: "/Meta.png",
    logoSrcLight: "/Meta-light.png",
    logoAlt: "Meta",
  },
  {
    title: "Additional Mastery Certifications",
    description: "Expand Your Skillset  with 12 Specialisations",
    features: ["These modules provide in-depth knowledge and skills, leading to further certifications."],
    logoSrcDark: "/logo4.png",
    logoSrcLight: "/logo4-light.png",
    logoAlt: "Mastery",
  },
];

const AUTOPLAY_MS = 5000;

const LaunchPadSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);
  const total = highlights.length;
  const timerRef = useRef<number | null>(null);

  const goTo = (index: number, dir: 1 | -1) => {
    setDirection(dir);
    setActiveIndex(((index % total) + total) % total);
  };
  const next = () => goTo(activeIndex + 1, 1);
  const prev = () => goTo(activeIndex - 1, -1);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = window.setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, isHovered]);

  const variants = useMemo(
    () => ({
      enter: (dir: 1 | -1) => ({
        x: dir > 0 ? 64 : -64,
        position: "absolute" as const,
      }),
      center: {
        x: 0,
        position: "relative" as const,
      },
      exit: (dir: 1 | -1) => ({
        x: dir > 0 ? -64 : 64,
        position: "absolute" as const,
      }),
    }),
    []
  );

  const highlight = highlights[activeIndex];

  return (
    <section className="py-11 px-3 mb-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Launchpad{" "}
            <span className="bg-gradient-to-r from-[#5a43dd] via-[#853cdf] to-[#FF08B9] bg-clip-text text-transparent dark:from-neon-cyan dark:via-neon-purple dark:to-neon-pink">
              Program
            </span>
          </h2>
          <p className="text-lg md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your 90-Day Career Acceleration Journey Unlock Triple Certification & Real-World Experience
          </p>
        </motion.div>

        <div
          className="mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden">
            {/* 🔹 Added fixed min-height for mobile to prevent shrinking */}
            <div className="relative min-h-[360px] sm:min-h-[400px] md:min-h-[240px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`slide-${activeIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full"
                >
                  <Card className="group bg-card/30 backdrop-blur-sm border-border/30 relative overflow-hidden h-full">
                    <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <CardContent className="relative z-10 p-6 md:p-8 h-full flex">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-5 w-full items-center 
                        text-center md:text-left justify-items-center md:justify-items-center">
                        
                        {/* Logo */}
                        <div className="md:col-span-2 flex justify-center">
                          <img
                            src={highlight.logoSrcLight}
                            alt={highlight.logoAlt}
                            className="h-24 w-auto md:h-28 object-contain drop-shadow dark:hidden"
                            loading="lazy"
                            draggable={false}
                          />
                          <img
                            src={highlight.logoSrcDark}
                            alt={highlight.logoAlt}
                            className="h-24 w-auto md:h-28 object-contain drop-shadow hidden dark:block"
                            loading="lazy"
                            draggable={false}
                          />
                        </div>

                        {/* Texts */}
                        <div className="md:col-span-3 flex flex-col items-center md:items-start justify-center">
                          <CardHeader className="p-0">
                            <CardTitle className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#4729ef] dark:group-hover:text-neon-cyan">
                              {highlight.title}
                            </CardTitle>
                            <CardDescription className="text-base md:text-lg font-semibold">
                              {highlight.description}
                            </CardDescription>
                          </CardHeader>
                          <ul className="mt-4 space-y-2">
                            {highlight.features.map((feature, idx) => (
                              <li
                                key={`${highlight.title}-${feature}-${idx}`}
                                className="flex items-start text-sm md:text-base text-muted-foreground justify-center md:justify-start"
                              >
                                <span className="mt-1 mr-2 inline-block h-2 w-2 rounded-full bg-[#4729ef] dark:bg-neon-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-border/40 bg-background/70 backdrop-blur p-2 hover:bg-background/90"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-border/40 bg-background/70 backdrop-blur p-2 hover:bg-background/90"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            {highlights.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx, idx > activeIndex ? 1 : -1)}
                className={`h-2.5 rounded-full ${idx === activeIndex ? "w-6 bg-[#4729ef] dark:bg-neon-cyan" : "w-2.5 bg-muted"}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#4729ef] bg-neon-blue/5 hover:bg-neon-blue/25 text-black hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl dark:border-2 dark:border-neon-purple/50 dark:bg-neon-purple/5 dark:hover:bg-neon-purple/30 dark:text-foreground"
          >
            <Link to="/launchpad">
              Explore Launchpad Program
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LaunchPadSection;

