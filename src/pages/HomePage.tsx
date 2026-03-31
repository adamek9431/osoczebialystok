import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { SafetyBanner } from '../components/SafetyBanner';
import { TreatmentInfo } from '../components/TreatmentInfo';
import { AboutMe } from '../components/AboutMe';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { FAQSection, FAQItem } from '../components/FAQSection';
import { setupSEOMetaTags, setupOGImage, setupJSONLD, SEO_CONFIGS } from '../utils/seo-config';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';

export function HomePage() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Visit counter
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount.toString());
    setVisitCount(newCount);

    // Setup SEO Meta Tags
    setupSEOMetaTags(SEO_CONFIGS.home);
    setupOGImage(image_25909a0558481bbf84b9fdcc4c4b411887b1789a);

    // Optimized JSON-LD for Beauty Services
    const logoUrl = `https://osoczebialystok.pl${image_25909a0558481bbf84b9fdcc4c4b411887b1789a}`;
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "@id": "https://osoczebialystok.pl/#organization",
        "name": "Osocze Białystok - Julia Więckowska",
        "url": "https://osoczebialystok.pl",
        "logo": logoUrl,
        "image": logoUrl,
        "description": SEO_CONFIGS.home.description,
        "telephone": "+48723574156",
        "email": "kontakt@osoczebialystok.pl",
        "priceRange": "300-1000 PLN",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Białystok",
          "addressRegion": "Podlaskie",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.1325",
          "longitude": "23.1688"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/july.juliawieckowska",
          "https://facebook.pl/julyjuliawieckowska",
          "https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://osoczebialystok.pl/#website",
        "url": "https://osoczebialystok.pl",
        "name": "Osocze Białystok - Julia Więckowska",
        "publisher": { "@id": "https://osoczebialystok.pl/#organization" },
        "inLanguage": "pl-PL"
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Profesjonalne zabiegi regeneracyjne",
        "provider": { "@id": "https://osoczebialystok.pl/#organization" },
        "areaServed": { "@type": "City", "name": "Białystok" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Katalog zabiegów",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Osocze bogatopłytkowe PRP",
                "url": "https://osoczebialystok.pl/osocze-bogatoplytkowe-prp-bialystok"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fibryna bogatopłytkowa PRF",
                "url": "https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok"
              }
            }
          ]
        }
      }
    ];
    setupJSONLD(schemas);

    // DNS Prefetch
    const dnsPrefetch = document.querySelector('link[rel="dns-prefetch"]');
    if (!dnsPrefetch) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'dns-prefetch');
      link.setAttribute('href', '//static.cloudflareinsights.com');
      document.head.appendChild(link);
    }

    // Cloudflare Web Analytics
    const cfAnalytics = document.querySelector('script[data-cf-beacon]');
    if (!cfAnalytics) {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.setAttribute('data-cf-beacon', '{"token": "4216dceba1c94768be53297350b785cc"}');
      document.body.appendChild(script);
    }
  }, []);

  const homePageFaqs: FAQItem[] = [
    {
      question: "Gdzie zrobić zabieg osoczem bogatopłytkowym w Białymstoku?",
      answer: "Zabiegi osoczem bogatopłytkowym w Białymstoku wykonuję w gabinecie przy ul. Wyszyńskiego 2/1, lok. 301. Oferuję profesjonalne zabiegi PRP, PRF i Full Face Natural® z bezpłatną konsultacją. Umów wizytę telefonicznie pod nr +48 723 574 156 lub przez Booksy."
    },
    {
      question: "Ile kosztuje zabieg odmładzania twarzy osoczem w Białymstoku?",
      answer: "Ceny zabiegów odmładzania twarzy osoczem w Białymstoku zaczynają się od 400 zł za pojedynczą partię (np. okolice oczu). Zabieg PRP na twarz kosztuje 600 zł, a kompleksowy Full Face Natural® — 1500 zł. Przy pakiecie 3-4 zabiegów oferuję rabaty do 17%."
    },
    {
      question: "Czym jest osocze bogatopłytkowe i jak działa na skórę?",
      answer: "Osocze bogatopłytkowe (PRP) to koncentrat płytek krwi pozyskany z Twojej własnej krwi, bogaty w czynniki wzrostu. Po aplikacji w skórę stymuluje produkcję kolagenu i elastyny, co prowadzi do naturalnego odmłodzenia — redukcji zmarszczek, poprawy napięcia i rozświetlenia skóry."
    },
    {
      question: "Jakie zabiegi odmładzania twarzy oferujesz w Białymstoku?",
      answer: "W moim gabinecie w Białymstoku oferuję: osocze bogatopłytkowe PRP (wampirzy lifting), fibrynę bogatopłytkową PRF, Full Face Natural® (naturalny wypełniacz autologiczny), autologiczne egzosomy oraz mezoterapię mikroigłową. Wszystkie metody bazują na naturalnych procesach regeneracyjnych."
    },
    {
      question: "Czy zabiegi osoczem bogatopłytkowym są bezpieczne?",
      answer: "Tak, zabiegi osoczem są w pełni bezpieczne — wykorzystują wyłącznie Twoją własną krew, dzięki czemu nie ma ryzyka alergii ani odrzucenia. Jako specjalistka z wykształceniem pielęgniarskim dbam o najwyższe standardy sterylności i bezpieczeństwa."
    },
    {
      question: "Jak długo utrzymują się efekty zabiegu PRP na twarz?",
      answer: "Efekty zabiegu PRP na twarz utrzymują się 12-18 miesięcy po zakończeniu serii 3-4 zabiegów. Pierwsze rezultaty (rozświetlenie, poprawa kolorytu) widoczne są już po 2-3 tygodniach, a pełne efekty odmładzające rozwijają się przez 4-8 tygodni."
    }
  ];

  return (
    <div itemScope itemType="https://schema.org/BeautySalon">
      <Hero />
      <Benefits />
      <TreatmentInfo />
      <AboutMe />
      <SafetyBanner />
      <Pricing />
      <FAQSection faqs={homePageFaqs} treatmentName="homepage" />
      <Contact />
    </div>
  );
}