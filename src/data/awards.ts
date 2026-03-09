export interface Award {
  id: string;
  year: string;
  title: string;
  project: string;
  category: string;
  result: 'Winner' | 'Gold' | 'Silver' | 'Bronze' | 'Shortlist' | 'Grand Prix' | string;
}

export const awards: Award[] = [
  {
    id: 'aw1',
    year: '2025',
    title: 'Cannes Lions',
    project: 'Tata Tea Gold',
    category: 'Spatial Design & Activation',
    result: 'Gold'
  },
  {
    id: 'aw2',
    year: '2024',
    title: 'D&AD Pencils',
    project: 'Instamart Pass',
    category: 'OOH Innovation',
    result: 'Wood Pencil'
  },
  {
    id: 'aw3',
    year: '2024',
    title: 'The One Show',
    project: 'Mia by Tanishq',
    category: 'Experiential Billboard',
    result: 'Silver'
  },
  {
    id: 'aw4',
    year: '2023',
    title: 'Clio Awards',
    project: 'Asian Paints Emulsion',
    category: 'Print & Craft',
    result: 'Bronze'
  },
  {
    id: 'aw5',
    year: '2023',
    title: 'Spikes Asia',
    project: 'Macho Sporto',
    category: 'Interactive Campaign',
    result: 'Shortlist'
  }
];
