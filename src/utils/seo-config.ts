// SEO Configuration for all pages

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  ogTitle: string;
  ogDescription: string;
  type?: string;
}

export const SEO_CONFIGS: Record<string, SEOConfig> = {
  home: {
    title: 'Osocze Bogatopłytkowe Białystok | PRP, PRF, Full Face Natural® - Julia Więckowska',
    description: 'Naturalne zabiegi z wykorzystaniem fibryny i osocza bogatopłytkowego w Białymstoku. PRP, PRF, Full Face Natural® - skuteczne odmładzanie i regeneracja. Umów wizytę dziś!',
    keywords: 'osocze bogatopłytkowe Białystok, ostrzykiwanie osoczem Białystok, PRP Białystok zabieg, wampirzy lifting Białystok, fibryna bogatopłytkowa Białystok, fibryna pod oczy Białystok, zabiegi anti-aging Białystok, odmładzanie osoczem Białystok, regeneracja skóry PRP Białystok, medycyna estetyczna osocze Białystok, Full Face zabieg, mezoterapia skóry głowy, PRF Białystok, zabiegi autologiczne Białystok',
    url: 'https://osoczebialystok.pl/',
    ogTitle: 'Osocze Bogatopłytkowe Białystok | PRP, PRF - Julia Więckowska',
    ogDescription: 'Naturalne zabiegi z wykorzystaniem fibryny i osocza bogatopłytkowego w Białymstoku. PRP, PRF, Full Face Natural® - profesjonalna kosmetologia.',
    type: 'website'
  },
  prp: {
    title: 'Osocze Bogatopłytkowe PRP Białystok | Wampirzy Lifting - Julia Więckowska',
    description: 'Zabieg osoczem bogatopłytkowym PRP w Białymstoku. Naturalne odmładzanie skóry, redukcja zmarszczek, poprawa kolorytu. Profesjonalne zabiegi PRP. Umów wizytę!',
    keywords: 'osocze bogatopłytkowe PRP Białystok, wampirzy lifting Białystok, ostrzykiwanie osoczem Białystok, zabieg PRP Białystok, odmładzanie osoczem, regeneracja skóry PRP, PRP twarz Białystok, osocze na zmarszczki, zabiegi PRP cena',
    url: 'https://osoczebialystok.pl/osocze-bogatoplytkowe-prp-bialystok',
    ogTitle: 'Osocze Bogatopłytkowe PRP Białystok - Wampirzy Lifting',
    ogDescription: 'Zabieg osoczem bogatopłytkowym PRP - naturalne odmładzanie skóry bez skalpela. Profesjonalne zabiegi w Białymstoku.',
    type: 'article'
  },
  prf: {
    title: 'Fibryna Bogatopłytkowa PRF Białystok | Zabiegi Fibryna Pod Oczy - Julia Więckowska',
    description: 'Zabiegi fibryną bogatopłytkową PRF w Białymstoku. Naturalna regeneracja, fibryna pod oczy, odmładzanie bez dodatków chemicznych. Profesjonalne zabiegi PRF.',
    keywords: 'fibryna bogatopłytkowa PRF Białystok, fibryna pod oczy Białystok, zabiegi fibryną Białystok, PRF Białystok, regeneracja skóry PRF, fibryna twarz, zabiegi PRF cena, odmładzanie fibryną',
    url: 'https://osoczebialystok.pl/fibryna-bogatoplytkowa-prf-bialystok',
    ogTitle: 'Fibryna Bogatopłytkowa PRF Białystok - Zabiegi Fibryna Pod Oczy',
    ogDescription: 'Zabiegi fibryną bogatopłytkową PRF - zaawansowana regeneracja skóry bez dodatków chemicznych. Profesjonalne zabiegi w Białymstoku.',
    type: 'article'
  },
  fullFace: {
    title: 'Full Face Natural® Białystok | Kompleksowe Odmłodzenie Twarzy - Julia Więckowska',
    description: 'Full Face Natural® w Białymstoku - kompleksowe odmłodzenie twarzy naturalnymi metodami. Osocze + fibryna dla maksymalnych efektów. Umów wizytę!',
    keywords: 'Full Face Natural Białystok, full face zabieg Białystok, kompleksowe odmłodzenie twarzy, osocze i fibryna razem, naturalne odmładzanie twarzy, full face PRP PRF',
    url: 'https://osoczebialystok.pl/full-face-natural-bialystok',
    ogTitle: 'Full Face Natural® Białystok - Kompleksowe Odmłodzenie Twarzy',
    ogDescription: 'Full Face Natural® - połączenie osocza i fibryny dla kompleksowego odmłodzenia twarzy. Naturalne metody, profesjonalne zabiegi.',
    type: 'article'
  },
  scalp: {
    title: 'Osocze na Skórę Głowy Białystok | PRP na Wypadanie Włosów - Julia Więckowska',
    description: 'Osocze na skórę głowy w Białymstoku - skuteczna terapia wypadających włosów metodą PRP. Naturalna regeneracja mieszków włosowych. Umów wizytę!',
    keywords: 'osocze na włosy Białystok, PRP skóra głowy Białystok, mezoterapia skóry głowy Białystok, wypadanie włosów PRP, regeneracja włosów osoczem, PRP łysienie, osocze na łysienie',
    url: 'https://osoczebialystok.pl/osocze-na-skore-glowy-bialystok',
    ogTitle: 'Osocze na Skórę Głowy Białystok - PRP na Wypadanie Włosów',
    ogDescription: 'Terapia osoczem na skórę głowy - skuteczna metoda na wypadanie włosów. Naturalna regeneracja mieszków włosowych metodą PRP.',
    type: 'article'
  },
  exosomes: {
    title: 'Autologiczne Egzosomy Białystok | Regeneracja Skóry na Poziomie Molekularnym',
    description: 'Zabiegi autologicznymi egzosomami w Białymstoku - regeneracja skóry na poziomie komórkowym. Innowacyjna metoda odmładzania. Umów wizytę!',
    keywords: 'autologiczne egzosomy Białystok, egzosomy regeneracja skóry, zabiegi egzosomami Białystok, molekularna regeneracja skóry, innowacyjne zabiegi odmładzające, egzosomy twarz',
    url: 'https://osoczebialystok.pl/autologiczne-egzosomy-bialystok',
    ogTitle: 'Autologiczne Egzosomy Białystok - Regeneracja na Poziomie Molekularnym',
    ogDescription: 'Zabiegi autologicznymi egzosomami - innowacyjna metoda regeneracji skóry na poziomie molekularnym. Profesjonalne zabiegi w Białymstoku.',
    type: 'article'
  },
  microneedling: {
    title: 'Mezoterapia Mikroigłowa Białystok | Microneedling - Julia Więckowska',
    description: 'Mezoterapia mikroigłowa (microneedling) w Białymstoku - skuteczna regeneracja skóry, redukcja zmarszczek i blizn. Profesjonalne zabiegi. Umów wizytę!',
    keywords: 'mezoterapia mikroigłowa Białystok, microneedling Białystok, mezoterapia igłowa Białystok, mikroigłowanie Białystok, regeneracja skóry mikroigłami, redukcja zmarszczek microneedling',
    url: 'https://osoczebialystok.pl/mezoterapia-mikroiglowa-bialystok',
    ogTitle: 'Mezoterapia Mikroigłowa Białystok - Microneedling',
    ogDescription: 'Mezoterapia mikroigłowa (microneedling) - skuteczna regeneracja skóry, redukcja zmarszczek i blizn. Profesjonalne zabiegi w Białymstoku.',
    type: 'article'
  }
};

// Setup SEO meta tags function
export function setupSEOMetaTags(config: SEOConfig) {
  document.title = config.title;
  document.documentElement.lang = 'pl';

  const metaTags = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { property: 'og:type', content: config.type || 'article' },
    { property: 'og:url', content: config.url },
    { property: 'og:title', content: config.ogTitle },
    { property: 'og:description', content: config.ogDescription },
    { property: 'og:locale', content: 'pl_PL' },
    { property: 'og:site_name', content: 'Osocze Białystok - Julia Więckowska' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.ogTitle },
    { name: 'twitter:description', content: config.ogDescription }
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
}

// Setup Open Graph images
export function setupOGImage(imageUrl: string) {
  const fullImageUrl = `https://osoczebialystok.pl${imageUrl}`;
  
  const ogImageTags = [
    { property: 'og:image', content: fullImageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:image', content: fullImageUrl }
  ];

  ogImageTags.forEach(({ name, property, content }) => {
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
}
