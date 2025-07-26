import { motion } from 'framer-motion';
import {
  IconPhone,
  IconTargetArrow,
  IconDatabase,
  IconCode,
  IconBrandInstagram,
  IconTrendingUp,
  IconRocket,
  IconUsers
} from '@tabler/icons-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    title: "Telecalling & Inside Sales Support",
    description: "Professional outbound calling services with trained agents to boost your sales conversion rates and customer engagement.",
    icon: IconPhone,
    className: "md:col-span-2",
    gradient: "from-neon-blue to-neon-cyan",
    features: ["Professional Sales Agents", "Call Analytics", "Lead Qualification", "Follow-up Management"]
  },
  {
    title: "Lead Generation",
    description: "Strategic lead generation campaigns to identify and capture high-quality prospects for your business.",
    icon: IconTargetArrow,
    className: "md:col-span-1",
    gradient: "from-neon-purple to-neon-pink",
    features: ["B2B Lead Mining", "Prospect Research", "Email Campaigns", "LinkedIn Outreach"]
  },
  {
    title: "CRM Integration & Call Flow Setup",
    description: "Seamless CRM integration and optimized call flow design to streamline your sales processes.",
    icon: IconDatabase,
    className: "md:col-span-1",
    gradient: "from-neon-green to-neon-cyan",
    features: ["CRM Configuration", "Workflow Automation", "Data Migration", "Call Routing"]
  },
  {
    title: "Website & App Development",
    description: "Full-stack development services for modern, responsive websites and mobile applications.",
    icon: IconCode,
    className: "md:col-span-2",
    gradient: "from-neon-cyan to-neon-purple",
    features: ["React/Next.js", "Mobile Apps", "E-commerce", "Custom Solutions"]
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media strategy and management to build your brand presence across platforms.",
    icon: IconBrandInstagram,
    className: "md:col-span-1",
    gradient: "from-neon-pink to-neon-purple",
    features: ["Content Creation", "Community Management", "Brand Strategy", "Analytics"]
  },
  {
    title: "Digital Marketing & SEO",
    description: "Data-driven digital marketing strategies and SEO optimization to increase your online visibility.",
    icon: IconTrendingUp,
    className: "md:col-span-1",
    gradient: "from-neon-blue to-neon-green",
    features: ["SEO Optimization", "Google Ads", "Content Marketing", "Performance Analytics"]
  },
  {
    title: "Launchpad Career Program",
    description: "Our flagship program that trains job seekers with real corporate workload exposure and industry certifications.",
    icon: IconRocket,
    className: "md:col-span-2",
    gradient: "from-neon-purple to-neon-pink",
    features: ["Real Project Training", "Industry Certification", "Job Placement", "Mentorship"]
  }
];

export function BentoGrid() {
  return (
    <section className="py-20 px-4 dark:electrifying-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive EdTech and B2B solutions to accelerate your business growth and career development
          </p>
        </motion.div>

        <div className="grid auto-rows-[280px] grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  gradient: string;
  index: number;
  features: string[];
}

function ServiceCard({ title, description, icon: Icon, className, gradient, index, features }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={className}
    >
      <Card className="group relative overflow-hidden h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-2xl dark:hover:neon-glow-cyan">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
        <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

        <CardHeader className="relative z-10 pb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 space-y-4">
          <CardDescription className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </CardDescription>

          <div className="space-y-2">
            {features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                viewport={{ once: true }}
                className="flex items-center text-xs text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mr-2" />
                {feature}
              </motion.div>
            ))}
          </div>
        </CardContent>

        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          whileHover={{ scale: 1.2 }}
        />
      </Card>
    </motion.div>
  );
}
