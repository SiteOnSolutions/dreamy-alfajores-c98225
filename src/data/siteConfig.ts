// Allt företagsspecifikt innehåll samlat på ett ställe.
// Ändra uppgifterna nedan för att uppdatera hela sajten (kontaktuppgifter, adress, öppettider m.m).

export const siteConfig = {
  companyName: 'SiteOn Solutions',
  tagline: 'Moderna hemsidor för Trestads företag',
  metaDescription:
    'SiteOn Solutions bygger snabba, prisvärda hemsidor med hjälp av specialiserade verktyg åt småföretag i Trollhättan, Vänersborg och Uddevalla.',

  // Regionen som visas i texter runt om på sajten
  region: 'Trestad',
  cities: ['Trollhättan', 'Vänersborg', 'Uddevalla'],

  contact: {
    phone: '+46722402770',
    phoneDisplay: '072-240 27 70',
    email: 'hej@siteonsolutions.se',
    addressLine1: 'Garvaregatan 13',
    addressLine2: '461 31 Trollhättan',
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
