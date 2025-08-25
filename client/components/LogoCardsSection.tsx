import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export const LogoCardsSection = () => {
  // Create an array of logo card items
  // const logoCards = [
  //   { id: 1, imagePath: "/logocards/logocard1.jpeg" },
  //   { id: 2, imagePath: "/logocards/logocard2.jpeg" },
  //   { id: 3, imagePath: "/logocards/logocard3.jpeg" },
  //   { id: 4, imagePath: "/logocards/logocard4.jpeg" },
  //   { id: 5, imagePath: "/logocards/logocard5.jpeg" },
  //   { id: 6, imagePath: "/logocards/logocard6.jpeg" },
  //   { id: 7, imagePath: "/logocards/logocard7.jpeg" },
  //   { id: 8, imagePath: "/logocards/logocard8.jpeg" },
  // ];

  const logoCards = [
       { id: 1, imagePath: "/logocards/LC1.png" },
    { id: 2, imagePath: "/logocards/LC2.png" },
    { id: 3, imagePath: "/logocards/LC3.png" },
    { id: 4, imagePath: "/logocards/LC4.png" },
    { id: 5, imagePath: "/logocards/LC5.png" },
    { id: 6, imagePath: "/logocards/LC6.png" },
    { id: 7, imagePath: "/logocards/LC7.png" },
    { id: 8, imagePath: "/logocards/LC8.png" },
    { id: 9, imagePath: "/logocards/LC9.png" },
    { id: 10, imagePath: "/logocards/LC10.png" },
  ]

  // Format the items for the InfiniteMovingCards component
  const formattedItems = logoCards.map((card) => ({
    quote: "", // Empty as we're only showing images
    name: `Logo ${card.id}`,
    title: "", // Empty as we're only showing images
    imagePath: card.imagePath,
  }));

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 futuristic-grid opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 rounded-full text-sm font-medium text-neon-cyan mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            Trusted Global Partnerships
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse delay-500"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Industry{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent neon-text-glow">
              Giants
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-muted-foreground font-normal">Choose Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Collaborating with Fortune 500 companies and innovative startups to deliver cutting-edge solutions that transform businesses
          </p>
        </motion.div>

        {/* Custom InfiniteMovingCards Component */}
        <InfiniteMovingCards
          items={formattedItems}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="py-4"
        />

        {/* Enhanced Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "50+", label: "Global Partners", color: "text-neon-cyan" },
            { number: "98%", label: "Success Rate", color: "text-neon-purple" },
            { number: "24/7", label: "Support", color: "text-neon-pink" },
            { number: "100M+", label: "Users Served", color: "text-neon-cyan" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className={stat.color}>{stat.number}</span>
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};