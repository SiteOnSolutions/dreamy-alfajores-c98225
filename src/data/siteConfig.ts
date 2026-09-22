// Allt företagsspecifikt innehåll samlat på ett ställe.
// Ändra uppgifterna nedan för att uppdatera hela sajten (kontaktuppgifter, adress, öppettider m.m).

export const siteConfig = {
  companyName: 'SiteOn Solutions',
  tagline: 'AI-genererade hemsidor för Trestads företag',
  metaDescription:
    'SiteOn Solutions bygger snabba, prisvärda hemsidor med hjälp av AI åt småföretag i Trollhättan, Vänersborg och Uddevalla.',

  // Regionen som visas i texter runt om på sajten
  region: 'Trestad',
  cities: ['Trollhättan', 'Vänersborg', 'Uddevalla'],

  contact: {
    phone: '073-000 00 00',
    phoneDisplay: '073-000 00 00',
    email: 'hej@siteonsolutions.se',
    addressLine1: 'Storgatan 12',
    addressLine2: '461 32 Trollhättan',
    hours: 'Mån–Fre 09:00–17:00',
  },

  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },

  cta: {
    primary: 'Boka kostnadsfri konsultation',
    secondary: 'Se hur det funkar',
  },
} as const
