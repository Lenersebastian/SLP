export const doctor = {
  name: 'MUDr. Slávka Lenerová',
  title: 'Psychiatrička',
  company: 'SL Psychiatria s.r.o.',
  bio: [
    'MUDr. Slávka Lenerová sa starostlivosti o duševné zdravie venuje od roku 1999, z toho 16 rokov v ambulantnej praxi. 7 rokov pracovala v Centre pre liečbu drogových závislostí v Bratislave a má 15 rokov skúseností s prácou súdneho znalca v odbore psychiatria. Lieči všetky typy psychiatrických porúch so zameraním na farmakoterapiu a poskytuje poradenstvo v riešení krízových životných situácií.',
  ],
};

export const contact = {
  phone: '+421 907 808 677',
  phoneHref: 'tel:+421907808677',
};

export const locations = [
  {
    id: 'malacky',
    city: 'Malacky',
    street: 'Ľudovíta Fullu 5274',
    zip: '901 01 Malacky',
    hours: [
      { day: 1, time: '7:00 – 13:00' },
      { day: 4, time: '7:00 – 13:00' },
    ],
  },
  {
    id: 'stupava',
    city: 'Stupava',
    street: 'Zdravotnícka 952/1',
    zip: '900 32 Stupava',
    hours: [
      { day: 2, time: '7:00 – 13:00' },
      { day: 5, time: '7:00 – 13:00' },
    ],
  },
];

export const weekDays = [
  { day: 1, name: 'Pondelok' },
  { day: 2, name: 'Utorok' },
  { day: 3, name: 'Streda' },
  { day: 4, name: 'Štvrtok' },
  { day: 5, name: 'Piatok' },
];

export const patientInfo = [
  'Prijímame pacientov od 16 rokov veku.',
  'Na vyšetrenie sa, prosím, vopred objednajte telefonicky.',
  'Prineste si preukaz poistenca a doklad totožnosti.',
  'Ak máte, prineste lekárske správy z predchádzajúcich vyšetrení a zoznam liekov, ktoré užívate.',
  'Ak sa na dohodnutý termín nemôžete dostaviť, dajte nám, prosím, včas vedieť.',
];

export const specializations = [
  'Úzkostné poruchy',
  'Afektívne poruchy',
  'Poruchy osobnosti',
  'Kognitívne poruchy',
  'Demencie',
  'Ochorenia z okruhu schizofrénie',
  'Poruchy správania a emócií u mladistvých',
  'Poruchy spánku',
];

export const pricing = {
  validFrom: '28. 4. 2026',
  items: [
    { name: 'Psychiatrické vyšetrenie pre sociálne účely', price: 20 },
    { name: 'Administratívne úkony spojené s prijatím pacienta do registra pacientov', price: 20 },
    { name: 'Psychiatrické vyšetrenie neplatiča zdravotného poistenia', price: 30 },
    { name: 'Psychiatrické vyšetrenie pre políciu a súd', price: 100 },
  ],
};

export const insurers = [
  'Všeobecná zdravotná poisťovňa',
  'Union zdravotná poisťovňa',
  'Dôvera zdravotná poisťovňa',
];
