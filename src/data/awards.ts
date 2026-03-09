export interface Award {
  id: string;
  year: string;
  title: string;
  project: string;
  category?: string;
  result: 'Winner' | 'Gold' | 'Silver' | 'Bronze' | 'Shortlist' | 'Grand Prix' | string;
  link?: string;
}

export const awards: Award[] = [
  {
    id: 'aw1',
    year: '2025',
    title: 'e4m Awards',
    project: 'Swiggy Instamart Channi',
    result: 'Gold'
  },
  {
    id: 'aw2',
    year: '2025',
    title: 'e4m Awards',
    project: '#BoodheHokeKyaBanoge AI Booth',
    result: 'Gold'
  },
  {
    id: 'aw3',
    year: '2025',
    title: 'e4m Awards',
    project: 'Continental Coffee Brewing Zone',
    result: 'Silver'
  },
  {
    id: 'aw4',
    year: '2025',
    title: 'e4m Awards',
    project: 'Keeping it cool, even for the birds!',
    result: 'Silver'
  },
  {
    id: 'aw5',
    year: '2025',
    title: 'e4m Awards',
    project: 'Swiggy Instamart – Festive',
    result: 'Silver'
  },
  {
    id: 'aw6',
    year: '2024',
    title: 'WOW Awards Asia',
    project: 'Pulse Ek Avatar Anek',
    result: 'Gold'
  },
  {
    id: 'aw7',
    year: '2024',
    title: 'e4m Awards',
    project: 'Beautiful Home Painting Services',
    result: 'Bronze'
  },
  {
    id: 'aw8',
    year: '2024',
    title: 'OAC Awards',
    project: 'Swiggy Channi',
    result: 'Silver'
  },
  {
    id: 'aw9',
    year: '2024',
    title: 'OAC Awards',
    project: 'Fevicol Marol Naka Metro Station',
    result: 'Bronze'
  },
  {
    id: 'aw10',
    year: '2024',
    title: 'OAC Awards',
    project: 'Stanley Kaam Chalo Nahi Daudao',
    result: 'Bronze'
  }
];
