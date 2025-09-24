import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  IconPhone,
  IconTargetArrow,
  IconDatabase,
  IconCode,
  IconBrandInstagram,
  IconTrendingUp,
  IconRocket,
  IconArrowRight,
  IconCheck,
  IconUsers,
  IconClock,
  IconShield,
  IconPoint,
} from "@tabler/icons-react";
import { Checkbox } from "../components/ui/checkbox";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useServicePayment } from "../hooks/useRazorpayPayment";
import emailjs from "@emailjs/browser";

const services = [
  {
    id: "telecalling",
    title: "Telecalling & Inside Sales Support",
    description:
      "Professional outbound calling services with trained agents to boost your sales conversion rates and customer engagement.",
    icon: IconPhone,
    gradient: "from-neon-blue to-neon-cyan",
    detailedDescription:
      "Our telecalling services leverage advanced AI-powered dialing systems and professionally trained sales agents to maximize your sales potential. We provide comprehensive inside sales support with real-time analytics, automated lead scoring, and intelligent call routing to ensure optimal conversion rates.",
    features: [
      "AI-Powered Predictive Dialing",
      "Professional Sales Agents (Certified)",
      "Real-time Call Analytics & Reporting",
      "Advanced Lead Qualification & Scoring",
      "Automated Follow-up Management",
      "Multi-CRM Integration (Salesforce, HubSpot, Zoho)",
      "Performance Tracking & KPI Dashboards",
      "Call Recording & Quality Assurance",
      "A/B Testing for Scripts",
      "Omnichannel Communication (Voice, SMS, Email)",
      "Lead Nurturing Campaigns",
      "Conversion Rate Optimization",
    ],
    benefits: [
      "Increased conversion rates by up to 40%",
      "Reduced customer acquisition costs by 35%",
      "24/7 customer support coverage",
      "Scalable team based on demand",
      "99.9% uptime guarantee",
      "GDPR & Data Security Compliant",
      "Multi-language support available",
      "Custom reporting and insights",
    ],
    packages: [
      {
        name: "Basic",
        price: "₹15,000/month",
        priceValue: 15000,
        calls: "500 calls",
        agents: "2 dedicated agents",
        hours: "8 hours/day",
      },
      {
        name: "Professional",
        price: "₹28,000/month",
        priceValue: 28000,
        calls: "1000 calls",
        agents: "4 dedicated agents",
        hours: "12 hours/day",
      },
      {
        name: "Enterprise",
        price: "₹45,000/month",
        priceValue: 45000,
        calls: "2000 calls",
        agents: "8 dedicated agents",
        hours: "24 hours/day",
      },
    ],
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Strategic lead generation campaigns to identify and capture high-quality prospects for your business.",
    icon: IconTargetArrow,
    gradient: "from-neon-purple to-neon-pink",
    detailedDescription:
      "Our lead generation services utilize AI-powered prospecting tools, advanced targeting algorithms, and multi-channel automation to identify and engage high-quality prospects. We combine data science with human expertise to deliver leads that convert at industry-leading rates.",
    features: [
      "AI-Powered B2B Lead Mining & Enrichment",
      "Advanced Prospect Research & Verification",
      "Automated Email Campaign Sequences",
      "LinkedIn Sales Navigator Integration",
      "Content Marketing & Lead Magnets",
      "Social Media Lead Generation",
      "Intent Data & Behavioral Tracking",
      "Lead Scoring & Qualification Matrix",
      "Multi-touch Attribution Modeling",
      "Competitor Analysis & Market Intelligence",
      "Custom Landing Page Creation",
      "Marketing Automation Integration",
    ],
    benefits: [
      "300% increase in qualified leads",
      "Reduced cost per lead by 50%",
      "Higher quality prospect database",
      "Improved sales pipeline velocity",
      "Real-time lead validation & verification",
      "GDPR compliant data collection",
      "Advanced analytics & ROI tracking",
      "Custom audience segmentation",
    ],
    packages: [
      {
        name: "Starter",
        price: "₹12,000/month",
        priceValue: 12000,
        leads: "100 qualified leads",
        channels: "2 channels",
        reports: "Weekly reports",
      },
      {
        name: "Growth",
        price: "₹22,000/month",
        priceValue: 22000,
        leads: "250 qualified leads",
        channels: "4 channels",
        reports: "Bi-weekly reports",
      },
      {
        name: "Scale",
        price: "₹35,000/month",
        priceValue: 35000,
        leads: "500 qualified leads",
        channels: "All channels",
        reports: "Daily reports",
      },
    ],
  },
  {
    id: "crm-integration",
    title: "CRM Integration & Call Flow Setup",
    description:
      "Seamless CRM integration and optimized call flow design to streamline your sales processes.",
    icon: IconDatabase,
    gradient: " from-[#0254f4] to-[#20b7bf]",
    detailedDescription:
      "We specialize in enterprise-grade CRM integration and optimization, creating intelligent sales workflows that leverage AI automation, advanced analytics, and seamless third-party integrations. Our solutions transform your sales operations with smart data flow, predictive insights, and enhanced team productivity.",
    features: [
      "Multi-Platform CRM Configuration (Salesforce, HubSpot, Pipedrive, Zoho)",
      "AI-Powered Workflow Automation",
      "Secure Data Migration & Cleansing",
      "Intelligent Call Routing & Distribution",
      "API Integration & Custom Connectors",
      "Advanced Pipeline Management",
      "Automated Lead Scoring & Nurturing",
      "Real-time Sync & Data Validation",
      "Custom Dashboard & Reporting",
      "Mobile CRM Optimization",
      "Integration Testing & QA",
      "Comprehensive Team Training & Support",
      "Performance Monitoring & Optimization",
      "Third-party Tool Integrations (Email, Calendar, VoIP)",
    ],
    benefits: [
      "50% reduction in data entry time",
      "Improved lead tracking accuracy by 90%",
      "Automated follow-up processes",
      "Enhanced team collaboration & visibility",
      "Real-time performance insights",
      "Reduced manual errors by 85%",
      "Faster deal closure rates",
      "Scalable architecture for growth",
    ],
    packages: [
      {
        name: "Basic Setup",
        price: "₹25,000",
        priceValue: 25000,
        setup: "Basic CRM setup",
        workflows: "5 workflows",
        training: "2 hours",
      },
      {
        name: "Advanced",
        price: "₹45,000",
        priceValue: 45000,
        setup: "Advanced configuration",
        workflows: "15 workflows",
        training: "8 hours",
      },
      {
        name: "Enterprise",
        price: "₹75,000",
        priceValue: 75000,
        setup: "Complete integration",
        workflows: "Unlimited",
        training: "20 hours",
      },
    ],
  },
  {
    id: "development",
    title: "Website & App Development",
    description:
      "Full-stack development services for modern, responsive websites and mobile applications.",
    icon: IconCode,
    gradient: "from-neon-blue to-neon-cyan",
    detailedDescription:
      "Our elite development team creates cutting-edge, enterprise-grade websites and mobile applications using the latest technologies and frameworks. We specialize in high-performance, scalable solutions with advanced security, AI integration, and cloud-native architecture that drive measurable business growth.",
    features: [
      "Modern Frontend Development (React, Next.js, Vue.js, Angular)",
      "Cross-Platform Mobile Apps (React Native, Flutter)",
      "Advanced E-commerce Solutions (Shopify Plus, WooCommerce, Custom)",
      "Custom Enterprise Software Development",
      "RESTful & GraphQL API Development",
      "Microservices Architecture",
      "Cloud-Native Deployment (AWS, Azure, GCP)",
      "Progressive Web Apps (PWA)",
      "AI/ML Integration & Chatbots",
      "Blockchain & Web3 Development",
      "DevOps & CI/CD Pipeline Setup",
      "Performance Optimization & Monitoring",
      "Security Auditing & Penetration Testing",
      "Third-party Integrations & Payment Gateways",
    ],
    benefits: [
      "Lightning-fast loading speeds (< 2 seconds)",
      "Infinitely scalable cloud architecture",
      "SEO-optimized for top search rankings",
      "Cross-platform & device compatibility",
      "99.9% uptime guarantee",
      "Advanced security & data protection",
      "Real-time analytics & insights",
      "Future-proof Technologies stack",
    ],
    packages: [
      {
        name: "Website",
        price: "₹50,000",
        priceValue: 50000,
        pages: "5-10 pages",
        features: "Basic features",
        timeline: "2-3 weeks",
      },
      {
        name: "E-commerce",
        price: "₹150,000",
        priceValue: 150000,
        pages: "Full store",
        features: "Payment gateway",
        timeline: "6-8 weeks",
      },
      {
        name: "Custom App",
        price: "₹300,000",
        priceValue: 300000,
        pages: "Mobile + Web",
        features: "Advanced features",
        timeline: "12-16 weeks",
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "Comprehensive social media strategy and management to build your brand presence across platforms.",
    icon: IconBrandInstagram,
    gradient: "from-neon-pink to-neon-purple",
    detailedDescription:
      "Our social media experts leverage AI-powered content creation, advanced analytics, and data-driven strategies to build powerful brand presence across all major platforms. We combine creative storytelling with performance marketing to drive engagement, conversions, and measurable ROI.",
    features: [
      "AI-Powered Content Creation & Curation",
      "Multi-Platform Management (Instagram, LinkedIn, Twitter, Facebook, TikTok, YouTube)",
      "Advanced Community Management & Engagement",
      "Data-Driven Brand Strategy Development",
      "Real-time Analytics & Performance Reporting",
      "Influencer Partnership & Campaign Management",
      "Paid Social Advertising & Optimization",
      "User-Generated Content Campaigns",
      "Social Listening & Reputation Management",
      "Video Content Production & Editing",
      "Social Commerce Integration",
      "Crisis Management & PR Support",
      "Competitor Analysis & Benchmarking",
      "Custom Hashtag Strategy & Trending Analysis",
    ],
    benefits: [
      "5x increase in engagement rates",
      "Exponential follower growth (organic & targeted)",
      "Improved brand awareness & recognition",
      "Higher conversion rates & ROI",
      "Enhanced customer loyalty & retention",
      "Real-time brand monitoring & insights",
      "Viral content potential & reach amplification",
      "Cross-platform audience growth",
    ],
    packages: [
      {
        name: "Basic",
        price: "₹15,000/month",
        priceValue: 15000,
        posts: "15 posts/month",
        platforms: "2 platforms",
        management: "Basic management",
      },
      {
        name: "Professional",
        price: "₹30,000/month",
        priceValue: 30000,
        posts: "30 posts/month",
        platforms: "4 platforms",
        management: "Full management",
      },
      {
        name: "Premium",
        price: "₹50,000/month",
        priceValue: 50000,
        posts: "60 posts/month",
        platforms: "All platforms",
        management: "Complete strategy",
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    description:
      "Data-driven digital marketing strategies and SEO optimization to increase your online visibility.",
    icon: IconTrendingUp,
    gradient:  "from-[#0254f4] to-[#20b7bf]",
    detailedDescription:
      "Our comprehensive digital marketing services leverage AI-powered SEO tools, advanced PPC automation, and data-driven content strategies to create high-performance campaigns that dominate search rankings, drive qualified traffic, and maximize revenue growth across all digital channels.",
    features: [
      "Advanced Technical & On-Page SEO Optimization",
      "AI-Powered Google Ads & PPC Management",
      "Strategic Content Marketing & Blogging",
      "Comprehensive Performance Analytics & Reporting",
      "Conversion Rate Optimization (CRO)",
      "Email Marketing Automation & Segmentation",
      "Local SEO & Google My Business Optimization",
      "Link Building & Digital PR Campaigns",
      "Voice Search & Mobile SEO",
      "E-commerce SEO & Product Optimization",
      "Competitor Analysis & Market Research",
      "Schema Markup & Rich Snippets Implementation",
      "Core Web Vitals & Page Speed Optimization",
      "Multi-channel Attribution & ROI Tracking",
    ],
    benefits: [
      "200% increase in organic traffic",
      "50% reduction in cost per click",
      "Top 3 search rankings for target keywords",
      "Improved ROI on ad spend (300%+ ROAS)",
      "Enhanced user experience & engagement",
      "Increased brand visibility & authority",
      "Higher quality lead generation",
      "Comprehensive competitive advantage",
    ],
    packages: [
      {
        name: "SEO Basic",
        price: "₹20,000/month",
        priceValue: 20000,
        keywords: "20 keywords",
        content: "4 articles",
        reports: "Monthly",
      },
      {
        name: "Growth Pack",
        price: "₹40,000/month",
        priceValue: 40000,
        keywords: "50 keywords",
        content: "8 articles",
        reports: "Bi-weekly",
      },
      {
        name: "Enterprise",
        price: "₹75,000/month",
        priceValue: 75000,
        keywords: "100+ keywords",
        content: "16 articles",
        reports: "Weekly",
      },
    ],
  },
];

const whyChooseUs = [
  {
    icon: IconUsers,
    title: "Expert Team",
    description: "Industry professionals with proven track records",
  },
  {
    icon: IconClock,
    title: "Timely Delivery",
    description: "Projects completed on time, every time",
  },
  {
    icon: IconShield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
  },
  {
    icon: IconTrendingUp,
    title: "Proven Results",
    description: "Track record of delivering measurable outcomes",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [shippingAccepted, setShippingAccepted] = useState(false);
  const [refundAccepted, setRefundAccepted] = useState(false);

  // Form states
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Customer details for demo (in real app, you'd collect these)
  const [customerDetails, setCustomerDetails] = useState({
    name: "Demo Customer",
    email: "customer@example.com",
    phone: "+919999999999",
    company: "Demo Company",
  });

  // Handle successful payment
  const handlePaymentSuccess = async (paymentDetails: any) => {
    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const templateParams = {
        name: customerDetails.name,
        email: customerDetails.email,
        phone: customerDetails.phone,
        company: customerDetails.company,
        service: selectedService.title,
        package: selectedPackage.name,
        amount: selectedPackage.priceValue,
        requirements: "Service package selected via website",
        payment_id: paymentDetails.id,
        order_id: paymentDetails.order_id,
        payment_method: paymentDetails.method,
        payment_status: paymentDetails.status,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
      setShowModal(false);
      navigate("/success");
    } catch (err) {
      throw new Error(
        "Order submission failed. Please contact support with your payment ID: " +
          paymentDetails.id,
      );
    } finally {
      setSending(false);
    }
  };

  // Handle payment errors
  const handlePaymentError = (error: string) => {
    setError(error);
    console.error("Service payment error:", error);
  };

  // Initialize payment hook
  const {
    initiatePayment,
    isLoading: paymentLoading,
    error: paymentError,
    clearError,
  } = useServicePayment(handlePaymentSuccess, handlePaymentError);

  // Handle payment
  const handlePayment = async () => {
    // Clear any previous errors
    clearError();
    setError("");

    const paymentData = {
      amount: selectedPackage.priceValue,
      description: `${selectedService.title} - ${selectedPackage.name} Package`,
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      notes: {
        service_id: selectedService.id,
        package_name: selectedPackage.name,
        company: customerDetails.company,
      },
    };

    await initiatePayment(paymentData);
  };

  // Handle package selection
  const handlePackageSelect = (service: any, packageItem: any) => {
    setSelectedService(service);
    setSelectedPackage(packageItem);
    setShowModal(true);
    clearError();
    setError("");
    // Reset checkboxes when opening modal
    setTermsAccepted(false);
    setPrivacyAccepted(false);
  };

  // Combined error display
  const displayError = error || paymentError;

  return (
    <Layout>
      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-lg bg-black/40">
          <div className="bg-card/80 backdrop-blur-xl border  shadow-2xl rounded-xl p-8 w-full max-w-md relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-2xl bg-transparent text-black no-global-button"
              onClick={() => {
                setShowModal(false);
                clearError();
                setError("");
                setTermsAccepted(false);
                setPrivacyAccepted(false);
                setShippingAccepted(false);
                setRefundAccepted(false);
              }}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Service Payment
            </h2>

            {/* Service Summary */}
            <div className="w-full space-y-4 mb-6">
              <div className="bg-background/50 border border-neon-cyan/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Service:
                  </span>
                  <span className="text-sm font-medium text-[#1c949a]">
                    {selectedService?.title}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Package:
                  </span>
                  <span className="text-sm font-medium text-[#0254f4]">
                    {selectedPackage?.name}
                  </span>
                </div>

                <div className="pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Total Amount:
                    </span>
                    <span className="text-xl font-bold text-[#0254f4]">
                      {selectedPackage?.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Details Preview */}
              {/* <div className="bg-background/50 border border-neon-purple/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-neon-purple mb-2">Customer Details:</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Name: {customerDetails.name}</div>
                  <div>Email: {customerDetails.email}</div>
                  <div>Phone: {customerDetails.phone}</div>
                  <div>Company: {customerDetails.company}</div>
                </div>
              </div> */}
            </div>

            {/* Terms and Privacy Policy Checkboxes */}
            <div className="w-full space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                  className="border-neon-purple/50"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms-of-service"
                    target="_blank"
                    className="text-[#0254f4] hover:text-neon-pink underline"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) =>
                    setPrivacyAccepted(checked as boolean)
                  }
                  className="border-neon-purple/50"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    className="text-[#0254f4] hover:text-neon-pink underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="shipping"
                  checked={shippingAccepted}
                  onCheckedChange={(checked) =>
                    setShippingAccepted(checked as boolean)
                  }
                  className="border-neon-purple/50"
                />
                <label
                  htmlFor="shipping"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/shipping-policy"
                    target="_blank"
                    className="text-[#0254f4] hover:text-neon-pink underline"
                  >
                    Shipping Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="refund"
                  checked={refundAccepted}
                  onCheckedChange={(checked) =>
                    setRefundAccepted(checked as boolean)
                  }
                  className="border-neon-purple/50"
                />
                <label
                  htmlFor="refund"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/refund-policy"
                    target="_blank"
                    className="text-[#0254f4] hover:text-neon-pink underline"
                  >
                    Refund Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              variant="outline"
              size="lg"
              className="w-full border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                paymentLoading ||
                sending ||
                !termsAccepted ||
                !privacyAccepted ||
                !shippingAccepted ||
                !refundAccepted
              }
            >
              {paymentLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing Payment...
                </div>
              ) : (
                `Pay ${selectedPackage?.price} via Razorpay`
              )}
            </Button>

            {displayError && (
              <div className="text-red-400 mt-4 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3 w-full">
                {displayError}
              </div>
            )}

            {/* Security Note */}
            <div className="mt-4 text-xs text-muted-foreground text-center">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-[#87a7e8] rounded-full text-sm font-medium text-[#0254f4] dark:text-neon-cyan mb-6 backdrop-blur-sm">
              Services
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              {" "}
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
               Our Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive EdTech and B2B solutions designed to accelerate your
              business growth and drive measurable results across all aspects of
              your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Service Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 `}
                  >
                    <service.icon className="h-8 w-8 text-black" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.detailedDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#1c949a]">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <IconPoint className="h-4 w-4 text-[#0254f4] mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#0254f4]">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 6).map((benefit, idx) => (
                          <li
                            key={benefit}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <IconPoint className="h-4 w-4 text-[#0254f4] mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    asChild
                    className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 hover:scale-105`}
                  >
                    <Link to="/contact">
                      Get Started
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Service Packages */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Service Packages
                  </h3>
                  <div className="space-y-4">
                    {service.packages.map((pkg, pkgIndex) => (
                      <Card
                        key={pkg.name}
                        className="group bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-300"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              {pkg.name}
                            </CardTitle>
                            <span className="text-2xl font-bold text-primary">
                              {pkg.price}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm text-muted-foreground mb-4">
                            {Object.entries(pkg).map(([key, value]) => {
                              if (
                                key === "name" ||
                                key === "price" ||
                                key === "priceValue"
                              )
                                return null;
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                  </span>
                                  <span className="font-medium">
                                    {String(value)}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                          <Button
                            onClick={() => handlePackageSelect(service, pkg)}
                            className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300`}
                            size="sm"
                          >
                            Select Package
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              {" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Why Choose Kin-G Technologies
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group text-center h-full bg-card/50 backdrop-blur-sm border-border/40 hover:border-neon-cyan/50 transition-all duration-500">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-[#1c949a] group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
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
              {" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
               Ready to Get Started
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a customized
              solution that drives your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 hover:bg-neon-blue/10 transition-all px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">
                  Contact Us Today
                  <IconArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/launchpad">Explore Launchpad Program</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
