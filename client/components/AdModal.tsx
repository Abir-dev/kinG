import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, GraduationCap, Star, Sparkles, Rocket, Target, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import StudentRegistrationForm from './StudentRegistrationForm';

interface AdModalProps {
  onClose?: () => void;
}

export default function AdModal({ onClose }: AdModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    // Show the ad after 2 seconds (immediately when site loads)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
          >
            {/* Background blur overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="w-full max-w-2xl my-auto"
            >
              <Card className="relative bg-card/95 backdrop-blur-[20px] backdrop-saturate-[180%] border border-[#0254f4]/70 shadow-[inset_0_0_25px_rgba(2,84,244,0.2),0_12px_40px_rgba(2,84,244,0.15)] hover:shadow-[inset_0_0_25px_rgba(2,84,244,0.3),0_12px_50px_rgba(2,84,244,0.2)] transition-all duration-500 overflow-hidden">
                <CardContent className="p-4 sm:p-6 md:p-8 relative">
                  {/* Close button */}
                  <button
                    onClick={handleCloseAd}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors z-10 p-2 hover:bg-muted/50 rounded-full touch-manipulation"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0254f4]/15 via-[#1c949a]/15 to-[#20b7bf]/15 opacity-60" />
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-3 left-3 hidden sm:block">
                    <Sparkles className="h-4 w-4 text-[#0254f4] animate-pulse" />
                  </div>
                  <div className="absolute top-6 right-12 hidden sm:block">
                    <Sparkles className="h-3 w-3 text-[#1c949a] animate-pulse delay-1000" />
                  </div>
                  <div className="absolute bottom-6 left-8 hidden sm:block">
                    <Sparkles className="h-3 w-3 text-[#20b7bf] animate-pulse delay-2000" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4 sm:space-y-6 relative z-10">
                    {/* Header */}
                    <div className="text-center space-y-3 sm:space-y-4">
                      <div className="flex justify-center">
                        <div className="p-2 sm:p-3 bg-[#0254f4]/20 rounded-xl border border-[#0254f4]/40">
                          <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-[#0254f4]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0254f4] via-[#1c949a] to-[#20b7bf] bg-clip-text text-transparent mb-2">
                          Launch Your Tech Career!
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
                          Join our exclusive Launchpad Program and transform your future
                        </p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-[#0254f4]/10 rounded-lg border border-[#0254f4]/20">
                        <div className="p-1.5 sm:p-2 bg-[#0254f4]/20 rounded-lg flex-shrink-0">
                          <Target className="h-4 w-4 sm:h-5 sm:w-5 text-[#0254f4]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs sm:text-sm">Real Projects</h4>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">Hands-on training</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-[#1c949a]/10 rounded-lg border border-[#1c949a]/20">
                        <div className="p-1.5 sm:p-2 bg-[#1c949a]/20 rounded-lg flex-shrink-0">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#1c949a]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs sm:text-sm">Job Guarantee</h4>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">100% placement</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-[#20b7bf]/10 rounded-lg border border-[#20b7bf]/20">
                        <div className="p-1.5 sm:p-2 bg-[#20b7bf]/20 rounded-lg flex-shrink-0">
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-[#20b7bf]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs sm:text-sm">Certifications</h4>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">Industry recognized</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#0254f4] fill-current flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">Expert-led training with industry professionals</span>
                      </div>
                      <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#1c949a] fill-current flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">Portfolio development with real-world projects</span>
                      </div>
                      <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#20b7bf] fill-current flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">Career guidance and interview preparation</span>
                      </div>
                      <div className="flex items-start sm:items-center space-x-2 sm:space-x-3">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#0254f4] fill-current flex-shrink-0 mt-0.5 sm:mt-0" />
                        <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">Lifetime access to learning materials</span>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center space-y-3 sm:space-y-4">
                      <div className="bg-gradient-to-r from-[#0254f4]/10 to-[#20b7bf]/10 p-3 sm:p-4 rounded-lg border border-[#0254f4]/30">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          <span className="font-bold text-[#0254f4]">Limited Time Offer:</span> Free registration for the next batch!
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          Only 50 seats available • Next batch starts in 2 weeks
                        </p>
                      </div>
                      
                      <Button
                        onClick={handleRegisterClick}
                        className="w-full bg-gradient-to-r from-[#0254f4] to-[#1c949a] hover:from-[#1c949a] hover:to-[#20b7bf] text-white font-bold py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_12px_35px_rgba(2,84,244,0.4)] border-0 touch-manipulation"
                      >
                        <UserPlus className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                        Register Now - Free Registration
                      </Button>
                      
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        No payment required • Secure registration • 24/7 support
                      </p>
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0254f4]/20 via-[#1c949a]/20 to-[#20b7bf]/20 opacity-40 animate-pulse pointer-events-none" />
                </CardContent>
              </Card>
            </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-lg overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md max-h-[95vh] overflow-y-auto my-auto"
            >
              <StudentRegistrationForm onClose={handleCloseForm} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
