import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { setupSEOMetaTags, setupOGImage, SEO_CONFIGS } from '../utils/seo-config';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';

export function PRPPage() {
  useEffect(() => {
    // Setup SEO
    setupSEOMetaTags(SEO_CONFIGS.prp);
    setupOGImage(image_25909a0558481bbf84b9fdcc4c4b411887b1789a);

    // JSON-LD Schema for PRP Service
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) existingSchema.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Zabieg Osoczem Bogatopłytkowym PRP",
      "alternateName": "Wampirzy Lifting",
      "description": "Zabieg osoczem bogatopłytkowym PRP - naturalne odmładzanie skóry bez skalpela. Wykorzystuje własne osocze pacjenta do regeneracji i odmładzania skóry.",
      "procedureType": "Terapeutyczny",
      "bodyLocation": "Twarz, szyja, dekolt",
      "preparation": "Konsultacja przed zabiegiem, unikanie aspiryny 7 dni przed zabiegiem",
      "followup": "Kontrola po 2 tygodniach",
      "howPerformed": "Pobranie krwi, wirowanie, izolacja osocza bogatego w płytki krwi, iniekcje w wybrane partie twarzy",
      "availability": {
        "@type": "MedicalBusiness",
        "name": "Osocze Białystok - Julia Więckowska",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Białystok",
          "addressCountry": "PL"
        },
        "telephone": "+48723574156"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  const benefits = [
    'Stymulacja produkcji kolagenu i elastyny',
    'Poprawa napięcia i elastyczności skóry',
    'Redukcja drobnych zmarszczek i linii mimicznych',
    'Wyrównanie kolorytu i tekstury skóry',
    'Naturalne rozjaśnienie i rozświetlenie',
    'Regeneracja uszkodzeń posłonecznych',
    'Poprawa ukrwienia i odżywienia skóry',
    'Minimalizacja porów i niedoskonałości',
  ];

  const indications = [
    'Oznaki starzenia się skóry',
    'Drobne zmarszczki i bruzdy',
    'Utrata napięcia i elastyczności',
    'Nierówny koloryt skóry',
    'Blizny potrądzikowe',
    'Rozstępy',
    'Przebarwienia',
    'Zmęczona, matowa skóra',
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje zabieg PRP w Białymstoku?",
      answer: "Koszt zabiegu PRP wynosi 500 PLN. Cena obejmuje konsultację, pobranie krwi, przygotowanie osocza oraz profesjonalne wykonanie zabiegu z zaleceniami pielęgnacyjnymi."
    },
    {
      question: "Czy zabieg PRP boli?",
      answer: "Zabieg PRP jest stosunkowo komfortowy. Większość osób odczuwa jedynie niewielki dyskomfort podczas aplikacji osocza. Na życzenie mogę zastosować krem znieczulający, który znacząco zmniejsza odczucia podczas zabiegu."
    },
    {
      question: "Jak długo trwa zabieg PRP?",
      answer: "Cały zabieg PRP trwa około 60-90 minut, wliczając w to konsultację, pobranie krwi, przygotowanie osocza w wirówce (ok. 10-15 minut) oraz aplikację. To zabieg realizowany podczas jednej wizyty."
    },
    {
      question: "Kiedy widać efekty zabiegu PRP?",
      answer: "Pierwsze efekty zabiegu PRP widoczne są po około 2-3 tygodniach, gdy rozpoczyna się proces regeneracji skóry. Pełne efekty rozwijają się stopniowo i są najbardziej widoczne po 4-8 tygodniach od zabiegu. Skóra staje się jędrniejsza, bardziej rozświetlona i wygładzona."
    },
    {
      question: "Ile zabiegów PRP jest potrzebnych?",
      answer: "Dla optymalnych rezultatów zalecam serię 3-4 zabiegów PRP w odstępach 4-6 tygodni. Po zakończeniu serii efekty utrzymują się przez 12-18 miesięcy. Następnie możliwe są zabiegi podtrzymujące (1-2 razy w roku)."
    },
    {
      question: "Jak przygotować się do zabiegu PRP?",
      answer: "Przed zabiegiem PRP zalecam: wypicie większej ilości wody dzień przed zabiegiem, unikanie alkoholu przez 48h przed zabiegiem, nie stosowanie aspiryny i leków przeciwzakrzepowych (po konsultacji), zjedzenie lekkiego posiłku przed zabiegiem oraz poinformowanie mnie o wszystkich przyjmowanych lekach i suplementach."
    },
    {
      question: "Jak wygląda rekonwalescencja po zabiegu PRP?",
      answer: "Po zabiegu PRP możliwy jest niewielki obrzęk i zaczerwienienie, które ustępują w ciągu 24-48 godzin. Przez pierwsze 24h unikaj makijażu, intensywnego wysiłku fizycznego i sauny. Można wrócić do normalnych aktywności już następnego dnia. Pełna regeneracja skóry zajmuje 2-3 dni."
    },
    {
      question: "Czy zabieg PRP jest bezpieczny?",
      answer: "Tak, zabieg PRP jest całkowicie bezpieczny, ponieważ wykorzystujemy Twoją własną krew - nie ma ryzyka alergii ani odrzucenia. Jako profesjonalna kosmetyczka z wykształceniem pielęgniarskim dbam o najwyższe standardy higieny i sterylności podczas zabiegu."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Osocze PRP Białystok' }
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
              <span className="text-[#D4AF37] text-sm">Zabieg z osoczem bogatopłytkowym</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Osocze Bogatopłytkowe <span className="text-[#D4AF37]">(PRP)</span> Białystok
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              PRP to innowacyjny zabieg wykorzystujący naturalne właściwości Twojej krwi do odmłodzenia i regeneracji skóry. 
              Zabieg znany również jako "wampirzy lifting" to naturalna alternatywa dla inwazyjnych zabiegów.
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
              Umów wizytę na zabieg PRP
            </motion.a>
          </div>
        </div>
      </section>

      {/* What is PRP Section */}
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
              Czym jest <span className="text-[#D4AF37]">PRP?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong>PRP (Platelet-Rich Plasma)</strong> – osocze bogatopłytkowe – to koncentrat płytek krwi otrzymany z Twojej własnej krwi. 
                Płytki krwi zawierają czynniki wzrostu, które po aplikacji w skórę stymulują naturalne procesy regeneracyjne.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Zabieg polega na pobraniu niewielkiej ilości krwi (podobnie jak przy standardowych badaniach), 
                następnie krew jest wirowana w specjalnej wirówce, co pozwala na oddzielenie osocza bogatopłytkowego. 
                Tak przygotowany preparat jest następnie aplikowany w obszary wymagające regeneracji.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "PRP to w 100% naturalny zabieg wykorzystujący potencjał Twojego własnego organizmu. 
                  Nie ma ryzyka alergii ani odrzucenia, ponieważ używamy Twojej własnej krwi."
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
                Korzyści z zabiegu <span className="text-[#D4AF37]">PRP</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Naturalne odmłodzenie i regeneracja skóry
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
              Wskazania do zabiegu <span className="text-[#D4AF37]">PRP</span>
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
              Przebieg zabiegu <span className="text-[#D4AF37]">PRP</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: 'Konsultacja i przygotowanie',
                  description: 'Każdy zabieg poprzedza dokładna konsultacja. Omawiam Twoje oczekiwania i oceniam stan skóry.'
                },
                {
                  number: 2,
                  title: 'Pobranie krwi',
                  description: 'Pobieram niewielką ilość krwi (10-20 ml) – podobnie jak przy standardowych badaniach laboratoryjnych.'
                },
                {
                  number: 3,
                  title: 'Wirowanie i przygotowanie PRP',
                  description: 'Krew jest wirowana w specjalistycznej wirówce, aby uzyskać osocze bogate w płytki krwi.'
                },
                {
                  number: 4,
                  title: 'Aplikacja osocza',
                  description: 'Przygotowane osocze aplikuję w wyznaczone obszary poprzez iniekcje lub w połączeniu z microneedlingiem.'
                },
                {
                  number: 5,
                  title: 'Zalecenia pielęgnacyjne',
                  description: 'Po zabiegu otrzymujesz szczegółowe zalecenia dotyczące pielęgnacji i postępowania poregeneracyjnego.'
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
                Przeciwskazania do zabiegu <span className="text-[#D4AF37]">PRP</span>
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
                'Choroby nowotworowe',
                'Zaburzenia krzepnięcia krwi',
                'Przyjmowanie leków przeciwzakrzepowych',
                'Aktywne infekcje skórne',
                'Choroby autoimmunologiczne',
                'Niestabilna cukrzyca',
                'Przewlekłe choroby wątroby',
                'Małopłytkowość',
                'Gorączka i ostre stany zapalne',
                'Immunosupresja',
                'Aktywny opryszczka',
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
                <strong>Ważne:</strong> Podczas konsultacji przeprowadzam szczegółowy wywiad zdrowotny, 
                aby upewnić się, że zabieg jest dla Ciebie bezpieczny i odpowiedni.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} treatmentName="prp" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/osocze-bogatoplytkowe-prp-bialystok" />

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
            Gotowa na naturalną <span className="text-[#D4AF37]">regenerację</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Umów się na konsultację i odkryj możliwości zabiegu PRP w Białymstoku
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
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all"
            >
              Skontaktuj się
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}