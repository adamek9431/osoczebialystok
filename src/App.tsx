import image_69a78009bcf5defe568d019540af7b45a93d3ce3 from 'figma:asset/69a78009bcf5defe568d019540af7b45a93d3ce3.png';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { SafetyBanner } from './components/SafetyBanner';
import { TreatmentInfo } from './components/TreatmentInfo';
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';
import footerLogo from 'figma:asset/c78c567efd605d58cc8d9c4973aa56d075f0257e.png';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Osocze Bogatopłytkowe Białystok | PRP, PRF, Full Face Natural® - Julia Więckowska';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Profesjonalne zabiegi osoczem bogatopłytkowym w Białymstoku. PRP, PRF, fibryna bogatopłytkowa, wampirzy lifting, Full Face Natural®. Odmładzanie i regeneracja skóry. Umów konsultację!');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'osocze bogatopłytkowe Białystok, ostrzykiwanie osoczem Białystok, PRP Białystok zabieg, wampirzy lifting Białystok, fibryna bogatopłytkowa Białystok, fibryna pod oczy Białystok, zabiegi anti-aging Białystok, odmładzanie osoczem Białystok, regeneracja skóry PRP Białystok, medycyna estetyczna osocze Białystok, Full Face zabieg, mezoterapia skóry głowy, PRF Białystok, zabiegi autologiczne Białystok');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Osocze Bogatopłytkowe PRP Białystok | Julia Więckowska');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Zabiegi z osoczem bogatopłytkowym PRP, PRF i fibryną w Białymstoku. Wampirzy lifting, Full Face Natural®, mezoterapia. Naturalna regeneracja i odmładzanie skóry.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'pl_PL');
    if (!document.querySelector('meta[property="og:locale"]')) {
      document.head.appendChild(ogLocale);
    }

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Julia Więckowska - Zabiegi z Osoczem i Fibryną",
      "description": "Profesjonalne zabiegi z wykorzystaniem osocza bogatopłytkowego PRP, PRF i fibryny bogatopłytkowej w Białymstoku. Wampirzy lifting, Full Face Natural®, zabiegi anti-aging.",
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
      "medicalSpecialty": "Dermatology",
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "Białystok"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Zabiegi medycyny estetycznej",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Osocze bogatopłytkowe PRP Białystok",
              "description": "Zabieg z wykorzystaniem osocza bogatopłytkowego (PRP) dla regeneracji i odmładzania skóry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Fibryna bogatopłytkowa PRF Białystok",
              "description": "Zabieg z fibryną strukturalną PRF dla długotrwałej regeneracji skóry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Full Face Natural® - wypełniacz autologiczny",
              "description": "Opatentowany zabieg wolumetrii twarzy z wykorzystaniem własnego osocza"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Wampirzy lifting Białystok",
              "description": "Odmładzający zabieg osoczem bogatopłytkowym dla całej twarzy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Fibryna pod oczy Białystok",
              "description": "Zabieg z fibryną pod oczy dla redukcji cieni i regeneracji delikatnej skóry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Mezoterapia skóry głowy PRP",
              "description": "Zabieg osoczem bogatopłytkowym dla wzmocnienia włosów i skóry głowy"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "47"
      },
      "employee": {
        "@type": "Person",
        "name": "Julia Więckowska",
        "jobTitle": "Kosmetolog, Pielęgniarka",
        "description": "Wykwalifikowana kosmetyczka z wykształceniem pielęgniarskim, specjalistka zabiegów PRP, PRF i fibryny bogatopłytkowej"
      }
    };

    const scriptTag = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(scriptTag);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', window.location.href.split('?')[0]);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Language
    document.documentElement.setAttribute('lang', 'pl');
  }, []);

  return (
    <div className="min-h-screen bg-white" itemScope itemType="https://schema.org/MedicalBusiness">
      <Header />
      <Hero />
      <Benefits />
      <TreatmentInfo />
      <AboutMe />
      <SafetyBanner />
      <Pricing />
      <Contact />
      
      <footer className="bg-black text-[#E8DCC4] py-12 border-t border-[#D4AF37]/20" itemScope itemType="https://schema.org/WPFooter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C542] rounded-full overflow-hidden">
                  <img 
                    src={image_69a78009bcf5defe568d019540af7b45a93d3ce3}
                    alt="Julia Więckowska - osocze bogatopłytkowe PRP PRF Białystok logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#D4AF37] font-[Cinzel]" itemProp="name">Julia Więckowska</span>
              </div>
              <p className="text-sm text-[#E8DCC4]/70" itemProp="description">
                Profesjonalne zabiegi z fibryną i osoczem Białystok
              </p>
              <p className="text-xs text-[#E8DCC4]/50 mt-2">
                Osocze bogatopłytkowe PRP | Fibryna PRF | Wampirzy lifting | Full Face Natural® 
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-[#E8DCC4]/70 mb-1">
                © 2025 Wszystkie prawa zastrzeżone
              </p>
              <p className="text-xs text-[#E8DCC4]/50">
                Białystok, Województwo Podlaskie
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
