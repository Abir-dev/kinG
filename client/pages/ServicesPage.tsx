import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  IconPhone, 
  IconTargetArrow, 
  IconDatabase, 
  IconCode, 
  IconBrandInstagram,
  IconTrendingUp,
  IconRocket,
  IconArrowRight,
  IconCheck,
  IconUsers,
  IconClock,
  IconShield
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const services = [
  {
    id: 'telecalling',
    title: "Telecalling & Inside Sales Support",
    description: "Professional outbound calling services with trained agents to boost your sales conversion rates and customer engagement.",
    icon: IconPhone,
    gradient: "from-neon-blue to-neon-cyan",
    detailedDescription: "Our telecalling services leverage advanced AI-powered dialing systems and professionally trained sales agents to maximize your sales potential. We provide comprehensive inside sales support with real-time analytics, automated lead scoring, and intelligent call routing to ensure optimal conversion rates.",
    features: [
      "AI-Powered Predictive Dialing",
      "Professional Sales Agents (Certified)",
      "Real-time Call Analytics & Reporting",
      "Advanced Lead Qualification & Scoring",
      "Automated Follow-up Management",
      "Multi-CRM Integration (Salesforce, HubSpot, Zoho)",
      "Performance Tracking & KPI Dashboards",
      "Call Recording & Quality Assurance",
      "A/B Testing for Scripts",
      "Omnichannel Communication (Voice, SMS, Email)",
      "Lead Nurturing Campaigns",
      "Conversion Rate Optimization"
    ],
    benefits: [
      "Increased conversion rates by up to 40%",
      "Reduced customer acquisition costs by 35%",
      "24/7 customer support coverage",
      "Scalable team based on demand",
      "99.9% uptime guarantee",
      "GDPR & Data Security Compliant",
      "Multi-language support available",
      "Custom reporting and insights"
    ],
    packages: [
      {
        name: "Basic",
        price: "₹15,000/month",
        calls: "500 calls",
        agents: "2 dedicated agents",
        hours: "8 hours/day"
      },
      {
        name: "Professional",
        price: "₹28,000/month",
        calls: "1000 calls",
        agents: "4 dedicated agents",
        hours: "12 hours/day"
      },
      {
        name: "Enterprise",
        price: "₹45,000/month",
        calls: "2000 calls",
        agents: "8 dedicated agents",
        hours: "24 hours/day"
      }
    ]
  },
  {
    id: 'lead-generation',
    title: "Lead Generation",
    description: "Strategic lead generation campaigns to identify and capture high-quality prospects for your business.",
    icon: IconTargetArrow,
    gradient: "from-neon-purple to-neon-pink",
    detailedDescription: "Our lead generation services utilize AI-powered prospecting tools, advanced targeting algorithms, and multi-channel automation to identify and engage high-quality prospects. We combine data science with human expertise to deliver leads that convert at industry-leading rates.",
    features: [
      "AI-Powered B2B Lead Mining & Enrichment",
      "Advanced Prospect Research & Verification",
      "Automated Email Campaign Sequences",
      "LinkedIn Sales Navigator Integration",
      "Content Marketing & Lead Magnets",
      "Social Media Lead Generation",
      "Intent Data & Behavioral Tracking",
      "Lead Scoring & Qualification Matrix",
      "Multi-touch Attribution Modeling",
      "Competitor Analysis & Market Intelligence",
      "Custom Landing Page Creation",
      "Marketing Automation Integration"
    ],
    benefits: [
      "300% increase in qualified leads",
      "Reduced cost per lead by 50%",
      "Higher quality prospect database",
      "Improved sales pipeline velocity",
      "Real-time lead validation & verification",
      "GDPR compliant data collection",
      "Advanced analytics & ROI tracking",
      "Custom audience segmentation"
    ],
    packages: [
      {
        name: "Starter",
        price: "₹12,000/month",
        leads: "100 qualified leads",
        channels: "2 channels",
        reports: "Weekly reports"
      },
      {
        name: "Growth",
        price: "₹22,000/month",
        leads: "250 qualified leads",
        channels: "4 channels",
        reports: "Bi-weekly reports"
      },
      {
        name: "Scale",
        price: "₹35,000/month",
        leads: "500 qualified leads",
        channels: "All channels",
        reports: "Daily reports"
      }
    ]
  },
  {
    id: 'crm-integration',
    title: "CRM Integration & Call Flow Setup",
    description: "Seamless CRM integration and optimized call flow design to streamline your sales processes.",
    icon: IconDatabase,
    gradient: "from-neon-green to-neon-cyan",
    detailedDescription: "We specialize in enterprise-grade CRM integration and optimization, creating intelligent sales workflows that leverage AI automation, advanced analytics, and seamless third-party integrations. Our solutions transform your sales operations with smart data flow, predictive insights, and enhanced team productivity.",
    features: [
      "Multi-Platform CRM Configuration (Salesforce, HubSpot, Pipedrive, Zoho)",
      "AI-Powered Workflow Automation",
      "Secure Data Migration & Cleansing",
      "Intelligent Call Routing & Distribution",
      "API Integration & Custom Connectors",
      "Advanced Pipeline Management",
      "Automated Lead Scoring & Nurturing",
      "Real-time Sync & Data Validation",
      "Custom Dashboard & Reporting",
      "Mobile CRM Optimization",
      "Integration Testing & QA",
      "Comprehensive Team Training & Support",
      "Performance Monitoring & Optimization",
      "Third-party Tool Integrations (Email, Calendar, VoIP)"
    ],
    benefits: [
      "50% reduction in data entry time",
      "Improved lead tracking accuracy by 90%",
      "Automated follow-up processes",
      "Enhanced team collaboration & visibility",
      "Real-time performance insights",
      "Reduced manual errors by 85%",
      "Faster deal closure rates",
      "Scalable architecture for growth"
    ],
    packages: [
      {
        name: "Basic Setup",
        price: "₹25,000",
        setup: "Basic CRM setup",
        workflows: "5 workflows",
        training: "2 hours"
      },
      {
        name: "Advanced",
        price: "₹45,000",
        setup: "Advanced configuration",
        workflows: "15 workflows",
        training: "8 hours"
      },
      {
        name: "Enterprise",
        price: "₹75,000",
        setup: "Complete integration",
        workflows: "Unlimited",
        training: "20 hours"
      }
    ]
  },
  {
    id: 'development',
    title: "Website & App Development",
    description: "Full-stack development services for modern, responsive websites and mobile applications.",
    icon: IconCode,
    gradient: "from-neon-cyan to-neon-purple",
    detailedDescription: "Our elite development team creates cutting-edge, enterprise-grade websites and mobile applications using the latest technologies and frameworks. We specialize in high-performance, scalable solutions with advanced security, AI integration, and cloud-native architecture that drive measurable business growth.",
    features: [
      "Modern Frontend Development (React, Next.js, Vue.js, Angular)",
      "Cross-Platform Mobile Apps (React Native, Flutter)",
      "Advanced E-commerce Solutions (Shopify Plus, WooCommerce, Custom)",
      "Custom Enterprise Software Development",
      "RESTful & GraphQL API Development",
      "Microservices Architecture",
      "Cloud-Native Deployment (AWS, Azure, GCP)",
      "Progressive Web Apps (PWA)",
      "AI/ML Integration & Chatbots",
      "Blockchain & Web3 Development",
      "DevOps & CI/CD Pipeline Setup",
      "Performance Optimization & Monitoring",
      "Security Auditing & Penetration Testing",
      "Third-party Integrations & Payment Gateways"
    ],
    benefits: [
      "Lightning-fast loading speeds (< 2 seconds)",
      "Infinitely scalable cloud architecture",
      "SEO-optimized for top search rankings",
      "Cross-platform & device compatibility",
      "99.9% uptime guarantee",
      "Advanced security & data protection",
      "Real-time analytics & insights",
      "Future-proof technology stack"
    ],
    packages: [
      {
        name: "Website",
        price: "₹50,000",
        pages: "5-10 pages",
        features: "Basic features",
        timeline: "2-3 weeks"
      },
      {
        name: "E-commerce",
        price: "₹150,000",
        pages: "Full store",
        features: "Payment gateway",
        timeline: "6-8 weeks"
      },
      {
        name: "Custom App",
        price: "₹300,000",
        pages: "Mobile + Web",
        features: "Advanced features",
        timeline: "12-16 weeks"
      }
    ]
  },
  {
    id: 'social-media',
    title: "Social Media Management",
    description: "Comprehensive social media strategy and management to build your brand presence across platforms.",
    icon: IconBrandInstagram,
    gradient: "from-neon-pink to-neon-purple",
    detailedDescription: "Our social media experts leverage AI-powered content creation, advanced analytics, and data-driven strategies to build powerful brand presence across all major platforms. We combine creative storytelling with performance marketing to drive engagement, conversions, and measurable ROI.",
    features: [
      "AI-Powered Content Creation & Curation",
      "Multi-Platform Management (Instagram, LinkedIn, Twitter, Facebook, TikTok, YouTube)",
      "Advanced Community Management & Engagement",
      "Data-Driven Brand Strategy Development",
      "Real-time Analytics & Performance Reporting",
      "Influencer Partnership & Campaign Management",
      "Paid Social Advertising & Optimization",
      "User-Generated Content Campaigns",
      "Social Listening & Reputation Management",
      "Video Content Production & Editing",
      "Social Commerce Integration",
      "Crisis Management & PR Support",
      "Competitor Analysis & Benchmarking",
      "Custom Hashtag Strategy & Trending Analysis"
    ],
    benefits: [
      "5x increase in engagement rates",
      "Exponential follower growth (organic & targeted)",
      "Improved brand awareness & recognition",
      "Higher conversion rates & ROI",
      "Enhanced customer loyalty & retention",
      "Real-time brand monitoring & insights",
      "Viral content potential & reach amplification",
      "Cross-platform audience growth"
    ],
    packages: [
      {
        name: "Basic",
        price: "₹15,000/month",
        posts: "15 posts/month",
        platforms: "2 platforms",
        management: "Basic management"
      },
      {
        name: "Professional",
        price: "₹30,000/month",
        posts: "30 posts/month",
        platforms: "4 platforms",
        management: "Full management"
      },
      {
        name: "Premium",
        price: "₹50,000/month",
        posts: "60 posts/month",
        platforms: "All platforms",
        management: "Complete strategy"
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: "Digital Marketing & SEO",
    description: "Data-driven digital marketing strategies and SEO optimization to increase your online visibility.",
    icon: IconTrendingUp,
    gradient: "from-neon-blue to-neon-green",
    detailedDescription: "Our comprehensive digital marketing services leverage AI-powered SEO tools, advanced PPC automation, and data-driven content strategies to create high-performance campaigns that dominate search rankings, drive qualified traffic, and maximize revenue growth across all digital channels.",
    features: [
      "Advanced Technical & On-Page SEO Optimization",
      "AI-Powered Google Ads & PPC Management",
      "Strategic Content Marketing & Blogging",
      "Comprehensive Performance Analytics & Reporting",
      "Conversion Rate Optimization (CRO)",
      "Email Marketing Automation & Segmentation",
      "Local SEO & Google My Business Optimization",
      "Link Building & Digital PR Campaigns",
      "Voice Search & Mobile SEO",
      "E-commerce SEO & Product Optimization",
      "Competitor Analysis & Market Research",
      "Schema Markup & Rich Snippets Implementation",
      "Core Web Vitals & Page Speed Optimization",
      "Multi-channel Attribution & ROI Tracking"
    ],
    benefits: [
      "200% increase in organic traffic",
      "50% reduction in cost per click",
      "Top 3 search rankings for target keywords",
      "Improved ROI on ad spend (300%+ ROAS)",
      "Enhanced user experience & engagement",
      "Increased brand visibility & authority",
      "Higher quality lead generation",
      "Comprehensive competitive advantage"
    ],
    packages: [
      {
        name: "SEO Basic",
        price: "₹20,000/month",
        keywords: "20 keywords",
        content: "4 articles",
        reports: "Monthly"
      },
      {
        name: "Growth Pack",
        price: "₹40,000/month",
        keywords: "50 keywords",
        content: "8 articles",
        reports: "Bi-weekly"
      },
      {
        name: "Enterprise",
        price: "₹75,000/month",
        keywords: "100+ keywords",
        content: "16 articles",
        reports: "Weekly"
      }
    ]
  }
];

const whyChooseUs = [
  {
    icon: IconUsers,
    title: "Expert Team",
    description: "Industry professionals with proven track records"
  },
  {
    icon: IconClock,
    title: "Timely Delivery",
    description: "Projects completed on time, every time"
  },
  {
    icon: IconShield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: IconTrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable outcomes"
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive EdTech and B2B solutions designed to accelerate your business growth 
              and drive measurable results across all aspects of your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 neon-glow-cyan`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.detailedDescription}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-neon-cyan">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <IconCheck className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-neon-purple">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                            <IconCheck className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 hover:scale-105`}
                  >
                    <Link to="/contact">
                      Get Started
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Service Packages */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold mb-6 text-center">Service Packages</h3>
                  <div className="space-y-4">
                    {service.packages.map((pkg, pkgIndex) => (
                      <Card key={pkg.name} className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{pkg.name}</CardTitle>
                            <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            {Object.entries(pkg).map(([key, value]) => {
                              if (key === 'name' || key === 'price') return null;
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                  <span className="font-medium">{String(value)}</span>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Kin-G Technology
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group text-center h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
                Get Started
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a customized solution that drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  Contact Us Today
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
                  Explore Launchpad Program
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
