export interface Award {
  id: string;
  year: string;
  title: string;
  project: string;
  category: string;
  result: 'Winner' | 'Gold' | 'Silver' | 'Bronze' | 'Shortlist' | 'Grand Prix' | string;
  link?: string;
}

export const awards: Award[] = [
  {
    id: 'aw1',
    year: '2024',
    title: 'e4m NEONS OOH',
    project: 'Madison OOH',
    category: 'OOH Media Agency of the Year',
    result: 'Winner',
    link: 'https://www.exchange4media.com/out-of-home-news/groupm-ooh-and-madison-ooh-share-ooh-media-agency-of-the-year-title-at-e4m-neons-2024-134547.html'
  },
  {
    id: 'aw2',
    year: '2024',
    title: 'OAA Awards',
    project: 'Madison OOH',
    category: 'OOH Agency of the Year (12 Metals)',
    result: 'Winner',
    link: 'https://www.media4growth.com/ooh-news/madison-ooh-takes-home-the-highest-number-of-metals-at-oaa-2024-7186'
  },
  {
    id: 'aw3',
    year: '2024',
    title: 'e4m NEONS OOH',
    project: 'Asian Paints (Mera Wala Mood)',
    category: 'Best Digital Out-of-Home Campaign',
    result: 'Gold',
    link: 'https://e4mevents.com/neons-ooh-awards-2024/winners'
  },
  {
    id: 'aw4',
    year: '2024',
    title: 'OAA Awards',
    project: 'Tata Altroz iCNG (OMG its CNG)',
    category: 'Outdoor Media Plan of the Year',
    result: 'Gold',
    link: 'https://www.media4growth.com/ooh-news/madison-ooh-takes-home-the-highest-number-of-metals-at-oaa-2024-7186'
  },
  {
    id: 'aw5',
    year: '2024',
    title: 'e4m NEONS OOH',
    project: 'Asian Paints (Mera Wala Mood)',
    category: 'Best Interactive DOOH Campaign',
    result: 'Silver',
    link: 'https://e4mevents.com/neons-ooh-awards-2024/winners'
  },
  {
    id: 'aw6',
    year: '2024',
    title: 'e4m NEONS OOH',
    project: 'Tata Altroz iCNG',
    category: 'Innovative Creation of a New Medium',
    result: 'Bronze',
    link: 'https://e4mevents.com/neons-ooh-awards-2024/winners'
  }
];
