// import type { AxisModel } from "@syncfusion/ej2-react-charts";

export const sidebartopItems = [
  {
    id: 1,
    icon: "/assets/icons/favicon.ico",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: "/assets/icons/favicon.ico",
    label: "Comment ça marche ?",
    href: "/faq",
  },
];

export const adminItems = [
  {
    id: 1,
    icon: "/assets/icons/favicon.ico",
    label: "Routeur",
    href: "#",
    dropdown: [
      {
        id: 11,
        icon: "/assets/icons/favicon.ico",
        label: "Mes Routeurs",
        href: "/add-router",
      },
    ],
  },
  {
    id: 2,
    icon: "/assets/icons/favicon.ico",
    label: "Tarifs",
    href: "#",
    dropdown: [
      {
        id: 11,
        icon: "/assets/icons/favicon.ico",
        label: "Ajouter un tarif",
        href: "/add-tarif",
      },
    ],
  },
  {
    id: 3,
    icon: "/assets/icons/favicon.ico",
    label: "Tickets",
    href: "#",
    dropdown: [
      {
        id: 31,
        icon: "/assets/icons/favicon.ico",
        label: "Ajouter un ticket",
        href: "/add-ticket",
      },
    ]
  },
];

export const userItems = [
  {
    id: 1,
    icon: "/assets/icons/favicon.ico",
    label: "Ventes",
    href: "/all-users",
  },
  {
    id: 2,
    icon: "/assets/icons/favicon.ico",
    label: "Retraits",
    href: "/retraits",
  },
  {
    id: 3,
    icon: "/assets/icons/favicon.ico",
    label: "Abonnement",
    href: "/abonnement",
  },
];

export const user = { name: "Thierry Dohouin" };

export const dashboardStats = {
  solde: 1500,
  recette: { today: 1000, thisMonth: 500 },
  ticket: 100
};

export const pack = {
  type: "PACK PERSO TG", 
  maxRouter: 1, 
  price: 5500, 
  expireDate: "2023-06-30",
  expireTime: "18:00:00", 
  status: "active"
}

export const data = [
    {
      date: '2025-08-08',
      client: 'Jean Dupont',
      produit: 'Pain au chocolat',
      quantité: 3,
      'prix unitaire': '1.50€',
      total: '4.50€',
      'mode de paiement': 'Espèces',
      statut: 'Payé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Amina Sow',
      produit: 'Baguette',
      quantité: 5,
      'prix unitaire': '1.00€',
      total: '5.00€',
      'mode de paiement': 'Carte',
      statut: 'Payé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Carlos Mendes',
      produit: 'Croissant',
      quantité: 2,
      'prix unitaire': '1.20€',
      total: '2.40€',
      'mode de paiement': 'Mobile Money',
      statut: 'En attente',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Fatou Diarra',
      produit: 'Tarte aux pommes',
      quantité: 1,
      'prix unitaire': '3.00€',
      total: '3.00€',
      'mode de paiement': 'Carte',
      statut: 'Payé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
    {
      date: '2025-08-08',
      client: 'Lucien Koffi',
      produit: 'Sandwich',
      quantité: 2,
      'prix unitaire': '2.50€',
      total: '5.00€',
      'mode de paiement': 'Espèces',
      statut: 'Annulé',
      actions: 'Voir'
    },
  ];


//-------------------------------------------------------------------------

export const chartOneData: object[] = [
  {
    x: "Jan",
    y1: 0.5,
    y2: 1.5,
    y3: 0.7,
  },
  {
    x: "Feb",
    y1: 0.8,
    y2: 1.2,
    y3: 0.9,
  },
  {
    x: "Mar",
    y1: 1.2,
    y2: 1.8,
    y3: 1.5,
  },
  {
    x: "Apr",
    y1: 1.5,
    y2: 2.0,
    y3: 1.8,
  },
  {
    x: "May",
    y1: 1.8,
    y2: 2.5,
    y3: 2.0,
  },
  {
    x: "Jun",
    y1: 2.0,
    y2: 2.8,
    y3: 2.5,
  },
];

export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const footers = ["Terms & Condition", "Privacy Policy"];

/*export const selectItems = [
  "groupType",
  "travelStyle",
  "interest",
  "budget",
] as (keyof TripFormData)[];

export const comboBoxItems = {
  groupType: groupTypes,
  travelStyle: travelStyles,
  interest: interests,
  budget: budgetOptions,
} as Record<keyof TripFormData, string[]>;

export const userXAxis: AxisModel = { valueType: "Category", title: "Day" };
export const useryAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const tripXAxis: AxisModel = {
  valueType: "Category",
  title: "Travel Styles",
  majorGridLines: { width: 0 },
};

export const tripyAxis: AxisModel = {
  minimum: 0,
  maximum: 10,
  interval: 2,
  title: "Count",
};

export const CONFETTI_SETTINGS = {
  particleCount: 200, // Number of confetti pieces
  spread: 60, // Spread of the confetti burst
  colors: ["#ff0", "#ff7f00", "#ff0044", "#4c94f4", "#f4f4f4"], // Confetti colors
  decay: 0.95, // Gravity decay of the confetti
};

export const LEFT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 45, // Direction of the confetti burst (90 degrees is top)
  origin: { x: 0, y: 1 }, // Center of the screen
};

export const RIGHT_CONFETTI = {
  ...CONFETTI_SETTINGS,
  angle: 135,
  origin: { x: 1, y: 1 },
};*/