import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "DESIGN",
    description: "Efficient, knowledgeable, & exceptional design experiences.",
    image: "https://i.pinimg.com/736x/63/35/5b/63355bd2ebff95a3a321f49b08c9a2c9.jpg",
    tags: ["UI/UX", "Web Design", "Mobile Apps"],
    
  },
  {
    number: "02",
    title: "CODE",
    description: "Writing clean, modern, scalable code that efficiently turns designs into reality.",
    image: "/AURELIA DEMIFINE JEWELLERY.png",
    tags: ["React", "TypeScript", "Full-Stack"],
  },
  {
    number: "03",
    title: "BRANDING",
    description: "Designing cohesive brand identities that connect with audiences through strategic visual storytelling.",
    image: "https://i.pinimg.com/1200x/ed/54/36/ed5436743e5ab154ceb77457a36506e0.jpg",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
  },
  {
    number: "04",
    title: "MARKETING",
    description: "Strategic marketing solutions to grow your brand and reach new customers with data-driven campaigns and measurable results.",
    image: "https://trendsresearch.org/wp-content/uploads/2025/01/Cybersecurity-in-a-World-in-Crisis-V1-copy.jpg",
    tags: ["Social Media", "SEO", "Content Strategy"],
  },
];

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <ScrollReveal>
        <div className="text-center mb-1">
          <h2
            className="text-display text-[clamp(4rem,14vw,12rem)] leading-none"
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SERVICE
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.05}>
            <div
              className="group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Divider */}
              <div
                className="h-px transition-all duration-700 ease-out"
                style={{
                  background: activeIndex === index
                    ? "linear-gradient(90deg, hsl(var(--accent) / 0.5), hsl(var(--accent) / 0.1), transparent)"
                    : "linear-gradient(90deg, hsl(var(--foreground) / 0.08), hsl(var(--foreground) / 0.03))",
                }}
              />

              <div className="py-8 md:py-10 flex items-center gap-6 md:gap-10 relative">
                {/* Number */}
                <span
                  className="text-xs tracking-[0.25em] font-mono shrink-0 relative z-10 transition-colors duration-500"
                  style={{
                    color: activeIndex === index
                      ? "hsl(var(--accent))"
                      : "hsl(var(--muted-foreground) / 0.4)",
                  }}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className="text-display text-3xl md:text-5xl lg:text-6xl flex-1 min-w-0 relative z-10 transition-all duration-500"
                  style={{
                    color: activeIndex === index
                      ? "hsl(var(--accent))"
                      : "hsl(var(--foreground))",
                    letterSpacing: activeIndex === index ? "0.04em" : "0em",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description - slides in on hover (desktop only) */}
                <div className="hidden lg:block relative z-10 overflow-hidden w-[240px] shrink-0">
                  <p
                    className="text-muted-foreground text-xs leading-relaxed transition-all duration-500"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Thumbnail - smooth reveal on hover (desktop only) */}
                <div className="hidden md:block relative z-10 shrink-0 w-[120px] h-[72px]">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                        animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                        exit={{ clipPath: "inset(0 0 0 100%)", opacity: 0 }}
                        transition={{ duration: 0.5, ease: easeSmooth }}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                      >
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.15 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7, ease: easeSmooth }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Arrow */}
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("portfolio");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.hash = "#portfolio";
                    }
                  }}
                  className="w-11 h-11 rounded-full border flex items-center justify-center shrink-0 relative z-10 transition-all duration-500"
                  style={{
                    borderColor: activeIndex === index
                      ? "hsl(var(--accent))"
                      : "hsl(var(--foreground) / 0.1)",
                    backgroundColor: activeIndex === index
                      ? "hsl(var(--accent))"
                      : "transparent",
                  }}
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-500"
                    style={{
                      color: activeIndex === index
                        ? "hsl(var(--accent-foreground))"
                        : "hsl(var(--muted-foreground) / 0.5)",
                      transform: activeIndex === index ? "rotate(0deg)" : "rotate(-45deg)",
                    }}
                  />
                </a>
              </div>

              {/* Mobile / expanded content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: easeSmooth },
                      opacity: { duration: 0.3, delay: 0.05 },
                    }}
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="pb-8 pl-12 md:pl-[5.5rem] flex flex-col gap-4">
                      <div className="md:hidden w-full h-44 rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs tracking-wider rounded-full border border-accent/20 text-accent/80 bg-accent/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
        <div className="h-px bg-foreground/8" />
      </div>
    </section>
  );
};

export default ServicesSection;
