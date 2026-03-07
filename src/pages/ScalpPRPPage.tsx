import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle, Sprout } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';

export function ScalpPRPPage() {
  useEffect(() => {
    document.title = 'Osocze na Skórę Głowy PRP Białystok | Zabieg Przeciw Wypadaniu Włosów - Julia Więckowska';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Osocze bogatopłytkowe na skórę głowy w Białymstoku. Skuteczny zabieg PRP przeciwko wypadaniu włosów. Stymulacja wzrostu włosów, zagęszczenie i poprawa kondycji skóry głowy.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'osocze na włosy białystok, PRP skóra głowy białystok, wypadanie włosów białystok, zagęszczanie włosów białystok, PRP hair białystok, mezoterapia włosów białystok');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://osoczebialystok.pl/osocze-na-skore-glowy-bialystok');
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
    ogUrl.setAttribute('content', 'https://osoczebialystok.pl/osocze-na-skore-glowy-bialystok');
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'PRP na Skórę Głowy Białystok - Zabieg Przeciw Wypadaniu Włosów');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Skuteczny zabieg PRP przeciwko wypadaniu włosów w Białymstoku. Stymulacja wzrostu i zagęszczenie włosów.');
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
    twitterTitle.setAttribute('content', 'PRP na Skórę Głowy - Zabieg Przeciw Wypadaniu Włosów Białystok');
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Zatrzymaj wypadanie włosów zabiegiem PRP na skórę głowy w Białymstoku.');
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
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="scalp"]');
    if (!existingSchema) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "PRP na Skórę Głowy Białystok",
        "alternateName": "Mezoterapia Osoczem Przeciw Wypadaniu Włosów",
        "description": "Zabieg osoczem bogatopłytkowym na skórę głowy. Skuteczna metoda zatrzymania wypadania włosów, stymulacja wzrostu i zagęszczenie włosów.",
        "procedureType": "Therapeutic",
        "bodyLocation": "Scalp",
        "preparation": "Konsultacja trychologiczna i ocena stanu skóry głowy",
        "followup": "Zalecenia pielęgnacyjne i seria zabiegów",
        "howPerformed": "Pobranie krwi, wirowanie, mezoterapia osoczem skóry głowy",
        "offers": {
          "@type": "Offer",
          "price": "400",
          "priceCurrency": "PLN",
          "url": "https://osoczebialystok.pl/osocze-na-skore-glowy-bialystok",
          "availability": "https://schema.org/InStock"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'scalp');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, []);

  const benefits = [
    'Zatrzymanie wypadania włosów',
    'Stymulacja wzrostu nowych włosów',
    'Zagęszczenie włosów',
    'Poprawa kondycji cebulek włosowych',
    'Wzmocnienie struktury włosa',
    'Poprawa krążenia w skórze głowy',
    'Naturalny i bezpieczny zabieg',
    'Bez efektów ubocznych',
  ];

  const indications = [
    {
      title: 'Łysienie androgenowe',
      description: 'Najbardziej powszechna przyczyna wypadania włosów u mężczyzn i kobiet',
    },
    {
      title: 'Łysienie plackowate',
      description: 'Ogniska łysienia o charakterze autoimmunologicznym',
    },
    {
      title: 'Wypadanie włosów telogenowe',
      description: 'Nadmierne wypadanie po stresie, ciąży lub chorobie',
    },
    {
      title: 'Przerzedzenie włosów',
      description: 'Stopniowa utrata gęstości i objętości włosów',
    },
    {
      title: 'Słabe cebulek włosowe',
      description: 'Cienkie, łamliwe włosy wymagające wzmocnienia',
    },
    {
      title: 'Regeneracja po zabiegach',
      description: 'Wsparcie po przeszczepie włosów lub innych zabiegach',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje osocze na włosy w Białymstoku?",
      answer: "Koszt zabiegu PRP na skórę głowy wynosi 450 PLN za jedną sesję. Cena obejmuje konsultację, pobranie krwi, przygotowanie osocza w wirówce oraz profesjonalną aplikację w skórę głowy z zaleceniami pielęgnacyjnymi."
    },
    {
      question: "Czy zabieg PRP na włosy boli?",
      answer: "Zabieg PRP na skórę głowy jest stosunkowo komfortowy. Większość osób odczuwa tylko niewielki dyskomfort podczas mikroiniekcji. Na życzenie mogę zastosować miejscowe znieczulenie, które minimalizuje wszelkie odczucia. Po zabiegu możliwa jest niewielka wrażliwość skóry głowy, która szybko ustępuje."
    },
    {
      question: "Ile zabiegów PRP na włosy jest potrzebnych?",
      answer: "Dla optymalnych rezultatów zalecam serię 3-4 zabiegów PRP w odstępach 4-6 tygodni. Po zakończeniu podstawowej serii efekty utrzymują się przez 12-18 miesięcy. Następnie możliwe są zabiegi podtrzymujące (1-2 razy w roku) w zależności od indywidualnych potrzeb."
    },
    {
      question: "Kiedy widać efekty zabiegu PRP na włosy?",
      answer: "Pierwsze efekty - zatrzymanie wypadania włosów - widoczne są już po 2-4 tygodniach od pierwszego zabiegu. Wzrost nowych włosów i zagęszczenie obserwuje się między 3-6 miesiącem. Maksymalne efekty rozwijają się stopniowo i są najbardziej widoczne po 6-12 miesiącach od zakończenia serii zabiegów."
    },
    {
      question: "Czy zabieg PRP na włosy jest skuteczny?",
      answer: "Tak, badania kliniczne potwierdzają wysoką skuteczność PRP w leczeniu wypadania włosów. Zabieg jest szczególnie skuteczny w łysieniu androgenowym (około 70-80% pacjentów obserwuje poprawę), łysieniu plackowatym i wypadaniu telogenowym. Najlepsze rezultaty osiąga się przy wczesnym rozpoczęciu terapii."
    },
    {
      question: "Jak przygotować się do zabiegu PRP na włosy?",
      answer: "Przed zabiegiem zalecam: umycie włosów wieczorem przed zabiegiem lub rano w dzień zabiegu, unikanie alkoholu przez 48h, wypicie dużej ilości wody dzień przed zabiegiem, nie stosowanie leków przeciwzakrzepowych (po konsultacji) oraz poinformowanie mnie o przyjmowanych lekach i stanie zdrowia."
    },
    {
      question: "Jak długo trwa zabieg PRP na włosy?",
      answer: "Cały zabieg trwa około 60-75 minut. Obejmuje to konsultację (5-10 min), pobranie krwi (5 min), wirowanie w wirówce (10-15 min) oraz aplikację osocza w skórę głowy (30-40 min). To zabieg realizowany podczas jednej wizyty bez konieczności hospitalizacji."
    },
    {
      question: "Jakie są przeciwwskazania do zabiegu PRP na włosy?",
      answer: "Główne przeciwwskazania to: ciąża i karmienie piersią, aktywne infekcje skóry głowy, choroby nowotworowe, zaburzenia krzepnięcia, małopłytkowość, przyjmowanie leków przeciwzakrzepowych, choroby autoimmunologiczne w fazie aktywnej, przewlekłe choroby wątroby oraz niestabilna cukrzyca. Podczas konsultacji przeprowadzam szczegółowy wywiad, aby upewnić się, że zabieg jest dla Ciebie bezpieczny."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Osocze na włosy PRP Białystok' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOEFGMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTh2MkgyNHYtMmgxMnptMC04djJIMjR2LTJoMTJ6bTAtOHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6"
            >
              <Sprout className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm">Skuteczny zabieg na włosy</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Osocze na Skórę Głowy <span className="text-[#D4AF37]">Białystok</span>
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              Zabieg PRP na skórę głowy to skuteczna terapia stymulująca wzrost włosów i zatrzymująca ich wypadanie. 
              Wykorzystujemy naturalne czynniki wzrostu z Twojej własnej krwi, aby reaktywować uśpione cebulki 
              włosowe i poprawić kondycję skóry głowy.
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
              Umów wizytę na zabieg PRP włosy
            </motion.a>
          </div>
        </div>
      </section>

      {/* What is PRP for Hair Section */}
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
                <Sprout className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-8"
              >
                Czym jest <span className="text-[#D4AF37]">Osocze na Włosy?</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong>PRP (Platelet-Rich Plasma)</strong> na skórę głowy to zaawansowany zabieg wykorzystujący 
                własne osocze bogatopłytkowe pacjenta do stymulacji wzrostu włosów. Płytki krwi zawierają 
                naturalne czynniki wzrostu, które aktywują uśpione cebulki włosowe i poprawiają mikrokrążenie w skórze głowy.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Zabieg polega na pobraniu małej ilości krwi, jej przygotowaniu w wirówce, a następnie 
                precyzyjnym wstrzyknięciu osocza w skórę głowy. Czynniki wzrostu stymulują cebulki włosowe, 
                wydłużają fazę wzrostu włosa i poprawiają jego grubość.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "Osocze bogatopłytkowe to przełomowa metoda w leczeniu wypadania włosów – 
                  naturalny sposób na zagęszczenie włosów i zatrzymanie ich utraty."
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
                Korzyści z zabiegu <span className="text-[#D4AF37]">PRP na włosy</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Naturalny sposób na gęste i zdrowe włosy
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
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#D4AF37]/10"
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
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl text-[#D4AF37] mb-2">{indication.title}</h3>
                  <p className="text-[#666666]">{indication.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
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
              Przebieg zabiegu <span className="text-[#D4AF37]">PRP na włosy</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: 'Konsultacja i diagnostyka',
                  description: 'Oceniam stan skóry głowy i włosów. Ustalamy plan zabiegowy i oczekiwane rezultaty.'
                },
                {
                  number: 2,
                  title: 'Pobranie krwi',
                  description: 'Pobieram niewielką ilość krwi (około 20 ml) – standardowa procedura jak przy badaniach.'
                },
                {
                  number: 3,
                  title: 'Wirowanie i przygotowanie PRP',
                  description: 'Krew jest wirowana w specjalistycznej wirówce, aby wydzielić osocze bogate w płytki krwi.'
                },
                {
                  number: 4,
                  title: 'Aplikacja w skórę głowy',
                  description: 'Przygotowane osocze aplikuję poprzez serie mikroiniekcji w obszary wymagające stymulacji.'
                },
                {
                  number: 5,
                  title: 'Zalecenia i plan zabiegowy',
                  description: 'Po zabiegu otrzymujesz zalecenia pielęgnacyjne. Zazwyczaj zalecam serię 3-4 zabiegów co 4-6 tygodni.'
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

      {/* Results Timeline Section */}
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
              Kiedy widać <span className="text-[#D4AF37]">efekty?</span>
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  time: '2-4 tygodnie',
                  effect: 'Zatrzymanie wypadania włosów',
                  description: 'Pierwsze zauważalne efekty – włosy wypadają mniej intensywnie'
                },
                {
                  time: '3-6 miesięcy',
                  effect: 'Wzrost nowych włosów',
                  description: 'Widoczne odrastanie włosów i zagęszczenie w obszarach przerzedzenia'
                },
                {
                  time: '6-12 miesięcy',
                  effect: 'Maksymalne efekty',
                  description: 'Pełen efekt zabiegu – zagęszczenie, poprawa kondycji i wzmocnienie włosów'
                },
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#D4AF37]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
                        {timeline.time}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{timeline.effect}</h3>
                      <p className="text-[#666666]">{timeline.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contraindications Section */}
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
                <AlertTriangle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-4"
              >
                Przeciwskazania do zabiegu <span className="text-[#D4AF37]">PRP na włosy</span>
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
      <FAQSection faqs={faqs} treatmentName="scalp" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/osocze-na-skore-glowy-bialystok" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sprout className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl mb-6"
          >
            Zadbaj o swoje włosy <span className="text-[#D4AF37]">naturalnie</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Umów się na konsultację i zatrzymaj wypadanie włosów metodą PRP w Białymstoku
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