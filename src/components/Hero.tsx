import image_1bf0cc7df760e585fd0751e70b044ccd12fc071e from 'figma:asset/1bf0cc7df760e585fd0751e70b044ccd12fc071e.png'
import { ArrowRight } from 'lucide-react';
import image_78fb3ecf73bcfd03b947717ffabfcee1262372c0 from 'figma:asset/78fb3ecf73bcfd03b947717ffabfcee1262372c0.png';
import { motion } from 'motion/react';
// Mobile optimized version - qualReduced
import image_mobile from 'figma:asset/0fab321cdd421bea52c36130d13f1fcea7c154bd.png';
import { useIsMobile } from '../hooks/useMediaQuery';

export function Hero() {
  const isMobile = useIsMobile();
  
  // Disable animations on mobile for better performance
  const animationProps = isMobile ? {} : {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };
  
  return (
    <section className="relative min-h-[90vh] bg-white pt-20 pb-32 overflow-visible" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Lewa strona - Tekst */}
          <motion.div 
            className="space-y-8 lg:pr-12"
            {...(isMobile ? {} : {
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.4, ease: "easeOut" }
            })}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl text-black leading-tight font-[Poppins]"
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.05 }
              })}
              itemProp="name"
            >
              Osocze<br />
              bogatopłytkowe<br />
              <span className="text-[#D4AF37]">Białystok</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-xl"
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.1 }
              })}
              itemProp="description"
            >
              Profesjonalne zabiegi odmładzania twarzy z wykorzystaniem fibryny i osocza bogatopłytkowego w Białymstoku. 
              PRP, PRF i Full Face Natural® — odkryj moc naturalnej regeneracji.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.15 }
              })}
            >
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all group"
                aria-label="Umów bezpłatną konsultację zabiegów PRP PRF w Białymstoku"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#zabiegi" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
                aria-label="Zobacz zabiegi z osocza i fibryny dostępne w Białymstoku"
              >
                Poznaj zabiegi
              </a>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#D4AF37]/20"
              {...(isMobile ? {} : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: 0.2 }
              })}
            >
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1">7+</div>
                <div className="text-sm text-[#666666]">Lat w Branży Beauty</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1">100%</div>
                <div className="text-sm text-[#666666]">Naturalne składniki</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl text-[#D4AF37] mb-1">82%</div>
                <div className="text-sm text-[#666666]">Odzysku płytek wg. klasyfikacji DEPA</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Prawa strona - Zdjęcie */}
          <motion.div 
            className="relative lg:h-full flex items-center justify-center"
            {...(isMobile ? {} : {
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
            })}
          >
            {/* Dekoracyjne tło */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C542]/10 rounded-full blur-3xl" aria-hidden="true"></div>
            
            {/* Główne zdjęcie */}
            <div className="relative max-w-lg w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-[3rem] opacity-20 blur-xl" aria-hidden="true"></div>
              
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <picture>
                  <source media="(max-width: 768px)" srcSet={image_mobile} />
                  <img 
                    src={image_78fb3ecf73bcfd03b947717ffabfcee1262372c0}
                    alt="Zabieg odmładzania twarzy osoczem bogatopłytkowym Białystok - Julia Więckowska"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '3/4' }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                
                {/* Gradient overlay */}
                <img 
                  src={image_1bf0cc7df760e585fd0751e70b044ccd12fc071e}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              {/* Floating card - simplified on mobile (no animation) */}
              {isMobile ? (
                <div className="absolute -bottom-6 -left-6 bg-black rounded-2xl p-6 shadow-2xl border border-[#D4AF37]/30 max-w-[200px]">
                  <div className="text-[#D4AF37] text-sm mb-1">Certyfikowane</div>
                  <div className="text-white">Zabiegi PRP & PRF</div>
                </div>
              ) : (
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-black rounded-2xl p-6 shadow-2xl border border-[#D4AF37]/30 max-w-[200px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="text-[#D4AF37] text-sm mb-1">Certyfikowane</div>
                  <div className="text-white">Zabiegi PRP & PRF</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - hide on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-[#D4AF37]/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
          </div>
        </motion.div>
      )}
      
      {/* Container na styku sekcji */}
      <motion.div 
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
        {...(isMobile ? {} : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 1.4 }
        })}
      >
        <div className="inline-block px-6 py-3 bg-white rounded-full border border-[#D4AF37]/20 shadow-2xl">
          <span className="text-[#D4AF37]">Sprawdzone efekty</span>
        </div>
      </motion.div>
    </section>
  );
}