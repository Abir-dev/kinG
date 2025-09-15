import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { IconArrowRight, IconPhone, IconAward, IconUsers, IconTrendingUp } from '@tabler/icons-react';

export function FullScreenHero() {
  return (
    <section className="relative border-none overflow-hidden min-h-[60vh] sm:h-[50vh]"> {/* prevent clipping and borders */}
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background image from public folder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat " /* no-repeat avoids faint lines */
          style={{ backgroundImage: "url('/images/bg1.jpeg')" }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 bg-no-repeat pointer-events-none mix-blend-normal"></div>

        {/* Accent overlays (non-overlapping to avoid seams) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/10 to-transparent bg-no-repeat pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-purple/10 to-transparent bg-no-repeat pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px- py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
              
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20">
                    <span className="text-xs sm:text-sm font-medium text-neon-cyan">
                      EdTech & B2B Solutions Provider
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className="text-foreground px-1.5 rounded">
                      Kin-G
                    </span>
                    <br/>
                    <span className="text-foreground text-3xl md:text-5xl lg:text-6xl font-light">
                      Technologies
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Delivering comprehensive Technologies solutions, career development programs, and business consulting services to drive growth and innovation.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl"
                  >
                    <Link to="/services">
                      Explore Our Services
                      <IconArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-2 border-border hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl"
                  >
                    <Link to="/contact">
                      <IconPhone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Stats (now visible on mobile under text) */}
              <div className="space-y-4 md:space-y-6">
                <div className="grid gap-3 sm:gap-4">
                  {[
                    { 
                      number: "500+", 
                      label: "Projects Delivered", 
                      description: "Across diverse industries and technologies",
                      icon: IconAward,
                      gradient: "from-neon-cyan/20 to-neon-cyan/5"
                    },
                    { 
                      number: "1000+", 
                      label: "Careers Launched", 
                      description: "Through our comprehensive training programs",
                      icon: IconUsers,
                      gradient: "from-neon-purple/20 to-neon-purple/5"
                    },
                    { 
                      number: "50+", 
                      label: "Enterprise Clients", 
                      description: "Trust our solutions for their business growth",
                      icon: IconTrendingUp,
                      gradient: "from-neon-pink/20 to-neon-pink/5"
                    }
                  ].map((stat) => (
                    <div 
                      key={stat.label} 
                      className={`relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} border border-border/50 backdrop-blur-sm hover:border-neon-cyan/30 transition-all duration-300 group`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          {/* Number + Label on same line */}
                          <div className="flex items-baseline gap-2 mb-1.5">
                            <div className="text-2xl sm:text-3xl font-bold text-foreground">
                              {stat.number}
                            </div>
                            <div className="text-base sm:text-lg font-semibold text-foreground">
                              {stat.label}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {stat.description}
                          </div>
                        </div>
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-neon-cyan/60 group-hover:text-neon-cyan transition-colors mt-0.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Optional bottom accents removed to avoid additional edge lines */}
      </div>
    </section>
  );
}
