import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-end pb-16 pt-24 section-padding bg-background">
      {/* Large centered DESIGNER text behind everything */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center pointer-events-none pt-[25vh]"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      >
          <h1
          className="text-display text-[clamp(5rem,18vw,16rem)] leading-none"
          style={{
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          DESIGNER
        </h1>
      </motion.div>

      {/* Centered portrait in tall arch shape */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="relative">
          <div
            className="w-[300px] h-[480px] md:w-[380px] md:h-[580px] lg:w-[440px] lg:h-[660px] mx-auto"
            style={{
              borderRadius: "220px 220px 40px 40px",
              background: "radial-gradient(ellipse at 50% 30%, hsl(8 90% 55%) 0%, hsl(12 85% 40%) 100%)",
            }}
          />
          <img
            src="https://i.pinimg.com/736x/d7/f4/14/d7f4141d12eb068276e5219c99787a6e.jpg"
            alt="Designer portrait"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ borderRadius: "220px 220px 40px 40px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "220px 220px 40px 40px",
              boxShadow: "inset 0 -80px 60px -40px hsl(8 85% 30% / 0.4), 0 20px 60px -10px hsl(0 0% 0% / 0.3)",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom content */}
      <div className="relative z-10 w-full mt-auto pointer-events-none px-6 md:px-12 lg:px-17 pb-12">
        
        {/* Left Side: Glass Effect around Text */}
        <motion.div
          className="pointer-events-auto w-full max-w-lg lg:max-w-xl translate-y-4 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-[3rem] p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-foreground/80 text-sm md:text-base mb-4">
            Hi 👋 I'm <span className="font-semibold text-foreground">Ayush Bista</span>
          </p>
          <h2 className="text-display text-foreground text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tight uppercase">
            programming,<br />
            PRODUCT UI/UX<br />
            & DESIGN.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
