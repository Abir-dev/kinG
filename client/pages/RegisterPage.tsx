import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';

const courses = [
  'Launchpad Career Program',
  'Full Stack Development',
  'Digital Marketing',
  'B2B Sales Mastery',
  'UI/UX Design',
  'Product Management',
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const courseOptions = [
    'IT Tech Support',
    'Inside Sales',
    'Marketing & SEO',
    'Graphics Designing',
    'Stock market AI',
    'Web development',
    'Freelancing & Portfolio building',
  ];
  const [registrationType, setRegistrationType] = useState('');
  const [coursePricing, setCoursePricing] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(courseOptions[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passoutYear, setPassoutYear] = useState('');
  const [stream, setStream] = useState('');
  const [college, setCollege] = useState('');

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
            <h2 className="text-2xl font-bold mb-4 text-center text-neon-cyan">Complete Payment</h2>
            <div className="flex flex-col items-center mb-4">
              <img src="/images/QR.png" alt="QR Code" className="w-48 h-48 object-contain mb-2 border border-neon-cyan/30 rounded-lg shadow neon-glow-cyan" />
              <span className="text-sm text-muted-foreground">Scan the QR code to pay</span>
            </div>
            <form
              className="w-full"
              onSubmit={async e => {
                e.preventDefault();
                setSending(true);
                setError('');
                setSuccess(false);
                try {
                  // Prepare form data
                  const formData = new FormData();
                  formData.append('Full Name', name);
                  formData.append('Phone Number', phone);
                  formData.append('Email ID', email);
                  formData.append('Registration Type', registrationType);
                  formData.append('Course', registrationType === 'Registration for Course' ? selectedCourse : 'N/A');
                  formData.append('Course Pricing', registrationType === 'Registration for Course' ? coursePricing : 'N/A');
                  formData.append('Year of Passout', passoutYear);
                  formData.append('Stream', stream);
                  formData.append('College', college);
                  formData.append('Recipient', 'admin@kingtechs.in');
                  if (paymentFile) {
                    formData.append('Payment Receipt', paymentFile);
                  }
                  // Send to backend API (needs to be implemented)
                  await fetch('/api/send-payment', {
                    method: 'POST',
                    body: formData,
                  });
                  setSuccess(true);
                  setShowModal(false);
                  navigate('/success');
                } catch (err) {
                  setError('Failed to send. Please try again.');
                } finally {
                  setSending(false);
                }
              }}
            >
              <label className="block text-sm font-medium mb-2 text-neon-cyan">Upload Payment Screenshot *</label>
              <input
                type="file"
                accept="image/*"
                required
                className="mb-4 block w-full border border-neon-cyan/30 rounded px-3 py-2 bg-background/60 text-neon-cyan focus:border-neon-cyan/50"
                onChange={e => setPaymentFile(e.target.files?.[0] || null)}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan py-3 text-lg font-semibold"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Submit Registration'}
              </Button>
              {error && <div className="text-neon-purple mt-2 text-sm">{error}</div>}
            </form>
          </div>
        </div>
      )}
      <Layout>
        {/* Modern Minimalist Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-sm font-medium text-neon-cyan">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                    Admissions Open 2024
                  </div>
                  
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-tight">
                    Build Your
                    <br />
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                      Tech Career
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                    Join thousands of successful graduates who transformed their careers with our industry-focused programs.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan">1000+</div>
                    <div className="text-sm text-muted-foreground">Graduates</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-purple">95%</div>
                    <div className="text-sm text-muted-foreground">Placement Rate</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan">4.8★</div>
                    <div className="text-sm text-muted-foreground">Student Rating</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      document.querySelector('#registration-form')?.scrollIntoView({ behavior: 'smooth' });
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
                          <span className="text-white font-bold text-lg">KG</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Kin-G Technology</h3>
                          <p className="text-sm text-muted-foreground">Premium Education Platform</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20">
                          <span className="text-sm font-medium">Web Development</span>
                          <span className="text-neon-cyan font-semibold">₹1,299</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
                          <span className="text-sm font-medium">Launchpad Program</span>
                          <span className="text-neon-purple font-semibold">₹3,999</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/20">
                          <span className="text-sm font-medium">AlgoBridge Contest</span>
                          <span className="text-neon-cyan font-semibold">₹199</span>
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
        <section id="registration-form" className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/10 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-neon-cyan rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="bg-card/5 backdrop-blur-sm border-r border-border/10">
              <div className="p-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"></div>
                    <div>
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                        Ready to Get Started?
                      </h1>
                      <p className="text-muted-foreground text-lg">Complete your registration in a few simple steps</p>
                    </div>
                  </div>
                </motion.div>
                
                <div className="space-y-6">
                  {/* Registration Type - Sleek Toggle */}
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">Registration Type</label>
                    <div className="grid grid-cols-3 gap-2 p-1 bg-muted/30 rounded-lg border border-border/50">
                      {[
                        { value: 'Registration for workshop', label: 'Workshop' },
                        { value: 'Registration for Course', label: 'Course' },
                        { value: 'Registration for AlgoBridge', label: 'AlgoBridge' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setRegistrationType(option.value)}
                          className={`py-2.5 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                            registrationType === option.value
                              ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-lg'
                              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Course Pricing - Clean Cards */}
                  {registrationType === 'Registration for Course' && (
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">Select Plan</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'Basic - ₹1299', label: 'Basic', price: '₹1299' },
                          { value: 'Pro - ₹3999', label: 'Pro', price: '₹3999' },
                          { value: 'Ultimate - ₹7999', label: 'Ultimate', price: '₹7999' }
                        ].map((plan) => (
                          <button
                            key={plan.value}
                            onClick={() => setCoursePricing(plan.value)}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                              coursePricing === plan.value
                                ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                                : 'border-border/40 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 text-muted-foreground'
                            }`}
                          >
                            <div className="font-medium text-xs">{plan.label}</div>
                            <div className="font-bold text-sm mt-1">{plan.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Form Fields - Modern Glass Design */}
                  <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-lg">
                    <div className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Full Name</label>
                        <Input 
                          value={name} 
                          onChange={e => setName(e.target.value)} 
                          placeholder="Enter your full name" 
                          required 
                          className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                        />
                      </div>
                      
                      {/* Two Column Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Phone</label>
                          <Input 
                            value={phone} 
                            onChange={e => setPhone(e.target.value)} 
                            type="tel" 
                            placeholder="+91 12345 67890" 
                            required 
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Email</label>
                          <Input 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            type="email" 
                            placeholder="you@example.com" 
                            required 
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                      </div>

                      {/* Course Selection */}
                      {registrationType === 'Registration for Course' && (
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Course</label>
                          <select
                            value={selectedCourse}
                            onChange={e => setSelectedCourse(e.target.value)}
                            required
                            className="w-full bg-background/50 border border-border/50 text-foreground rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                          >
                            {courseOptions.map(course => (
                              <option key={course} value={course} className="bg-background text-foreground">{course}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      {/* Academic Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Graduation Year</label>
                          <Input 
                            value={passoutYear} 
                            onChange={e => setPassoutYear(e.target.value)} 
                            placeholder="2025" 
                            required 
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground/90 mb-1.5 block">Stream</label>
                          <Input 
                            value={stream} 
                            onChange={e => setStream(e.target.value)} 
                            placeholder="Computer Science" 
                            required 
                            className="bg-background/50 border-border/50 focus:border-neon-cyan/60 focus:ring-neon-cyan/20 rounded-lg h-10 text-sm"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground/90 mb-1.5 block">College/University</label>
                        <Input 
                          value={college} 
                          onChange={e => setCollege(e.target.value)} 
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
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 neon-glow-cyan text-lg"
                    onClick={() => {
                      if (
                        name.trim() &&
                        phone.trim() &&
                        email.trim() &&
                        registrationType.trim() &&
                        (registrationType !== 'Registration for Course' || (selectedCourse.trim() && coursePricing.trim())) &&
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
                src="/images/launchpad.jpeg" 
                alt="Launchpad Program" 
                className="w-full h-full min-h-screen object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with gradient and content */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Transform Your Future</h3>
                  <p className="text-white/80 text-sm mb-4">Join thousands of successful graduates who've built amazing careers with our programs.</p>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-cyan">1000+</div>
                      <div className="text-xs text-white/70">Graduates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-purple">95%</div>
                      <div className="text-xs text-white/70">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-neon-cyan">4.8★</div>
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
