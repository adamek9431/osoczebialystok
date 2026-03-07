import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';

export function ExosomesPage() {
  useEffect(() => {
    document.title = 'Autologiczne Egzosomy Białystok | Zabieg Egzosomami - Julia Więckowska';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Zabieg autologicznymi egzosomami w Białymstoku. Nowoczesna technologia regeneracji skóry na poziomie molekularnym. Naturalne odmładzanie i regeneracja.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'egzosomy białystok, autologiczne egzosomy, zabieg egzosomami białystok, regeneracja skóry białystok, odmładzanie białystok, terapia egzosomowa');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://osoczebialystok.pl/autologiczne-egzosomy-bialystok');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Open Graph Tags
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://osoczebialystok.pl/autologiczne-egzosomy-bialystok');
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Zabieg Autologicznymi Egzosomami Białystok - Julia Więckowska');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Zabieg autologicznymi egzosomami w Białymstoku. Nowoczesna technologia regeneracji skóry na poziomie molekularnym.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'pl_PL');
    if (!document.querySelector('meta[property="og:locale"]')) {
      document.head.appendChild(ogLocale);
    }

    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'Osocze Białystok - Julia Więckowska');
    if (!document.querySelector('meta[property="og:site_name"]')) {
      document.head.appendChild(ogSiteName);
    }

    // Twitter Card Tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', 'Zabieg Autologicznymi Egzosomami Białystok');
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Nowoczesna regeneracja skóry na poziomie molekularnym zabiegiem egzosomami w Białymstoku.');
    if (!document.querySelector('meta[name="twitter:description"]')) {
      document.head.appendChild(twitterDescription);
    }

    // Meta Robots
    const metaRobots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large');
    if (!document.querySelector('meta[name="robots"]')) {
      document.head.appendChild(metaRobots);
    }

    // JSON-LD MedicalProcedure Schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="exosomes"]');
    if (!existingSchema) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zabieg Autologicznymi Egzosomami Białystok",
        "alternateName": "Exosome Therapy",
        "description": "Autologiczne egzosomy to nowoczesna technologia wykorzystująca naturalne nanocząsteczki pochodzące z Twojej własnej krwi, które przekazują sygnały regeneracyjne między komórkami.",
        "procedureType": "Therapeutic",
        "bodyLocation": "Face",
        "preparation": "Konsultacja i ocena stanu skóry",
        "followup": "Zalecenia pielęgnacyjne po zabiegu",
        "howPerformed": "Pobranie krwi, izolacja egzosomów, aplikacja preparatu",
        "offers": {
          "@type": "Offer",
          "price": "2000",
          "priceCurrency": "PLN",
          "url": "https://osoczebialystok.pl/autologiczne-egzosomy-bialystok",
          "availability": "https://schema.org/InStock"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'exosomes');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, []);

  const benefits = [
    'Intensywna stymulacja odnowy komórkowej',
    'Zwiększenie produkcji kolagenu i elastyny',
    'Regeneracja skóry na poziomie molekularnym',
    'Poprawa gęstości i struktury skóry',
    'Redukcja zmarszczek i linii mimicznych',
    'Wyrównanie kolorytu i tekstury skóry',
    'Poprawa elastyczności i nawilżenia',
    'Stymulacja wzrostu włosów',
  ];

  const indications = [
    'Zaawansowane oznaki starzenia się skóry',
    'Głębokie zmarszczki i bruzdy',
    'Utrata gęstości i objętości skóry',
    'Poważne uszkodzenia posłoneczne',
    'Blizny i rozstępy',
    'Problemy z wypadaniem włosów',
    'Skóra wymagająca intensywnej regeneracji',
    'Nierówny koloryt i struktura skóry',
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje zabieg autologicznymi egzosomami w Białymstoku?",
      answer: "Koszt zabiegu autologicznymi egzosomami wynosi 2000 PLN. Cena obejmuje konsultację, pobranie krwi, zaawansowane przygotowanie preparatu egzosomowego oraz profesjonalne wykonanie zabiegu z kompleksowymi zaleceniami pielęgnacyjnymi."
    },
    {
      question: "Czym różnią się egzosomy od PRP i PRF?",
      answer: "Egzosomy to najnowsza generacja zabiegów autologicznych. Podczas gdy PRP i PRF wykorzystują płytki krwi i czynniki wzrostu, terapia egzosomowa wykorzystuje mikroskopijne pęcherzyki (nanocząsteczki) zawierające materiał genetyczny i białka, które przekazują precyzyjne sygnały regeneracyjne bezpośrednio do komórek skóry. Egzosomy działają na głębszym, molekularnym poziomie."
    },
    {
      question: "Czy zabieg egzosomami boli?",
      answer: "Zabieg jest stosunkowo komfortowy. Aplikacja preparatu może powodować niewielki dyskomfort. Na życzenie mogę zastosować krem znieczulający, który znacząco zmniejsza odczucia podczas zabiegu. Większość osób dobrze toleruje zabieg."
    },
    {
      question: "Jak długo trwa zabieg egzosomami?",
      answer: "Cały zabieg trwa około 90-120 minut, wliczając w to konsultację, pobranie krwi, zaawansowane przygotowanie preparatu egzosomowego (ok. 45-60 minut) oraz aplikację. Ze względu na złożoność procesu izolacji egzosomów, zabieg wymaga więcej czasu niż standardowy PRP."
    },
    {
      question: "Kiedy widać efekty zabiegu egzosomami?",
      answer: "Pierwsze efekty są widoczne już po 1-2 tygodniach, gdy rozpoczyna się intensywny proces regeneracji komórkowej. Pełne efekty rozwijają się stopniowo i są najbardziej spektakularne po 4-12 tygodniach od zabiegu. Skóra staje się wyraźnie bardziej jędrna, gęsta, rozświetlona i odmłodzona."
    },
    {
      question: "Ile zabiegów egzosomami jest potrzebnych?",
      answer: "Ze względu na intensywne działanie, wiele osób widzi znaczące rezultaty już po 1-2 zabiegach. Dla optymalnych efektów zalecam serię 2-3 zabiegów w odstępach 6-8 tygodni. Efekty utrzymują się przez 18-24 miesiące. Możliwe są zabiegi podtrzymujące (1-2 razy w roku)."
    },
    {
      question: "Jak przygotować się do zabiegu egzosomami?",
      answer: "Przygotowanie jest podobne jak do zabiegów PRP/PRF: należy wypić dużo wody dzień przed zabiegiem, unikać alkoholu przez 48h, nie stosować aspiryny i leków przeciwzakrzepowych (po konsultacji), zjeść lekki posiłek przed zabiegiem oraz poinformować mnie o wszystkich przyjmowanych lekach."
    },
    {
      question: "Jak wygląda rekonwalescencja po zabiegu egzosomami?",
      answer: "Po zabiegu możliwy jest niewielki obrzęk i zaczerwienienie przez 24-72 godziny. Przez pierwsze 24h należy unikać makijażu, intensywnego wysiłku i sauny. Można wrócić do normalnych aktywności po 1-2 dniach. Pełna regeneracja zajmuje 3-5 dni."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Autologiczne Egzosomy' }
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
              <span className="text-[#D4AF37] text-sm">Najnowsza generacja zabiegów autologicznych</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Autologiczne <span className="text-[#D4AF37]">Egzosomy</span> Białystok
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              Nowoczesna technologia wykorzystująca naturalne nanocząsteczki pochodzące z Twojej własnej krwi, 
              które przekazują sygnały regeneracyjne między komórkami na poziomie molekularnym.
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
              Umów wizytę na zabieg Egzosomami
            </motion.a>
          </div>
        </div>
      </section>

      {/* What are Exosomes Section */}
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
              Czym są <span className="text-[#D4AF37]">Autologiczne Egzosomy?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong>Egzosomy</strong> to mikroskopijne pęcherzyki (nanocząsteczki o wielkości 30-150 nanometrów) 
                wydzielane naturalnie przez komórki, które pełnią rolę komunikatorów międzykomórkowych. 
                Zawierają one materiał genetyczny (RNA, mikroRNA), białka i lipidy, które przekazują precyzyjne sygnały regeneracyjne.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Zabieg polega na pobraniu Twojej krwi i wyizolowaniu z niej egzosomów za pomocą zaawansowanej technologii. 
                Tak przygotowany preparat jest następnie aplikowany w obszary wymagające intensywnej regeneracji. 
                Egzosomy działają na poziomie molekularnym, aktywując naturalne mechanizmy odnowy komórkowej.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "Autologiczne egzosomy to najbardziej zaawansowana forma terapii regeneracyjnej, 
                  wykorzystująca najnowsze osiągnięcia nauki o komunikacji międzykomórkowej. 
                  To zabieg w 100% naturalny, bez ryzyka alergii czy odrzucenia."
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
                Korzyści z zabiegu <span className="text-[#D4AF37]">Egzosomami</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Regeneracja na poziomie molekularnym
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
              Wskazania do zabiegu <span className="text-[#D4AF37]">Egzosomami</span>
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
              Przebieg zabiegu <span className="text-[#D4AF37]">Egzosomami</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: 'Konsultacja i przygotowanie',
                  description: 'Dokładna konsultacja, podczas której omawiam Twoje oczekiwania i oceniam stan skóry. Ustalamy plan zabiegu.'
                },
                {
                  number: 2,
                  title: 'Pobranie krwi',
                  description: 'Pobieram krew (ok. 20-30 ml) w specjalne probówki przystosowane do izolacji egzosomów.'
                },
                {
                  number: 3,
                  title: 'Izolacja egzosomów',
                  description: 'Krew jest poddawana zaawansowanemu procesowi wirowania i filtracji, aby wyizolować egzosomy z osocza.'
                },
                {
                  number: 4,
                  title: 'Aplikacja preparatu',
                  description: 'Przygotowany preparat egzosomowy aplikuję w wyznaczone obszary poprzez mikroiniekcje lub w połączeniu z metodami transdermal'
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
                Przeciwskazania do zabiegu <span className="text-[#D4AF37]">Egzosomami</span>
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
      <FAQSection faqs={faqs} treatmentName="egzosomy" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/autologiczne-egzosomy-bialystok" />

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
            Gotowa na <span className="text-[#D4AF37]">regenerację</span> na poziomie molekularnym?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Umów się na konsultację i odkryj możliwości zabiegu Autologicznymi Egzosomami w Białymstoku
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