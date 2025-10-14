import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, GraduationCap, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import StudentRegistrationForm from './StudentRegistrationForm';

interface ApplyNowAdProps {
  onClose?: () => void;
}

export default function ApplyNowAd({ onClose }: ApplyNowAdProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    // Show the ad after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = () => {
    setShowRegistrationForm(true);
  };

  const handleCloseForm = () => {
    setShowRegistrationForm(false);
    if (onClose) {
      onClose();
    }
  };

  const handleCloseAd = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showRegistrationForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <Card className="relative bg-card/80 backdrop-blur-[14px] backdrop-saturate-[160%] border border-[#0254f4]/60 shadow-[inset_0_0_18px_rgba(2,84,244,0.15),0_8px_20px_rgba(2,84,244,0.10)] hover:shadow-[inset_0_0_18px_rgba(2,84,244,0.25),0_8px_30px_rgba(2,84,244,0.15)] transition-all duration-500 overflow-hidden">
              <CardContent className="p-6 relative">
                {/* Close button */}
                <button
                  onClick={handleCloseAd}
                  className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-10"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0254f4]/10 via-[#1c949a]/10 to-[#20b7bf]/10 opacity-50" />
                
                {/* Sparkle effects */}
                <div className="absolute top-2 left-2">
                  <Sparkles className="h-3 w-3 text-[#0254f4] animate-pulse" />
                </div>
                <div className="absolute top-4 right-8">
                  <Sparkles className="h-2 w-2 text-[#1c949a] animate-pulse delay-1000" />
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  {/* Header */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#0254f4]/20 rounded-lg border border-[#0254f4]/30">
                      <GraduationCap className="h-6 w-6 text-[#0254f4]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg bg-gradient-to-r from-[#0254f4] via-[#1c949a] to-[#20b7bf] bg-clip-text text-transparent">
                        Launch Your Career!
                      </h3>
                      <p className="text-sm text-muted-foreground">Join our Launchpad Program</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-[#0254f4] fill-current" />
                      <span className="text-foreground">Real Project Training</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-[#1c949a] fill-current" />
                      <span className="text-foreground">Job Placement Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-[#20b7bf] fill-current" />
                      <span className="text-foreground">Industry Certifications</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleApplyClick}
                    className="w-full bg-gradient-to-r from-[#0254f4] to-[#1c949a] hover:from-[#1c949a] hover:to-[#20b7bf] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_25px_rgba(2,84,244,0.3)] border-0"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Apply Now - Free Registration
                  </Button>

                  {/* Urgency text */}
                  <p className="text-xs text-muted-foreground text-center">
                    Limited seats available for next batch!
                  </p>
                </div>

                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0254f4]/20 via-[#1c949a]/20 to-[#20b7bf]/20 opacity-30 animate-pulse pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Registration Form Modal */}
      <AnimatePresence>
        {showRegistrationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <StudentRegistrationForm onClose={handleCloseForm} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
