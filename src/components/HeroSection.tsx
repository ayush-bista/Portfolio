import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-end pb-8 lg:pb-16 pt-24 section-padding bg-background">
      {/* Large centered DESIGNER text behind everything */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center pointer-events-none pt-[25vh]"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <h1
          className="text-display text-[clamp(5rem,18vw,26rem)] leading-none"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 mt-auto">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="flex-1 max-w-2xl bg-background/40 backdrop-blur-md border border-border/20 p-6 md:p-8 rounded-[2rem] shadow-xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/80 border border-border/40 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-foreground/90 text-xs font-bold tracking-widest uppercase">
                Available for work
              </p>
            </div>
            
            <p className="text-muted-foreground text-sm md:text-base font-medium mb-3">
              Hi 👋 I'm <span className="text-foreground font-bold">Ayush Bista</span>
            </p>
            <h2 className="text-display text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Crafting <span className="text-accent italic font-light drop-shadow-sm">digital</span><br />
              experiences through<br />
              code & design.
            </h2>
          </div>

          <div className="w-full md:w-auto flex justify-start md:justify-end pb-4 md:pb-0 shrink-0">
            <a 
              href="/Ayush_Bista_CV.pdf"
              download="Ayush_Bista_CV.pdf"
              className="group relative inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-foreground text-background rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 active:scale-95 border border-foreground/10"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] rounded-full" />
              
              <span className="relative z-10 text-sm md:text-base font-bold tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-primary-foreground">
                Download CV
              </span>
              
              <div className="relative z-10 flex flex-col overflow-hidden h-5 w-5 md:h-6 md:w-6 text-background group-hover:text-primary-foreground transition-colors duration-300">
                <Download className="w-full h-full group-hover:translate-y-full transition-transform duration-500 ease-[0.22,1,0.36,1]" strokeWidth={2.5} />
                <Download className="w-full h-full absolute top-0 -translate-y-full group-hover:translate-y-0 text-primary-foreground transition-transform duration-500 ease-[0.22,1,0.36,1]" strokeWidth={2.5} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
