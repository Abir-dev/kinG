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

export default function RefundPolicyPage() {
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
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-neon-pink/30 text-sm font-medium text-neon-pink mb-3">
              Refund Information
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Refund &{" "}
              <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple bg-clip-text text-transparent neon-text-glow">
                Cancellation Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Fair and transparent refund practices for all our services. We
              ensure your satisfaction with clear refund terms and quick
              processing.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconCalendar className="h-4 w-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <IconRefresh className="h-4 w-4" />
                <span>Fair & Transparent</span>
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            {/* <Button
              variant="outline"
              asChild
              className="border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink transition-all duration-300"
            >
              <Link to="/" className="flex items-center gap-2">
                <IconArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button> */}
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
            <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-pink/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <IconRefresh className="h-6 w-6 text-neon-pink" />
                  Our Refund Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At{" "}
                  <strong className="text-neon-pink">
                    Kin-G Technologies Pvt. Ltd.
                  </strong>
                  , we are committed to providing fair and transparent refund
                  policies. Our refund policy is designed to protect both our
                  clients and our business, ensuring that refunds are processed
                  fairly and efficiently when appropriate.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that circumstances may change, and we strive to
                  accommodate reasonable refund requests while maintaining the
                  integrity of our services. All refund decisions are made with
                  careful consideration of each individual case.
                </p>
                <div className="flex items-start gap-3 p-4 bg-neon-pink/5 border border-neon-pink/20 rounded-lg">
                  <IconAlertCircle className="h-5 w-5 text-neon-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neon-pink mb-1">
                      Important Notice
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Please read our refund policy carefully before making a
                      purchase. Contact us at admin@kingtechs.in or
                      +91-8910481993 for refund requests.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Refund Policy Section */}
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
              Refund{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive refund terms for all our services and programs
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
            <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/40 hover:border-neon-pink/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  Questions About{" "}
                  <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                    Refunds?
                  </span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Contact us if you have any questions about our refund policy
                  or need to request a refund
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-pink/5 border border-neon-pink/20 rounded-lg">
                    <IconMail className="h-5 w-5 text-neon-pink" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        admin@kingtechs.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
                    <IconPhone className="h-5 w-5 text-neon-cyan" />
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
                  className="border-2 border-neon-pink/50 bg-neon-pink/5 hover:bg-neon-pink/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
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
