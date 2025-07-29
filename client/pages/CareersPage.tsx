import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  IconBriefcase, 
  IconUsers, 
  IconHeart, 
  IconGrowth, 
  IconShield, 
  IconClock,
  IconMapPin,
  IconCurrencyRupee,
  IconRocket,
  IconBrain,
  IconCode,
  IconTargetArrow,
  IconMail,
  IconArrowRight,
  IconGift,
  IconHome,
  IconMedicalCross,
  IconBeach,
  IconTrophy,
  IconSchool,
  IconCoffee
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Technology",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8,00,000 - ₹15,00,000",
    description: "Join our development team to build cutting-edge web applications using React, Node.js, and cloud technologies. Work on exciting projects for enterprise clients.",
    requirements: [
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Knowledge of microservices architecture",
      "Excellent problem-solving skills",
      "Strong communication and teamwork abilities"
    ],
    gradient: "from-neon-cyan to-neon-blue",
    icon: IconCode
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5,00,000 - ₹10,00,000",
    description: "Drive our digital marketing initiatives across multiple channels. Create and execute data-driven campaigns that deliver exceptional ROI for our B2B clients.",
    requirements: [
      "Experience with Google Ads, Facebook Ads, and LinkedIn Ads",
      "Strong analytical skills with GA4 and marketing tools",
      "Content creation and copywriting abilities",
      "SEO and SEM expertise",
      "Project management experience"
    ],
    gradient: "from-neon-purple to-neon-pink",
    icon: IconTargetArrow
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Sales",
    location: "Delhi / Mumbai",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹6,00,000 - ₹12,00,000",
    description: "Lead our B2B sales initiatives and build strategic partnerships. Drive revenue growth through relationship building and innovative sales strategies.",
    requirements: [
      "Proven B2B sales track record",
      "Excellent communication and negotiation skills",
      "Experience in EdTech or technology services",
      "Strong network in corporate sector",
      "Results-driven mindset"
    ],
    gradient: "from-neon-green to-neon-cyan",
    icon: IconBriefcase
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹4,50,000 - ₹9,00,000",
    description: "Create intuitive and visually stunning user experiences for our web and mobile applications. Work closely with development teams to bring designs to life.",
    requirements: [
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user research and testing",
      "Knowledge of design systems and accessibility",
      "Collaborative mindset and attention to detail"
    ],
    gradient: "from-neon-pink to-neon-purple",
    icon: IconBrain
  },
  {
    id: 5,
    title: "Career Development Counselor",
    department: "Education",
    location: "Mumbai / Pune",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₹4,00,000 - ₹8,00,000",
    description: "Guide and mentor students through our Launchpad program. Help professionals transition into successful tech careers through personalized coaching.",
    requirements: [
      "Experience in career counseling or HR",
      "Strong understanding of technology industry",
      "Excellent interpersonal and communication skills",
      "Passion for helping others succeed",
      "Certification in counseling preferred"
    ],
    gradient: "from-neon-cyan to-neon-green",
    icon: IconGrowth
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Technology",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹7,00,000 - ₹14,00,000",
    description: "Build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure scalable, secure deployment processes for our applications.",
    requirements: [
      "Experience with AWS/Azure cloud platforms",
      "Proficiency in Docker, Kubernetes, and CI/CD tools",
      "Knowledge of Infrastructure as Code (Terraform)",
      "Strong scripting skills (Python, Bash)",
      "Security-first mindset"
    ],
    gradient: "from-neon-blue to-neon-purple",
    icon: IconRocket
  }
];

const benefits = [
  {
    icon: IconCurrencyRupee,
    title: "Competitive Salary",
    description: "Market-leading compensation packages with performance bonuses and equity options",
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    icon: IconMedicalCross,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family, mental health support, and wellness programs",
    gradient: "from-neon-green to-neon-cyan"
  },
  {
    icon: IconHome,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and modern co-working spaces when you need them",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    icon: IconSchool,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, certification programs, and skill development workshops",
    gradient: "from-neon-pink to-neon-purple"
  },
  {
    icon: IconBeach,
    title: "Time Off",
    description: "25+ days paid vacation, flexible sick leave, mental health days, and sabbatical options",
    gradient: "from-neon-cyan to-neon-green"
  },
  {
    icon: IconTrophy,
    title: "Growth Opportunities",
    description: "Clear career progression paths, mentorship programs, and leadership development tracks",
    gradient: "from-neon-blue to-neon-purple"
  },
  {
    icon: IconGift,
    title: "Perks & Benefits",
    description: "Employee stock options, referral bonuses, team outings, and anniversary rewards",
    gradient: "from-neon-green to-neon-cyan"
  },
  {
    icon: IconCoffee,
    title: "Work Environment",
    description: "Modern office spaces, latest tech equipment, ergonomic setups, and unlimited snacks",
    gradient: "from-neon-purple to-neon-pink"
  }
];

const companyValues = [
  {
    icon: IconBrain,
    title: "Innovation First",
    description: "We encourage creative thinking and provide resources to turn ideas into reality"
  },
  {
    icon: IconUsers,
    title: "Collaborative Culture",
    description: "We believe in the power of teamwork and cross-functional collaboration"
  },
  {
    icon: IconGrowth,
    title: "Continuous Learning",
    description: "We invest in our people's growth and provide opportunities to learn and excel"
  },
  {
    icon: IconHeart,
    title: "Work-Life Balance",
    description: "We prioritize employee wellbeing and maintain a healthy work-life integration"
  }
];

const stats = [
  { number: "50+", label: "Team Members", description: "Talented professionals across all departments" },
  { number: "95%", label: "Employee Satisfaction", description: "Based on our latest internal survey" },
  { number: "2.5 Years", label: "Average Tenure", description: "Team members stay and grow with us" },
  { number: "40+", label: "Internal Promotions", description: "We promote from within and invest in growth" }
];

export default function CareersPage() {
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
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Build Your{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Dream Career
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join Kin-G Technology and be part of a team that's transforming businesses and careers through 
              innovative EdTech solutions. We're looking for passionate individuals who want to make a real impact.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="group text-center bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300 dark:hover:neon-glow-cyan">
                  <CardContent className="p-6">
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

      {/* Company Values */}
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
                Culture
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Kin-G Technology, we've built a culture that celebrates innovation, collaboration, and personal growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
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

      {/* Benefits */}
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
              Why Work{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Current{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us. We're always looking for talented individuals to join our team.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0`}>
                          <job.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="border-neon-cyan/30 text-neon-cyan">
                              {job.department}
                            </Badge>
                            <Badge variant="outline" className="border-neon-purple/30 text-neon-purple">
                              {job.type}
                            </Badge>
                            <Badge variant="outline" className="border-neon-pink/30 text-neon-pink">
                              {job.experience}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <IconMapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <IconCurrencyRupee className="h-4 w-4" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button 
                        asChild
                        className={`bg-gradient-to-r ${job.gradient} hover:opacity-90 transition-all duration-300 hover:scale-105 flex-shrink-0`}
                      >
                        <Link to="/contact" state={{ jobTitle: job.title }}>
                          Apply Now
                          <IconArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">{job.description}</CardDescription>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-neon-cyan">Key Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
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
              Don't See Your{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Perfect Role
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. Send us your resume 
              and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-105 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact" state={{ subject: "General Application" }}>
                  Send Your Resume
                  <IconMail className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/about">
                  Learn More About Us
                  <IconUsers className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
