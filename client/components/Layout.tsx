import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { PageTransition } from "./PageTransition";
import { useGSAPAnimations } from "../hooks/useGSAPAnimations";
import { useEffect } from "react";
import { IconAnalyze, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { refresh } = useGSAPAnimations();

  useEffect(() => {
    // Refresh GSAP ScrollTrigger after component mount
    setTimeout(() => refresh(), 100);
  }, [refresh]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />

      <main className="pt-16">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Professional Footer */}
      <footer className="bg-background border-t border-border/20 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                {/* Logo and Name */}
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="/logo4.png"
                    alt="Kin-G Logo"
                    className="w-16 h-16 invert dark:invert-0"
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-foreground leading-none">
                      Kin-G
                    </span>
                    <span className="text-sm text-muted-foreground leading-none">
                      Technologies
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-md">
                  Delivering comprehensive Technologies solutions, career
                  development programs, and business consulting services.
                </p>

                {/* Stats */}
                {/* <div className="flex flex-wrap gap-8">
                  {[
                    { number: "500+", label: "Projects Delivered" },
                    { number: "1000+", label: "Careers Launched" },
                    { number: "50+", label: "Enterprise Clients" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>   */}
                <div className="flex items-center space-x-3 mb-4">
                    <IconMapPin className="h-5 w-5 text-muted-foreground text-base" />
                    <span className="text-muted-foreground text-base">EP & GP Block, Sector V, Kolkata, West Bengal 700091 /<br/>5/2, Simlai Para Lane Paikpara, Kolkata-700002</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                      <IconAnalyze className="h-5 w-5 text-muted-foreground text-base" />
                      <a href="regis no:UDYAM-WB-10-0176316" className=" hover:underline text-muted-foreground text-base">UDYAM-WB-10-0176316</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconPhone className="h-5 w-5 text-muted-foreground text-base" />
                      <a href="tel:+918910481993" className="hover:underline text-muted-foreground text-base">+91 8240347001</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconMail className="h-5 w-5 text-muted-foreground text-base" />
                      <a href="mailto:admin@kingtechs.in" className="hover:underline text-muted-foreground text-base">admin@kingtechs.in</a>
                    </div>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-foreground font-semibold text-lg mb-6">
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "Web Development",
                    "Mobile Applications",
                    "CRM Integration",
                    "Data Analytics",
                    "Cloud Solutions",
                    "AI Integration",
                  ].map((service, index) => (
                    <li key={service}>
                      <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        viewport={{ once: true }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm block"
                      >
                        {service}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Programs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-foreground font-semibold text-lg mb-6">
                  Programs
                </h3>
                <ul className="space-y-3">
                  {[
                    "Launchpad Career Program",
                    "Training & Development",
                    "B2B Consulting",
                    "EdTech Solutions",
                    "Telecalling Services",
                    "Quality Assurance",
                  ].map((program, index) => (
                    <li key={program}>
                      <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        viewport={{ once: true }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm block"
                      >
                        {program}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Connect with Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-foreground font-semibold text-lg mb-6">
                  Connect with Us
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm mb-6">
                    Follow us on social media for updates and insights
                  </p>

                  {/* Social Media Links */}
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href="https://www.facebook.com/share/1LMHJULrar/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 text-sm group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-card border border-border/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <span>Facebook</span>
                    </motion.a>

                    <motion.a
                      href="https://www.instagram.com/launchpad.kingtechs?igsh=dGdhZHdybmg0Z2Ri"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 text-sm group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-card border border-border/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span>Instagram</span>
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/company/kingTechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 text-sm group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-card border border-border/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 bg-card/30">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
              >
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
                  <span>
                    © 2025 Kin-G Technologies Pvt. Ltd. All rights reserved.
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <motion.a
                    href="/privacy-policy"
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="/shipping-policy"
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Shipping Policy
                  </motion.a>
                  <motion.a
                    href="/refund-policy"
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Refund Policy
                  </motion.a>
                  <motion.a
                    href="/terms-of-service"
                    whileHover={{ scale: 1.05 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Terms of Service
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
