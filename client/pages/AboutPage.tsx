import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  IconCalendar
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const companyStats = [
  {
    number: "2019",
    label: "Founded",
    description: "Established as part of SOH Group",
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
    description: "Kin-G Technology was established as the EdTech and B2B arm of SOH Group, focusing on innovative solutions for career development and business growth."
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

const team = [
  {
    name: "Rajesh Gupta",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in EdTech and business development. Led multiple successful ventures in the education and technology sectors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Priya Sharma",
    role: "Head of Technology",
    bio: "Expert in full-stack development and system architecture. Passionate about creating scalable solutions that drive business growth.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Amit Kumar",
    role: "Director of Operations",
    bio: "Specializes in operational excellence and process optimization. Ensures quality delivery across all service verticals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Sneha Patel",
    role: "Head of Career Development",
    bio: "Career counseling expert with a track record of successfully placing 1000+ professionals in their dream jobs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Vikram Singh",
    role: "Business Development Head",
    bio: "Drives business growth and client relationships. Expert in B2B sales and strategic partnerships.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Anita Reddy",
    role: "Digital Marketing Director",
    bio: "Digital marketing strategist with expertise in SEO, social media, and performance marketing campaigns.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
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
              Part of SOH Group
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Kin-G Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforming businesses and careers through innovative EdTech solutions and comprehensive B2B services. 
              We are the driving force behind SOH Group's commitment to growth and excellence.
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
                to bridge the gap between traditional business practices and modern technological solutions. As the EdTech and 
                B2B arm of SOH Group, we have been at the forefront of innovation since our inception.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple yet powerful mission: to empower businesses with cutting-edge technology 
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

      {/* Timeline */}
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

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-purple opacity-30"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-white font-bold">
                            {item.year.slice(-2)}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <div className="text-sm text-neon-cyan font-medium">{item.year}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full border-4 border-background relative z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
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

      {/* Team Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <IconBrandLinkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-neon-purple font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
