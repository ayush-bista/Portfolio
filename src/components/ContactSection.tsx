import heroPortrait from "@/assets/hero-portrait.jpg";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Large CONTACT text with fade effect */}
      <ScrollReveal>
        <div className="text-center mb-3">
          <h2
            className="text-display text-[clamp(4rem,14vw,11rem)] leading-none"
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CONTACT
          </h2>
        </div>
      </ScrollReveal>

      {/* Card with image + form */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="bg-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl min-h-[600px] lg:min-h-[720px]">
            {/* Image */}
            <div className="h-80 lg:h-full relative">
              <img src={heroPortrait} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Form */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <h3 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">LET'S TALK</h3>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1 block">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Your Name here"
                      className="w-full bg-transparent border-b border-border py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1 block">Email*</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-border py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-foreground text-sm font-semibold mb-1 block">Subject*</label>
                  <input
                    type="text"
                    placeholder="Write Subject line"
                    className="w-full bg-transparent border-b border-border py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-foreground text-sm font-semibold mb-1 block">Message*</label>
                  <textarea
                    placeholder=""
                    rows={3}
                    className="w-full bg-transparent border-b border-border py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-muted-foreground text-sm">© 2024 James Kinda. All rights reserved.</span>
        <div className="flex gap-6 text-muted-foreground text-sm">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
