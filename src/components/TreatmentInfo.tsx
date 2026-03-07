import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

export function TreatmentInfo() {
  const { ref, isVisible } = useScrollAnimation();

  const treatments = [
    {
      title: 'Osocze bogatopłytkowe',
      subtitle: 'PRP - Platelet Rich Plasma',
      description: 'Zabieg polega na wykorzystaniu osocza pobranego z Twojej własnej krwi, bogatego w płytki krwi i czynniki wzrostu.',
      features: [
        'Poprawa struktury i elastyczności skóry',
        'Redukcja drobnych zmarszczek i linii',
        'Wyrównanie kolorytu skóry'
      ],
      path: '/osocze-bogatoplytkowe-prp-bialystok'
    },
    {
      title: 'Fibryna strukturalna/\nbogatokomórkowa',
      subtitle: 'PRF - Platelet Rich Fibrin',
      description: 'Zaawansowana forma osocza, która uwalnia czynniki wzrostu przez dłuższy czas. Fibryna tworzy naturalną matrycę wspierającą procesy regeneracyjne.',
      features: [
        'Długotrwały efekt regeneracyjny',
        'Poprawa gęstości i nawilżenia skóry',
        'Wsparcie leczenia blizn i rozstępów'
      ],
      path: '/fibryna-bogatoplytkowa-prf-bialystok'
    },
    {
      title: 'Full Face Natural®',
      subtitle: 'Plasma Filler - wypełniacz autologiczny ATR',
      description: 'Opatentowany zabieg autologicznej wolumetrii twarzy łączący albuminowo-płytkową regenerację dla maksymalnego, ale naturalnego efektu nadbudowy i odmłodzenia skóry twarzy.',
      features: [
        'Dodanie objętości bez nadmiernego obciążenia tkanek',
        'Kompleksowa stymulacja skóry',
        'Naturalne i trwałe rezultaty'
      ],
      path: '/full-face-natural-bialystok'
    },
    {
      title: 'Autologiczne Egzosomy',
      subtitle: 'EXO - Exosome Therapy',
      description: 'Nowoczesna technologia wykorzystująca naturalne nanocząsteczki pochodzące z Twojej własnej krwi, które przekazują sygnały regeneracyjne między komórkami.',
      features: [
        'Intensywna stymulacja odnowy komórkowej',
        'Zwiększenie produkcji kolagenu i elastyny',
        'Regeneracja skóry na poziomie molekularnym'
      ],
      path: '/autologiczne-egzosomy-bialystok'
    }
  ];

  return (
    <section id="zabiegi" className="pt-40 pb-32 bg-black relative overflow-visible" itemScope itemType="https://schema.org/OfferCatalog" aria-label="Zabiegi osoczem bogatopłytkowym PRP PRF fibryna Białystok">
      {/* Efekt złotego dymku w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#D4AF37]/30 via-[#F4C542]/20 to-transparent rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#F4C542]/25 to-transparent rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white text-[24px]" itemProp="name">
            Zabiegi z <span className="text-[#D4AF37]">fibryną i osoczem</span>
          </h2>
          <p className="text-[#E8DCC4]/80 text-lg" itemProp="description">
            Wykorzystuję najnowocześniejsze metody autologiczne, bazujące na naturalnych 
            procesach regeneracyjnych zachodzących w Twoim organizmie.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {treatments.map((treatment, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              itemScope
              itemType="https://schema.org/Offer"
              itemProp="itemListElement"
            >
              <Link 
                to={treatment.path}
                className="relative block bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group"
              >
                {/* Tytuł */}
                <div className="mb-4" itemProp="itemOffered" itemScope itemType="https://schema.org/MedicalProcedure">
                  <h3 className="text-[#D4AF37] mb-1 group-hover:text-[#F4C542] transition-colors whitespace-pre-line" itemProp="name">{treatment.title}</h3>
                  <p className="text-[#E8DCC4]/60 text-sm" itemProp="alternateName">{treatment.subtitle}</p>
                
                {/* Opis */}
                <p className="text-[#E8DCC4]/80 text-sm leading-relaxed mb-6 mt-4" itemProp="description">
                  {treatment.description}
                </p>
                </div>
                
                {/* Lista korzyści */}
                <ul className="space-y-3 mb-4">
                  {treatment.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <span className="text-[#E8DCC4] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Wskaźnik "Dowiedz się więcej" */}
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm mt-6 group-hover:gap-3 transition-all">
                  <span>Dowiedz się więcej</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Container na styku sekcji */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-block px-6 py-3 bg-white rounded-full border border-[#D4AF37]/20 shadow-2xl">
          <span className="text-[#D4AF37]">O mnie</span>
        </div>
      </div>
    </section>
  );
}