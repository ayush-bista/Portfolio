import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { 
    // image: "https://i.pinimg.com/736x/81/99/e5/8199e5c96a84c66c8f998e02584182af.jpg", // To use an external image URL instead, change to: "https://your-image-link.com/photo.jpg"
    image: "/AURELIA DEMIFINE JEWELLERY.png",
    // image: "https://palmonas.com/cdn/shop/files/web_link_creative_2.jpg?v=1738936545",
    link: "https://aurelia-phi.vercel.app/", // Enter your direct clickable link here
    title: "AURELIA", 
    category: "Women Accessories", 
    year: "2025", 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    image: "https://i.pinimg.com/1200x/ed/54/36/ed5436743e5ab154ceb77457a36506e0.jpg", 
    // link: "https://example.com/project-2",
    title: "StudyFlow", 
    category: "Website", 
    year: "2026", 
    span: "" 
  },
  { 
    image: "https://i.pinimg.com/736x/63/35/5b/63355bd2ebff95a3a321f49b08c9a2c9.jpg", 
    // link: "https://example.com/project-3",
    title: "ZestyGO", 
    category: "UI/UX", 
    year: "2025", 
    span: "" 
  },
  { 
    image: "https://trendsresearch.org/wp-content/uploads/2025/01/Cybersecurity-in-a-World-in-Crisis-V1-copy.jpg", 
    link: "https://secure-mind-nepal.vercel.app",
    title: "Secure Mind Nepal", 
    category: "Website", 
    year: "2026", 
    span: "md:col-span-2" 
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <ScrollReveal>
        <div className="text-center mb-6">
          <h2
            className="text-display text-[clamp(3rem,12vw,10rem)] leading-none"
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PORTFOLIO
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[280px]">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08} className={project.span}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer relative overflow-hidden rounded-2xl h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-accent text-[11px] font-medium tracking-[0.15em] uppercase">
                    {project.category} — {project.year}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h3 className="text-display text-primary-foreground text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center flex-shrink-0">
                      <ArrowUpRight size={18} className="text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Static bottom label (visible by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-display text-primary-foreground/90 text-sm tracking-wider">
                  {project.title}
                </h3>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
