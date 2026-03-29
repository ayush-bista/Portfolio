import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "5.0", label: "Avg. Client Rating" },
];

const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Stagger animation for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  // Enhanced stats animation
  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* ABOUT header with enhanced animation */}
        <ScrollReveal>
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.h2
              className="text-display text-[clamp(4rem,14vw,12rem)] leading-none"
              style={{
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              ABOUT
            </motion.h2>
          </motion.div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Left: Portrait - 2 cols with premium entrance */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <motion.div
              className="relative flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9, x: -40, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                ease: [0.19, 0.76, 0.32, 1],
              }}
            >
              <motion.div
                className="relative w-full max-w-[360px] aspect-[3/4]"
                whileHover={{ scale: 1.02, y: -6, rotate: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.img
                  src="src\assets\ReLens_Image_2024-10-21_20_08_26_2567x3462.jpg"
                  alt="Designer portrait"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl shadow-black/40"
                  initial={{ opacity: 0, scale: 1.06, y: 24 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15,
                    ease: [0.2, 0.7, 0.3, 1],
                  }}
                />
                {/* Subtle bottom gradient for depth */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(0 0% 0% / 0.45) 0%, transparent 45%)",
                  }}
                />
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Content - 3 cols with staggered animations */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.span
                  className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  About Me
                </motion.span>
                <motion.h3
                  className="text-display text-foreground text-2xl md:text-3xl leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  CRAFTING INTUITIVE DIGITAL EXPERIENCES
                </motion.h3>
              </motion.div>

              <div className="space-y-4">
                {[
                  "A passionate UI/UX designer and frontend developer with 3+ years of experience creating impactful digital products. I specialize in turning complex problems into elegant, user-centered solutions.",
                  "Based in Itahari, Nepal, I've helped 20+ clients bring their visions to life through wireframing, prototyping, and visual design.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="text-muted-foreground text-sm leading-[1.8] max-w-lg"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={paragraphVariants}
                  >
                    {text}
                  </motion.p>
                ))}

                {/* Core focus pills */}
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {["Product design", "Interaction design", "Design systems"].map((chip) => (
                    <span
                      key={chip}
                      className="text-[11px] uppercase tracking-[0.18em] rounded-full border border-border/60 px-4 py-1 text-foreground/80 bg-background/40 backdrop-blur"
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Stats - enhanced animation with scale and bounce */}
              <motion.div
                className="pt-8 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={statVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.p
                        className="text-display text-3xl md:text-4xl text-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.5 }}
                      >
                        {stat.value}
                      </motion.p>
                      <motion.p
                        className="text-muted-foreground text-[11px] uppercase tracking-widest mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.6 }}
                      >
                        {stat.label}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
