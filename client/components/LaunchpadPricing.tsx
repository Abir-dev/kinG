import { motion } from 'framer-motion';
import { IconCheck, IconStar, IconRocket, IconCrown, IconTrophy } from '@tabler/icons-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const pricingTiers = [
  {
    name: "Basic",
    price: "₹1,299",
    period: "one-time",
    description: "Perfect for getting started with career development fundamentals",
    icon: IconRocket,
    gradient: "from-neon-blue to-neon-cyan",
    features: [
      "Basic career counseling session",
      "Resume building workshop",
      "Interview preparation basics",
      "LinkedIn profile optimization",
      "Job search strategies",
      "Email support",
      "Access to recorded sessions",
      "1 month community access"
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
      "Priority support"
    ],
    popular: true,
    ctaText: "Most Popular"
  },
  {
    name: "Ultimate",
    price: "₹7,999",
    period: "+ 30% placement fee",
    description: "Premium program with guaranteed placement support and ongoing mentorship",
    icon: IconCrown,
    gradient: "from-neon-pink to-neon-cyan",
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
      "Success fee only on placement"
    ],
    popular: false,
    ctaText: "Ultimate Choice"
  }
];

export function LaunchpadPricing() {
  return (
    <section className="py-20 px-4 bg-secondary/30 dark:electrifying-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Launchpad
            </span>{" "}
            Career Program
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with real corporate workload exposure, industry certifications, and guaranteed placement support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} {...tier} index={index} />
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
    </section>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  index: number;
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  icon: Icon, 
  gradient, 
  features, 
  popular, 
  ctaText, 
  index 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative ${popular ? 'lg:scale-105' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow-purple">
            Most Popular
          </span>
        </div>
      )}
      
      <Card className={`group relative overflow-hidden h-full bg-card/50 backdrop-blur-sm transition-all duration-500 ${
        popular 
          ? 'border-neon-purple/50 dark:neon-glow-purple' 
          : 'border-border/40 hover:border-neon-cyan/50 dark:hover:neon-glow-cyan'
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10 text-center pb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          
          <CardTitle className="text-2xl font-bold mb-2">{name}</CardTitle>
          <CardDescription className="text-sm mb-4">{description}</CardDescription>
          
          <div className="space-y-1">
            <div className="text-4xl font-bold text-primary">{price}</div>
            <div className="text-sm text-muted-foreground">{period}</div>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-6">
          <div className="space-y-3">
            {features.map((feature, idx) => (
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
            className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
              popular 
                ? 'bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 neon-glow-purple' 
                : 'bg-gradient-to-r from-neon-cyan to-neon-blue hover:opacity-90 hover:neon-glow-cyan'
            }`}
          >
            {ctaText}
          </Button>
        </CardContent>
        
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
      </Card>
    </motion.div>
  );
}
