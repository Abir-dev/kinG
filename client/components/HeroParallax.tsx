import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IconCode, IconBulb, IconUsers, IconTrendingUp, IconDatabase, IconShield } from '@tabler/icons-react';

const products = [
  {
    title: "Web Development",
    link: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
  },
  {
    title: "Launchpad Program",
    link: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  },
  {
    title: "CRM Integration",
    link: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    title: "Telecalling Services",
    link: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop",
  },
  {
    title: "Data Analytics",
    link: "https://images.unsplash.com/photo-1487174244972-cd67687c1e2e?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1487174244972-cd67687c1e2e?w=400&h=300&fit=crop",
  },
  {
    title: "Mobile Applications",
    link: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
  },
  {
    title: "Cloud Solutions",
    link: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  {
    title: "Career Development",
    link: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    title: "Enterprise Solutions",
    link: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
  },
  {
    title: "B2B Consulting",
    link: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
  },
  {
    title: "EdTech Solutions",
    link: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
  },
  {
    title: "Digital Marketing",
    link: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
  },
  {
    title: "Training Programs",
    link: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    title: "AI Integration",
    link: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  {
    title: "Quality Assurance",
    link: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
  },
];

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Enhanced smoother transforms with extended ranges for better parallax effect
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 300, 800, 1200],
    { clamp: false }
  );
  const translateXReverse = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, -300, -800, -1200],
    { clamp: false }
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [15, 8, 3, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.4], [0.1, 0.6, 0.9, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 5, 2, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-500, -100, 200, 500]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [1.4, 1.2, 1.05, 1]);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1200px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          scale,
        }}
        className="will-change-transform mt-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-24 mb-32 will-change-transform">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-32 space-x-24 will-change-transform">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-24 mb-32 will-change-transform">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-10 md:pt-20 pb-20 md:pb-40 px-4 w-full left-0 top-0">
      {/* Company Badge */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200 dark:border-blue-800 text-sm font-medium text-blue-700 dark:text-blue-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          Part of SOH Group
        </span>
      </motion.div> */}

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-7xl lg:text-8xl font-bold dark:text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
          Kin-G
        </span>
        <br />
        <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-700 dark:text-neutral-300 block mt-2">
          Technology 
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-neutral-600 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        The <span className="font-semibold text-blue-600 dark:text-blue-400">EdTech and B2B arm</span> , delivering
        comprehensive telecalling, CRM integration, development services, and our flagship{" "}
        <span className="font-semibold text-purple-600 dark:text-purple-400">Launchpad Career Development Program</span>
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-8 mt-12"
      >
        {[
          { number: "500+", label: "Projects Delivered" },
          { number: "1000+", label: "Careers Launched" },
          { number: "50+", label: "Enterprise Clients" }
        ].map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stat.number}
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -25,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.6,
      }}
      key={product.title}
      className="group/product h-[28rem] w-[32rem] relative flex-shrink-0 will-change-transform"
    >
      <div className="block group-hover/product:shadow-3xl rounded-2xl overflow-hidden">
        <img
          src={product.thumbnail}
          height="700"
          width="700"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-110"
          alt={product.title}
          loading="lazy"
        />
      </div>

      {/* Enhanced overlay with gradient */}
      <motion.div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-95 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none rounded-2xl"
        transition={{ duration: 0.4 }}
      />

      {/* Enhanced title with better positioning */}
      <motion.h2
        className="absolute bottom-8 left-8 opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold tracking-tight"
        initial={{ y: 30, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {product.title}
      </motion.h2>

      {/* Subtle border on hover with glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/product:border-blue-400/60 group-hover/product:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-400"
      />
    </motion.div>
  );
};
