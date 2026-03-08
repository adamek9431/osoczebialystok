import { useEffect, useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { SafetyBanner } from '../components/SafetyBanner';
import { TreatmentInfo } from '../components/TreatmentInfo';
import { AboutMe } from '../components/AboutMe';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import image_25909a0558481bbf84b9fdcc4c4b411887b1789a from 'figma:asset/25909a0558481bbf84b9fdcc4c4b411887b1789a.png';
import heroImage from 'figma:asset/78fb3ecf73bcfd03b947717ffabfcee1262372c0.png';

// SEO Meta Configuration
const SEO_CONFIG = {
  title: 'Osocze Bogatopłytkowe Białystok | PRP, PRF, Full Face Natural® - Julia Więckowska',
  description: 'Naturalne zabiegi z wykorzystaniem fibryny i osocza bogatopłytkowego w Białymstoku. PRP, PRF, Full Face Natural® - skuteczne odmładzanie i regeneracja. Umów wizytę dziś!',
  keywords: 'osocze bogatopłytkowe Białystok, ostrzykiwanie osoczem Białystok, PRP Białystok zabieg, wampirzy lifting Białystok, fibryna bogatopłytkowa Białystok, fibryna pod oczy Białystok, zabiegi anti-aging Białystok, odmładzanie osoczem Białystok, regeneracja skóry PRP Białystok, medycyna estetyczna osocze Białystok, Full Face zabieg, mezoterapia skóry głowy, PRF Białystok, zabiegi autologiczne Białystok',
  url: 'https://osoczebialystok.pl/',
  ogTitle: 'Osocze Bogatopłytkowe Białystok | PRP, PRF - Julia Więckowska',
  ogDescription: 'Naturalne zabiegi z wykorzystaniem fibryny i osocza bogatopłytkowego w Białymstoku. PRP, PRF, Full Face Natural® - profesjonalna kosmetologia.',
  image: image_25909a0558481bbf84b9fdcc4c4b411887b1789a
};

// Optimized SEO Meta Tags Setup
function setupSEOMetaTags(config: typeof SEO_CONFIG) {
  document.title = config.title;
  document.documentElement.lang = 'pl';

  const metaTags = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: config.url },
    { property: 'og:title', content: config.ogTitle },
    { property: 'og:description', content: config.ogDescription },
    { property: 'og:image', content: `https://osoczebialystok.pl${config.image}` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'pl_PL' },
    { property: 'og:site_name', content: 'Osocze Białystok - Julia Więckowska' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.ogTitle },
    { name: 'twitter:description', content: config.ogDescription },
    { name: 'twitter:image', content: `https://osoczebialystok.pl${config.image}` }
  ];

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', config.url);

  // Favicon
  let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('type', 'image/png');
    document.head.appendChild(favicon);
  }
  favicon.setAttribute('href', config.image);

  // PERFORMANCE OPTIMIZATION: Preload hero image for faster LCP
  let preloadLink = document.querySelector('link[rel="preload"][as="image"]') as HTMLLinkElement;
  if (!preloadLink) {
    preloadLink = document.createElement('link');
    preloadLink.setAttribute('rel', 'preload');
    preloadLink.setAttribute('as', 'image');
    preloadLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(preloadLink);
  }
  preloadLink.setAttribute('href', heroImage);
}

// Enhanced JSON-LD Schema with all treatments
function setupJSONLD(config: typeof SEO_CONFIG) {
  const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
  existingSchemas.forEach(schema => schema.remove());

  const schemas = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "@id": "https://osoczebialystok.pl/#organization",
      "name": "Osocze Białystok - Julia Więckowska",
      "alternateName": "July Beauty Salon",
      "url": "https://osoczebialystok.pl",
      "logo": `https://osoczebialystok.pl${config.image}`,
      "image": `https://osoczebialystok.pl${config.image}`,
      "description": config.description,
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
        "https://www.instagram.com/july.juliawieckowska/",
        "https://booksy.com/pl-pl/284841_july-julia-wieckowska-beauty-salon-bialystok_medycyna-estetyczna_5869_bialystok/"
      ]
    },
    // Website Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://osoczebialystok.pl/#website",
      "url": "https://osoczebialystok.pl",
      "name": "Osocze Białystok - Julia Więckowska",
      "description": config.description,
      "publisher": {
        "@id": "https://osoczebialystok.pl/#organization"
      },
      "inLanguage": "pl-PL"
    },
    // Services Offered
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Zabiegi z osocza bogatopłytkowego i fibryny",
      "provider": {
        "@id": "https://osoczebialystok.pl/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Białystok"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Zabiegi kosmetyczne",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Osocze bogatopłytkowe PRP",
              "description": "Naturalne odmładzanie z wykorzystaniem osocza bogatopłytkowego",
              "url": "https://osoczebialystok.pl/osocze-bogatoplytkowe-prp-bialystok"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fibryna bogatopłytkowa PRF",
              "description": "Zaawansowana regeneracja bez dodatków chemicznych",
              "url": "https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Face Natural®",
              "description": "Kompleksowe odmłodzenie twarzy naturalnymi metodami",
              "url": "https://osoczebialystok.pl/full-face-natural-bialystok"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Osocze na skórę głowy",
              "description": "Skuteczna terapia wypadających włosów metodą osocza",
              "url": "https://osoczebialystok.pl/osocze-na-skore-glowy-bialystok"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Autologiczne Egzosomy",
              "description": "Regeneracja skóry na poziomie molekularnym",
              "url": "https://osoczebialystok.pl/autologiczne-egzosomy-bialystok"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mezoterapia mikroigłowa",
              "description": "Skuteczna regeneracja skóry metodą microneedling",
              "url": "https://osoczebialystok.pl/mezoterapia-mikroiglowa-bialystok"
            }
          }
        ]
      }
    },
    // Person Schema
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Julia Więckowska",
      "jobTitle": "Kosmetolog, Pielęgniarka",
      "worksFor": {
        "@id": "https://osoczebialystok.pl/#organization"
      },
      "url": "https://osoczebialystok.pl",
      "image": `https://osoczebialystok.pl${config.image}`
    }
  ];

  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function HomePage() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Visit counter
    const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount.toString());
    setVisitCount(newCount);

    // Setup SEO Meta Tags
    setupSEOMetaTags(SEO_CONFIG);

    // Setup JSON-LD Schema
    setupJSONLD(SEO_CONFIG);

    // DNS Prefetch for external resources
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

  return (
    <div itemScope itemType="https://schema.org/MedicalBusiness">
      <Hero />
      <Benefits />
      <TreatmentInfo />
      <AboutMe />
      <SafetyBanner />
      <Pricing />
      <Contact />
    </div>
  );
}