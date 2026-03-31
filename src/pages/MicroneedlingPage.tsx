import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { setupSEOMetaTags, setupOGImage, setupJSONLD, SEO_CONFIGS } from '../utils/seo-config';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';

export function MicroneedlingPage() {
  useEffect(() => {
    // Setup SEO
    setupSEOMetaTags(SEO_CONFIGS.microneedling);
    setupOGImage(image_25909a0558481bbf84b9fdcc4c4b411887b1789a);

    // JSON-LD Schema for Microneedling Service (Beauty focused)
    const schemas = [{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mezoterapia Mikroigłowa (Microneedling) Białystok",
      "alternateName": "Microneedling",
      "description": "Zabieg stymulujący naturalne procesy regeneracyjne i produkcję kolagenu poprzez kontrolowane mikrourazy skóry.",
      "provider": {
        "@type": "BeautySalon",
        "name": "Osocze Białystok - Julia Więckowska",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Białystok",
          "addressCountry": "PL"
        },
        "telephone": "+48723574156"
      },
      "areaServed": {
        "@type": "City",
        "name": "Białystok"
      }
    }];
    setupJSONLD(schemas);
  }, []);

  const benefits = [
    'Stymulacja produkcji kolagenu i elastyny',
    'Poprawa tekstury i gęstości skóry',
    'Redukcja drobnych zmarszczek i linii',
    'Wyrównanie kolorytu skóry',
    'Zmniejszenie widoczności blizn potrądzikowych',
    'Redukcja rozstępów',
    'Poprawa wchłaniania składników aktywnych',
    'Zwężenie porów i wygładzenie skóry',
  ];

  const indications = [
    'Zmarszczki i linie mimiczne',
    'Utrata elastyczności i napięcia skóry',
    'Blizny potrądzikowe',
    'Rozstępy',
    'Nierówna tekstura skóry',
    'Przebarwienia i plamki słoneczne',
    'Rozszerzone pory',
    'Skóra zmęczona i pozbawiona blasku',
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje mezoterapia mikroigłowa w Białymstoku?",
      answer: "Koszt zabiegu mezoterapii mikroigłowej wynosi od 350 do 500 PLN, w zależności od zakresu i zastosowanych preparatów. Cena obejmuje konsultację, wykonanie zabiegu profesjonalnym urządzeniem oraz zalecenia pielęgnacyjne."
    },
    {
      question: "Czy mezoterapia mikroigłowa boli?",
      answer: "Podczas zabiegu możesz odczuwać niewielki dyskomfort, porównywalny do delikatnego szczypania. Stosuję krem znieczulający, który znacząco zmniejsza odczucia podczas zabiegu. Większość osób dobrze toleruje zabieg i opisuje go jako akceptowalny."
    },
    {
      question: "Jak długo trwa zabieg mezoterapii mikroigłowej?",
      answer: "Cały zabieg trwa około 60-90 minut, wliczając w to konsultację, przygotowanie skóry, aplikację kremu znieczulającego (około 20-30 minut), wykonanie zabiegu i aplikację preparatów kojących. To zabieg realizowany podczas jednej wizyty."
    },
    {
      question: "Kiedy widać efekty mezoterapii mikroigłowej?",
      answer: "Pierwsze efekty są widoczne już po 7-10 dniach, gdy rozpoczyna się proces regeneracji skóry. Pełne efekty rozwijają się stopniowo przez 4-6 tygodni po zabiegu, gdy skóra produkuje nowy kolagen. Skóra staje się bardziej jędrna, wygładzona i rozświetlona."
    },
    {
      question: "Ile zabiegów mezoterapii mikroigłowej jest potrzebnych?",
      answer: "Dla optymalnych rezultatów zalecam serię 3-4 zabiegów w odstępach 4-6 tygodni. Po zakończeniu serii efekty utrzymują się przez 12-18 miesięcy. Następnie możliwe są zabiegi podtrzymujące (1-2 razy w roku)."
    },
    {
      question: "Jak przygotować się do mezoterapii mikroigłowej?",
      answer: "Przed zabiegiem zalecam: nie stosować retinoidów i kwasów przez 3-5 dni przed zabiegiem, unikać peelingu mechanicznego przez tydzień, nie opalać się przez 2 tygodnie przed zabiegiem, wypić dużo wody dzień przed zabiegiem oraz poinformować mnie o wszystkich przyjmowanych lekach."
    },
    {
      question: "Jak wygląda rekonwalescencja po mezoterapii mikroigłowej?",
      answer: "Po zabiegu występuje zaczerwienienie i lekki obrzęk przez 24-48 godzin. Przez pierwsze 24h należy unikać makijażu, przez 48h unikać intensywnego wysiłku i sauny. Możliwe jest łuszczenie się skóry przez 3-5 dni. Można wrócić do normalnych aktywności po 2-3 dniach."
    },
    {
      question: "Czy mezoterapia mikroigłowa jest bezpieczna?",
      answer: "Tak, mezoterapia mikroigłowa jest bezpiecznym zabiegiem, gdy jest wykonywana przez wykwalifikowaną osobę z zachowaniem zasad sterylności. Jako profesjonalna kosmetyczka z wykształceniem pielęgniarskim dbam o najwyższe standardy higieny i używam jednorazowych końcówek sterylnych."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Mezoterapia Mikroigłowa' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWd0aD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOEFGMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTh2MkgyNHYtMmgxMnptMC04djJIMjR2LTJoMTJ6bTAtOHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C542] transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              Powrót do strony głównej
            </Link>
          </motion.div>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6"
            >
              <span className="text-[#D4AF37] text-sm">Zabieg regeneracyjny</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Mezoterapia <span className="text-[#D4AF37]">Mikroigłowa</span> Białystok
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              Mezoterapia mikroigłowa (microneedling) to zabieg wykorzystujący kontrolowane mikrourazy skóry 
              w celu stymulacji naturalnych procesów regeneracyjnych i produkcji kolagenu.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
            >
              Umów wizytę na Mezoterapię Mikroigłową
            </motion.a>
          </div>
        </div>
      </section>

      {/* What is Microneedling Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-8 text-center"
            >
              Czym jest <span className="text-[#D4AF37]">Mezoterapia Mikroigłowa?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong>Mezoterapia mikroigłowa</strong>, znana również jako <strong>microneedling</strong>, 
                to zabieg wykorzystujący urządzenie z drobnymi mikroigłami, które tworzą kontrolowane mikrokanały w skórze. 
                Proces ten uruchamia naturalne mechanizmy regeneracyjne organizmu i stymuluje produkcję kolagenu oraz elastyny.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Podczas zabiegu mikroigły penetrują skórę na kontrolowaną głębokość, tworząc mikrourazy, 
                które są na tyle małe, że gojenie przebiega szybko, ale wystarczające do wywołania efektu regeneracyjnego. 
                Dodatkowo, mikrokanały umożliwiają lepsze wchłanianie składników aktywnych aplikowanych na skórę.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "Mezoterapia mikroigłowa to jeden z najbardziej wszechstronnych zabiegów regeneracyjnych, 
                  skuteczny w leczeniu zmarszczek, blizn, rozstępów i wielu innych problemów skórnych. 
                  Zabieg jest minimalnie inwazyjny i bezpieczny dla wszystkich typów skóry."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-4"
              >
                Korzyści z <span className="text-[#D4AF37]">Mezoterapii Mikroigłowej</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Wszechstronna regeneracja i odmłodzenie skóry
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666666]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-12 text-center"
            >
              Wskazania do <span className="text-[#D4AF37]">Mezoterapii Mikroigłowej</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {indications.map((indication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-[#666666]">{indication}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl mb-12 text-center"
            >
              Przebieg <span className="text-[#D4AF37]">Mezoterapii Mikroigłowej</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: 'Konsultacja i przygotowanie',
                  description: 'Dokładna konsultacja, podczas której oceniam stan skóry i omawiam Twoje cele. Przygotowuję skórę do zabiegu poprzez dokładne oczyszczenie.'
                },
                {
                  number: 2,
                  title: 'Aplikacja kremu znieczulającego',
                  description: 'Nakładam profesjonalny krem znieczulający na około 20-30 minut, aby maksymalnie zmniejszyć dyskomfort podczas zabiegu.'
                },
                {
                  number: 3,
                  title: 'Wykonanie zabiegu',
                  description: 'Przy użyciu profesjonalnego urządzenia z mikroigłami wykonuję zabieg na wybranych obszarach twarzy lub ciała, tworząc kontrolowane mikrokanały.'
                },
                {
                  number: 4,
                  title: 'Aplikacja preparatów aktywnych',
                  description: 'Nakładam specjalistyczne serum lub preparat dopasowany do Twoich potrzeb, który wchłania się przez stworzone mikrokanały głęboko w skórę.'
                },
                {
                  number: 5,
                  title: 'Zalecenia pielęgnacyjne',
                  description: 'Po zabiegu otrzymujesz szczegółowe zalecenia dotyczące pielęgnacji i postępowania poregeneracyjnego dla optymalnych efektów.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full flex items-center justify-center text-black">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{step.title}</h3>
                    <p className="text-[#666666]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contraindications Section */}
      <section className="py-16 md:py-24 bg-[#F9F7F4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AlertTriangle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-4"
              >
                Przeciwskazania do <span className="text-[#D4AF37]">Mezoterapii Mikroigłowej</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Bezpieczeństwo jest priorytetem - przed zabiegiem sprawdzamy przeciwwskazania
              </motion.p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Ciąża i okres karmienia piersią',
                'Aktywne infekcje skórne',
                'Opryszczka w fazie aktywnej',
                'Aktywne trądzik z zapaleniem',
                'Keloidalne blizny',
                'Przyjmowanie izotretinoiny (6 miesięcy przed zabiegiem)',
                'Zaburzenia krzepnięcia krwi',
                'Choroby autoimmunologiczne',
                'Cukrzyca',
                'Przyjmowanie leków fotouczulających',
                'Świeża opalenizna (2 tygodnie)',
                'Świeże zabiegi resurfacingowe',
              ].map((contraindication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-red-100"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#666666]">{contraindication}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4AF37]"
            >
              <p className="text-[#666666] text-center">
                <strong>Ważne:</strong> Podczas konsultacji przeprowadzam szczegółowy wywiad, 
                aby upewnić się, że zabieg jest dla Ciebie bezpieczny i odpowiedni.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} treatmentName="mezoterapia-mikroiglowa" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/mezoterapia-mikroiglowa-bialystok" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl mb-6"
          >
            Gotowa na <span className="text-[#D4AF37]">regenerację</span> skóry?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Umów się na konsultację i odkryj możliwości Mezoterapii Mikroigłowej w Białymstoku
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
            >
              Umów wizytę online
            </a>
            <Link 
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37]/10 transition-all"
            >
              Skontaktuj się
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}