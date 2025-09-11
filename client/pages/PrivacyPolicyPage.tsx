import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  IconShield,
  IconLock,
  IconEye,
  IconDatabase,
  IconMail,
  IconPhone,
  IconCalendar,
  IconUser,
  IconSettings,
  IconAlertCircle,
  IconCheck,
  IconArrowLeft,
  IconTruck,
  IconCreditCard,
  IconPackage,
  IconClock,
  IconMapPin,
  IconRefresh,
  IconX,
  IconFileText,
  IconWorld,
  IconReceipt,
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

// Privacy Policy Sections
const privacySections = [
  {
    icon: IconUser,
    title: "Information We Collect",
    description:
      "We collect information you provide directly to us and automatically when you visit our website.",
    details: [
      "Personal Information: Name, email address, phone number, billing/shipping address, and payment details",
      "Non-Personal Information: Browser type, device information, IP address, and cookies for site analytics and performance",
      "Professional information (resume, work experience, skills) for career services",
      "Account credentials and preferences",
      "Communication records and support interactions",
    ],
  },
  {
    icon: IconDatabase,
    title: "How We Use Your Information",
    description:
      "We use the information we collect to provide, maintain, and improve our services.",
    details: [
      "To process and deliver your orders",
      "To provide customer support and order updates",
      "To improve website functionality and user experience",
      "To send promotional offers (only if you opt-in)",
      "To provide and deliver our career development and B2B services",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: IconShield,
    title: "Data Protection",
    description:
      "We implement appropriate security measures to protect your personal information.",
    details: [
      "Payment transactions are securely encrypted through trusted gateways",
      "We do not store sensitive payment details on our servers",
      "Access to personal information is restricted to authorized staff only",
      "SSL encryption for data transmission",
      "Secure servers and databases with access controls",
      "Regular security audits and updates",
    ],
  },
  {
    icon: IconLock,
    title: "Sharing of Information",
    description: "We do not sell or rent your information to third parties.",
    details: [
      "We do not sell or rent your information",
      "We may share limited details only with trusted third parties such as courier partners and payment processors, solely for order fulfillment",
      "Information may be shared with potential employers as part of our career placement services",
      "We may disclose information if required by law or to protect our rights",
      "We never share information for marketing purposes without explicit consent",
    ],
  },
  {
    icon: IconSettings,
    title: "Your Rights",
    description: "You have certain rights regarding your personal information.",
    details: [
      "You may request access, correction, or deletion of your personal information",
      "You may unsubscribe from promotional communications at any time",
      "Access and update your personal information",
      "Request data portability",
      "Withdraw consent for data processing",
      "File complaints with relevant authorities",
    ],
  },
  {
    icon: IconEye,
    title: "Cookies",
    description:
      "We use cookies to enhance your browsing experience and analyze website traffic.",
    details: [
      "We use cookies to personalize your browsing experience, remember preferences, and analyze traffic",
      "You can manage or disable cookies in your browser settings",
      "Essential cookies for basic website functionality",
      "Analytics cookies for understanding website usage and performance",
      "Functional cookies to remember your preferences and settings",
    ],
  },
];

// Shipping Policy Sections
const shippingSections = [
  {
    icon: IconClock,
    title: "Processing Time",
    description:
      "Orders are processed within 1–3 business days (excluding weekends and holidays).",
    details: [
      "Orders are processed within 1–3 business days (excluding weekends and holidays)",
      "You will receive a confirmation email with tracking details once your order has been shipped",
      "Processing time may vary during peak seasons or holidays",
    ],
  },
  {
    icon: IconTruck,
    title: "Shipping Methods & Delivery",
    description:
      "We offer various shipping options to meet your delivery needs.",
    details: [
      "Standard Shipping: 3-7 business days",
      "Express Shipping: 1-3 business days (if applicable)",
      "Delivery timelines may vary based on your location and courier partner",
      "Free shipping may be offered on selected products or minimum order value",
    ],
  },
  {
    icon: IconCreditCard,
    title: "Shipping Charges",
    description:
      "Shipping charges are calculated based on your location and selected shipping method.",
    details: [
      "Shipping charges will be calculated and displayed at checkout",
      "Free shipping may be offered on selected products or minimum order value",
      "International shipping charges vary by destination",
      "Additional charges may apply for remote locations",
    ],
  },
  {
    icon: IconPackage,
    title: "Order Tracking",
    description:
      "Track your order from dispatch to delivery with real-time updates.",
    details: [
      "You will receive a tracking number via email/SMS once your package has been dispatched",
      "Real-time tracking updates through our website or courier partner's platform",
      "Delivery notifications and estimated delivery times",
      "Contact support for any tracking-related queries",
    ],
  },
  {
    icon: IconAlertCircle,
    title: "Delays & Issues",
    description:
      "We handle delays and shipping issues with care and transparency.",
    details: [
      "We are not responsible for delays caused by courier partners, customs, natural calamities, or unforeseen circumstances",
      "Please ensure your shipping details are correct - we are not responsible for lost packages due to incorrect or incomplete addresses",
      "Contact us immediately if you experience any shipping issues",
      "We will work with courier partners to resolve delivery problems",
    ],
  },
  {
    icon: IconWorld,
    title: "International Shipping",
    description:
      "International shipping is available to select countries with additional considerations.",
    details: [
      "International shipping is available to select countries",
      "Customs duties, taxes, or import charges (if any) are the customer's responsibility",
      "Delivery times may be extended for international orders",
      "Some products may have shipping restrictions to certain countries",
    ],
  },
];

// Refund & Cancellation Policy Sections
const refundSections = [
  {
    icon: IconFileText,
    title: "General Policy",
    description:
      "Our refund policy is designed to be fair and transparent for all our services.",
    details: [
      "All payments made for our Services are considered final unless otherwise stated in this policy",
      "Refunds will only be granted in situations where services have not been delivered as promised or as specified below",
      "Refund requests must be submitted in writing to our official support channel",
      "All refund decisions are final and at the discretion of Kin-G Technologies",
    ],
  },
  {
    icon: IconReceipt,
    title: "Launchpad Program (Training / Guidance Services)",
    description:
      "Special refund terms apply to our Launchpad career development program.",
    details: [
      "Participants are eligible for a 100% refund if they apply for a refund within 30 days (1 month) of registration",
      "After 30 days from registration, no refunds will be provided under any circumstances",
      "Refund requests must be submitted in writing to our official support channel",
      "Refunds are processed only for unused portions of the program",
    ],
  },
  {
    icon: IconPackage,
    title: "Project-Based / Digital Solutions",
    description:
      "Different refund terms apply to our project-based and digital solution services.",
    details: [
      "For project-based work, advance payments are non-refundable once the project has started",
      "If a project is canceled by the client before work begins, a refund minus 25% processing fees will be issued",
      "If we are unable to deliver the project due to internal reasons, a full refund will be processed",
      "Project milestones and deliverables must be clearly defined in the service agreement",
    ],
  },
  {
    icon: IconCreditCard,
    title: "Payment Gateway Charges",
    description:
      "Transaction fees and processing charges are handled separately from refunds.",
    details: [
      "Any transaction charges or gateway fees (Razorpay, Cashfree, etc.) are non-refundable and will be deducted from the refund amount",
      "Processing fees are calculated based on the original payment method used",
      "Bank transfer fees may apply for certain refund methods",
      "Refund processing time may vary based on the payment method",
    ],
  },
  {
    icon: IconClock,
    title: "Refund Process",
    description:
      "Our streamlined refund process ensures quick resolution of eligible refund requests.",
    details: [
      "Eligible refunds will be processed within 7–10 business days from the date of approval",
      "Refunds will be credited to the original mode of payment only",
      "You will receive email confirmation once the refund has been processed",
      "Contact us if you don't receive your refund within the specified timeframe",
    ],
  },
  {
    icon: IconX,
    title: "No Refund Conditions",
    description: "Certain conditions exclude services from our refund policy.",
    details: [
      "Client dissatisfaction due to change of mind after service delivery (except Launchpad policy mentioned above)",
      "Delay caused by the client in providing required information or approvals",
      "Misuse of our Services or violation of Terms & Conditions",
      "Services that have been fully delivered as per the original agreement",
      "Custom or personalized services that cannot be resold",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <div className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 text-sm font-medium text-neon-cyan mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Company{" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
                Policies
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive policies covering Privacy, Shipping, and Refunds.
              Your trust and satisfaction are our top priorities.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconCalendar className="h-4 w-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <IconShield className="h-4 w-4" />
                <span>GDPR Compliant</span>
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
              className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
            >
              <Link to="/" className="flex items-center gap-2">
                <IconArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          {/* Policy Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button
              variant="outline"
              className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("privacy-policy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconShield className="h-4 w-4 mr-2" />
              Privacy Policy
            </Button>
            <Button
              variant="outline"
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("shipping-policy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconTruck className="h-4 w-4 mr-2" />
              Shipping Policy
            </Button>
            <Button
              variant="outline"
              className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("refund-policy")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconRefresh className="h-4 w-4 mr-2" />
              Refund Policy
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
            <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <IconShield className="h-6 w-6 text-neon-cyan" />
                  Our Commitment to You
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At{" "}
                  <strong className="text-neon-cyan">
                    Kin-G Technologies Pvt. Ltd.
                  </strong>
                  , we are committed to protecting your privacy, ensuring secure
                  shipping, and providing fair refund policies. These
                  comprehensive policies explain how we handle your information,
                  deliver your orders, and process refunds.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you agree to these policies. We may
                  update these policies from time to time, and any changes will
                  be posted on this page with a revised "Last updated" date.
                </p>
                <div className="flex items-start gap-3 p-4 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
                  <IconAlertCircle className="h-5 w-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neon-cyan mb-1">
                      Important Notice
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Please read these policies carefully. If you have any
                      questions, contact us at admin@kingtechs.in or
                      +91-8910481993.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-cyan/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-neon-cyan transition-colors duration-300">
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
                          <IconCheck className="h-4 w-4 text-neon-cyan mt-0.5 flex-shrink-0" />
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

      {/* Shipping Policy Section */}
      <section id="shipping-policy" className="py-16 px-4 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Shipping{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Policy
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Delivery terms and shipping information for your orders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {shippingSections.map((section, index) => (
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

      {/* Refund & Cancellation Policy Section */}
      <section id="refund-policy" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Refund &{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                Cancellation Policy
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fair and transparent refund practices for all our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {refundSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-neon-pink transition-colors duration-300">
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
                          <IconCheck className="h-4 w-4 text-neon-pink mt-0.5 flex-shrink-0" />
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

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  Questions About Our{" "}
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                    Policies?
                  </span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Contact us if you have any questions about our Privacy,
                  Shipping, or Refund policies
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
                        +91-8910481993
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
