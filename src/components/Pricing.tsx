import { Check, Droplets, Flame, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  const treatments = [
    {
      name: 'Osocze bogatopłytkowe (PRP)',
      icon: Droplets,
      areas: [
        { area: 'Twarz', price: '600 zł' },
        { area: 'Twarz + szyja', price: '800 zł' },
        { area: 'Twarz + szyja + dekolt', price: '1000 zł' },
        { area: 'Skóra głowy', price: '400 zł' },
      ]
    },
    {
      name: 'Fibryna bogatopłytkowa (PRF)',
      icon: Flame,
      areas: [
        { area: 'Twarz', price: '600 zł' },
        { area: 'Twarz + szyja', price: '800 zł' },
        { area: 'Twarz + szyja + dekolt', price: '1000 zł' },
        { area: 'Rewitalizacja ust', price: '400 zł' },
        { area: 'Okolica oczu', price: '400 zł' },
      ]
    },
    {
      name: 'Fibryna strukturalna+Osocze bogatopłytkowe (F-PRF+PRP LCC)', 
      icon: Sparkles,
      areas: [
        { area: 'Twarz', price: '899 zł' },
        { area: 'Twarz + szyja', price: '1099 zł' },
        { area: 'Twarz + szyja + dekolt', price: '1299 zł' },
      ]
    },
    {
      name: 'Full Face Natural® ',
      icon: Award,
      isFullFaceNatural: true,
      areas: [
        { area: 'Full Face Natural®', price: '1500 zł' },
      ],
      description: 'Opatentowany zabieg autologicznej wolumetrii twarzy łączący najlepsze cechy frakcji albuminowej i frakcji płytkowej dla maksymalnego, ale naturalnego efektu nadbudowy, odmłodzenia i regeneracji skóry twarzy. Kompleksowe podejście zapewniające naturalne i długotrwałe rezultaty.'
    }
  ];

  const packages = [
    { sessions: '3 zabiegi', discount: '10%', description: 'Oszczędzasz do 300 zł' },
    { sessions: '4 zabiegi', discount: '17%', description: 'Oszczędzasz do 600 zł' },
  ];

  return (
    <section id="cennik" className="pt-20 pb-32 bg-gradient-to-br from-[#F5F5DC] to-white relative overflow-visible" itemScope itemType="https://schema.org/PriceSpecification" aria-label="Cennik zabiegów PRP PRF osocze fibryna Białystok">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-black text-[24px] font-[Poppins]">
              Przejrzyste <span className="text-[#D4AF37]">ceny</span> zabiegów
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto" itemProp="description">
              Inwestycja w naturalne piękno i zdrowie Twojej skóry. Ceny zawierają konsultację oraz zalecenia pielęgnacyjne.
            </p>
          </motion.div>

          {/* Tabele cenowe */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {treatments.map((treatment, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  {treatment.icon && (
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C542]/10 border border-[#D4AF37]/20">
                      <treatment.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                  )}
                  <h3 className="text-black">
                    {treatment.name}
                    {treatment.isRegistered && (
                      <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs border border-[#D4AF37] text-[#D4AF37] rounded-full align-super">
                        ®
                      </span>
                    )}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {treatment.areas.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="flex items-center justify-between py-4 border-b border-[#D4AF37]/10 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                        <span className="text-[#666666]">{item.area}</span>
                      </div>
                      <span className="text-[#D4AF37]">{item.price}</span>
                    </div>
                  ))}
                  
                  {treatment.isFullFaceNatural && treatment.description && (
                    <div className="pt-4 mt-2">
                      <p className="text-[#666666] text-sm leading-relaxed">
                        {treatment.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pakiety */}
          <motion.div 
            className="bg-black rounded-3xl p-8 md:p-12 relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F4C542]/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="text-center mb-10">
                <h3 className="text-[#D4AF37] mb-3 text-[24px] font-[Poppins]">Pakiety zabiegów</h3>
                <p className="text-[#E8DCC4]">
                  Skorzystaj z pakietów i oszczędzaj przy regularnej kuracji
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {packages.map((pkg, idx) => (
                  <motion.div 
                    key={idx}
                    className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + (idx * 0.1) }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-[#D4AF37] mb-1">{pkg.sessions}</div>
                        <div className="text-[#E8DCC4] text-sm">{pkg.description}</div>
                      </div>
                      <div className="px-3 py-1 bg-[#D4AF37] text-black rounded-full text-sm">
                        -{pkg.discount}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2 text-[#E8DCC4] text-sm">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        <span>Indywidualny plan zabiegów</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E8DCC4] text-sm">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        <span>Konsultacje pomiędzy zabiegami</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E8DCC4] text-sm">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        <span>Zalecenia pielęgnacyjne</span>
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-[#E8DCC4]/70 text-sm mb-4">
                  * Szczegółowe informacje o pakietach podczas konsultacji
                </p>
                <a 
                  href="#kontakt" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
                >
                  Umów się na konsultację
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Informacje dodatkowe */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-[#666666] text-sm">
              Pierwsza konsultacja jest bezpłatna i niezobowiązująca. <br/>
              Podczas spotkania omówimy Twoje potrzeby i dobramy optymalny plan zabiegów.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Container na styku sekcji */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-block px-6 py-3 bg-black rounded-full border border-[#D4AF37]/30 shadow-2xl">
          <span className="text-[#D4AF37]">Skontaktuj się</span>
        </div>
      </div>
    </section>
  );
}
