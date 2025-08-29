import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { IconArrowRight, IconPhone, IconAward, IconUsers, IconTrendingUp } from '@tabler/icons-react';

export function FullScreenHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background image from public folder */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg1.jpeg')" }} // <-- replace with your image name
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30"></div>

        {/* Optional neon accent overlays (keep/remove as you like) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-cyan/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-neon-purple/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20">
                    <span className="text-sm font-medium text-neon-cyan">
                      EdTech & B2B Solutions Provider
                    </span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                    <span className=" text-foreground px-2 rounded">
                      Kin-G
                    </span>
                    <br/>
                    <span className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light">
                      Technologies
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Delivering comprehensive Technologies solutions, career development programs, 
                    and business consulting services to drive growth and innovation.
                  </p>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Development",
                    "CRM Integration", 
                    "Launchpad Career Program",
                    "B2B Consulting",
                    "Digital Marketing"
                  ].map((service) => (
                    <span 
                      key={service}
                      className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:border-neon-cyan/40 transition-colors"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-neon-purple/50 bg-neon-purple/5 hover:bg-neon-purple/30 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
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
                    className="border-2 border-border hover:border-neon-purple/50 hover:bg-neon-purple/5 transition-all px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    <Link to="/contact">
                      <IconPhone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-6">
                <div className="grid gap-6">
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
                      className={`relative p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} border border-border/50 backdrop-blur-sm hover:border-neon-cyan/30 transition-all duration-300 group`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {stat.number}
                          </div>
                          <div className="text-lg font-semibold text-foreground mb-2">
                            {stat.label}
                          </div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {stat.description}
                          </div>
                        </div>
                        <stat.icon className="w-8 h-8 text-neon-cyan/60 group-hover:text-neon-cyan transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="py-2">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground/60 mb-1">Trusted by leading companies worldwide</p>
              <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground/50">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full"></div>
                  <span>Professional Excellence</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-neon-purple rounded-full"></div>
                  <span>Innovation Driven</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-neon-pink rounded-full"></div>
                  <span>Client Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
