import image_f309d6c726df3d5e5477d447cd69928ef5b1fee4 from 'figma:asset/f309d6c726df3d5e5477d447cd69928ef5b1fee4.png'
// Mobile optimized version
import image_mobile from 'figma:asset/ca98c2401f2615200e000f662aaed2072c8c370d.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect } from 'react';

export function AboutMe() {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Add Person Schema (JSON-LD)
    const existingSchema = document.querySelector('script[type=\"application/ld+json\"][data-schema-id=\"person-schema\"]');
    
    if (!existingSchema) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Julia Więckowska",
        "jobTitle": "Kosmetolog z wykształceniem pielęgniarskim",
        "description": "Studentka 3ciego roku pielęgniarstwa z wieloletnim doświadczeniem w zabiegach regeneracyjnych z wykorzystaniem fibryny i osocza bogatopłytkowego.",
        "url": "https://osoczebialystok.pl",
        "sameAs": [
          "https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Kierunek: Pielęgniarstwo"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certyfikat",
            "name": "Zabiegi autologiczne z wykorzystaniem osocza i fibryny"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certyfikat",
            "name": "Full Face Natural®"
          }
        ],
        "knowsAbout": [
          "Zabiegi z osoczem bogatopłytkowym (PRP)",
          "Zabiegi z fibryną (PRF)",
          "Full Face Natural®",
          "Naturalne zabiegi regeneracyjne",
          "Mezoterapia osoczem"
        ],
        "award": "6+ lat doświadczenia w branży beauty",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Białystok",
          "addressRegion": "Podlaskie",
          "addressCountry": "PL"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-id', 'person-schema');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        // Cleanup on unmount
        const schemaToRemove = document.querySelector('script[data-schema-id=\"person-schema\"]');
        if (schemaToRemove) {
          schemaToRemove.remove();
        }
      };
    }
  }, []);

  return (
    <section id="o-mnie" className="pt-40 pb-32 bg-gradient-to-br from-[#F5F5DC] to-white relative overflow-visible" itemScope itemType="https://schema.org/Person" aria-label="O mnie - Julia Więckowska kosmetolog pielęgniarka Białystok">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Nagłówek na mobile */}
            <motion.div 
              className="order-1 lg:hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <h2 className="mb-6 text-black text-center text-[28px] leading-tight">
                Profesjonalna <span className="text-[#D4AF37]">opieka</span><br />na najwyższym poziomie
              </h2>
            </motion.div>
            
            {/* Zdjęcie po lewej */}
            <motion.div 
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Dekoracyjne tło */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C542]/20 rounded-[3rem] blur-2xl"></div>
                
                {/* Główne zdjęcie */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-3xl opacity-20"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30">
                    <picture>
                      <source media="(max-width: 768px)" srcSet={image_mobile} />
                      <source media="(min-width: 769px)" srcSet={image_f309d6c726df3d5e5477d447cd69928ef5b1fee4} />
                      <img 
                        src={image_f309d6c726df3d5e5477d447cd69928ef5b1fee4}
                        alt="Profesjonalna pielęgniarka"
                        className="w-full h-full object-cover aspect-[4/5]"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
                
                {/* Floating stats */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-black rounded-2xl p-6 shadow-xl border border-[#D4AF37]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-3xl text-[#D4AF37] mb-1">7+</div>
                    <div className="text-[#E8DCC4] text-sm">Lat<br/>w Branży Beauty</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tekst po prawej */}
            <motion.div 
              className="order-3 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Nagłówek na desktop */}
              <h2 className="mb-6 text-black hidden lg:block text-[32px]">
                Profesjonalna <span className="text-[#D4AF37]">opieka</span> na najwyższym poziomie
              </h2>
              
              <p className="text-[#666666] mb-6 leading-relaxed">
                Jestem studentką 3ciego roku pielęgniarstwa z wieloletnim doświadczeniem 
                w zabiegach regeneracyjnych. Moją pasją jest pomaganie klientom w odkrywaniu naturalnego 
                piękna poprzez bezpieczne i skuteczne zabiegi autologiczne.
              </p>
              
              <p className="text-[#666666] mb-8 leading-relaxed">
                Specjalizuję się w zabiegach wykorzystujących fibrynę i osocze bogatopłytkowe. 
                Każdy zabieg poprzedzam dokładną konsultacją, aby dobrać optymalne rozwiązanie 
                dostosowane do indywidualnych potrzeb i oczekiwań klienta.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: GraduationCap, title: 'Wykształcenie', desc: 'Studentka 3ciego roku pielęgniarstwa', delay: 0.4 },
                  { icon: Award, title: 'Certyfikaty', desc: 'Zabiegi autologiczne, Full Face Natural®', delay: 0.5 },
                  { icon: Heart, title: 'Za co kocham zabiegi?', desc: 'Bezpieczeństwo, naturalność, mocna stymulacja, uniwersalność', delay: 0.6 },
                  { icon: Users, title: 'Podejście', desc: 'Indywidualne, po wcześniejszej konsultacji', delay: 0.7 }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#D4AF37]/10 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: item.delay }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-black mb-1">{item.title}</div>
                      <div className="text-[#666666] text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a 
                  href="#kontakt" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
                >
                  Umów się na konsultację
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}