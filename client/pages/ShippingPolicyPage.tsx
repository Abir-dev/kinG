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

export default function ShippingPolicyPage() {
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
            <div className="inline-block px-4 py-2 rounded-full border border-neon-purple/30 text-sm font-medium text-neon-purple mb-3">
              Shipping Information
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Shipping{" "}
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent neon-text-glow">
                Policy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive shipping information covering delivery terms,
              tracking, and international shipping. Your orders are handled with
              care and delivered efficiently.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <IconCalendar className="h-4 w-4" />
                <span>Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <IconTruck className="h-4 w-4" />
                <span>Fast & Reliable</span>
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
              className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
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
            <Card className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <IconTruck className="h-6 w-6 text-neon-purple" />
                  Our Shipping Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  At{" "}
                  <strong className="text-neon-purple">
                    Kin-G Technologies Pvt. Ltd.
                  </strong>
                  , we are committed to delivering your orders safely and
                  efficiently. Our shipping policy ensures transparent delivery
                  terms, reliable tracking, and excellent customer service
                  throughout the shipping process.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We work with trusted courier partners to ensure your orders
                  reach you in perfect condition and within the promised
                  timeframe. All shipping charges are calculated transparently
                  and displayed at checkout.
                </p>
                <div className="flex items-start gap-3 p-4 bg-neon-purple/5 border border-neon-purple/20 rounded-lg">
                  <IconAlertCircle className="h-5 w-5 text-neon-purple mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neon-purple mb-1">
                      Important Notice
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Please ensure your shipping address is correct and
                      complete. Contact us at admin@kingtechs.in or
                      +91-8910481993 for any shipping queries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Shipping Policy Section */}
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
              Shipping{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Information
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete details about our shipping process, delivery times, and
              tracking
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
                  Questions About{" "}
                  <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                    Shipping?
                  </span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Contact us if you have any questions about shipping, delivery,
                  or tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-purple/5 border border-neon-purple/20 rounded-lg">
                    <IconMail className="h-5 w-5 text-neon-purple" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        admin@kingtechs.in
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 p-4 bg-neon-pink/5 border border-neon-pink/20 rounded-lg">
                    <IconPhone className="h-5 w-5 text-neon-pink" />
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
