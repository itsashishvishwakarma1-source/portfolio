export interface Project {
  id: string;
  title: string;
  category: string;
  src: string;
  width?: number;
  height?: number;
}

export const projects: Project[] = [
  // Billboard & OOH
  { id: 'b1', title: 'Billboard Display', category: 'Billboard', src: '/projects/Billboard/Billord-.jpg' },
  { id: 'b2', title: 'Tanishq Campaign', category: 'Billboard', src: '/projects/Billboard/Tanishq 2x1_day.jpg' },
  { id: 'b3', title: 'Creative Surprise', category: 'Billboard', src: '/projects/Billboard/Surprise-.jpg' },
  { id: 'b4', title: 'Outreach Campaign', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.39.47 PM.png' },
  { id: 'b5', title: 'Scale Visualization', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.40.15 PM.png' },
  { id: 'b6', title: 'Urban Impact', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.43.31 PM.png' },
  { id: 'b7', title: 'City Takeover', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.45.33 PM.png' },
  { id: 'b8', title: 'Night Visibility', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.48.18 PM.png' },
  { id: 'b9', title: 'Street Level', category: 'Billboard', src: '/projects/Billboard/Screenshot 2026-03-08 at 3.49.44 PM.png' },

  // AI Renders
  { id: 'ai1', title: 'Conceptual AI Art', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.29.33 PM.png' },
  { id: 'ai2', title: 'Visual Synthesis', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.29.47 PM.png' },
  { id: 'ai3', title: 'Digital Exploration', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.30.03 PM.png' },
  { id: 'ai4', title: 'Generative Design', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.46.28 PM.png' },
  { id: 'ai5', title: 'Future Aesthetics', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.46.36 PM.png' },
  { id: 'ai6', title: 'AI Concept 01', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.46.44 PM.png' },
  { id: 'ai7', title: 'AI Concept 02', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.46.52 PM.png' },
  { id: 'ai8', title: 'AI Concept 03', category: 'AI Renders', src: '/projects/AI Renders/Screenshot 2026-03-08 at 3.47.06 PM.png' },

  // Activation & BQS
  { id: 'act1', title: 'Live Event Painting', category: 'Activation', src: '/projects/Activation/Live-Painting.jpg' },
  { id: 'act2', title: 'Brand Activation', category: 'Activation', src: '/projects/Activation/Look-Walkers.jpg' },
  { id: 'act3', title: 'Swiggy Campaign', category: 'Activation', src: '/projects/Activation/Swiggy-Makkhan-.jpg' },
  { id: 'act4', title: 'Interaction Design', category: 'Activation', src: '/projects/Activation/Screenshot 2026-03-08 at 3.36.05 PM.png' },
  { id: 'act5', title: 'Event Experience', category: 'Activation', src: '/projects/Activation/Screenshot 2026-03-08 at 3.51.17 PM.png' },
  { id: 'bqs1', title: 'Amul Macho BQS', category: 'BQS', src: '/projects/BQS/Amul Macho_vol 5.jpg' },
  { id: 'bqs2', title: 'Transit Shelter', category: 'BQS', src: '/projects/BQS/Screenshot 2026-03-08 at 3.45.03 PM.png' },
  { id: 'bqs3', title: 'Urban Mobility', category: 'BQS', src: '/projects/BQS/Screenshot 2026-03-08 at 3.51.52 PM.png' },

  // Installation
  { id: 'inst1', title: 'Spatial Design', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.24.51 PM.png' },
  { id: 'inst2', title: 'Concept Space', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.26.45 PM.png' },
  { id: 'inst3', title: 'Exhibition Element', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.35.35 PM.png' },
  { id: 'inst4', title: 'Installation Art', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.41.56 PM.png' },
  { id: 'inst5', title: 'Visual Spatial', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.42.49 PM.png' },
  { id: 'inst6', title: 'Structure Concept', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.44.03 PM.png' },
  { id: 'inst7', title: 'Material Play', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.44.21 PM.png' },
  { id: 'inst8', title: 'Exhibition 02', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.48.52 PM.png' },
  { id: 'inst9', title: 'Final Reveal', category: 'Installation', src: '/projects/Installation/Screenshot 2026-03-08 at 3.49.11 PM.png' },

  // Print Ad
  { id: 'pr1', title: 'Print Layout 01', category: 'Print Ad', src: '/projects/Print Ad/1.jpg' },
  { id: 'pr2', title: 'Visual Narrative', category: 'Print Ad', src: '/projects/Print Ad/girl fight02 2.jpg' },
  { id: 'pr3', title: 'Newspaper Layout', category: 'Print Ad', src: '/projects/Print Ad/Newspaper copy.jpg' },
  { id: 'pr4', title: 'Print Design 02', category: 'Print Ad', src: '/projects/Print Ad/2.jpg' },
  { id: 'pr5', title: 'Print Design 03', category: 'Print Ad', src: '/projects/Print Ad/3.jpg' },
  { id: 'pr6', title: 'Creative Print', category: 'Print Ad', src: '/projects/Print Ad/Gf Bf.jpg' },
  { id: 'pr7', title: 'Editorial Work', category: 'Print Ad', src: '/projects/Print Ad/Screenshot 2026-03-08 at 3.33.40 PM.png' },
  { id: 'pr8', title: 'Ad Concept', category: 'Print Ad', src: '/projects/Print Ad/Screenshot 2026-03-08 at 3.34.02 PM.png' },

  // Story Board
  { id: 'sb1', title: 'Campaign Storyboard', category: 'Story Board', src: '/projects/Story Boards/Screenshot 2026-03-08 at 3.34.40 PM.png' },
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
  { id: 'v4', title: 'Walkthrough Gen 1', src: '/projects/Visuals to Real/Video_Walk_Through_Generation_1 02.mp4' },
  { id: 'v5', title: 'Mia Bee Cab', src: '/projects/Visuals to Real/mia bee cab.mp4' },
];

