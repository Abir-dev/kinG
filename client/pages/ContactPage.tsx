import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconClock,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconMessageCircle,
  IconVideo,
  IconCalendar,
  IconHeadphones,
  IconBuilding,
  IconUsers
} from '@tabler/icons-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const contactMethods = [
  {
    icon: IconMail,
    title: "Email",
    description: "Send us a detailed message",
    contact: "info@kingtechnology.com",
    action: "mailto:info@kingtechnology.com",
    gradient: "from-neon-cyan to-neon-blue",
    response: "Response within 2 hours"
  },
  {
    icon: IconPhone,
    title: "Phone",
    description: "Call us directly",
    contact: "+91 98765 43210",
    action: "tel:+919876543210",
    gradient: "from-neon-purple to-neon-pink",
    response: "Available 9 AM - 8 PM IST"
  },
  {
    icon: IconVideo,
    title: "Video Consultation",
    description: "Schedule a video call",
    contact: "Book a Meeting",
    action: "#",
    gradient: "from-neon-green to-neon-cyan",
    response: "15-30 minute sessions"
  },
  {
    icon: IconMessageCircle,
    title: "WhatsApp",
    description: "Quick messaging support",
    contact: "+91 98765 43210",
    action: "https://wa.me/919876543210",
    gradient: "from-neon-pink to-neon-purple",
    response: "Instant responses"
  }
];

const departments = [
  {
    name: "Sales & Business Development",
    email: "sales@kingtechnology.com",
    phone: "+91 98765 43211",
    description: "New partnerships and business inquiries",
    icon: IconUsers
  },
  {
    name: "Launchpad Program",
    email: "launchpad@kingtechnology.com",
    phone: "+91 98765 43212",
    description: "Career development and program enrollment",
    icon: IconCalendar
  },
  {
    name: "Technical Support",
    email: "support@kingtechnology.com",
    phone: "+91 98765 43213",
    description: "Technical assistance and project support",
    icon: IconHeadphones
  },
  {
    name: "General Inquiries",
    email: "info@kingtechnology.com",
    phone: "+91 98765 43210",
    description: "General questions and information",
    icon: IconBuilding
  }
];

const locations = [
  {
    city: "Mumbai (Headquarters)",
    address: "123 Business Park, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 98765 43210",
    email: "mumbai@kingtechnology.com",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=400&fit=crop",
    description: "Our main headquarters with full service offerings"
  },
  {
    city: "Bangalore",
    address: "456 Tech Hub, Electronic City, Bangalore, Karnataka 560100",
    phone: "+91 98765 43214",
    email: "bangalore@kingtechnology.com",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=400&fit=crop",
    description: "Technology and development center"
  },
  {
    city: "Pune",
    address: "789 Innovation Plaza, Hinjewadi, Pune, Maharashtra 411057",
    phone: "+91 98765 43215",
    email: "pune@kingtechnology.com",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=400&fit=crop",
    description: "Training and career development hub"
  }
];

const socialLinks = [
  { icon: IconBrandLinkedin, name: "LinkedIn", url: "#", color: "text-blue-500" },
  { icon: IconBrandTwitter, name: "Twitter", url: "#", color: "text-blue-400" },
  { icon: IconBrandInstagram, name: "Instagram", url: "#", color: "text-pink-500" }
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM IST" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM IST" },
  { day: "Sunday", hours: "Closed" }
];

const serviceCategories = [
  "Launchpad Career Program",
  "Career Opportunities",
  "Telecalling & Sales Support",
  "Lead Generation",
  "CRM Integration",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing & SEO",
  "Social Media Management",
  "Business Consulting",
  "Technical Support",
  "Other"
];

export default function ContactPage() {
  const location = useLocation();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const state = location.state as { jobTitle?: string; subject?: string } | null;
    if (state?.jobTitle) {
      setSubject(`Job Application - ${state.jobTitle}`);
      setMessage(`Hello,

I am interested in applying for the ${state.jobTitle} position at Kin-G Technology. I would like to learn more about this opportunity and discuss how my skills and experience align with your requirements.

Please let me know the next steps in the application process.

Best regards,`);
    } else if (state?.subject) {
      setSubject(state.subject);
    }
  }, [location.state]);

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
              Get In{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to accelerate your business growth or launch your career? Our expert team is here to help you 
              every step of the way. Choose your preferred contact method below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-medium text-primary mb-2">{method.contact}</p>
                    <p className="text-xs text-muted-foreground mb-4">{method.response}</p>
                    <Button 
                      asChild 
                      size="sm" 
                      className={`bg-gradient-to-r ${method.gradient} hover:opacity-90 transition-all duration-300`}
                    >
                      <a href={method.action}>Contact Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 dark:hover:neon-glow-cyan">
                <div className="absolute inset-0 dark:futuristic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl font-bold mb-2">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input placeholder="John" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input placeholder="Doe" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input placeholder="john@example.com" type="email" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input placeholder="+91 98765 43210" type="tel" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interest</label>
                    {subject.includes('Job Application') ? (
                      <Input
                        value={subject}
                        readOnly
                        className="bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan font-medium"
                      />
                    ) : (
                      <select
                        className="w-full px-3 py-2 bg-background/50 border border-border/40 rounded-md focus:border-neon-cyan/50 focus:outline-none"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                    <Input placeholder="Your Company Name" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Tell us about your requirements, goals, or questions..."
                      rows={8}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-background/50 border-border/40 focus:border-neon-cyan/50"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from Kin-G Technology and understand that I can unsubscribe at any time.
                    </label>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-[1.02] py-6 text-lg font-semibold"
                  >
                    <IconSend className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Departments */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40 hover:bg-card/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                        <dept.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <IconMail className="h-4 w-4 text-neon-cyan" />
                            <a href={`mailto:${dept.email}`} className="text-neon-cyan hover:underline">{dept.email}</a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <IconPhone className="h-4 w-4 text-neon-purple" />
                            <a href={`tel:${dept.phone}`} className="text-neon-purple hover:underline">{dept.phone}</a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Working Hours</h3>
                <Card className="bg-card/30 backdrop-blur-sm border-border/40">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <IconClock className="h-6 w-6 text-neon-cyan" />
                      <span className="font-semibold">Office Hours</span>
                    </div>
                    <div className="space-y-2">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border/20 last:border-b-0">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20">
                      <p className="text-sm text-neon-cyan">
                        <strong>Emergency Support:</strong> Available 24/7 for existing clients with critical issues.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 flex items-center justify-center transition-all duration-300"
                    >
                      <social.icon className={`h-6 w-6 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
                Locations
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our offices across India for in-person consultations and meetings
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden">
                  <div className="relative">
                    <img
                      src={location.image}
                      alt={location.city}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg">{location.city}</h3>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <IconMapPin className="h-4 w-4 text-neon-cyan mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <IconPhone className="h-4 w-4 text-neon-purple" />
                        <a href={`tel:${location.phone}`} className="text-sm text-neon-purple hover:underline">
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <IconMail className="h-4 w-4 text-neon-pink" />
                        <a href={`mailto:${location.email}`} className="text-sm text-neon-pink hover:underline">
                          {location.email}
                        </a>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full mt-4 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
                    >
                      Get Directions
                    </Button>
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
              Quick{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Answers
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about getting in touch with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">How quickly will you respond?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We respond to all inquiries within 2 hours during business hours. For urgent matters, 
                    call us directly or use WhatsApp for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Can I schedule a consultation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer free 15-30 minute consultations to discuss your needs. 
                    Use our booking system or contact us to schedule a convenient time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer on-site visits?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes, we can arrange on-site visits for enterprise clients in Mumbai, Bangalore, 
                    and Pune. Contact our sales team to discuss your requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">What languages do you support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We provide support in English, Hindi, Marathi, and regional languages. 
                    Our team can communicate in the language you're most comfortable with.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-red-400">Emergency Support</h2>
                <p className="text-muted-foreground mb-6">
                  For existing clients with critical technical issues or urgent business matters
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-red-400/50 text-red-400 hover:bg-red-400/10"
                  >
                    <a href="tel:+919876543200">
                      <IconPhone className="mr-2 h-5 w-5" />
                      Emergency Hotline: +91 98765 43200
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                  >
                    <a href="mailto:emergency@kingtechnology.com">
                      <IconMail className="mr-2 h-5 w-5" />
                      emergency@kingtechnology.com
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Available 24/7 for critical issues only. Regular inquiries should use standard contact methods.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
