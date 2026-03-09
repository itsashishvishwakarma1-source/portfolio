export interface ExecutedProject {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  thumbnailTime?: number;
  format: 'landscape' | 'portrait' | 'square';
}

export const executedWork: ExecutedProject[] = [
  {
    id: 'exec1',
    title: 'Gold Bar',
    type: 'video',
    src: '/projects/Executed work/Gold_Bar.mp4',
    thumbnailTime: 15,
    format: 'landscape',
  },
  {
    id: 'exec2',
    title: 'Boodhe Hoke Kya Banoge',
    type: 'video',
    src: '/projects/Executed work/boodhehokekyabanoge.mp4',
    thumbnailTime: 15,
    format: 'landscape',
  },
  {
    id: 'exec3',
    title: 'Sakth Launda',
    type: 'video',
    src: '/projects/Executed work/Sakth_Launda.mp4',
    format: 'landscape',
  },
  {
    id: 'exec4',
    title: 'Mia by Tanishq',
    type: 'video',
    src: '/projects/Executed work/Mia_by_Taniqsh_.mp4',
    format: 'portrait',
  },
  {
    id: 'exec5',
    title: 'Pet ke Chuhe',
    type: 'video',
    src: '/projects/Executed work/Pet_ke_chuhe.mp4',
    format: 'landscape',
  },
  {
    id: 'exec6',
    title: 'Drool',
    type: 'video',
    src: '/projects/Executed work/drool.mp4',
    format: 'portrait',
  },
  {
    id: 'exec7',
    title: 'Lifestyle Big Sale Blast',
    type: 'video',
    src: '/projects/Executed work/lifestyle_big_sale_blast_ooh_campaign___media4grow.mp4',
    format: 'landscape',
  },
  {
    id: 'exec8',
    title: 'IPL Campaign',
    type: 'image',
    src: '/projects/Executed work/IPL.png',
    format: 'landscape',
  },
  {
    id: 'exec9',
    title: 'Brand Collab',
    type: 'image',
    src: '/projects/Executed work/collab.png',
    format: 'landscape',
  }
];
