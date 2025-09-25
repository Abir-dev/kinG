import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FullScreenHero() {
  const images = [
    "/images/hero(1).png",
    "/images/hero(2).png",
    "/images/hero(3).png",
    "/images/hero(4).png",
    "/images/hero(5).png",
  ];

  // Mobile-specific posters (update paths when mobile assets are provided)
  const imagesMobile = [
    "/images/hero-mobile(1).png",
    "/images/hero-mobile(2).png",
    "/images/hero-mobile(3).png",
    "/images/hero-mobile(4).png",
    "/images/hero-mobile(5).png",
  ];

  // clone slides for infinite loop
  const slides = [images[images.length - 1], ...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(1); // start at real first
  const [isAnimating, setIsAnimating] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // preload images and then start autoplay
  useEffect(() => {
    let isCancelled = false;

    const preload = async () => {
      const allSources = [...images, ...imagesMobile];
      const loaders = allSources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          }),
      );

      // Fallback timeout to avoid waiting forever
      const timeout = new Promise<void>((resolve) => setTimeout(resolve, 1500));

      await Promise.race([Promise.all(loaders), timeout]);
      if (!isCancelled) setIsLoaded(true);
    };

    preload();

    return () => {
      isCancelled = true;
    };
  }, []);

  // autoplay only after loaded
  useEffect(() => {
    if (!isLoaded) return;
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isLoaded]);

  // fix smooth infinite loop
  const handleTransitionEnd = () => {
    let jumped = false;
    if (currentIndex === slides.length - 1) {
      // at cloned last → jump to real first without animation
      setIsAnimating(false);
      setCurrentIndex(1);
      jumped = true;
    }
    if (currentIndex === 0) {
      // at cloned first → jump to real last without animation
      setIsAnimating(false);
      setCurrentIndex(slides.length - 2);
      jumped = true;
    }

    // Re-enable animation on the next frame to avoid any visual blink
    if (jumped) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-4 scroll-smooth">
      <div className="relative w-full h-[70vh] sm:h-[80vh]">
        {/* Slides container */}
        <div
          className={`flex h-full ${
            isAnimating ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 h-[500px]"
              aria-hidden={currentIndex !== idx}
            >
              {(() => {
                // Map cloned indices to real image index to select the matching mobile poster
                const realImageIndex =
                  idx === 0
                    ? images.length - 1
                    : idx === slides.length - 1
                    ? 0
                    : idx - 1;

                const mobileSrc = imagesMobile[realImageIndex] ?? src;

                return (
                  <picture>
                    <source media="(max-width: 640px)" srcSet={mobileSrc} />
                    <img
                      src={src}
                      alt={`Hero ${realImageIndex + 1}`}
                      className="w-full h-[500px] object-cover"
                      loading={idx === 1 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                  </picture>
                );
              })()}
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full text-[#1c949a] shadow-lg transition-colors no-global-button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full text-[#1c949a] shadow-lg transition-colors no-global-button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bullets */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => {
            const realIndex =
              currentIndex === 0
                ? images.length - 1
                : currentIndex === slides.length - 1
                ? 0
                : currentIndex - 1;

            return (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(idx + 1); // +1 because of clone
                }}
                className={`w-3 h-3 rounded-full transition-colors no-global-button ${
                  idx === realIndex ? "bg-primary" : "bg-gray-400/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
