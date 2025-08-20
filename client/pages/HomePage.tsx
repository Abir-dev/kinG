import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconRocket, IconUsers, IconTrendingUp, IconBuilding, IconStar, IconCheck } from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { FullScreenHero } from '../components/FullScreenHero';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { sectionVariants, staggerContainer, fadeInUp, scaleIn, slideInLeft, slideInRight } from '../components/PageTransition';
import { LogoCardsSection } from '@/components/LogoCardsSection';


const achievements = [
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Successfully completed projects across diverse industries",
    icon: IconRocket
  },
  {
    number: "1000+",
    label: "Careers Launched",
    description: "Professionals trained and placed in top companies",
    icon: IconUsers
  },
  {
    number: "50+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust our solutions",
    icon: IconBuilding
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Industry-leading placement and project success rates",
    icon: IconTrendingUp
  }
];

const highlights = [
  {
    title: "EdTech Innovation",
    description: "Revolutionary career development programs with real corporate exposure",
    features: ["Real Project Training", "Industry Certifications", "Job Placement Guarantee", "Ongoing Mentorship"]
  },
  {
    title: "B2B Excellence",
    description: "Comprehensive business solutions for growth and operational efficiency",
    features: ["Telecalling Support", "CRM Integration", "Lead Generation", "Digital Marketing"]
  },
  {
    title: "Technologies Solutions",
    description: "Cutting-edge development services for modern business needs",
    features: ["Web Development", "Mobile Apps", "E-commerce Solutions", "Custom Software"]
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart Solutions",
    content: "Kin-G Technologies transformed our sales process with their CRM integration. Our conversion rates increased by 40%.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Software Developer",
    content: "The Launchpad program gave me real project experience. I landed my dream job within 3 months of completion.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Marketing Director, GrowthCorp",
    content: "Their digital marketing strategies helped us achieve 3x growth in lead generation. Exceptional team!",
    rating: 5
  }
];

const brandPartners = [
  {
    name: "Microsoft",
    logo: "/images/brands/microsoft.svg", // You can replace with actual Microsoft logo
    category: "Technologies",
    description: "Cloud Computing & Enterprise Solutions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Google",
    logo: "/images/brands/google.svg", // You can replace with actual Google logo
    category: "Search & AI",
    description: "Digital Marketing & Analytics",
    color: "from-red-500 to-yellow-500"
  },
  {
    name: "Amazon",
    logo: "/images/brands/amazon.svg", // You can replace with actual Amazon logo
    category: "E-commerce",
    description: "Cloud Infrastructure & Logistics",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "Apple",
    logo: "/images/brands/apple.svg", // You can replace with actual Apple logo
    category: "Consumer Tech",
    description: "Mobile App Development",
    color: "from-gray-500 to-slate-500"
  },
  {
    name: "Meta",
    logo: "/images/brands/meta.svg", // You can replace with actual Meta logo
    category: "Social Media",
    description: "VR/AR & Social Platforms",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Netflix",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Netflix logo
    category: "Entertainment",
    description: "Streaming & Content Delivery",
    color: "from-red-600 to-rose-600"
  },
  {
    name: "Tesla",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Tesla logo
    category: "Automotive",
    description: "Electric Vehicles & Energy",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Spotify",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Spotify logo
    category: "Music Streaming",
    description: "Audio Technologies & Algorithms",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Salesforce",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Salesforce logo
    category: "CRM",
    description: "Customer Relationship Management",
    color: "from-blue-500 to-sky-500"
  },
  {
    name: "Adobe",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Adobe logo
    category: "Creative Software",
    description: "Design & Creative Tools",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "IBM",
    logo: "/images/brands/placeholder.svg", // You can replace with actual IBM logo
    category: "Enterprise AI",
    description: "AI & Cloud Computing",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "Oracle",
    logo: "/images/brands/placeholder.svg", // You can replace with actual Oracle logo
    category: "Database",
    description: "Enterprise Database Solutions",
    color: "from-red-600 to-orange-600"
  }
];

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <FullScreenHero />

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Growth & Innovation
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Kin-G Technologies delivers comprehensive solutions that drive business growth and accelerate career development through innovation and excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan">
                  <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                      {highlight.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {highlight.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <IconCheck className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300 p-6">
                  <achievement.icon className="h-12 w-12 mx-auto mb-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replace the Brand Partners Section with our new LogoCardsSection */}
      <LogoCardsSection />

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real experiences from clients who have achieved exceptional results with our solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar key={i} className="h-5 w-5 text-neon-cyan fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      {/* <div className="text-sm text-muted-foreground">{testimonial.role}</div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses and thousands of career professionals who have 
              accelerated their growth with Kin-G Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/services">
                  Explore Our Services
                  <IconArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/launchpad">
                  Join Launchpad Program
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
