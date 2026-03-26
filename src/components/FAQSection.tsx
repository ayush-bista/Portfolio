import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "DOES REEL PRO?",
    answer: "Yes, we offer comprehensive video and reel production services as part of our creative design packages.",
  },
  {
    question: "HOW CAN I CONTACT WITH YOU?",
    answer: "You can reach me through the contact form below, or directly via email at hello@jameskinda.com. I typically respond within 24 hours.",
  },
  {
    question: "AFTER ORDER DELIVER COST?",
    answer: "Delivery costs are included in the project quote. There are no hidden fees after the order is placed.",
  },
  {
    question: "AREN'T THESE SERVICES TOO PRICEY?",
    answer: "Our pricing reflects the quality and expertise we bring. We offer flexible packages to suit different budgets and project scopes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-display text-3xl md:text-4xl text-center text-foreground mb-12">
          QUESTION & ANSWERS
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-border">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-display text-sm md:text-base text-foreground group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus size={18} className="text-accent shrink-0" />
                ) : (
                  <Plus size={18} className="text-muted-foreground shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-muted-foreground text-sm pb-6 animate-fade-in-up">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
