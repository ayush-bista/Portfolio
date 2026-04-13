import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

// Form validation schema
const contactSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  sender_email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot field for spam prevention
  website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // If honeypot field is filled, silently ignore the submission
    if (data.website) {
      console.log("Spam detected");
      reset();
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS credentials
      const serviceId = "service_sbjcgul";
      const templateId = "template_4bkykx7";
      const publicKey = "SfQG74ZUY8DiClyTX";

      // Simple safety check to ensure keys are provided
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully. Thanks for reaching out.");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <img src="/IMG_0646 (2).jpg" alt="Contact" className="absolute inset-0 w-full h-56.5 object-cover" />
            </div>

            {/* Form */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <h3 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">LET'S TALK</h3>

              <form 
                ref={formRef}
                className="space-y-8" 
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("website")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1 block">Full Name*</label>
                    <input
                      {...register("full_name")}
                      type="text"
                      placeholder="Your Name here"
                      className={`w-full bg-transparent border-b ${
                        errors.full_name ? "border-destructive" : "border-border"
                      } py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors`}
                    />
                    {errors.full_name && (
                      <p className="text-destructive text-xs mt-1">{errors.full_name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-semibold mb-1 block">Email*</label>
                    <input
                      {...register("sender_email")}
                      type="email"
                      placeholder="Email Address"
                      className={`w-full bg-transparent border-b ${
                        errors.sender_email ? "border-destructive" : "border-border"
                      } py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors`}
                    />
                    {errors.sender_email && (
                      <p className="text-destructive text-xs mt-1">{errors.sender_email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-foreground text-sm font-semibold mb-1 block">Subject*</label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Write Subject line"
                    className={`w-full bg-transparent border-b ${
                      errors.subject ? "border-destructive" : "border-border"
                    } py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-foreground text-sm font-semibold mb-1 block">Message*</label>
                  <textarea
                    {...register("message")}
                    placeholder=""
                    rows={3}
                    className={`w-full bg-transparent border-b ${
                      errors.message ? "border-destructive" : "border-border"
                    } py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-muted-foreground text-sm">© 2026 Ayush Bista. All rights reserved.</span>
        <div className="flex gap-6 text-muted-foreground text-sm">
          <a href="https://github.com/ayush-bista" target="_blank" className="hover:text-foreground transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/ayush-bista"target="_blank" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/aayush.biista/" target="_blank" className="hover:text-foreground transition-colors">Instagram</a>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
