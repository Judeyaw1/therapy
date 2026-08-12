export const businessName = "ARK Counseling Collective";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Rates & Insurance", href: "/rates" },
  { label: "Contact", href: "/contact" },
] as const;

export const contactInfo = {
  email: "hello@arkcounselingcollective.com",
  phone: "(555) 010-2727",
  location: "Maryland · In-person & Telehealth",
};

export const hero = {
  eyebrow: "Rooted in compassion. Culturally responsive.",
  heading: "Honoring your story through evidence-based and integrative care that cultivates healing.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
};

export type HomeServiceTeaser = {
  id: "psychotherapy" | "consultation" | "coaching";
  title: string;
  body: string;
  image: string;
};

export const homeServices: HomeServiceTeaser[] = [
  {
    id: "psychotherapy",
    title: "Psychotherapy",
    body: "We provide evidence-based psychotherapy services tailored to your unique needs, including individual, relational, family, and group therapy.",
    image: "/service-psychotherapy.svg",
  },
  {
    id: "consultation",
    title: "Consulting",
    body: "Clinical consultation to cultural responsiveness training, workshops, and organizational wellness",
    image: "/service-consultation.svg",
  },
  {
    id: "coaching",
    title: "Coaching",
    body: "A collaborative, strengths-based, and future-focused space to clarify goals, navigate transitions, and build a life that reflects your values — across life, mindfulness, leadership, and wellness coaching.",
    image: "/service-coaching.svg",
  },
];

export const about = {
  intro:
    "At ARK Counseling Collective, we believe healing begins when people feel seen, heard, and valued. ARK was created to provide a safe, affirming space where individuals from all walks of life can navigate life's challenges with compassion, authenticity, and hope.",
  paragraphs: [
    "Our practice is rooted in trauma-informed, culturally responsive, and evidence-based care. We approach every client with cultural humility, recognizing that each person's identity, lived experiences, values, and strengths are central to the healing process. We are committed to fostering an inclusive environment where clients, particularly those from Black, Indigenous, and other historically marginalized communities feel respected, empowered, and understood.",
    "Whether you are seeking psychotherapy, coaching, or consultation, the ARK partners with you to cultivate resilience, promote emotional well-being, and support meaningful, lasting change. We embrace an integrative, whole-person approach, collaborating with other healthcare providers and community supports when appropriate to ensure seamless, coordinated care that honors every aspect of your well-being.",
  ],
  mission: {
    label: "Mission of the ARK",
    body: "Our mission extends beyond symptom relief. We are dedicated to nurturing lives, strengthening families, and fostering healthier communities by creating spaces where every story is honored, every voice is respected, and every person has the opportunity to heal, grow, and thrive. Through compassionate, trauma-informed, culturally responsive, and integrative care, we empower individuals to build resilience, embrace their authentic selves, and create meaningful, lasting change.",
  },
};

export const founder = {
  name: "R.A. Kwadu",
  credentials: "MS, NCC, LCPC",
  photo: "/founder-placeholder.svg",
  bio: [
    "Ama is a compassionate and culturally responsive therapist dedicated to helping individuals navigate life's challenges and achieve meaningful, sustainable growth. With years of experience in the mental health field, she has worked across university counseling, residential treatment, and private practice settings, providing care to individuals from diverse backgrounds, cultures, and stages of life. Her experience ranges from supporting college students and young adults through life transitions to working with individuals experiencing severe and persistent mental illness, as well as high-functioning children to professionals managing anxiety, depression, trauma, relationship concerns, and stress.",
    "Ama believes that effective therapy begins with understanding the unique experiences and needs of each person. She takes a person-centered approach and recognizes that no single therapeutic method works for everyone. To best support her clients, she integrates evidence-based approaches including Eye Movement Desensitization and Reprocessing (EMDR), Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Acceptance and Commitment Therapy (ACT). As an EMDR-trained therapist, she helps clients process difficult experiences, develop healthier coping strategies, and build emotional resilience.",
    "Ama's goal is to create a warm, supportive, and nonjudgmental space where clients feel heard, understood, and empowered. She works collaboratively with individuals to address concerns such as anxiety, depression, trauma, attachment wounds, relationship challenges, self-esteem, and life transitions. Through therapy, clients gain practical tools, deeper self-awareness, and the confidence to move toward a more balanced, fulfilling life.",
  ],
};

export type ServiceItem = {
  title: string;
  badge: string;
  description: string;
  tags: string[];
};

export type ServiceCategory = {
  id: "psychotherapy" | "coaching" | "consultation";
  title: string;
  intro?: string;
  image: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "psychotherapy",
    title: "Psychotherapy",
    image: "/service-psychotherapy.svg",
    items: [
      {
        title: "Individual Therapy",
        badge: "Individual",
        description:
          "One-on-one, 50-minute sessions to explore patterns, build resilience, and work through what's weighing on you.",
        tags: ["Anxiety & Depression", "Trauma", "Life Transitions"],
      },
      {
        title: "Couples Therapy",
        badge: "Couples",
        description: "60-minute sessions focused on communication, trust, and reconnecting with your partner.",
        tags: ["Communication", "Trust & Intimacy", "Conflict Resolution"],
      },
      {
        title: "Family Therapy",
        badge: "Family",
        description:
          "60-minute sessions to navigate family dynamics and strengthen relationships across every stage of life.",
        tags: ["Parent-Child Relations", "Blended Families", "Family Conflict"],
      },
      {
        title: "Group Therapy",
        badge: "Group",
        description: "80-minute group sessions offering shared support and steady accountability.",
        tags: ["Shared Support", "Accountability"],
      },
    ],
  },
  {
    id: "coaching",
    title: "Coaching",
    image: "/service-coaching.svg",
    intro:
      "Life coaching is a collaborative, strengths-based process designed to help you clarify goals, navigate life transitions, build confidence, and create meaningful, lasting change. Through a culturally responsive and mindfulness-informed approach, we support personal and professional growth while helping you align your actions with your values. Coaching is future-focused and is not a substitute for psychotherapy or mental health treatment.",
    items: [
      {
        title: "Life Coaching",
        badge: "Life Coaching",
        description: "A collaborative, strengths-based process to clarify goals, navigate transitions, and build lasting change.",
        tags: ["Goal Setting", "Life Transitions"],
      },
      {
        title: "Mindfulness Coaching",
        badge: "Mindfulness",
        description:
          "A mindfulness-informed approach to building presence, reducing stress, and aligning your actions with your values.",
        tags: ["Mindfulness", "Stress Management"],
      },
      {
        title: "Executive/Leadership Coaching (if applicable)",
        badge: "Leadership",
        description: "Future-focused coaching for professionals navigating leadership growth and workplace transitions.",
        tags: ["Leadership", "Professional Growth"],
      },
      {
        title: "Wellness Coaching",
        badge: "Wellness",
        description: "Support across life, mindfulness, and wellness goals — future-focused and collaborative.",
        tags: ["Wellness", "Balance"],
      },
    ],
  },
  {
    id: "consultation",
    title: "Consultation & Training",
    image: "/service-consultation.svg",
    items: [
      {
        title: "Clinical Consultation",
        badge: "Clinical",
        description: "Clinical consultation for providers seeking guidance on culturally responsive, trauma-informed care.",
        tags: ["Clinical Guidance"],
      },
      {
        title: "Cultural Responsiveness Training",
        badge: "Training",
        description: "Training and workshops to help organizations build more culturally responsive systems of care.",
        tags: ["Training", "Cultural Responsiveness"],
      },
      {
        title: "Workshops & Speaking",
        badge: "Workshops",
        description: "Workshops and speaking engagements on topics in culturally responsive, trauma-informed care.",
        tags: ["Workshops", "Speaking"],
      },
      {
        title: "Organizational Wellness",
        badge: "Org. Wellness",
        description:
          "Partnering with organizations to build sustainable, culturally responsive systems of care and staff wellness.",
        tags: ["Organizational Wellness"],
      },
    ],
  },
];

export const servicesHero = {
  heading: "Care that meets you where you are",
  intro:
    "Psychotherapy, coaching, and consultation & training — matched to your goals, your schedule, and the pace that feels right for you.",
};

export type ServiceAccordionEntry = {
  id: "psychotherapy" | "consultation" | "coaching";
  title: string;
  intro: string;
  whoItsFor: string;
  includes: string[];
  image: string;
};

export const serviceAccordion: ServiceAccordionEntry[] = [
  {
    id: "psychotherapy",
    title: "Psychotherapy",
    intro: homeServices.find((service) => service.id === "psychotherapy")!.body,
    whoItsFor:
      "Individuals, couples, families, and groups navigating anxiety, depression, trauma, relationship challenges, or major life transitions.",
    includes: serviceCategories.find((category) => category.id === "psychotherapy")!.items.map((item) => item.title),
    image: serviceCategories.find((category) => category.id === "psychotherapy")!.image,
  },
  {
    id: "consultation",
    title: "Consulting",
    intro: homeServices.find((service) => service.id === "consultation")!.body,
    whoItsFor: "Providers, organizations, and teams looking to build more culturally responsive, sustainable systems of care.",
    includes: serviceCategories.find((category) => category.id === "consultation")!.items.map((item) => item.title),
    image: serviceCategories.find((category) => category.id === "consultation")!.image,
  },
  {
    id: "coaching",
    title: "Coaching",
    intro: homeServices.find((service) => service.id === "coaching")!.body,
    whoItsFor:
      "Individuals and professionals seeking a future-focused space to clarify goals, navigate transitions, and build confidence. Coaching is not a substitute for psychotherapy or mental health treatment.",
    includes: serviceCategories.find((category) => category.id === "coaching")!.items.map((item) => item.title),
    image: serviceCategories.find((category) => category.id === "coaching")!.image,
  },
];

export const feesPolicy = {
  eyebrow: "Fees & Payment Policy",
  sections: [
    {
      title: "Session Formats & Fees",
      body: "Session length and cadence vary by service — from 50-minute individual sessions to 80-minute group sessions. Specific fees are discussed during your initial consultation or scheduled intake.",
    },
    {
      title: "Insurance & Reimbursement",
      body: "Insurance coverage varies by plan. Reach out and we'll help you understand your in-network and out-of-network options before your first session.",
    },
    {
      title: "Payment Methods",
      body: "We accept credit and debit cards, HSA/FSA cards, and cash or check. Full payment is due at the time of service.",
    },
  ],
  cta: { label: "See full rates & insurance details", href: "/rates" },
};
