import { FC } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { IconArrowRight, IconPoint } from "@tabler/icons-react";
import { Button } from "./ui/button";

type Highlight = {
  title: string;
  description: string;
  features: string[];
};

const highlights: Highlight[] = [
  {
    title: "Microsoft Data Analyst Training",
    description: "Preparing Data for Analysis with Microsoft Excel",
    features: ["Upon completion, you'll earn the coveted Microsoft Azure Data Analyst Certification."],
  },
  {
    title: "Google Data Analyst Training",
    description: "Google Data Analytics Capstone Project",
    features: ["This phase culminates in the Google Data Analyst Certification, validating your expertise."],
  },
  {
    title: "Meta Data Analytics Training",
    description: "Meta Data Analyst Professional Certification",
    features: ["Completion of this phase awards you the Meta Data Analyst Professional Certification"],
  },
  {
    title: "Additional Mastery Certifications",
    description: "Expand Your Skillset  with 12 Specialisations",
    features: ["These modules provide in-depth knowledge and skills, leading to further certifications."],
  },
];

const LaunchPadSection: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-2 px-3 mb-16"> {/* was mb-7 */}
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
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Program
            </span>
          </h2>
          <p className="text-lg md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your 90-Day Career Acceleration Journey Unlock Triple Certification & Real-World Experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={`${highlight.title}-${index}`} // ensure uniqueness since there are duplicate titles
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="group h-full bg-card/30 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan relative overflow-hidden text-center">
                <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className=" text-base font-bold">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {highlight.features.map((feature, idx) => (
                      <motion.li
                        key={`${highlight.title}-${feature}-${idx}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        {/* <IconPoint className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" /> */}
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
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
