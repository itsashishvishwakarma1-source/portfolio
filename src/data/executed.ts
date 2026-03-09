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
    title: 'Billboard Campaign Live',
    type: 'video',
    src: '/projects/Visuals to Real/Billboard2.mp4',
    format: 'landscape',
  },
  {
    id: 'exec2',
    title: 'Installation at Mall',
    type: 'image',
    src: '/projects/Installation/5.png',
    format: 'portrait',
  },
  {
    id: 'exec3',
    title: 'Brand Activation Event',
    type: 'image',
    src: '/projects/Activation/6.png',
    format: 'portrait',
  },
  {
    id: 'exec4',
    title: 'Digital OOH Kiosk',
    type: 'video',
    src: '/projects/Visuals to Real/Digital Standee3.mp4',
    format: 'landscape',
  },
  {
    id: 'exec5',
    title: 'Transit Media Wrap',
    type: 'image',
    src: '/projects/BQS/1.png',
    format: 'square',
  }
];
