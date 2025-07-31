import { useState } from 'react';
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
                  formData.append('Course', selectedCourse);
                  formData.append('Year of Passout', passoutYear);
                  formData.append('Stream', stream);
                  formData.append('College', college);
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
        <section className="py-0 px-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left: Form */}
            <div className="flex flex-col justify-center items-start px-8 py-0 h-full min-h-screen">
              <div className="w-full max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 text-left"
                >
                  <div className="w-full flex justify-center mb-4">
                    <span className="inline-block px-4 py-2 rounded-full border border-neon-cyan/30 text-sm font-medium text-neon-cyan">
                      Register
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    Register for a <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent neon-text-glow">Course</span>
                  </h1>
                  <p className="text-base text-muted-foreground max-w-xl">
                    Select your desired course and complete your registration. Secure your spot and accelerate your career with Kin-G Technology.
                  </p>
                </motion.div>
                <Card className="bg-card/50 backdrop-blur-sm border-border/40 shadow-lg text-left">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-2">Course Registration</CardTitle>
                    <CardDescription>Select a course and fill in your details to proceed to payment.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Full Name - single column */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                    </div>
                    {/* Other fields - two columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                        <Input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+91 89104 81993" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email ID *</label>
                        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Select Course *</label>
                        <select
                          value={selectedCourse}
                          onChange={e => setSelectedCourse(e.target.value)}
                          className="w-full bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                        >
                          {courseOptions.map(course => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Year of Passout *</label>
                        <Input value={passoutYear} onChange={e => setPassoutYear(e.target.value)} placeholder="e.g. 2025" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Your Stream *</label>
                        <Input value={stream} onChange={e => setStream(e.target.value)} placeholder="e.g. Computer Science" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Your College *</label>
                        <Input value={college} onChange={e => setCollege(e.target.value)} placeholder="e.g. IIT Kharagpur" className="bg-background/50 border-border/40 focus:border-neon-cyan/50" />
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 neon-glow-cyan hover:scale-[1.02] py-4 text-lg font-semibold"
                      onClick={() => setShowModal(true)}
                    >
                      Proceed to Payment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            {/* Right: Image Placeholder */}
            <div className="w-full h-full flex items-stretch justify-center">
              <div className="w-full h-full overflow-hidden bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Course Registration Placeholder"
                  className="object-cover w-full h-full opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
