import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, User, Phone, Mail, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface StudentRegistrationFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  customCourse: string;
  experience: string;
}

import { getApiUrl } from "@/config/env";
import { useToast } from "@/hooks/use-toast";

export default function StudentRegistrationForm({ onClose }: StudentRegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    customCourse: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const courses = [
    'AI Accelerating Mastery Course (4 Months)',
    'Full Stack Development & Web Page Building (3 Months)',
    'Stock Market Algotrade with AI Tools (4 Months)',
    'Software Development & Android Apps (6 Months)',
    'Tech Support & Network Support (3 Months)',
    'Finance & Sales Speech Readiness (4 Months)',
    'Digital Marketing Course (8 Weeks)',
    'Jr. Developer - Basic (3 Months)',
    'Jr. Developer - Extended (6 Months)',
    'Jr. Developer - Plus (9 Months)',
    'Microsoft Data Analyst Training (1 Month)',
    'Google Data Analyst Training (1 Month)',
    'Meta Data Analytics Training (1 Month)',
    'Other'
  ];

  const experienceLevels = [
    'Beginner (0-1 years)',
    'Intermediate (1-3 years)',
    'Advanced (3-5 years)',
    'Expert (5+ years)'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (formData.course === 'Other' && !formData.customCourse.trim()) {
      newErrors.customCourse = 'Please specify your course interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the backend API
      const response = await fetch(getApiUrl('api/users/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        const maybeJson = await response
          .json()
          .catch(() => ({ message: `HTTP ${response.status}` }));
        // Show specific messages for 409/400/500
        const message =
          maybeJson?.message ||
          (response.status === 409
            ? 'A user with this email already exists.'
            : response.status === 400
            ? 'Please check the form fields and try again.'
            : 'Server error. Please try again later.');
        toast({ title: 'Registration failed', description: message, variant: 'destructive' as any });
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        console.log('Registration successful:', result);
        toast({ title: 'Registration successful', description: "We'll contact you within 24 hours." });
      } else {
        // Handle API errors
        console.error('Registration failed:', result);
        toast({ title: 'Registration failed', description: result.message || 'Please try again.', variant: 'destructive' as any });
      }
    } catch (error) {
      console.error('Registration error:', error);
      const message =
        (error as Error)?.message?.includes('Failed to fetch')
          ? 'Network error. Check your connection and server.'
          : (error as Error)?.message || 'Registration failed.';
      toast({ title: 'Registration error', description: message, variant: 'destructive' as any });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-6"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2">
              Registration Successful!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in our Launchpad Program! Your account has been created and our team will contact you within 24 hours to discuss your career goals and next steps.
            </p>
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-card/90 backdrop-blur-[14px] backdrop-saturate-[160%] border border-[#0254f4]/60 shadow-[inset_0_0_18px_rgba(2,84,244,0.15),0_8px_20px_rgba(2,84,244,0.10)]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#0254f4]/20 rounded-lg border border-[#0254f4]/30">
              <GraduationCap className="h-6 w-6 text-[#0254f4]" />
            </div>
            <CardTitle className="text-xl bg-gradient-to-r from-[#0254f4] via-[#1c949a] to-[#20b7bf] bg-clip-text text-transparent">
              Student Registration
            </CardTitle>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Join our Launchpad Program and kickstart your tech career
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Full Name *</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email Address *</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Contact Number *</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Course Selection */}
          <div className="space-y-2">
            <Label htmlFor="course">Course Interest *</Label>
            <Select
              value={formData.course}
              onValueChange={(value) => handleInputChange('course', value)}
            >
              <SelectTrigger className={errors.course ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="animate-none">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="animate-none">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course && (
              <p className="text-sm text-red-500">{errors.course}</p>
            )}
          </div>

          {/* Custom Course Input - Show only when "Other" is selected */}
          {formData.course === 'Other' && (
            <div className="space-y-2">
              <Label htmlFor="customCourse" className="flex items-center space-x-2">
                <span>Specify Your Course Interest *</span>
              </Label>
              <Input
                id="customCourse"
                type="text"
                placeholder="Enter your course of interest"
                value={formData.customCourse}
                onChange={(e) => handleInputChange('customCourse', e.target.value)}
                className={errors.customCourse ? 'border-red-500' : ''}
              />
              {errors.customCourse && (
                <p className="text-sm text-red-500">{errors.customCourse}</p>
              )}
            </div>
          )}

          {/* Experience Level */}
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Select
              value={formData.experience}
              onValueChange={(value) => handleInputChange('experience', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent className="animate-none">
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level} className="animate-none">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0254f4] to-[#1c949a] hover:from-[#1c949a] hover:to-[#20b7bf] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_25px_rgba(2,84,244,0.3)] border-0"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              </motion.div>
            ) : null}
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By registering, you agree to our terms and conditions. We'll contact you within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
