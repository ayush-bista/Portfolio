import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "Extraordinary performance! Quick solutions. Highly recommended.",
    name: "RYAN NICK",
    role: "CEO, TechStart",
    image: testimonial1,
    label: "CLIENT",
  },
  {
    quote: "Get Quick solutions with great quality—a recommendation that's unequivocal",
    name: "SARAH CHEN",
    role: "Product Manager, Designly",
    image: testimonial2,
    label: "CLIENT",
  },
  {
    quote: "Professional, creative, & truly results-driven!",
    name: "JAMES WOOD",
    role: "Founder, BrandCo",
    image: testimonial3,
    label: "CLIENT",
  },
];

const clientLogos = ["PWA", "vFive", "TRANSP", "Utility", "Stella"];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <p className="text-xs uppercase tracking-widest text-accent mb-8">✦ Client Feedback</p>

      <div className="space-y-12 mb-20">
        {testimonials.map((t, i) => (
          <div key={i} className="flex gap-6 items-start">
            <div className="hidden md:block w-20 h-20 rounded-full overflow-hidden shrink-0">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.label}</p>
              <blockquote className="text-display text-xl md:text-2xl text-foreground leading-tight mb-3">
                "{t.quote}"
              </blockquote>
              <p className="text-muted-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-t border-b border-border">
        {clientLogos.map((logo) => (
          <span key={logo} className="text-display text-lg md:text-xl text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
