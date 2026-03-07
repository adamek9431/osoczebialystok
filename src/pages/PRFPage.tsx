import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';

export function PRFPage() {
  useEffect(() => {
    document.title = 'Fibryna Bogatopłytkowa PRF Białystok | Zabieg PRF - Julia Więckowska';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Zabieg fibryną bogatopłytkową PRF w Białymstoku. Naturalna regeneracja bez dodatków chemicznych. Zabieg PRF to następna generacja osocza bogatopłytkowego.');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'fibryna bogatopłytkowa białystok, PRF białystok, zabieg PRF, fibryna na twarz białystok, PRF vs PRP białystok, odmładzanie fibryną białystok');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok');
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
    ogUrl.setAttribute('content', 'https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok');
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Zabieg PRF (Fibryna Bogatopłytkowa) Białystok - Julia Więckowska');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Zabieg fibryną bogatopłytkową PRF w Białymstoku. Naturalna regeneracja bez dodatków chemicznych - następna generacja PRP.');
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
    twitterTitle.setAttribute('content', 'Zabieg PRF (Fibryna Bogatopłytkowa) Białystok');
    if (!document.querySelector('meta[name="twitter:title"]')) {
      document.head.appendChild(twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Naturalna regeneracja zabiegiem PRF w Białymstoku - długotrwałe efekty.');
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
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-page="prf"]');
    if (!existingSchema) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Zabieg PRF (Fibryna Bogatopłytkowa) Białystok",
        "alternateName": "Platelet-Rich Fibrin",
        "description": "Zabieg PRF to najnowsza generacja terapii osoczem. Wykorzystuje fibrinę bogatopłytkową dla długotrwałej regeneracji skóry bez dodatków chemicznych.",
        "procedureType": "Therapeutic",
        "bodyLocation": "Face",
        "preparation": "Konsultacja i ocena stanu skóry",
        "followup": "Zalecenia pielęgnacyjne po zabiegu",
        "howPerformed": "Pobranie krwi, wirowanie bez antykoagulantów, aplikacja fibryny bogatopłytkowej",
        "offers": {
          "@type": "Offer",
          "price": "600",
          "priceCurrency": "PLN",
          "url": "https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok",
          "availability": "https://schema.org/InStock"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page', 'prf');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, []);

  const benefits = [
    'Długotrwałe działanie regeneracyjne (do 3 miesięcy)',
    'Stopniowe uwalnianie czynników wzrostu',
    'Intensywna stymulacja produkcji kolagenu',
    'Poprawa gęstości i grubości skóry',
    'Widoczne wygładzenie zmarszczek',
    'Naturalny efekt liftingu bez skalpela',
    'Poprawa owalu twarzy',
    'Znakomite efekty pod oczami i na szyi',
  ];

  const differences = [
    {
      aspect: 'Czas działania',
      prp: 'Szybkie efekty, krótsze działanie',
      prf: 'Stopniowe, długotrwałe działanie (do 3 mies.)',
    },
    {
      aspect: 'Konsystencja',
      prp: 'Płynne osocze',
      prf: 'Gęsta, żelowa struktura',
    },
    {
      aspect: 'Czynniki wzrostu',
      prp: 'Szybkie uwalnianie',
      prf: 'Stopniowe, przedłużone uwalnianie',
    },
    {
      aspect: 'Obszary zastosowania',
      prp: 'Cała twarz, skóra głowy',
      prf: 'Pod oczy, szyja, zmarszczki, lifting',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje zabieg PRF w Białymstoku?",
      answer: "Koszt zabiegu PRF wynosi 600 PLN. Cena obejmuje konsultację, pobranie krwi, przygotowanie fibryny bogatopłytkowej oraz profesjonalne wykonanie zabiegu z kompletnymi zaleceniami pielęgnacyjnymi."
    },
    {
      question: "Czym różni się PRF od PRP?",
      answer: "PRF (fibryna) różni się od PRP (osocze) przede wszystkim strukturą i czasem działania. PRF ma gęstą, żelową konsystencję i uwalnia czynniki wzrostu stopniowo przez okres do 3 miesięcy, podczas gdy PRP działa szybciej ale krócej. PRF zapewnia bardziej długotrwałe efekty regeneracji."
    },
    {
      question: "Czy zabieg PRF boli?",
      answer: "Zabieg PRF jest stosunkowo komfortowy. Aplikacja preparatu może powodować niewielki dyskomfort, ale jest on na ogół dobrze tolerowany. Na życzenie mogę zastosować krem znieczulający, który znacząco zmniejsza odczucia podczas zabiegu."
    },
    {
      question: "Jak długo trwa zabieg PRF?",
      answer: "Cały zabieg PRF trwa około 60-90 minut. Obejmuje to konsultację, pobranie krwi, wirowanie w specjalnej wirówce (ok. 10-15 minut) oraz precyzyjną aplikację fibryny w wybrane obszary. To zabieg realizowany podczas jednej wizyty."
    },
    {
      question: "Kiedy widać efekty zabiegu PRF?",
      answer: "Pierwsze efekty zabiegu PRF widoczne są już po 2-3 tygodniach. Jednak dzięki stopniowemu uwalnianiu czynników wzrostu, pełne efekty regeneracji rozwijają się przez 2-3 miesiące i utrzymują się znacznie dłużej niż w przypadku PRP - nawet do 12-18 miesięcy."
    },
    {
      question: "Ile zabiegów PRF potrzeba?",
      answer: "Dla optymalnych rezultatów zalecam serię 2-3 zabiegów PRF w odstępach 4-6 tygodni. Dzięki długotrwałemu działaniu PRF, efekty są bardziej stabilne i trwałe niż przy PRP. Po zakończeniu serii możliwe są zabiegi podtrzymujące (1 raz w roku)."
    },
    {
      question: "Jakie obszary najlepiej reagują na PRF?",
      answer: "PRF jest szczególnie skuteczny pod oczami (cienie, zmarszczki), na szyi i dekolcie, w rejonie bruzd nosowo-wargowych oraz jako naturalny lifting twarzy. Świetnie sprawdza się też na dłoniach i przy rozstępach. Gęsta struktura PRF idealnie wypełnia i regeneruje delikatne obszary."
    },
    {
      question: "Czy zabieg PRF jest bezpieczny?",
      answer: "Tak, zabieg PRF jest całkowicie bezpieczny, ponieważ wykorzystujemy Twoją własną krew - nie ma ryzyka alergii ani odrzucenia. Dodatkowo, PRF nie zawiera żadnych dodatków chemicznych (w przeciwieństwie do PRP). Jako kosmetyczka z wykształceniem pielęgniarskim zapewniam najwyższe standardy higieny."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Fibryna PRF Białystok' }
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
              className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6"
            >
              <span className="text-[#D4AF37] text-sm">Zabieg z fibryną bogatopłytkową</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Fibryna Bogatopłytkowa <span className="text-[#D4AF37]">(PRF)</span> Białystok
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              PRF to najbardziej zaawansowana forma zabiegów autologicznych. Dzięki unikalnej strukturze żelowej 
              czynniki wzrostu są uwalniane stopniowo przez wiele tygodni, zapewniając długotrwałe efekty regeneracji i odmładzania.
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
              Umów wizytę online
            </motion.a>
          </div>
        </div>
      </section>

      {/* What is PRF Section */}
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
              Czym jest <span className="text-[#D4AF37]">PRF?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                <strong>PRF (Platelet-Rich Fibrin)</strong> – fibryna bogatopłytkowa – to najnowsza generacja zabiegów z wykorzystaniem 
                własnej krwi. W przeciwieństwie do PRP, PRF tworzy trójwymiarową strukturę żelową, która działa jak naturalna "matryca" 
                dla czynników wzrostu.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Dzięki tej unikalnej strukturze, czynniki wzrostu są uwalniane stopniowo przez okres nawet do 3 miesięcy, 
                co zapewnia długotrwałe efekty regeneracji. PRF zawiera nie tylko płytki krwi, ale także leukocyty (białe krwinki), 
                co dodatkowo wzmacnia proces gojenia i regeneracji.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "PRF to innowacyjny zabieg kosmetyczny – naturalny preparat, który zapewnia efekty porównywalne 
                  do wypełniaczy kwasem hialuronowym, ale w 100% naturalny i długotrwały."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRF vs PRP Section */}
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
              PRF vs PRP – <span className="text-[#D4AF37]">Różnice</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542]">
                  <tr>
                    <th className="p-4 text-left text-black">Aspekt</th>
                    <th className="p-4 text-left text-black">PRP</th>
                    <th className="p-4 text-left text-black">PRF</th>
                  </tr>
                </thead>
                <tbody>
                  {differences.map((diff, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-t border-gray-100"
                    >
                      <td className="p-4 font-medium text-[#666666]">{diff.aspect}</td>
                      <td className="p-4 text-[#666666]">{diff.prp}</td>
                      <td className="p-4 text-[#D4AF37] font-medium">{diff.prf}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
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
              Przebieg zabiegu <span className="text-[#D4AF37]">PRF</span>
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
                  title: 'Wirowanie bez antykoagulantów',
                  description: 'Krew jest wirowana w specjalnych probówkach bez substancji zapobiegających krzepnięciu, aby uzyskać naturalną fibrynę bogatopłytkową.'
                },
                {
                  number: 4,
                  title: 'Aplikacja PRF',
                  description: 'Przygotowany preparat aplikuję w wyznaczone obszary. Fibryna tworzy naturalny „rusztowanie", które długotrwale uwalnia czynniki wzrostu.'
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

      {/* Benefits Section */}
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
                <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-4"
              >
                Korzyści z zabiegu <span className="text-[#D4AF37]">PRF</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Długotrwała regeneracja i naturalny lifting
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

      {/* Best Areas Section */}
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
              Najlepsze zastosowania <span className="text-[#D4AF37]">PRF</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Pod oczy i cienie',
                'Zmarszczki wokół oczu',
                'Szyja i dekolt',
                'Lifting twarzy',
                'Bruzdy nosowo-wargowe',
                'Policzki i skronie',
                'Okoloustna zona',
                'Dłonie',
                'Rozstępy',
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-gradient-to-br from-[#D4AF37]/5 to-[#F4C542]/5 p-6 rounded-xl border border-[#D4AF37]/20 text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-[#666666]">{area}</span>
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
                Przeciwskazania do zabiegu <span className="text-[#D4AF37]">PRF</span>
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
      <FAQSection faqs={faqs} treatmentName="prf" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/fibryna-bogatoplytkowa-prf-bialystok" />

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
            Odkryj możliwości <span className="text-[#D4AF37]">PRF</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Umów się na konsultację i poznaj zalety fibryny bogatopłytkowej w Białymstoku
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