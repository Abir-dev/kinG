import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  IconRocket, 
  IconCheck, 
  IconStar, 
  IconCrown, 
  IconTrophy,
  IconUsers,
  IconBriefcase,
  IconCertificate,
  IconCalendar,
  IconClock,
  IconTarget,
  IconTrendingUp,
  IconAward,
  IconBook,
  IconCode,
  IconPresentation,
  IconHeadphones
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const pricingTiers = [
  {
    name: "Basic",
    price: "₹1,299",
    period: "one-time",
    description: "Perfect for getting started with career development fundamentals",
    icon: IconRocket,
    gradient: "from-neon-blue to-neon-cyan",
    duration: "1 Month",
    features: [
      "Basic career counseling session",
      "Resume building workshop",
      "Interview preparation basics",
      "LinkedIn profile optimization",
      "Job search strategies",
      "Email support",
      "Access to recorded sessions",
      "1 month community access",
      "Career assessment test",
      "Industry insights webinar"
    ],
    popular: false,
    ctaText: "Get Started"
  },
  {
    name: "Pro",
    price: "₹3,999",
    period: "one-time",
    description: "Comprehensive training with real project exposure and certification",
    icon: IconStar,
    gradient: "from-neon-purple to-neon-pink",
    duration: "3 Months",
    features: [
      "Everything in Basic plan",
      "Real corporate project training",
      "Industry-specific certification",
      "1-on-1 mentorship sessions",
      "Mock interviews with feedback",
      "Portfolio development guidance",
      "Networking opportunities",
      "Job placement assistance",
      "3 months community access",
      "Priority support",
      "Advanced skill workshops",
      "Company referral program"
    ],
    popular: true,
    ctaText: "Most Popular"
  },
  {
    name: "Ultimate",
    price: "₹25,900",
    period: "+ 30% placement fee",
    description: "Premium program with guaranteed placement support and ongoing mentorship",
    icon: IconCrown,
    gradient: "from-neon-pink to-neon-cyan",
    duration: "6 Months",
    features: [
      "Everything in Pro plan",
      "Guaranteed job placement support",
      "6 months intensive training",
      "Personal career coach",
      "Advanced skill workshops",
      "Industry project internship",
      "Direct company referrals",
      "Salary negotiation training",
      "Alumni network access",
      "Lifetime community access",
      "24/7 priority support",
      "Success fee only on placement",
      "Executive interview training",
      "International placement support"
    ],
    popular: false,
    ctaText: "Ultimate Choice"
  }
];

const programFeatures = [
  {
    icon: IconBriefcase,
    title: "Real Corporate Projects",
    description: "Work on actual projects from our partner companies to gain real-world experience"
  },
  {
    icon: IconCertificate,
    title: "Industry Certifications",
    description: "Earn recognized certifications that validate your skills to potential employers"
  },
  {
    icon: IconUsers,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals with years of experience"
  },
  {
    icon: IconTarget,
    title: "Placement Guarantee",
    description: "Our Ultimate program includes a job placement guarantee with success fee model"
  }
];

const courses = [
  {
    id: 1,
    title: "Microsoft Data Analyst Training",
    logo: "/Microsoft (1).png",
    duration:"1 Month",
    keyModules: [
      "Preparing Data for Analysis with Microsoft Excel",
      "Harnessing the Power of Data with Power BI",
      "Extract, Transform & Load (ETL) in Power BI",
      "Data Modelling & Visualisation Techniques",
      "Creative Dashboard Design Principles",
      "Capstone Project Application",
      "Microsoft PL-300 Exam Preparation"
    ]
  },
  {
    id: 2,
    title: "Google Data Analyst Training",
    logo: "/Google (1).png",
    duration:"1 Month",
    keyModules: [
      "Data Foundations & Decision Making",
      "Data Cleaning & Preparation Strategies",
      "Data Exploration & Analysis Techniques",
      "Effective Data Visualisation",
      "Data Analysis with R Programming",
      "Google Data Analytics Capstone Project",
      "Accelerate Job Search with AI Tools"
    ]
  },
  {
    id: 3,
    title: "Meta Data Analytics Training",
    logo: "/Meta (1).png",
    duration:"1 Month",
    keyModules: [
      "Data Analytics with Spreadsheets & SQL",
      "Python Data Analytics Applications",
      "Statistics Foundation for Data Science",
      "Data Management Basics",
      "Completion of this phase awards you the Meta Data Analyst Professional Certification."
    ]
  },
  {
    id: 4,
    title: "Expand Your Skillset with 12 Specialisations",
    logo: "/logo4.png",
    duration:"Live Weekly Sessions(3 Classes/Week)",
    keyModules: [
      "Power BI",
      "Tableau",
      "Excel (Advanced)",
      "MS Office (Advanced)",
      "Professional Branding & LinkedIn Optimisation",
      "Data Science Essentials",
      "SQL",
      "Python",
      "PowerPoint AI Acceleration",
      "AI Supply Chain & Management",
      "NO-Code AI Website Building"
    ]
  }
];

const curriculum = [
  {
    week: "4 Months Course",
    title: "AI Accelerating Mastery Course",
    image: "images/hero(1).png",
    description:"Your 90-Day Career Acceleration Journey Unlock Triple Certification & Real-World Experience",
    duration: "4 Months",
    originalPrice: "25,900",
    discountPercent: 1,
    offerPrice: "25,900",
  },
  {
    week: "4 Months Course",
    title: "Full Stack Development & Web Page Building",
    image: "images/course(2).png",
    description:"A comprehensive 3-month program designed to professionals into job-ready full stack developers with Microsoft-certified skills.",
    duration: "3 Months",
    originalPrice: "36,999",
    discountPercent: 1,
    offerPrice: "36,999",
  },
  {
    week: "4 Months Course",
    title: "Stock Market Algotrade with AI Tools",
    image: "images/course(3).png",
    description:"A comprehensive 4-month program design to lern Stock Market Algotrade with AI Tools",
    duration: "4 Months",
    originalPrice: "55,999",
    discountPercent: 1,
    offerPrice: "55,999",
  },
  {
    week: "4 Months Course",
    title: "Software Development & Android Apps",
    image: "images/course(4).png",
    description:"Transform your career in 6 months with comprehensive full-stack training",
    duration: "6 Months",
    originalPrice: "21,999",
    discountPercent: 1,
    offerPrice: "36,999",
  },
  {
    week: "4 Months Course",
    title: "Tech Support & Network Support",
    image: "images/course(5).png",
    description:"A comprehensive 3-month training program designed to build IT infrastructure, networking, and security professionals through hands-on labs, simulations, and live case studies.",
    duration: "3 Months(12 Weeks)",
    originalPrice: "21,999",
    discountPercent: 1,
    offerPrice: "21,999",
  },
  {
    week: "4 Months Course",
    title: "Finance & Sales Speech Readiness",
    image: "images/course(6).png",
    description:"Transform your career with practical finance knowledge and professional sales communication skills",
    duration: "4 Months(16 Weeks)",
    originalPrice: "14,999",
    discountPercent: 1,
    offerPrice: "14,999",
  },
  {
    week: "4 Months Course",
    title: "Digital Marketing Course-Kin-G Launchpad",
    image: "images/hero(5).png",
    description: "An 8-week comprehensive program equipping student and professionals with practical, job-ready skillsin SEO, Social Media, Ads and Analytics for careers in Degital Marketing ",
    duration: "8 Weekes",
    originalPrice: "11,999",
    discountPercent: 1,
    offerPrice: "11,999",
  },
];

const successStories = [
  {
    name: "Rahul Sharma",
    previousRole: "Fresher",
    currentRole: "Software Developer at TechCorp",
    salary: "₹6.5 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    testimonial: "The Launchpad program gave me real project experience that made all the difference in my interviews. I landed my dream job within 2 months of completing the program!"
  },
  {
    name: "Priya Patel",
    previousRole: "Career Break",
    currentRole: "Digital Marketing Manager at GrowthCo",
    salary: "₹8.2 LPA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    testimonial: "After a 3-year career break, I was worried about getting back into the workforce. The Launchpad program not only updated my skills but gave me the confidence to aim higher."
  },
  {
    name: "Amit Kumar",
    previousRole: "Sales Executive",
    currentRole: "Business Analyst at FinTech Solutions",
    salary: "₹7.8 LPA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    testimonial: "I wanted to switch from sales to analytics. The structured learning path and mentorship helped me make the transition successfully with a 40% salary increase."
  }
];

const stats = [
  { number: "1000+", label: "Careers Launched", icon: IconRocket },
  { number: "95%", label: "Placement Rate", icon: IconTrendingUp },
  { number: "50+", label: "Partner Companies", icon: IconBriefcase },
  { number: "4.9/5", label: "Program Rating", icon: IconStar }
];

const faqs = [
  {
    question: "What is the duration of the Launchpad program?",
    answer: "The program duration varies by plan: Basic (1 month), Pro (3 months), and Ultimate (6 months). Each plan is designed to provide comprehensive training at different levels of depth."
  },
  {
    question: "Do you guarantee job placement?",
    answer: "Our Ultimate program includes a job placement guarantee. We only charge the success fee when you successfully land a job. Our 95% placement rate speaks to our commitment to your success."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on real projects from our partner companies across various industries including Technologies, finance, healthcare, and e-commerce. These projects provide genuine work experience."
  },
  {
    question: "Can I join if I'm a complete beginner?",
    answer: "Absolutely! Our program is designed for learners at all levels. We start with basics and gradually progress to advanced concepts, ensuring everyone can keep up."
  },
  {
    question: "What support do I get after placement?",
    answer: "We provide 6 months of post-placement support including performance coaching, career guidance, and access to our alumni network for continued growth."
  }
];

export default function LaunchpadPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-[#87a7e8] rounded-full text-sm font-medium text-[#0254f4] dark:text-neon-cyan mb-6 backdrop-blur-sm mt-11">
              Career Development Program
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Launchpad Master Program
              </span>{" "}
                
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Your 90-Day Career Acceleration Journey Unlock Triple Certification & Real-World Experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link to="#pricing">
                  Choose Your Plan
                  <IconRocket className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="#success-stories">
                  View Success Stories
                </Link>
              </Button> */}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-[#1c949a]" />
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-10 px-2">
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
              Why Choose Launchpad
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our program is designed to bridge the gap between learning and real-world application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group text-center h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-[#1c949a] group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Overview */}
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
               Programme Overview
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive programme offers specialized training in data analytics with industry-leading certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center ">
                      <img
                        src={course.logo}
                        alt={`${course.title} logo`}
                        className={`h-20 w-30 object-contain ${course.id === 4 ? 'invert dark:invert-0' : ''}`}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 text-center">
                      {course.title}
                    </CardTitle>
                    <CardTitle className="text-lg font-normal mb-2 text-center">
                      {course.duration}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-[#1c949a] mb-3">Key Modules:</h4>
                      {course.id === 4 ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {course.keyModules.map((module, moduleIndex) => (
                            <motion.div
                              key={moduleIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (moduleIndex * 0.05) }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-2"
                            >
                              <IconCheck className="h-4 w-4 mt-0.5 text-neon-green flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{module}</span>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {course.keyModules.map((module, moduleIndex) => (
                            <motion.li
                              key={moduleIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (moduleIndex * 0.05) }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-2"
                            >
                              <IconCheck className="h-4 w-4 mt-0.5 text-neon-blue flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{module}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              {" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
               Program Curriculum
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured learning path designed to take you from beginner to job-ready professional
            </p>
          </motion.div>

          {/* Grid with 3 cards per row on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((phase, index) => (
              <motion.div
                key={`${phase.title}-grid`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500 overflow-hidden">
                  <CardHeader className="p-0">
                    {(phase as any).image && (
                      <div className="w-full h-50 overflow-hidden">
                        <img
                          src={(phase as any).image}
                          alt={`${phase.title} cover`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="px-6">
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      {(phase as any).description && (
                        <p className="mt-1 text-sm text-muted-foreground">{(phase as any).description}</p>
                      )}
                      <CardDescription className="text-[#1c949a] pt-2 font-medium">{(phase as any).duration || phase.week}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {(phase as any).originalPrice && (
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-muted-foreground line-through">₹{(phase as any).originalPrice}</span>
                          {(phase as any).discountPercent && (
                            <span className="text-xs text-[#0bbc1d]  font-medium">{(phase as any).discountPercent}% off</span>
                          )}
                        </div>
                      )}
                      <div>
                        <span className="text-3xl font-semibold text-primary">
                          ₹{(phase as any).offerPrice || (phase as any).price || (phase as any).prices?.[0]}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section  */}
      {/* <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Path
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the plan that best fits your career goals and learning preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${tier.popular ? 'lg:scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow-purple">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`group relative overflow-hidden h-full bg-card/50 backdrop-blur-sm transition-all duration-500 ${
                  tier.popular 
                    ? 'border-neon-purple/50 dark:neon-glow-purple' 
                    : 'border-border/40 hover:border-neon-cyan/50 dark:hover:neon-glow-cyan'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10 text-center pb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <tier.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                    <CardDescription className="text-sm mb-4">{tier.description}</CardDescription>
                    
                    <div className="space-y-1">
                      <div className="text-4xl font-bold text-primary">{tier.price}</div>
                      <div className="text-sm text-muted-foreground">{tier.period}</div>
                      <div className="text-sm text-neon-cyan font-medium">{tier.duration}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-6">
                    <div className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.02) }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <IconCheck className={`h-5 w-5 mt-0.5 text-neon-green flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 neon-glow-purple' 
                          : 'bg-gradient-to-r from-neon-cyan to-neon-blue hover:opacity-90 hover:neon-glow-cyan'
                      }`}
                    >
                      <Link to="/contact">
                        {tier.ctaText}
                      </Link>
                    </Button>
                  </CardContent>
                  
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${tier.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/40">
              <IconTrophy className="h-12 w-12 mx-auto mb-4 text-neon-cyan" />
              <h3 className="text-2xl font-bold mb-4">Success Guarantee</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our Ultimate plan comes with a placement guarantee. You only pay the success fee when you land your dream job. 
                We're committed to your success because your success is our success.
              </p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Success Stories */}
      {/* <section id="success-stories" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real transformations from our Launchpad program graduates
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm opacity-90">{story.salary}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground mb-1">From: {story.previousRole}</div>
                      <div className="text-sm font-medium text-neon-cyan">To: {story.currentRole}</div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{story.testimonial}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
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
               Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our Launchpad program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className=" no-global-button bg-white border border-[#1c949a]/40 rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(28,148,154,0.35)]"
                  >
                    <AccordionTrigger className=" no-global-button px-6 py-4 text-left hover:no-underline text-[#1c949a] bg-white">
                      <span className="text-lg font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
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
                Launch
              </span>{" "}
              Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who have transformed their careers through our Launchpad program. 
              Your journey to career success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="border-2 hover:bg-neon-blue/10 transition-all px-8 py-4 text-lg font-semibold"
              >
                <Link to="/register">
                  Enroll Now
                  <IconRocket className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  Schedule Consultation
                  <IconCalendar className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
