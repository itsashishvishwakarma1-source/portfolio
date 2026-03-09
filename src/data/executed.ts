export interface ExecutedProject {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  format: 'landscape' | 'portrait' | 'square';
}

export const executedWork: ExecutedProject[] = [
  {
    id: 'exec1',
    title: 'Boodhe Hoke Kya Banoge Platinum Communications',
    type: 'video',
    src: '/projects/Executed Work/boodhehokekyabanoge__platinumcommunications__madi.mp4',
    format: 'landscape',
  },
  {
    id: 'exec2',
    title: 'OOH Creative Campaign Swiggy Instamart',
    type: 'video',
    src: '/projects/Executed Work/ooh__creativecampaign__swiggyinstamart__madisonwo.mp4',
    format: 'portrait',
  },
  {
    id: 'exec3',
    title: 'Lifestyle Big Sale Blast',
    type: 'video',
    src: '/projects/Executed Work/lifestyle_big_sale_blast_ooh_campaign___media4grow.mp4',
    format: 'landscape',
  },
  {
    id: 'exec4',
    title: 'Happy To Know Work Reaching Places',
    type: 'video',
    src: '/projects/Executed Work/happy_to_know__work_reaching_places_____ashish_vis.mp4',
    format: 'portrait',
  },
  {
    id: 'exec5',
    title: 'OOH Creative Marketing Shaadi.com',
    type: 'video',
    src: '/projects/Executed Work/ooh__creative__marketing__shaadidotcom__campaign_.mp4',
    format: 'landscape',
  },
  {
    id: 'exec6',
    title: 'It is Such A Great Feeling',
    type: 'video',
    src: '/projects/Executed Work/it_s_such_a_great_feeling_to_see_my_work_out_in_th.mp4',
    format: 'portrait',
  },
  {
    id: 'exec7',
    title: 'Swiggy Brings Paet Mein Chuhe Daudna To Life',
    type: 'video',
    src: '/projects/Executed Work/swiggy_brings__paet_mein_chuhe_daudna__to_life_on_.mp4',
    format: 'landscape',
  },
  {
    id: 'exec8',
    title: 'Billboard Campaign 1',
    type: 'image',
    src: '/projects/Executed Work/Screenshot 2026-03-09 at 5.12.56 PM.png',
    format: 'portrait',
  },
  {
    id: 'exec9',
    title: 'Billboard Campaign 2',
    type: 'image',
    src: '/projects/Executed Work/Screenshot 2026-03-09 at 5.31.32 PM.png',
    format: 'landscape',
  },
  {
    id: 'exec10',
    title: 'Your Work Speaks For Itself',
    type: 'video',
    src: '/projects/Executed Work/your_work_speaks_for_itself__when_people_see_it__t.mp4',
    format: 'portrait',
  }
];
