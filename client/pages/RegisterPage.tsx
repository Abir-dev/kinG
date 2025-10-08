import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import emailjs from "@emailjs/browser";

// Razorpay types are now imported from utils/razorpay

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [shippingAccepted, setShippingAccepted] = useState(false);
  const [refundAccepted, setRefundAccepted] = useState(false);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passoutYear, setPassoutYear] = useState("");
  const [stream, setStream] = useState("");
  const [college, setCollege] = useState("");

  // Get price for workshop
  const getPrice = (): number => {
    return 6; // Workshop price
  };

  // Handle payment
  const handlePayment = async () => {
    setPaymentLoading(true);
    setError("");

    try {
      const amount = getPrice();

      // Use the new payment system
      const { processPayment } = await import("../utils/razorpay");

      await processPayment(
        {
          amount,
          description: "Registration for Workshop",
          prefill: {
            name,
            email,
            contact: phone,
          },
          notes: {
            registration_type: "Workshop",
            passout_year: passoutYear,
            stream,
            college,
          },
        },
        async (paymentDetails) => {
          // Payment successful
          console.log("Payment successful:", paymentDetails);
          await handleRegistrationSubmit(paymentDetails);
        },
        (errorMessage) => {
          setError(errorMessage);
        },
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Payment failed";
      setError(errorMessage);
    } finally {
      setPaymentLoading(false);
    }
  };

  // Handle registration submission after successful payment
  const handleRegistrationSubmit = async (paymentDetails: any) => {
    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const templateParams = {
        name,
        email,
        phone,
        registrationType: "Workshop",
        passoutYear,
        stream,
        college,
        payment_id: paymentDetails.id,
        order_id: paymentDetails.order_id,
        payment_method: paymentDetails.method,
        payment_status: paymentDetails.status,
        amount: getPrice(),
      };

      // Check if EmailJS is properly configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (
        !serviceId ||
        !templateId ||
        !publicKey ||
        serviceId === "service_placeholder" ||
        templateId === "template_placeholder" ||
        publicKey === "public_key_placeholder"
      ) {
        console.warn("EmailJS not configured, skipping email notification");
        // Still mark as success since payment was successful
        setSuccess(true);
        setShowModal(false);
        navigate("/success");
        return;
      }

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } catch (emailError) {
        console.warn("EmailJS failed, but payment was successful:", emailError);
        // Don't throw error, just log it and continue
      }

      setSuccess(true);
      setShowModal(false);
      navigate("/success");
    } catch (err) {
      setError(
        "Registration failed. Please contact support with your payment ID: " +
          paymentDetails.id,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-lg bg-black/40">
          <div className="bg-card/80 backdrop-blur-xl border border-neon-cyan/30 shadow-2xl rounded-xl p-8 w-full max-w-md relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-2xl text-neon-cyan hover:text-neon-purple transition"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-neon-cyan">
              Payment Summary
            </h2>

            {/* Payment Summary */}
            <div className="w-full space-y-4 mb-6">
              <div className="bg-background/50 border border-neon-cyan/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Registration Type:
                  </span>
                  <span className="text-sm font-medium text-neon-cyan">
                    Workshop
                  </span>
                </div>

                <div className="border-t border-neon-cyan/20 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neon-cyan">
                      Total Amount:
                    </span>
                    <span className="text-xl font-bold text-neon-purple">
                      ₹{getPrice()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="bg-background/50 border border-neon-purple/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-neon-purple ">
                  Student Details:
                </h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Name: {name}</div>
                  <div>Email: {email}</div>
                  <div>Phone: {phone}</div>
                  <div>College: {college}</div>
                </div>
              </div>
            </div>

            {/* Terms and Privacy Policy */}
            <div className=" space-y-3 mb-5">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms-of-service"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) =>
                    setPrivacyAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="shipping"
                  checked={shippingAccepted}
                  onCheckedChange={(checked) =>
                    setShippingAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="shipping"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/shipping-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Shipping Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="refund"
                  checked={refundAccepted}
                  onCheckedChange={(checked) =>
                    setRefundAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="refund"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/refund-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Refund Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              size="lg"
              className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan py-3 text-lg font-semibold"
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
                  Loading Payment...
                </div>
              ) : (
                `Pay ₹${getPrice()} via Razorpay`
              )}
            </Button>

            {error && (
              <div className="text-neon-purple mt-4 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

            {/* Terms and Privacy Policy
            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) =>
                    setTermsAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms-of-service"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) =>
                    setPrivacyAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="shipping"
                  checked={shippingAccepted}
                  onCheckedChange={(checked) =>
                    setShippingAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="shipping"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/shipping-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Shipping Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="refund"
                  checked={refundAccepted}
                  onCheckedChange={(checked) =>
                    setRefundAccepted(checked as boolean)
                  }
                />
                <label
                  htmlFor="refund"
                  className="text-sm text-muted-foreground"
                >
                  I agree to the{" "}
                  <Link
                    to="/refund-policy"
                    className="text-neon-cyan hover:text-neon-purple"
                    target="_blank"
                  >
                    Refund Policy
                  </Link>
                </label>
              </div>
            </div> */}

            {/* Security Note */}
            <div className="mt-4 text-xs text-muted-foreground text-center">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        </div>
      )}

      <Layout>
        {/* Modern Minimalist Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center ">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-[#87a7e8] rounded-full text-sm font-medium text-[#0254f4] dark:text-neon-cyan mb-6 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-[#0254f4] rounded-full animate-pulse"></div>
                    Admissions Open 2025
                  </div>

                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tight">
                    Build Your
                    <br />
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                      Tech Career
                    </span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                    Join thousands of successful graduates who transformed their
                    careers with our industry-focused programs.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#20b7bf]">
                      1000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Graduates
                    </div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-purple">
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Placement Rate
                    </div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#20b7bf]">
                      4.8★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Student Rating
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="no-global-button border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-6 py-2 font-semibold"
                    onClick={() => {
                      document
                        .querySelector("#registration-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Start Your Journey
                  </Button>
                </div>
              </motion.div>

              {/* Right Side - Visual */}
              <motion.div
                className="relative lg:pl-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-card border border-border/40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-lg">
                            KG
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Kin-G Technologies</h3>
                          <p className="text-sm text-muted-foreground">
                            Premium Education Platform
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20">
                          <span className="text-sm font-medium">Workshops</span>
                          <span className="text-[#20b7bf] font-semibold">
                            ₹6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-cyan/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section
          id="registration-form"
          className="min-h-screen  relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-neon-cyan rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple rounded-full blur-3xl"></div>
          </div>

          <div className="relative grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="bg-card/5 backdrop-blur-sm">
              <div className="p-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    {/* <div className="w-2 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"></div> */}
                    <div>
                      <h1 className="text-3xl font-bold bg-gradient-to-r  bg-clip-text text-transparent">
                        Ready to Get Started?
                      </h1>
                      <p className="text-muted-foreground text-lg">
                        Complete your registration in a few simple steps
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {/* Workshop Registration Info */}
                  <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-lg">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-lg">W</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neon-cyan">Workshop Registration</h3>
                          <p className="text-sm text-muted-foreground">Join our comprehensive workshop</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-neon-purple">₹6</div>
                        <div className="text-sm text-muted-foreground">One-time payment</div>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields - Modern Glass Design */}
                  <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-lg">
                    <div className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                          Full Name
                        </label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                        />
                      </div>

                      {/* Two Column Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                            Phone
                          </label>
                          <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="+91 12345 67890"
                            required
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                            Email
                          </label>
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                      </div>


                      {/* Academic Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                            Graduation Year
                          </label>
                          <Input
                            value={passoutYear}
                            onChange={(e) => setPassoutYear(e.target.value)}
                            placeholder="2025"
                            required
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                            Stream
                          </label>
                          <Input
                            value={stream}
                            onChange={(e) => setStream(e.target.value)}
                            placeholder="Computer Science"
                            required
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground/90 mb-1.5 block">
                          College/University
                        </label>
                        <Input
                          value={college}
                          onChange={(e) => setCollege(e.target.value)}
                          placeholder="IIT Kharagpur"
                          required
                          className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    variant="outline"
                    className=" text-lg no-global-button border-neon-purple/50 text-[#1c949a] hover:text-[#1c949a] transition-all duration-300 px-6 py-2 font-semibold w-full"
                    onClick={() => {
                      if (
                        name.trim() &&
                        phone.trim() &&
                        email.trim() &&
                        passoutYear.trim() &&
                        stream.trim() &&
                        college.trim()
                      ) {
                        setShowModal(true);
                      }
                    }}
                  >
                    Proceed to Payment →
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Image */}
            <div className="relative min-h-screen overflow-hidden group">
              <img
                src="/images/launchpad3.jpeg"
                alt="Launchpad Program"
                className="w-full h-full min-h-screen object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with gradient and content */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Transform Your Future
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Join thousands of successful graduates who've built amazing
                    careers with our programs.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-cyan">
                        1000+
                      </div>
                      <div className="text-xs text-white/70">Graduates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-purple">
                        95%
                      </div>
                      <div className="text-xs text-white/70">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-cyan">
                        4.8★
                      </div>
                      <div className="text-xs text-white/70">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-12 w-2 h-2 bg-neon-purple rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
