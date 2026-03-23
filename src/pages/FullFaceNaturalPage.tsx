import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, Crown, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';

import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, Crown, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RelatedTreatments } from '../components/RelatedTreatments';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { setupSEOMetaTags, setupOGImage, setupJSONLD, SEO_CONFIGS } from '../utils/seo-config';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';

export function FullFaceNaturalPage() {
  useEffect(() => {
    // Setup SEO
    setupSEOMetaTags(SEO_CONFIGS.fullFace);
    setupOGImage(image_25909a0558481bbf84b9fdcc4c4b411887b1789a);

    // JSON-LD Schema for Full Face Natural (Beauty focused)
    const schemas = [{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Full Face Natural® Białystok",
      "alternateName": "Naturalny Wypełniacz Autologiczny",
      "description": "Opatentowany zabieg wolumetrii twarzy z wykorzystaniem własnego osocza bogatopłytkowego. Naturalny wypełniacz bez kwasu hialuronowego.",
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
    'Naturalna wolumetria i modelowanie twarzy',
    'Alternatywa dla kwasu hialuronowego',
    'Brak ryzyka alergii i odrzucenia',
    'Efekt "młodego jabłuszka" policzków',
    'Wypełnienie zapadniętych obszarów',
    'Poprawa owalu twarzy',
    'Długotrwałe efekty (6-12 miesięcy)',
    '100% naturalny zabieg autologiczny',
  ];

  const areas = [
    {
      name: 'Policzki',
      description: 'Przywrócenie objętości i efekt "młodego jabłuszka"',
    },
    {
      name: 'Skronie',
      description: 'Wypełnienie zapadniętych skroni',
    },
    {
      name: 'Bruzdy nosowo-wargowe',
      description: 'Wygładzenie i wypełnienie głębokich bruzd',
    },
    {
      name: 'Owal twarzy',
      description: 'Lifting i wymodelowanie owalu',
    },
    {
      name: 'Czoło',
      description: 'Wygładzenie i wypełnienie zmarszczek',
    },
    {
      name: 'Dłonie',
      description: 'Odmłodzenie i wypełnienie dłoni',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Ile kosztuje zabieg Full Face Natural® w Białymstoku?",
      answer: "Koszt zabiegu Full Face Natural® wynosi 800 PLN. Cena obejmuje pełną konsultację, pobranie i specjalistyczne przygotowanie osocza, aplikację naturalnego wypełniacza oraz szczegółowe zalecenia pielęgnacyjne po zabiegu."
    },
    {
      question: "Czym różni się Full Face Natural® od zwykłego zabiegu PRP?",
      answer: "Full Face Natural® to zaawansowana technika, w której osocze jest wieloetapowo przetwarzane do postaci gęstego żelu o właściwościach wypełniających – podobnie jak kwas hialuronowy. Zwykłe PRP działa głównie regeneracyjnie, natomiast Full Face Natural® łączy regenerację z natychmiastowym efektem wypełnienia i wolumetrii twarzy."
    },
    {
      question: "Czy zabieg Full Face Natural® boli?",
      answer: "Zabieg jest stosunkowo komfortowy. Większość osób odczuwa jedynie niewielki dyskomfort podczas aplikacji. Na życzenie mogę zastosować krem znieczulający, który znacząco zmniejsza odczucia. Po zabiegu może wystąpić delikatny obrzęk, który ustępuje w ciągu 2-3 dni."
    },
    {
      question: "Jak długo utrzymują się efekty Full Face Natural®?",
      answer: "Efekty zabiegu Full Face Natural® utrzymują się przez 6-12 miesięcy, podobnie jak przy kwasie hialuronowym. Trwałość zależy od indywidualnych czynników, takich jak wiek, styl życia, tempo metabolizmu i jakość skóry. Po tym czasie możliwe jest wykonanie zabiegu podtrzymującego."
    },
    {
      question: "Kiedy widać efekty zabiegu Full Face Natural®?",
      answer: "Efekt wypełnienia widoczny jest natychmiast po zabiegu. W kolejnych tygodniach następuje dodatkowy proces regeneracji i stymulacji produkcji kolagenu, co sprawia, że skóra staje się jeszcze bardziej jędrna i wygładzona. Pełne efekty rozwijają się przez 4-8 tygodni."
    },
    {
      question: "Czy Full Face Natural® może zastąpić kwas hialuronowy?",
      answer: "Tak, dla wielu osób Full Face Natural® jest doskonałą, naturalną alternatywą dla kwasu hialuronowego. Zabieg zapewnia podobny efekt wypełnienia i wolumetrii, ale bez ryzyka alergii czy odrzucenia, ponieważ wykorzystuje Twoją własną krew. Jest idealny dla osób preferujących naturalne rozwiązania lub z uczuleniem na kwas hialuronowy."
    },
    {
      question: "Jak przygotować się do zabiegu Full Face Natural®?",
      answer: "Przed zabiegiem zalecam: wypicie dużej ilości wody dzień wcześniej, unikanie alkoholu przez 48h przed zabiegiem, nie stosowanie aspiryny i leków przeciwzakrzepowych (po konsultacji), zjedzenie lekkiego posiłku przed wizytą oraz poinformowanie mnie o wszystkich przyjmowanych lekach i suplementach."
    },
    {
      question: "Ile zabiegów Full Face Natural® jest potrzebnych?",
      answer: "Najczęściej wystarczy 1 zabieg Full Face Natural®, aby uzyskać widoczny efekt wolumetrii i wypełnienia. W przypadku zaawansowanych zmian lub gdy zależy Ci na bardziej intensywnych efektach, możemy zaplanować 2-3 zabiegi w odstępach 4-6 tygodni. Podczas konsultacji ustalimy optymalny plan zabiegowy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: 'Zabiegi', path: '/#zabiegi' },
          { label: 'Full Face Natural® Białystok' }
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
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm">Opatentowany zabieg Premium</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                Full Face Natural<sup className="text-2xl">®</sup> <span className="text-[#D4AF37]">Białystok</span>
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#E8DCC4] mb-8 leading-relaxed"
            >
              Opatentowany zabieg wolumetrii twarzy z wykorzystaniem własnego osocza bogatopłytkowego. 
              Naturalny wypełniacz autologiczny, który przywraca młodzieńczą objętość i kształt twarzy 
              bez kwasu hialuronowego i sztucznych substancji.
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
              Umów wizytę na Full Face Natural®
            </motion.a>
          </div>
        </div>
      </section>

      {/* What is Full Face Natural Section */}
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
                <Crown className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl mb-8"
              >
                Czym jest <span className="text-[#D4AF37]">Full Face Natural®?</span>
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
                <strong>Full Face Natural®</strong> to opatentowana, innowacyjna metoda wolumetrii twarzy, 
                która wykorzystuje specjalnie przygotowane osocze bogatopłytkowe w formie gęstego żelu. 
                To naturalny wypełniacz autologiczny, który działa jak kwas hialuronowy, ale jest w 100% naturalny.
              </p>
              
              <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                Zabieg polega na specjalnej, wieloetapowej obróbce Twojej własnej krwi, w wyniku której powstaje 
                gęsty, żelowy preparat o właściwościach wypełniających. Aplikowany w odpowiednie miejsca, 
                przywraca utraconą objętość, poprawia owal twarzy i modeluje rysy.
              </p>
              
              <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-[#666666] italic">
                  "Full Face Natural® to innowacyjny zabieg kosmetyczny – naturalny wypełniacz 
                  z Twojej własnej krwi, który zapewnia efekty porównywalne z kwasem hialuronowym, 
                  ale bez ryzyka alergii czy powikłań."
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
                Korzyści <span className="text-[#D4AF37]">Full Face Natural®</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-[#666666]"
              >
                Naturalna wolumetria i modelowanie twarzy
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

      {/* Treatment Areas Section */}
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
              Obszary zastosowania <span className="text-[#D4AF37]">Full Face Natural®</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl text-[#D4AF37] mb-2">{area.name}</h3>
                  <p className="text-[#666666]">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* vs Hyaluronic Acid Section */}
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
              Full Face Natural® vs <span className="text-[#D4AF37]">Kwas Hialuronowy</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#D4AF37] to-[#F4C542]">
                    <tr>
                      <th className="p-4 text-left text-black">Aspekt</th>
                      <th className="p-4 text-left text-black">Kwas Hialuronowy</th>
                      <th className="p-4 text-left text-black">Full Face Natural®</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: 'Pochodzenie', ha: 'Syntetyczny', ffn: 'Naturalne (własna krew)' },
                      { aspect: 'Ryzyko alergii', ha: 'Istnieje', ffn: 'Brak (autologiczne)' },
                      { aspect: 'Efekt', ha: 'Wypełnienie', ffn: 'Wypełnienie + Regeneracja' },
                      { aspect: 'Trwałość', ha: '6-12 miesięcy', ffn: '6-12 miesięcy' },
                      { aspect: 'Naturalność', ha: 'Substancja obca', ffn: '100% naturalne' },
                    ].map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-t border-gray-100"
                      >
                        <td className="p-4 font-medium text-[#666666]">{row.aspect}</td>
                        <td className="p-4 text-[#666666]">{row.ha}</td>
                        <td className="p-4 text-[#D4AF37] font-medium">{row.ffn}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
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
              Dla kogo <span className="text-[#D4AF37]">Full Face Natural®?</span>
            </motion.h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Utrata objętości policzków',
                'Zapadnięte skronie',
                'Głębokie bruzdy nosowo-wargowe',
                'Opadający owal twarzy',
                'Osoby szukające naturalnych rozwiązań',
                'Pacjenci z alergią na kwas hialuronowy',
                'Osoby ceniące autologiczne zabiegi',
                'Zaawansowane oznaki starzenia',
              ].map((indication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
                  <span className="text-[#666666]">{indication}</span>
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
                Przeciwskazania do zabiegu <span className="text-[#D4AF37]">Full Face Natural®</span>
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
      <FAQSection faqs={faqs} treatmentName="fullface" />

      {/* Related Treatments Section */}
      <RelatedTreatments currentPath="/full-face-natural-bialystok" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl mb-6"
          >
            Odkryj moc <span className="text-[#D4AF37]">Full Face Natural®</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#E8DCC4] mb-8 max-w-2xl mx-auto"
          >
            Naturalny wypełniacz autologiczny - przywróć młodzieńczą objętość twarzy bez kwasu hialuronowego
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