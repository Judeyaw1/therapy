export const businessName = "ARK Collective Care";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Rates & Insurance", href: "/rates" },
  { label: "Contact", href: "/contact" },
] as const;

export const contactInfo = {
  email: "arkwadu@gmail.com",
  phone: "(302) 229-4921",
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
    image: "/Picture2.png",
  },
  {
    id: "consultation",
    title: "Consulting",
    body: "Clinical consultation to cultural responsiveness training, workshops, and organizational wellness",
    image: "/Picture3.png",
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
    "At ARK Collective Care, we believe healing begins when people feel seen, heard, and valued. ARK was created to provide a safe, affirming space where individuals from all walks of life can navigate life's challenges with compassion, authenticity, and hope.",
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
    image: "/Picture2.png",
    items: [
      {
        title: "Individual",
        badge: "Individual",
        description:
          "Provides a confidential and collaborative space to explore personal challenges, increase self-awareness, and develop healthier ways of coping and relating.",
        tags: ["Anxiety & Depression", "Trauma", "Life Transitions"],
      },
      {
        title: "Relational",
        badge: "Relational",
        description:
          "A therapeutic space for two or more individuals to improve communication, strengthen understanding, and work through relational challenges in a supportive environment. This service may include friends, colleagues, or other non-romantic relationships seeking healthier interaction and connection.",
        tags: ["Communication", "Connection", "Conflict Resolution"],
      },
      {
        title: "Family",
        badge: "Family",
        description:
          "Supporting families in improving communication, strengthening relationships, and navigating challenges together. Sessions focus on understanding patterns within the family system, addressing conflict, increasing connection, and developing healthier ways of interacting. Family therapy may be helpful during periods of transition, behavioral concerns, parenting challenges, or ongoing relational stress.",
        tags: ["Parent-Child Relations", "Blended Families", "Family Conflict"],
      },
      {
        title: "Group",
        badge: "Group",
        description:
          "Closed group therapy provides a supportive and confidential therapeutic environment where a small group of individuals begin and progress through treatment together over a set period of time. This format promotes trust, consistency, deeper connection, and meaningful personal growth as members build insight and learn from shared experiences.",
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
    image: "/Picture3.png",
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
  includes: ServiceItem[];
};

export const serviceAccordion: ServiceAccordionEntry[] = [
  {
    id: "psychotherapy",
    title: "Psychotherapy",
    intro:
      "We provide evidence-based psychotherapy services tailored to your unique needs, including individual, relational, family, and group therapy. Our approach is grounded in cultural responsiveness, recognizing and honoring the diverse identities, values, and lived experiences that shape each person's journey. Through a collaborative, whole-person approach, we coordinate with your other healthcare providers and support systems to promote seamless, integrative care and foster meaningful, lasting healing.",
    includes: serviceCategories.find((category) => category.id === "psychotherapy")!.items,
  },
  {
    id: "consultation",
    title: "Consulting",
    intro:
      "We provide thoughtful, culturally responsive consulting and training designed to strengthen clinical practice, support organizational wellness, and foster healthier, more inclusive environments. Services include clinical consultation, cultural responsiveness training, workshops, speaking engagements, and tailored wellness programming for organizations.",
    includes: serviceCategories.find((category) => category.id === "consultation")!.items,
  },
  {
    id: "coaching",
    title: "Coaching",
    intro:
      "Life coaching is a collaborative, strengths-based process designed to help you clarify goals, navigate life transitions, build confidence, and create meaningful, lasting change. Through a culturally responsive and mindfulness-informed approach, we support personal and professional growth while helping you align your actions with your values. Coaching is future-focused and is not a substitute for psychotherapy or mental health treatment.",
    includes: serviceCategories.find((category) => category.id === "coaching")!.items,
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
