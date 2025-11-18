import { Sparkles, RefreshCw, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Sparkles,
      title: 'Młodziej wyglądająca skóra',
      description: 'Naturalna stymulacja produkcji kolagenu i elastyny. Skóra odzyskuje jędrność, sprężystość i młodzieńczy wygląd.',
      features: ['Redukcja zmarszczek', 'Poprawa konturów twarzy', 'Zwiększona elastyczność']
    },
    {
      icon: RefreshCw,
      title: 'Działanie regeneracyjne',
      description: 'Przyspieszenie naturalnych procesów naprawczych organizmu. Długotrwały i naturalny efekt.',
      features: ['Szybsza regeneracja', 'Lepsza struktura skóry', 'Zwiększone nawilżenie']
    },
    {
      icon: Shield,
      title: 'Zmniejszenie stanów zapalnych',
      description: 'Właściwości przeciwzapalne i kojące. Wsparcie w leczeniu problemów skórnych. Starzenie się = stan zapalny.',
      features: ['Spowolnienie starzenia', 'Redukcja trądziku', 'Poprawa blizn']
    }
  ];

  return (
    <section id="korzyści" className="pt-20 pb-32 bg-gradient-to-br from-[#F5F5DC] to-white relative overflow-visible" itemScope itemType="https://schema.org/ItemList" aria-label="Korzyści zabiegów osoczem bogatopłytkowym PRP PRF Białystok">
      {/* Efekt złotego dymku w tle - zwiększona intensywność */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#D4AF37]/35 via-[#F4C542]/25 to-transparent rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/3 w-[700px] h-[700px] bg-gradient-to-bl from-[#D4AF37]/30 via-[#F4C542]/20 to-transparent rounded-full blur-[140px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-tr from-[#F4C542]/35 via-[#D4AF37]/25 to-transparent rounded-full blur-[160px] opacity-65 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4AF37]/40 via-[#F4C542]/20 to-transparent rounded-full blur-[120px] opacity-55 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#F4C542]/25 to-transparent rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-[#D4AF37]/30 to-transparent rounded-full blur-[130px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-gradient-to-r from-[#F4C542]/20 to-[#D4AF37]/25 rounded-full blur-[110px] opacity-45 pointer-events-none"></div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-black text-[24px]" itemProp="name">
            <span className="text-[#D4AF37]">3 główne korzyści</span> zabiegów
          </h2>
          <p className="text-[#666666] text-lg" itemProp="description">
            Naturalne, bezpieczne i skuteczne rozwiązanie dla Twojej skóry
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                itemScope
                itemType="https://schema.org/Thing"
                itemProp="itemListElement"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative space-y-4">
                  {/* Wiersz 1: Ikona + Nagłówek */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </div>
                    <h3 className="text-black" itemProp="name">{benefit.title}</h3>
                  </div>
                  
                  {/* Wiersz 2: Opis na całą szerokość */}
                  <p className="text-[#666666] leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Wiersz 3: Lista punktów */}
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#666666] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#kontakt" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
          >
            Umów bezpłatną konsultację
          </a>
        </motion.div>
      </div>
      
      {/* Container na styku sekcji */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <div className="px-6 py-3 bg-[#1a1a1a] rounded-full border border-[#D4AF37]/20 shadow-2xl text-center">
          <span className="text-[#D4AF37]">Autologiczne rozwiązania</span>
        </div>
      </div>
    </section>
  );
}
