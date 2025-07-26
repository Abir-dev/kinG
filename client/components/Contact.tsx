import { motion } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const contactInfo = [
  {
    icon: IconMail,
    title: "Email",
    content: "info@kingtechnology.com",
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    icon: IconPhone,
    title: "Phone",
    content: "+91 98765 43210",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    icon: IconMapPin,
    title: "Location",
    content: "Mumbai, India",
    gradient: "from-neon-green to-neon-cyan"
  },
];

export function Contact() {
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
            Get In{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to accelerate your business growth or launch your career? Let's discuss how Kin-G Technology can help you succeed.
          </p>
        </motion.div>

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
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <Input placeholder="Launchpad Program / Development / Marketing" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your business needs or career goals..."
                    rows={6}
                    className="bg-background/50 border-border/40 focus:border-neon-cyan/50"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-[1.02]"
                >
                  <IconSend className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Connect with Kin-G Technology to accelerate your business growth or launch your career.
                We're here to support your journey every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40 hover:bg-card/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-64 bg-card/30 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 rounded-lg overflow-hidden group transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=400&fit=crop"
                alt="Mumbai skyline - Gateway of India"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-sm opacity-90">Mumbai, Maharashtra, India</p>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
