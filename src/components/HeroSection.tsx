import { motion } from "framer-motion";

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
            src="/20250414_114557 (1).jpg"
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
      <div className="relative z-10 w-full mb-0 md:mb-[-2rem] mt-auto pointer-events-none px-4 sm:px-[6vw] md:px-[8vw] lg:px-[0vw] pb-4">
        
        {/* Left Side: Glass Box with Original Text */}
        <motion.div
          className="pointer-events-auto bg-background/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem] p-8 md:p-10 max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg translate-y-8 lg:translate-y-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 transition-colors mb-6 shadow-sm border border-black/5">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span> */}
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-foreground/80 uppercase">
              AVAILABLE FOR WORK
            </span>
          </div> 

          <p className="text-foreground/80 text-sm mb-3">
            Hi 👋 I'm <span className="font-semibold text-foreground">Ayush Bista</span>
          </p>
          <h2 className="text-display text-foreground text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
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
