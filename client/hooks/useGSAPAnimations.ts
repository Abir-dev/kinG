import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.registerPlugin(ScrollTrigger);

    // Create smooth scroll animations
    const initSmoothScroll = () => {
      // Enhanced parallax effects
      gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray('.parallax-fast').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
      // Fade in animations for elements with .gsap-fade-in class
      gsap.utils.toArray('.gsap-fade-in').forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in from left animations
      gsap.utils.toArray('.gsap-slide-left').forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            x: -100 
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in from right animations
      gsap.utils.toArray('.gsap-slide-right').forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            x: 100 
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Scale animations
      gsap.utils.toArray('.gsap-scale').forEach((element: any) => {
        gsap.fromTo(element, 
          { 
            opacity: 0, 
            scale: 0.8 
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stagger animations for children
      gsap.utils.toArray('.gsap-stagger').forEach((container: any) => {
        const children = container.children;
        gsap.fromTo(children, 
          { 
            opacity: 0, 
            y: 30 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Initialize animations
    initSmoothScroll();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    refresh: () => ScrollTrigger.refresh()
  };
};
