import { useEffect } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  treatmentName: string; // For unique schema ID
}

export function FAQSection({ 
  title = "Najczęściej zadawane pytania",
  faqs,
  treatmentName
}: FAQSectionProps) {
  
  useEffect(() => {
    // Add FAQ Schema (JSON-LD)
    const schemaId = `faq-schema-${treatmentName}`;
    const existingSchema = document.querySelector(`script[data-schema-id="${schemaId}"]`);
    
    if (!existingSchema && faqs.length > 0) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-id', schemaId);
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        // Cleanup on unmount
        const schemaToRemove = document.querySelector(`script[data-schema-id="${schemaId}"]`);
        if (schemaToRemove) {
          schemaToRemove.remove();
        }
      };
    }
  }, [faqs, treatmentName]);

  if (faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-[#666666]">
              Znajdź odpowiedzi na najczęstsze pytania dotyczące zabiegu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 hover:text-[#D4AF37] transition-colors">
                    <span className="text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4AF37]">
              <p className="text-[#666666]">
                <strong>Masz inne pytania?</strong> Skontaktuj się ze mną bezpośrednio – 
                chętnie odpowiem na wszystkie Twoje wątpliwości podczas konsultacji.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
