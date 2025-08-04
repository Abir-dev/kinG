import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconRocket, IconUsers, IconTrendingUp, IconBuilding, IconStar, IconCheck } from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { FullScreenHero } from '../components/FullScreenHero';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { sectionVariants, staggerContainer, fadeInUp, scaleIn, slideInLeft, slideInRight } from '../components/PageTransition';

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
    title: "Technology Solutions",
    description: "Cutting-edge development services for modern business needs",
    features: ["Web Development", "Mobile Apps", "E-commerce Solutions", "Custom Software"]
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart Solutions",
    content: "Kin-G Technology transformed our sales process with their CRM integration. Our conversion rates increased by 40%.",
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
    category: "Technology",
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
    description: "Audio Technology & Algorithms",
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
              Kin-G Technology delivers comprehensive solutions that drive business growth and accelerate career development through innovation and excellence.
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

      {/* Brand Partners Section - Premium Moving Cards */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 futuristic-grid opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 rounded-full text-sm font-medium text-neon-cyan mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              Trusted Global Partnerships
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse delay-500"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Industry{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Giants
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-muted-foreground font-normal">Choose Us</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Collaborating with Fortune 500 companies and innovative startups to deliver cutting-edge solutions that transform businesses
            </p>
          </motion.div>

          {/* Enhanced Moving Cards Container */}
          <div className="relative mb-20">
            {/* Improved Gradient Overlays */}
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-30 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-30 pointer-events-none"></div>
            
            {/* Moving Cards Track */}
            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-8"
                animate={!isHovered ? {
                  x: [0, -100 * (brandPartners.length / 3)]
                } : {}}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                style={{ width: `${brandPartners.length * 400}px` }}
              >
                {/* Triple the brands for ultra-smooth loop */}
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 flex-shrink-0">
                    {brandPartners.map((brand, index) => (
                      <motion.div
                        key={`${setIndex}-${index}`}
                        className="group relative flex-shrink-0 w-96 h-40 cursor-pointer"
                        whileHover={{ scale: 1.08, y: -12 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {/* Premium Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-border/50 rounded-2xl group-hover:border-neon-cyan/70 transition-all duration-700 group-hover:shadow-2xl">
                          {/* Dynamic Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-700`}></div>
                          
                          {/* Enhanced Grid Pattern */}
                          <div className="absolute inset-0 futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl"></div>
                          
                          {/* Premium Shimmer Effect */}
                          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl"></div>
                          
                          {/* Animated Border */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-border opacity-50"></div>
                          </div>
                        </div>

                        {/* Premium Card Content */}
                        <div className="relative z-10 p-8 h-full flex items-center justify-between">
                          {/* Enhanced Logo Section */}
                          <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 flex items-center justify-center bg-background/80 rounded-xl border border-border/40 group-hover:border-neon-cyan/50 group-hover:bg-background/95 transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
                              <img
                                src={brand.logo || "/images/brands/placeholder.svg"}
                                alt={`${brand.name} logo`}
                                className="max-w-16 max-h-10 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                                onError={(e) => {
                                  e.currentTarget.src = "/images/brands/placeholder.svg";
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <h3 className="font-bold text-2xl text-foreground group-hover:text-neon-cyan transition-colors duration-500 group-hover:drop-shadow-lg">
                                {brand.name}
                              </h3>
                              <p className="text-base text-neon-cyan/80 font-semibold group-hover:text-neon-cyan transition-colors duration-500">
                                {brand.category}
                              </p>
                            </div>
                          </div>

                          {/* Enhanced Description */}
                          <div className="text-right max-w-40">
                            <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500 leading-relaxed font-medium">
                              {brand.description}
                            </p>
                            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="w-8 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple ml-auto rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Premium Hover Effects */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className="absolute inset-0 rounded-2xl neon-glow-cyan opacity-30"></div>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5"></div>
                        </div>

                        {/* Enhanced Floating Particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                          <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-ping"></div>
                          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-neon-purple rounded-full animate-ping delay-300"></div>
                          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-pink rounded-full animate-ping delay-700"></div>
                          <div className="absolute top-8 left-8 w-1 h-1 bg-neon-cyan rounded-full animate-ping delay-1000"></div>
                          <div className="absolute bottom-8 right-8 w-1 h-1 bg-neon-purple rounded-full animate-ping delay-1300"></div>
                        </div>

                        {/* Hover Instruction */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="text-xs text-neon-cyan/70 font-medium bg-background/80 px-3 py-1 rounded-full border border-neon-cyan/20 backdrop-blur-sm">
                            Hover to pause
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Partnership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "50+", label: "Global Partners", color: "text-neon-cyan" },
              { number: "98%", label: "Success Rate", color: "text-neon-purple" },
              { number: "24/7", label: "Support", color: "text-neon-pink" },
              { number: "100M+", label: "Users Served", color: "text-neon-cyan" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 group-hover:border-neon-cyan/50 transition-all duration-300">
                  <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:drop-shadow-lg transition-all duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
              accelerated their growth with Kin-G Technology.
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
