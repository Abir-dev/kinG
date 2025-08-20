import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  IconBuilding,
  IconUsers,
  IconTrendingUp,
  IconRocket,
  IconBrandLinkedin,
  IconMail,
  IconTarget,
  IconHeart,
  IconBulb,
  IconShield,
  IconAward,
  IconCalendar,
  IconExternalLink
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const companyStats = [
  {
    number: "2019",
    label: "Founded",
    description: "Established in 2019",
    icon: IconCalendar
  },
  {
    number: "500+",
    label: "Projects Delivered",
    description: "Across diverse industries and sectors",
    icon: IconRocket
  },
  {
    number: "1000+",
    label: "Careers Launched",
    description: "Through our Launchpad program",
    icon: IconUsers
  },
  {
    number: "50+",
    label: "Team Members",
    description: "Expert professionals across domains",
    icon: IconBuilding
  }
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    description: "Kin-G Technology was established in 2019, focusing on innovative solutions for career development and business growth."
  },
  {
    year: "2020",
    title: "First 100 Placements",
    description: "Successfully placed our first 100 candidates through the Launchpad Career Development Program, achieving a 95% success rate."
  },
  {
    year: "2021",
    title: "B2B Expansion",
    description: "Expanded our services to include comprehensive B2B solutions including telecalling, CRM integration, and digital marketing services."
  },
  {
    year: "2022",
    title: "Technology Innovation",
    description: "Launched our development division, providing cutting-edge website and mobile app development services to clients."
  },
  {
    year: "2023",
    title: "Market Leadership",
    description: "Achieved recognition as a leading EdTech and B2B service provider with 500+ successful projects and partnerships with major corporations."
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded operations internationally while maintaining our commitment to quality and innovation in all service offerings."
  }
];

const teamMembers = [
  {
    name: "Soumodip Dey",
    designation: "Founder/CEO",
    description: "Visionary leader driving Kin-G Technology's growth and innovation with strategic expertise.",
    image: "/images/Soumodip.jpeg",
    linkedin: "https://linkedin.com/in/soumodip-dey"
  },
  {
    name: "Ayushmita Das",
    designation: "Co-Founder/B2C Head",
    description: "Strategic thinker and B2B expert, leading partnerships and business expansion.",
    image: "/images/Ayushmita.jpeg",
    linkedin: "https://linkedin.com/in/ayushmita-das"
  },
  {
    name: "Himadri Barua",
    designation: "Assistant Business President (Sales)",
    description: "Driving sales excellence and business growth with a client-first approach.",
    image: "/images/Himadri.jpeg",
    linkedin: "https://linkedin.com/in/himadri-barua"
  },
  {
    name: "Abir Lal Banerjee",
    designation: "Full stack Developer / Technical Project Lead",
    description: "Full stack developer and technical lead, architecting scalable solutions.",
    image: "/images/Abir.png",
    linkedin: "https://linkedin.com/in/abir-lal-banerjee"
  },
  {
    name: "Sourav",
    designation: "CTO (Chief Technology Officer)",
    description: "Technology visionary, leading innovation and product development.",
    image: "/images/Sourav.jpeg",
    linkedin: "https://linkedin.com/in/sourav-cto"
  },
  {
    name: "Payel",
    designation: "Admin - Operation",
    description: "Administrator and operation manager, ensuring smooth operations and efficiency.",
    image: "/images/Sayoni.jpeg",
    linkedin: "https://linkedin.com/in/payel-b2b"
  },
  {
    name: "Tanwishtha",
    designation: "UX/UI Designer",
    description: "Creative force behind user experiences and interface design.",
    image: "/images/Tanwistha.jpeg",
    linkedin: "https://linkedin.com/in/tanwishtha-uiux"
  },
  {
    name: "Uditi",
    designation: "Brand & Communications Head",
    description: "Brand strategist and communications expert, shaping Kin-G's public image.",
    image: "/images/Uditi.jpeg",
    linkedin: "https://linkedin.com/in/uditi-brand"
  },
  {
    name: "Avishikta",
    designation: "SEO - Marketing",
    description: "Marketing leader and SEO specialist, driving digital growth.",
    image: "/images/Avishikta.jpeg",
    linkedin: "https://linkedin.com/in/avishikta-cmo"
  },
  {
    name: "Deboshmita",
    designation: "General Manager (Sales)",
    description: "Sales manager ensuring operational excellence and client satisfaction.",
    image: "/images/Deboshmita.jpeg",
    linkedin: "https://linkedin.com/in/deboshmita-sales"
  },
  {
    name: "Indrajit Das",
    designation: "Course Trainer (Product Management Head)",
    description: "Product management expert and course trainer, empowering future leaders.",
    image: "/images/Indrajit.jpeg",
    linkedin: "https://linkedin.com/in/indrajit-das"
  }
];

const values = [
  {
    icon: IconBulb,
    title: "Innovation",
    description: "We constantly innovate to provide cutting-edge solutions that stay ahead of industry trends."
  },
  {
    icon: IconHeart,
    title: "Client Success",
    description: "Our clients' success is our success. We're committed to delivering exceptional results every time."
  },
  {
    icon: IconShield,
    title: "Integrity",
    description: "We maintain the highest standards of ethics and transparency in all our business dealings."
  },
  {
    icon: IconTarget,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring quality and precision in our deliverables."
  }
];

const achievements = [
  "Recognized as 'Best EdTech Innovation' by Industry Awards 2023",
  "Achieved ISO 9001:2015 certification for quality management",
  "Partner with 50+ Fortune 500 companies",
  "95% client retention rate over the past 3 years",
  "Winner of 'Excellence in Career Development' award 2024",
  "Featured in top business magazines for innovative B2B solutions"
];

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const timelineDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize GSAP animations
  useGSAPAnimations();

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the main timeline line
      gsap.fromTo(timelineLineRef.current, 
        { 
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Animate cards and dots
      timelineCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isLeft = index % 2 === 0;
        const dot = timelineDotsRef.current[index];

        // Card animations - slide from left or right
        gsap.fromTo(card,
          {
            opacity: 0,
            x: isLeft ? -150 : 150,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Dot glow animation with delay
        if (dot) {
          gsap.fromTo(dot,
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Add pulsing glow effect
          gsap.to(dot, {
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4)",
            scale: 1.2,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play pause resume pause"
            }
          });
        }
      });

      // Progressive line drawing effect
      const progressLine = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });

      progressLine.to(timelineLineRef.current, {
        background: "linear-gradient(to bottom, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
        duration: 1
      });

    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 text-sm font-medium text-neon-cyan mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Kin-G Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforming businesses and careers through innovative EdTech solutions and comprehensive B2B services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="group text-center bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300 dark:hover:neon-glow-cyan">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-neon-cyan">Kin-G Technology  Pvt. Ltd.</strong> was born from a vision 
                to bridge the gap between traditional business practices and modern technological solutions. We have been at the forefront of innovation since our inception.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                solutions while simultaneously preparing the next generation of professionals for the evolving job market.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we stand as a testament to what's possible when innovation meets dedication. With over 500 successful 
                projects and 1000+ careers launched, we continue to set new standards in the EdTech and B2B services industry.
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Join Our Journey
                  <IconRocket className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Kin-G Technology team collaboration"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Enhanced with GSAP */}
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
                Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown and evolved
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Enhanced Timeline Line */}
            <div 
              ref={timelineLineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-40 rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)'
              }}
            ></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div 
                    ref={el => timelineCardsRef.current[index] = el}
                    className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}
                  >
                    <Card className="group bg-card/60 backdrop-blur-md border-border/50 hover:border-neon-cyan/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-neon-cyan/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {item.year.slice(-2)}
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-neon-cyan transition-colors duration-300">
                              {item.title}
                            </CardTitle>
                            <div className="text-sm text-neon-cyan font-medium bg-neon-cyan/10 px-2 py-1 rounded-full inline-block mt-1">
                              {item.year}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Enhanced Timeline Dots */}
                  <div 
                    ref={el => timelineDotsRef.current[index] = el}
                    className="hidden lg:block w-8 h-8 bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink rounded-full border-4 border-background relative z-10 shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)'
                    }}
                  >
                    {/* Inner glow dot */}
                    <div className="absolute inset-1 bg-white rounded-full opacity-80"></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>

            {/* Floating particles for extra visual appeal */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-cyan/30 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 15}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group text-center h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - New Grid Layout */}
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
              Meet Our{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate professionals driving innovation and excellence at Kin-G Technology
            </p>
          </motion.div>

          {/* CEO Section - Featured at Top */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.05 }}
                className="group max-w-md"
              >
                <Card className="h-full bg-gradient-to-br from-card/70 via-card/50 to-card/30 backdrop-blur-md border-2 border-neon-cyan/50 hover:border-neon-cyan transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/20 overflow-hidden">
                  <div className="relative">
                    {/* CEO Profile Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={teamMembers[0].image}
                        alt={teamMembers[0].name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Enhanced Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* CEO Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-neon-cyan to-neon-purple px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                        FOUNDER & CEO
                      </div>
                    </div>
                    
                    {/* LinkedIn Link - Enhanced */}
                    <motion.a
                      href={teamMembers[0].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-12 h-12 bg-neon-cyan/30 backdrop-blur-md rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconBrandLinkedin className="h-6 w-6" />
                    </motion.a>
                  </div>
                  
                  <CardContent className="p-8 text-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                        {teamMembers[0].name}
                      </h3>
                      <div className="text-base font-medium text-neon-purple mb-4 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 px-4 py-2 rounded-full inline-block border border-neon-purple/30">
                        {teamMembers[0].designation}
                      </div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {teamMembers[0].description}
                      </p>
                    </div>
                    
                    {/* Enhanced Connect Button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-neon-cyan/50"
                      >
                        <a 
                          href={teamMembers[0].linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Connect with CEO
                          <IconExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Rest of Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-cyan/10 overflow-hidden">
                  <div className="relative">
                    {/* Profile Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* LinkedIn Link - Floating */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 bg-neon-cyan/20 backdrop-blur-md rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconBrandLinkedin className="h-5 w-5" />
                    </motion.a>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="text-sm font-medium text-neon-purple mb-3 bg-neon-purple/10 px-3 py-1 rounded-full inline-block">
                        {member.designation}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {member.description}
                      </p>
                    </div>
                    
                    {/* Connect Button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
                      >
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Connect
                          <IconExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-3xl font-bold text-neon-cyan mb-2 group-hover:scale-110 transition-transform">11+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-neon-purple mb-2 group-hover:scale-110 transition-transform">8+</div>
                <div className="text-muted-foreground">Departments</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-neon-pink mb-2 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
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
              Recognition &{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <IconAward className="h-6 w-6 text-neon-cyan flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground">{achievement}</span>
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
              Join the{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Kin-G Family
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to accelerate your business growth or launch your career, 
              we're here to support your journey to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/services">
                  Explore Our Services
                  <IconRocket className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  Get In Touch
                  <IconMail className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}