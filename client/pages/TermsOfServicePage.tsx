import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  IconFileText,
  IconScale,
  IconShield,
  IconAlertTriangle,
  IconCheck,
  IconX,
  IconMail,
  IconPhone,
  IconCalendar,
  IconArrowLeft,
  IconUsers,
  IconCreditCard,
  IconLock,
  IconGavel,
  IconUserCheck,
  IconSettings,
} from "@tabler/icons-react";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useGSAPAnimations } from "../hooks/useGSAPAnimations";

const termsSections = [
  {
    icon: IconUserCheck,
    title: "Eligibility",
    description: "Requirements and conditions for using our services.",
    details: [
      "You must be at least 18 years old to use our Services",
      "By registering, you confirm that the information you provide is accurate and complete",
      "You must have the legal capacity to enter into binding agreements",
      "You represent that you are not prohibited from receiving our services under applicable law",
      "You agree to provide truthful and up-to-date information during registration",
    ],
  },
  {
    icon: IconUsers,
    title: "Services",
    description:
      "Overview of the services we provide and our rights to modify them.",
    details: [
      "We provide technology solutions and Launchpad programs for individuals and businesses",
      "We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice",
      "Our services include career development, B2B solutions, and technology consulting",
      "Service availability may vary based on location and other factors",
      "We may introduce new services or features at our discretion",
    ],
  },
  {
    icon: IconShield,
    title: "User Responsibilities",
    description:
      "Your obligations and responsibilities when using our services.",
    details: [
      "You agree not to misuse our Services or engage in unlawful activities",
      "You are responsible for maintaining the confidentiality of your account credentials",
      "Any content shared with us must not violate intellectual property or third-party rights",
      "You must comply with all applicable laws and regulations",
      "You are responsible for all activities that occur under your account",
      "You must not attempt to gain unauthorized access to our systems or other users' accounts",
    ],
  },
  {
    icon: IconCreditCard,
    title: "Payments & Refunds",
    description: "Payment terms and refund policies for our services.",
    details: [
      "Fees for our Services must be paid as per the agreed terms during registration or contract",
      "Refunds, if applicable, will follow our Refund Policy",
      "We are not liable for any transaction failures caused by third-party payment gateways",
      "All payments are processed securely through certified payment processors",
      "Late payments may result in service suspension or termination",
      "Price changes will be communicated in advance when possible",
    ],
  },
  {
    icon: IconGavel,
    title: "Intellectual Property",
    description: "Ownership and protection of intellectual property rights.",
    details: [
      "All content, logos, trademarks, and materials on our website and within our Services remain the property of Kin-G Technologies",
      "You may not copy, reproduce, distribute, or exploit any part of our Services without written permission",
      "You retain ownership of content you provide to us, but grant us necessary licenses to provide services",
      "Any feedback or suggestions you provide may be used by us without compensation",
      "Unauthorized use of our intellectual property may result in legal action",
    ],
  },
  {
    icon: IconLock,
    title: "Confidentiality & Data Privacy",
    description: "How we handle confidential information and personal data.",
    details: [
      "We respect your privacy. All personal data is handled in accordance with our Privacy Policy",
      "You agree not to disclose any confidential information received during the course of our Services",
      "We implement appropriate security measures to protect your information",
      "Confidential information includes business strategies, technical data, and personal details",
      "Breach of confidentiality may result in immediate termination of services",
      "We may be required to disclose information if required by law or legal process",
    ],
  },
  {
    icon: IconAlertTriangle,
    title: "Limitation of Liability",
    description:
      "Limitations on our liability for service-related issues and damages.",
    details: [
      "We strive to ensure accurate and reliable Services but make no guarantees of uninterrupted availability",
      "We shall not be held liable for any direct, indirect, or incidental damages resulting from the use of our Services",
      "Our total liability is limited to the amount paid for the specific service in question",
      "We are not responsible for third-party services, content, or external factors beyond our control",
      "Force majeure events may affect service delivery without liability on our part",
      "Some jurisdictions may not allow limitation of liability, so these limitations may not apply to you",
    ],
  },
  {
    icon: IconSettings,
    title: "Termination",
    description: "Conditions under which services may be terminated.",
    details: [
      "We may suspend or terminate your access to Services if you breach these Terms",
      "Upon termination, your right to use our Services will immediately cease",
      "You may terminate your account at any time by contacting us",
      "Termination does not relieve you of obligations incurred before termination",
      "We may retain certain information as required by law or for legitimate business purposes",
      "Terminated accounts may not be reactivated without our express written consent",
    ],
  },
  {
    icon: IconScale,
    title: "Governing Law",
    description: "Legal jurisdiction and applicable laws for these terms.",
    details: [
      "These Terms & Conditions are governed by and construed in accordance with the laws of India",
      "Any disputes will be subject to the exclusive jurisdiction of Indian courts",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect",
      "These terms constitute the entire agreement between you and Kin-G Technologies",
      "We may update these terms from time to time, and continued use constitutes acceptance of changes",
    ],
  },
];

const prohibitedActivities = [
  "Violating any applicable laws or regulations",
  "Infringing on intellectual property rights",
  "Transmitting malicious code or harmful content",
  "Attempting to gain unauthorized access to our systems",
  "Interfering with the proper functioning of our services",
  "Using our services for fraudulent or deceptive purposes",
  "Harassing, threatening, or abusing other users",
  "Collecting personal information of other users without consent",
];

const disputeResolution = [
  {
    step: "1",
    title: "Direct Communication",
    description:
      "First, contact us directly to resolve any disputes or concerns.",
  },
  {
    step: "2",
    title: "Mediation",
    description:
      "If direct communication fails, we may engage in mediation to resolve the dispute.",
  },
  {
    step: "3",
    title: "Arbitration",
    description:
      "As a last resort, disputes may be resolved through binding arbitration.",
  },
  {
    step: "4",
    title: "Governing Law",
    description:
      "These terms are governed by the laws of India and subject to Indian jurisdiction.",
  },
];

export default function TermsOfServicePage() {
  // Initialize GSAP animations
  useGSAPAnimations();

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
            <div className="inline-block px-4 py-2 rounded-full border border-neon-purple/30 text-sm font-medium text-neon-purple mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Service
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Please read these terms carefully before using our services. These
              terms govern your use of Kin-G Technologies' services and
              platforms.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconCalendar className="h-4 w-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <IconScale className="h-4 w-4" />
                <span>Legally Binding</span>
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              asChild
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
            >
              <Link to="/" className="flex items-center gap-2">
                <IconArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <IconFileText className="h-6 w-6 text-neon-purple" />
                  Agreement Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to{" "}
                  <strong className="text-neon-purple">
                    Kin-G Technologies
                  </strong>
                  ("Company", "we", "our", or "us"). By accessing or using our
                  services, website, or programs (collectively, the "Services"),
                  you agree to comply with and be bound by the following Terms &
                  Conditions. Please read them carefully.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These terms govern your use of our technology solutions,
                  Launchpad programs, and all related services. By using our
                  Services, you acknowledge that you have read, understood, and
                  agree to be bound by these terms.
                </p>
                <div className="flex items-start gap-3 p-4 bg-neon-purple/5 border border-neon-purple/20 rounded-lg">
                  <IconAlertTriangle className="h-5 w-5 text-neon-purple mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neon-purple mb-1">
                      Important Notice
                    </p>
                    <p className="text-sm text-muted-foreground">
                      These terms constitute a legally binding agreement. If you
                      disagree with any part of these terms, you may not access
                      or use our Services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Terms &{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Conditions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive terms governing the use of our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-purple/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-neon-purple transition-colors duration-300">
                        {section.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <IconCheck className="h-4 w-4 text-neon-purple mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prohibited{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Activities that are strictly prohibited when using our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 text-red-400">
                  <IconX className="h-6 w-6" />
                  What You Cannot Do
                </CardTitle>
                <CardDescription>
                  Violation of these prohibitions may result in immediate
                  termination of your account and legal action.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-red-500/5 border border-red-500/20 rounded-lg"
                    >
                      <IconX className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Dispute{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Resolution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How we handle disputes and legal matters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disputeResolution.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border border-border/40 hover:border-neon-cyan/50 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  Questions About These{" "}
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                    Terms?
                  </span>
                </CardTitle>
                <CardDescription className="text-lg">
                  For any questions about these Terms & Conditions, please
                  contact us
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
                    <IconMail className="h-5 w-5 text-neon-cyan" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        admin@kingtechs.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-purple/5 border border-neon-purple/20 rounded-lg">
                    <IconPhone className="h-5 w-5 text-neon-purple" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        8910481993
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Link to="/contact">
                    Contact Us
                    <IconMail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
