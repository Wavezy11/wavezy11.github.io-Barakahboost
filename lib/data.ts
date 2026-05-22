export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  isVertical?: boolean;
  thumbnail?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  stat: string;
  isVertical: boolean;
  gallery: (string | GalleryItem)[];
  projectLink?: string;
  imagePosition?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
}

export interface ClientLogo {
  name: string;
  logoPath: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const cases: CaseStudy[] = [
  {
    id: "abu-tayyimah",
    title: "Aftermovie voor het Abu Tayyimah Event",
    shortDescription: "Verticale recapvideo voor het event van Abu Tayyimah met heldere en aantrekkelijke weergave van sfeer en highlights.",
    description: "Voor het event van Abu Tayyimah maakte ik een korte recapvideo in vertical format. De video liet op een duidelijke en aantrekkelijke manier de sfeer en belangrijkste momenten van het event zien. Door de video slim op social media te delen met relevante hashtags kreeg het event extra aandacht en bereik ook na afloop.",
    image: "/portfolio/abu-taymiyyah/hero-edit.jpg",
    tags: ["Event Videografie", "Social Media Content"],
    stat: "2.5M+ views",
    isVertical: true,
    gallery: [
      {
        type: "video",
        src: "/videos/Recap-Abu%20Taymiyyah%20event.mp4",
        isVertical: true,
        thumbnail: "/portfolio/abu-taymiyyah/hero-edit.jpg",
      },
      {
        type: "image",
        src: "/portfolio/abu-taymiyyah/hero.jpg",
        isVertical: true,
      }
    ],
    projectLink: "https://www.tiktok.com/@barakahboost.nl/video/7523627234582646038",
    imagePosition: "50% 3%"
  },
  {
    id: "nuurfades",
    title: "Nuurfades - Fotografie en Editwerk",
    shortDescription: "Beeld en bewerking voor Nuurfades, met oog voor stijl, detail en een persoonlijke sfeer.",
    description: "Voor Nuurfades mocht ik zowel de fotografie als het editwerk verzorgen. Ik ging op zoek naar beelden die passen bij de uitstraling van het merk: stijlvol, warm en persoonlijk. Tijdens het editen lette ik op de kleinste details om ervoor te zorgen dat alles klopt — van kleurgebruik tot compositie. Het resultaat is een reeks foto's die niet alleen mooi zijn, maar ook écht iets vertellen.",
    image: "/portfolio/nuurfades/nuurfades-main.jpg",
    tags: ["Portretfotografie", "Fotobewerking", "Content Creatie"],
    stat: "Complete rebrand",
    isVertical: true,
    gallery: ["/portfolio/nuurfades/nuurfades-main.jpg"],
    imagePosition: "center 20%"
  },
  {
    id: "livzorg",
    title: "Livzorg – Fotografie",
    shortDescription: "Fotoserie voor Livzorg die de menselijke kant van zorg op een warme manier in beeld brengt.",
    description: "Voor Livzorg maakte ik een fotoserie waarin de mensen centraal staan. Geen afstandelijke beelden, maar echte momenten waarin warmte, rust en betrokkenheid voelbaar zijn. In de nabewerking heb ik de beelden zacht gehouden, zodat de natuurlijke sfeer behouden blijft. Dit sluit goed aan bij wie Livzorg is en waar ze voor staan.",
    image: "/portfolio/liv-zorg/main-foto.jpg",
    tags: ["Portretfotografie", "Fotobewerking"],
    stat: "300% meer sales",
    isVertical: true,
    gallery: [
      { type: "image", src: "/portfolio/liv-zorg/main-foto.jpg", isVertical: false },
      { type: "image", src: "/portfolio/liv-zorg/verticale-foto.jpg", isVertical: true }
    ],
    imagePosition: "right center"
  },
  {
    id: "sparks-design",
    title: "Premium Webdesign voor Sparks",
    shortDescription: "Complete redesign en ontwikkeling in Next.js voor maximale conversie en een premium uitstraling.",
    description: "Voor deze case hebben we het volledige platform vanaf de grond opnieuw opgebouwd. Het doel was een naadloze, snelle gebruikerservaring met een uiterst luxe uitstraling. Met behulp van moderne animaties en strakke asymmetrische layouts is het merk naar een hoger niveau getild.",
    image: "/portfolio/liv-zorg/main-foto.jpg", // placeholder, you can swap it
    tags: ["Webdesign", "Development", "Branding"],
    stat: "120% conversiestijging",
    isVertical: false,
    gallery: ["/portfolio/liv-zorg/main-foto.jpg"],
    imagePosition: "center"
  }
];

export const services: ServiceItem[] = [
  {
    id: "webdesign",
    title: "Webdesign",
    description: "Websites die converteren en indruk maken op al je bezoekers.",
    icon: "Layout",
    slug: "webdesign",
    features: [
      "Uniek & responsive design",
      "Conversie-optimalisatie",
      "Gebruiksvriendelijke interface",
      "Ontworpen voor jouw doelgroep"
    ]
  },
  {
    id: "website-realisatie",
    title: "Website Realisatie",
    description: "Van professioneel ontwerp naar een razendsnelle live website.",
    icon: "Code",
    slug: "website-realisatie",
    features: [
      "Next.js & React technologie",
      "Lighthouse performance 95+",
      "CMS koppeling naar wens",
      "Volledig onderhoud & support"
    ]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Content die engageert, reach opbouwt en directe omzet genereert.",
    icon: "Share2",
    slug: "social-media",
    features: [
      "Content kalender & planning",
      "Shortform video creatie",
      "Community management",
      "Maandelijkse groei-analyses"
    ]
  },
  {
    id: "branding",
    title: "Branding",
    description: "Een complete merkidentiteit die direct vertrouwen uitstraalt.",
    icon: "Sparkles",
    slug: "branding",
    features: [
      "Logo & huisstijl design",
      "Brandbook & stijlgids",
      "Unieke merkpositionering",
      "Social media templates"
    ]
  },
  {
    id: "foto-video",
    title: "Foto- & Videografie",
    description: "Professionele beelden en video's die jouw verhaal perfect vertellen.",
    icon: "Camera",
    slug: "foto-video",
    features: [
      "High-end camera apparatuur",
      "Event videografie",
      "Product- & portretfotografie",
      "Professionele nabewerking"
    ]
  },
  {
    id: "acquisitie",
    title: "Acquisitie",
    description: "Nieuwe B2B klanten en leads, structureel en schaalbaar.",
    icon: "Users",
    slug: "acquisitie",
    features: [
      "Cold outreach campagnes",
      "Leadgeneratie trechters",
      "LinkedIn automation",
      "Kwalitatieve sales calls"
    ]
  },
  {
    id: "ads",
    title: "Ads",
    description: "Betaald adverteren met maximaal rendement op elke euro.",
    icon: "TrendingUp",
    slug: "ads",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "TikTok Ads & Google Ads",
      "A/B testing van creatives",
      "Pixel & conversie tracking"
    ]
  },
  {
    id: "seo",
    title: "SEO",
    description: "Organisch gevonden worden door de juiste mensen in Google.",
    icon: "Search",
    slug: "seo",
    features: [
      "Technisch SEO optimalisatie",
      "Zoekwoorden onderzoek",
      "Linkbuilding strategie",
      "Content creatie voor ranking"
    ]
  }
];

export const clients: ClientLogo[] = [
  { name: "Spa Olivia", logoPath: "/clients/spaolivia.png" },
  { name: "Systematex", logoPath: "/clients/systematex.jpg" },
  { name: "Ziya Clothing", logoPath: "/clients/ziyaclothing.jpeg" },
  { name: "Nuurfades", logoPath: "/clients/nuurfades.jpeg" },
  { name: "Liv Zorg", logoPath: "/clients/livzorg.jpeg" },
  { name: "Glans Direct", logoPath: "/clients/glansdirect.jpg" },
  { name: "NightFashion", logoPath: "/clients/nightfashion.jpg" }
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "BarakahBoost heeft onze online aanwezigheid compleet getransformeerd. Professioneel, snel en resultaatgericht.",
    author: "Ahmed K.",
    company: "Spa Olivia",
    initials: "SO"
  },
  {
    quote: "De content die zij maken is van ongekende kwaliteit. Binnen no-time zagen we een enorme stijging in onze weergaven.",
    author: "Mohammed A.",
    company: "Systematex",
    initials: "SY"
  },
  {
    quote: "Heel prettige samenwerking. Ze begrijpen ons merk en vertalen dit perfect naar sfeervolle beelden en video's.",
    author: "Fatimah Z.",
    company: "Ziya Clothing",
    initials: "ZC"
  }
];

export const faqItems: FaqItem[] = [
  {
    question: "Wat is het BarakahLaunch traject?",
    answer: "BarakahLaunch is ons complete 30-dagen positioneringstraject. Binnen 30 dagen bouwen we een custom website, zetten we een nieuwe branding op, filmen we de eerste lading social content en richten we je leadgeneratie in. Perfect voor bedrijven die direct resultaat willen zien."
  },
  {
    question: "Werken jullie ook met maandelijkse abonnementen?",
    answer: "Ja, voor diensten zoals Social Media Marketing, SEO, Ads en Acquisitie werken we met maandelijkse retainers zodat we structureel jouw groei kunnen blijven optimaliseren."
  },
  {
    question: "Kan ik ook alleen losse foto- of videografie inkopen?",
    answer: "Zeker. We bieden ook losse shoots aan voor bijvoorbeeld events, productlanceringen of portretten. Neem contact op voor een offerte op maat."
  },
  {
    question: "Hoe snel kan mijn nieuwe website online zijn?",
    answer: "Binnen het BarakahLaunch traject garanderen we dat alles binnen 30 dagen live staat. Voor losse webdesign- en realisatieprojecten ligt de gemiddelde doorlooptijd tussen de 3 en 6 weken, afhankelijk van de complexiteit."
  },
  {
    question: "Hoe meten jullie het resultaat van campagnes?",
    answer: "We werken met dashboards en rapportages waarin we weergaven, conversies, click-through rates en lead-kwaliteit bijhouden. Zo zie je exact wat elke uitgegeven euro oplevert."
  }
];
