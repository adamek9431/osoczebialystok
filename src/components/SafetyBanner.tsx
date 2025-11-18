import { Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function SafetyBanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pt-16 pb-32 bg-white relative overflow-hidden">
      {/* Złote dymki w tle sekcji - responsywne */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-96 md:h-96 bg-gradient-to-br from-[#D4AF37]/30 via-[#F4C542]/20 to-transparent rounded-full blur-[80px] sm:blur-[100px] md:blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-96 md:h-96 bg-gradient-to-tr from-[#F4C542]/30 via-[#D4AF37]/20 to-transparent rounded-full blur-[80px] sm:blur-[100px] md:blur-3xl opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#D4AF37]/25 to-transparent rounded-full blur-[90px] sm:blur-[110px] md:blur-[130px] opacity-60"></div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-black rounded-3xl p-6 md:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Złoty dymek w tle kontenera - responsywny */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-gradient-to-br from-[#D4AF37]/35 via-[#F4C542]/25 to-transparent rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[200px] h-[150px] sm:w-[350px] sm:h-[200px] md:w-[500px] md:h-[300px] bg-gradient-to-br from-[#F4C542]/40 via-[#D4AF37]/30 to-transparent rounded-full blur-[70px] sm:blur-[100px] md:blur-[150px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[150px] sm:w-[300px] sm:h-[200px] md:w-[400px] md:h-[250px] bg-gradient-to-tr from-[#D4AF37]/35 to-transparent rounded-full blur-[60px] sm:blur-[90px] md:blur-[120px] opacity-45 pointer-events-none"></div>
            
            <div className="relative space-y-6">
              {/* Wiersz 1: Ikona + Nagłówek */}
              <motion.div 
                className="flex items-center gap-4 md:gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h3 className="text-[#D4AF37] text-[32px]">Bezpieczeństwo na pierwszym miejscu</h3>
              </motion.div>
              
              {/* Wiersz 2: Tekst główny na całą szerokość */}
              <motion.p 
                className="text-[#E8DCC4] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Jako doświadczona specjalistka zdobywająca wykształcenie medyczne, gwarantuję najwyższe standardy 
                bezpieczeństwa i higieny. Każdy zabieg wykonuję zgodnie z aktualnymi procedurami i indywidualnie dostosowuję do potrzeb klienta. Twoje zdrowie i komfort są moim priorytetem.
              </motion.p>
              
              {/* Wiersz 3: Lista punktów */}
              <motion.div 
                className="flex flex-col md:flex-row gap-3 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 text-[#E8DCC4]">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-sm">Certyfikowane probówki</span>
                </div>
                <div className="flex items-center gap-2 text-[#E8DCC4]">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-sm">Sterylne warunki</span>
                </div>
                <div className="flex items-center gap-2 text-[#E8DCC4]">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-sm">Nowoczesne procedury</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Container na styku sekcji */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-block px-6 py-3 bg-white rounded-full border border-[#D4AF37]/20 shadow-2xl">
          <span className="text-[#D4AF37]">Cennik</span>
        </div>
      </div>
    </section>
  );
}
