export interface Project {
  id: string;
  title: string;
  category: string;
  src: string;
  type?: 'image' | 'video';
  width?: number;
  height?: number;
}

export const projects: Project[] = [
  // AI Renders
  { id: 'ai1', title: 'Screenshot_2026-03-08_at_3.29.33_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.29.33_PM.png' },
  { id: 'ai2', title: 'Screenshot_2026-03-08_at_3.29.47_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.29.47_PM.png' },
  { id: 'ai3', title: 'Screenshot_2026-03-08_at_3.30.03_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.30.03_PM.png' },
  { id: 'ai4', title: 'Screenshot_2026-03-08_at_3.46.28_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.46.28_PM.png' },
  { id: 'ai5', title: 'Screenshot_2026-03-08_at_3.46.36_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.46.36_PM.png' },
  { id: 'ai6', title: 'Screenshot_2026-03-08_at_3.46.44_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.46.44_PM.png' },
  { id: 'ai7', title: 'Screenshot_2026-03-08_at_3.46.52_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.46.52_PM.png' },
  { id: 'ai8', title: 'Screenshot_2026-03-08_at_3.47.06_PM', category: 'AI Renders', src: '/projects/AI Renders/Screenshot_2026-03-08_at_3.47.06_PM.png' },
  { id: 'ai9', title: 'gateway', category: 'AI Renders', type: 'video', src: '/projects/AI Renders/gateway.mp4' },
  { id: 'ai10', title: 'snowingbillboard', category: 'AI Renders', type: 'video', src: '/projects/AI Renders/snowingbillboard.mp4' },
  { id: 'ai11', title: 'swiggyholi', category: 'AI Renders', type: 'video', src: '/projects/AI Renders/swiggyholi.mp4' },

  // Activation
  { id: 'act1', title: 'Auto_Rikshaw_copy', category: 'Activation', src: '/projects/Activation/Auto_Rikshaw_copy.jpg' },
  { id: 'act2', title: 'Live-Painting', category: 'Activation', src: '/projects/Activation/Live-Painting.jpg' },
  { id: 'act3', title: 'Look-Walkers', category: 'Activation', src: '/projects/Activation/Look-Walkers.jpg' },
  { id: 'act4', title: 'Screenshot_2026-03-08_at_3.36.05_PM', category: 'Activation', src: '/projects/Activation/Screenshot_2026-03-08_at_3.36.05_PM.png' },
  { id: 'act5', title: 'Screenshot_2026-03-08_at_3.51.17_PM', category: 'Activation', src: '/projects/Activation/Screenshot_2026-03-08_at_3.51.17_PM.png' },
  { id: 'act6', title: 'Swiggy-Makkhan-', category: 'Activation', src: '/projects/Activation/Swiggy-Makkhan-.jpg' },

  // BQS
  { id: 'bqs1', title: 'Amul_Macho_vol_5', category: 'BQS', src: '/projects/BQS/Amul_Macho_vol_5.jpg' },
  { id: 'bqs2', title: 'Screenshot_2026-03-08_at_3.45.03_PM', category: 'BQS', src: '/projects/BQS/Screenshot_2026-03-08_at_3.45.03_PM.png' },
  { id: 'bqs3', title: 'Screenshot_2026-03-08_at_3.51.52_PM', category: 'BQS', src: '/projects/BQS/Screenshot_2026-03-08_at_3.51.52_PM.png' },

  // Billboard
  { id: 'b1', title: 'Billord-', category: 'Billboard', src: '/projects/Billboard/Billord-.jpg' },
  { id: 'b2', title: 'Screenshot_2026-03-08_at_3.39.47_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.39.47_PM.png' },
  { id: 'b3', title: 'Screenshot_2026-03-08_at_3.40.15_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.40.15_PM.png' },
  { id: 'b4', title: 'Screenshot_2026-03-08_at_3.43.31_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.43.31_PM.png' },
  { id: 'b5', title: 'Screenshot_2026-03-08_at_3.45.33_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.45.33_PM.png' },
  { id: 'b6', title: 'Screenshot_2026-03-08_at_3.48.18_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.48.18_PM.png' },
  { id: 'b7', title: 'Screenshot_2026-03-08_at_3.49.44_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.49.44_PM.png' },
  { id: 'b8', title: 'Surprise-', category: 'Billboard', src: '/projects/Billboard/Surprise-.jpg' },
  { id: 'b9', title: 'Tanishq_2x1_day', category: 'Billboard', src: '/projects/Billboard/Tanishq_2x1_day.jpg' },
  { id: 'b10', title: 'frozenbillboard', category: 'Billboard', src: '/projects/Billboard/frozenbillboard.jpg' },
  { id: 'b11', title: 'frozencanter', category: 'Billboard', src: '/projects/Billboard/frozencanter.jpg' },
  { id: 'b12', title: 'ladder', category: 'Billboard', src: '/projects/Billboard/ladder.jpg' },
  { id: 'b13', title: 'swiggyholicollab', category: 'Billboard', src: '/projects/Billboard/swiggyholicollab.jpg' },

  // Installation
  { id: 'inst1', title: 'Frozenman', category: 'Installation', src: '/projects/Installation/Frozenman.jpg' },
  { id: 'inst2', title: 'Frozenmannight', category: 'Installation', src: '/projects/Installation/Frozenmannight.jpg' },
  { id: 'inst3', title: 'Screenshot_2026-03-08_at_3.24.51_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.24.51_PM.png' },
  { id: 'inst4', title: 'Screenshot_2026-03-08_at_3.26.45_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.26.45_PM.png' },
  { id: 'inst5', title: 'Screenshot_2026-03-08_at_3.35.35_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.35.35_PM.png' },
  { id: 'inst6', title: 'Screenshot_2026-03-08_at_3.41.56_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.41.56_PM.png' },
  { id: 'inst7', title: 'Screenshot_2026-03-08_at_3.42.49_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.42.49_PM.png' },
  { id: 'inst8', title: 'Screenshot_2026-03-08_at_3.44.03_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.44.03_PM.png' },
  { id: 'inst9', title: 'Screenshot_2026-03-08_at_3.44.21_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.44.21_PM.png' },
  { id: 'inst10', title: 'Screenshot_2026-03-08_at_3.48.52_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.48.52_PM.png' },
  { id: 'inst11', title: 'Screenshot_2026-03-08_at_3.49.11_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.49.11_PM.png' },
  { id: 'inst12', title: 'Screenshot_2026-03-08_at_3.50.37_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.50.37_PM.png' },

  // Story Boards
  { id: 'sb1', title: 'AC_TVC', category: 'Story Boards', src: '/projects/Story Boards/AC_TVC.png' },
  { id: 'sb2', title: 'Screenshot_2026-03-08_at_3.34.40_PM', category: 'Story Boards', src: '/projects/Story Boards/Screenshot_2026-03-08_at_3.34.40_PM.png' },
];

export interface VideoProject {
  id: string;
  title: string;
  src: string;
}

export const videos: VideoProject[] = [
  { id: 'v1', title: 'Anamorphic Display', src: '/projects/Visuals to Real/Anamorphic.mp4' },
  { id: 'v2', title: 'Interactive Floor', src: '/projects/Visuals to Real/Man_Jumping_On_Lit_Tiles_Video.mp4' },
  { id: 'v3', title: 'Moving Centerpiece', src: '/projects/Visuals to Real/Video_Generation_Moving_Canter.mp4' },
  { id: 'v4', title: 'Walkthrough Gen 1', src: '/projects/Visuals to Real/Video_Walk_Through_Generation_1_02.mp4' },
  { id: 'v5', title: 'Mia Bee Cab', src: '/projects/Visuals to Real/mia_bee_cab.mp4' },
];

