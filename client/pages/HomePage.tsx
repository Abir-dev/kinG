import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconRocket, IconUsers, IconTrendingUp, IconBuilding, IconStar, IconCheck, IconPoint, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { FullScreenHero } from '../components/FullScreenHero';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { sectionVariants, staggerContainer, fadeInUp, scaleIn, slideInLeft, slideInRight } from '../components/PageTransition';
import { LogoCardsSection } from '@/components/LogoCardsSection';
import LaunchPadSection from '@/components/LaunchPadSection';



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

type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bhasker Ghosh",
    role: "CEO",
    content: "I had a great experience while attending consultation...Thank you 🙂",
    rating: 5,
    avatar:"testimonial(1).png"
  },
  {
    name: "Kankana Samadder",
    role: "Software Developer",
    content: "Must go for it!!! And see it by yourself 🥰 ",
    rating: 4,
    avatar:"testimonial(2).png"
  },
  {
    name: "Monishankar Banerjee",
    role: "Marketing Director",
    content: "Good company for B2B sales, IT support, and digital design solutions. They partner with local and global organizations to help individuals in practical ways to help with skill development.",
    rating: 5,
    avatar:"testimonial(3).png"
  },
  {
    name: "Avishikta Chatterjee",
    role: "Software Developer",
    content: "Amazing experience 🩷 ",
    rating: 5,
    avatar:"testimonial(4).jpeg"
  },
  {
    name: "Swapnamoy Ghosh",
    role: "Local Guide",
    content: "Very nice courses at best price .. value for money .. trust worthy.. ",
    rating: 4,
    avatar:"testimonial(5).png"
  },
  {
    name: "Aman Kumar Singh",
    role: "Software Developer",
    content: "Best professional services with latest technology..!!",
    rating: 5,
    avatar:"testimonial(6).webp"
  },
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
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialsRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      const currentScroll = testimonialsRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      testimonialsRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <FullScreenHero />
      

      {/* Company Overview */}
      <section className="py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {/* {" "} */}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Empowering Growth & Innovation
              </span>
            </h2>
            <p className="text-lg md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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
                <Card className="group relative h-full backdrop-blur-[14px] backdrop-saturate-[160%] border border-transparent rounded-2xl transition-all duration-500 shadow-none hover:border-[#0254f4] hover:shadow-[inset_0_0_18px_rgba(2,84,244,0.15),0_8px_20px_rgba(2,84,244,0.10)] hover:bg-[rgba(2,84,244,0.06)]">
                  <div className="absolute inset-0 bg-[rgba(2,84,244,0.06)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold mb-2  transition-colors">
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
                          <IconPoint className="h-4 w-4 text-[#0254f4] mr-2 flex-shrink-0"/>
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

      <LogoCardsSection />

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
              {" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Our Achievements
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and student success
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
                  <achievement.icon className="h-12 w-12 mx-auto mb-4 text-[#20b7bf] group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-[#0254f4] mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replace the Brand Partners Section with our new LogoCardsSection */}
      

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
              {" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Student Success Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real experiences from students who have achieved exceptional results with our solutions
            </p>
          </motion.div>

          {/* Scrollable Testimonials Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <motion.button
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 z-10 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 no-global-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconChevronLeft className="h-6 w-6 text-[#1c949a]" />
            </motion.button>

            <motion.button
              onClick={() => scrollTestimonials('right')}
              className="absolute right-4 top-1/2 z-10 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 no-global-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconChevronRight className="h-6 w-6 text-[#1c949a]" />
            </motion.button>

            {/* Scrollable Testimonials */}
            <div 
              ref={testimonialsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-16 pr-16"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex-shrink-0 w-72 sm:w-80 lg:w-96"
                >
                  <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <IconStar key={i} className="h-5 w-5 text-[#0254f4] fill-current" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="h-10 w-10 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                          {/** Render image only if provided; keeps layout stable on mobile/desktop */}
                          {testimonial.avatar ? (
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                            />
                          ) : null}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm sm:text-base truncate">{testimonial.name}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              {" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Ready to Transform Your Future?
              </span>{" "}
              
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses and thousands of career professionals who have 
              accelerated their growth with Kin-G Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-2 hover:bg-neon-blue/10 transition-all px-8 py-4 text-lg font-semibold "
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
                className="border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-8 py-4 text-lg font-semibold"
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
