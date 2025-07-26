import { motion } from 'framer-motion';
import { IconBuilding, IconUsers, IconTrendingUp, IconRocket, IconBrandLinkedin, IconPhone, IconCode, IconBulb } from '@tabler/icons-react';

const stats = [
  { number: "500+", label: "Projects Delivered", icon: IconRocket },
  { number: "1000+", label: "Careers Launched", icon: IconUsers },
  { number: "50+", label: "Enterprise Clients", icon: IconBuilding },
  { number: "95%", label: "Placement Success", icon: IconTrendingUp },
];

const services = [
  { name: "Telecalling Support", icon: IconPhone, color: "text-neon-blue" },
  { name: "CRM Integration", icon: IconCode, color: "text-neon-purple" },
  { name: "Development Services", icon: IconCode, color: "text-neon-cyan" },
  { name: "Career Training", icon: IconBulb, color: "text-neon-pink" },
];

export function About() {
  return (
    <section className="py-20 px-4 bg-secondary/30 dark:electrifying-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 text-sm font-medium text-neon-cyan mb-6">
              Part of SOH Group
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent neon-text-glow">
                Kin-G Technology
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-neon-cyan">Kin-G Technology  Pvt. Ltd.</strong> is the core
              EdTech and B2B arm of SOH Group, providing comprehensive business solutions that drive growth and innovation.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We specialize in telecalling, inside sales support, CRM integration, website & app development,
              social media management, SEO, and our flagship{" "}
              <span className="text-neon-purple font-semibold">Launchpad Career Development Program</span>.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our unique approach trains job seekers with real corporate workload exposure and industry certifications,
              preparing them for success in both corporate environments and dynamic startups.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/40"
                >
                  <service.icon className={`h-5 w-5 ${service.color}`} />
                  <span className="text-sm font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-neon-cyan" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                alt="Kin-G Technology office and team"
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

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl flex items-center justify-center shadow-lg neon-glow-cyan"
            >
              <IconBrandLinkedin className="h-6 w-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center shadow-lg"
            >
              <IconRocket className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
