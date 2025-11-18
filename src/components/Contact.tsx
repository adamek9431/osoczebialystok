import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="pt-20 pb-24 bg-white overflow-visible" itemScope itemType="https://schema.org/ContactPage">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="mb-4 text-black text-[24px]">Umów się na <span className="text-[#D4AF37]">konsultację</span></h2>
            <p className="text-[#666666] text-lg">
              Poznaj możliwości naturalnego odmłodzenia skóry
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info - 2 columns */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#F5F5DC] to-white rounded-3xl p-8 border border-[#D4AF37]/10 shadow-sm">
                
                
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: 'Telefon', content: <a href="tel:+48723574156" className="text-black hover:text-[#D4AF37] transition-colors">+48 723574156</a> },
                    { icon: Mail, label: 'Email', content: <a href="mailto:july.pmu@gmail.com" className="text-black hover:text-[#D4AF37] transition-colors break-all">july.pmu@gmail.com</a> },
                    { icon: MapPin, label: 'Adres', content: <a href="https://www.google.com/maps/search/?api=1&query=ul.+Wyszyńskiego+2%2F1,+lok.+301,+15-888+Białystok" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#D4AF37] transition-colors cursor-pointer">ul. Wyszńskiego 2/1, lok. 301 <br />15-888 Białystok</a> },
                    { icon: Clock, label: 'Godziny pracy', content: <p className="text-black text-sm">Pon - Pt: 6:00 - 20:00<br /></p> }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-[#666666] mb-1">{item.label}</div>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Why choose us - 3 columns */}
            <motion.div 
              className="lg:col-span-3 bg-black rounded-3xl p-8 md:p-10 relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h3 className="mb-8 text-[#D4AF37]">Dlaczego warto wybrać moje zabiegi?</h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    ['Studenta 3ciego roku pielęgniarstwa', 'Wieloletnie doświadczenie', 'Indywidualne podejście'],
                    ['Najwyższe standardy bezpieczeństwa', 'Nowoczesny sprzęt', 'Kompleksowa opieka']
                  ].map((column, colIdx) => (
                    <div key={colIdx} className="space-y-4">
                      {column.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + (colIdx * 0.2) + (idx * 0.1) }}
                        >
                          <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#E8DCC4]">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
                
                <motion.div 
                  className="pt-6 border-t border-[#D4AF37]/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <p className="text-[#E8DCC4] text-sm leading-relaxed">
                    Każda konsultacja jest bezpłatna i poprzedzona szczegółowym wywiadem oraz oceną stanu skóry. 
                    Wspólnie dobierzemy optymalne rozwiązanie dopasowane do Twoich potrzeb i oczekiwań.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
