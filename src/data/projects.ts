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
  { id: 'act7', title: 'health_activation', category: 'Activation', src: '/projects/Activation/health_activation.png' },
  { id: 'act8', title: 'valientine', category: 'Activation', src: '/projects/Activation/valientine.png' },

  // BQS
  { id: 'bqs1', title: 'Amul_Macho_vol_5', category: 'BQS', src: '/projects/BQS/Amul_Macho_vol_5.jpg' },
  { id: 'bqs2', title: 'Claw_bqs', category: 'BQS', src: '/projects/BQS/Claw_bqs.png' },
  { id: 'bqs3', title: 'Screenshot_2026-03-08_at_3.45.03_PM', category: 'BQS', src: '/projects/BQS/Screenshot_2026-03-08_at_3.45.03_PM.png' },
  { id: 'bqs4', title: 'Screenshot_2026-03-08_at_3.51.52_PM', category: 'BQS', src: '/projects/BQS/Screenshot_2026-03-08_at_3.51.52_PM.png' },
  { id: 'bqs5', title: 'Transperent', category: 'BQS', src: '/projects/BQS/Transperent.png' },

  // Billboard
  { id: 'b1', title: 'Amulmacho_heater', category: 'Billboard', src: '/projects/Billboard/Amulmacho_heater.png' },
  { id: 'b2', title: 'Billord-', category: 'Billboard', src: '/projects/Billboard/Billord-.jpg' },
  { id: 'b3', title: 'Claw_board', category: 'Billboard', src: '/projects/Billboard/Claw_board.png' },
  { id: 'b4', title: 'Polycab_bulbN', category: 'Billboard', src: '/projects/Billboard/Polycab_bulbN.png' },
  { id: 'b5', title: 'Screenshot_2026-03-08_at_3.39.47_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.39.47_PM.png' },
  { id: 'b6', title: 'Screenshot_2026-03-08_at_3.40.15_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.40.15_PM.png' },
  { id: 'b7', title: 'Screenshot_2026-03-08_at_3.43.31_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.43.31_PM.png' },
  { id: 'b8', title: 'Screenshot_2026-03-08_at_3.45.33_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.45.33_PM.png' },
  { id: 'b9', title: 'Screenshot_2026-03-08_at_3.48.18_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.48.18_PM.png' },
  { id: 'b10', title: 'Screenshot_2026-03-08_at_3.49.44_PM', category: 'Billboard', src: '/projects/Billboard/Screenshot_2026-03-08_at_3.49.44_PM.png' },
  { id: 'b11', title: 'Serria_board1', category: 'Billboard', src: '/projects/Billboard/Serria_board1.png' },
  { id: 'b12', title: 'Surprise-', category: 'Billboard', src: '/projects/Billboard/Surprise-.jpg' },
  { id: 'b13', title: 'Swiggy_contextual', category: 'Billboard', src: '/projects/Billboard/Swiggy_contextual.png' },
  { id: 'b14', title: 'Swiigy_contexuat_day', category: 'Billboard', src: '/projects/Billboard/Swiigy_contexuat_day.png' },
  { id: 'b15', title: 'Taniqsh_board', category: 'Billboard', src: '/projects/Billboard/Taniqsh_board.png' },
  { id: 'b16', title: 'Tanishq_2x1_day', category: 'Billboard', src: '/projects/Billboard/Tanishq_2x1_day.jpg' },
  { id: 'b17', title: 'arvind_cluster', category: 'Billboard', src: '/projects/Billboard/arvind_cluster.png' },
  { id: 'b18', title: 'ccl_rope', category: 'Billboard', src: '/projects/Billboard/ccl_rope.png' },
  { id: 'b19', title: 'contextual', category: 'Billboard', src: '/projects/Billboard/contextual.png' },
  { id: 'b20', title: 'cutrain_revel', category: 'Billboard', src: '/projects/Billboard/cutrain_revel.png' },
  { id: 'b21', title: 'frozenbillboard', category: 'Billboard', src: '/projects/Billboard/frozenbillboard.jpg' },
  { id: 'b22', title: 'frozencanter', category: 'Billboard', src: '/projects/Billboard/frozencanter.jpg' },
  { id: 'b23', title: 'ladder', category: 'Billboard', src: '/projects/Billboard/ladder.jpg' },
  { id: 'b24', title: 'mia_boardletter', category: 'Billboard', src: '/projects/Billboard/mia_boardletter.png' },
  { id: 'b25', title: 'polycab_bulb', category: 'Billboard', src: '/projects/Billboard/polycab_bulb.png' },
  { id: 'b26', title: 'polycab_pot', category: 'Billboard', src: '/projects/Billboard/polycab_pot.png' },
  { id: 'b27', title: 'swiggyholicollab', category: 'Billboard', src: '/projects/Billboard/swiggyholicollab.jpg' },

  // Installation
  { id: 'inst1', title: 'AMG', category: 'Installation', src: '/projects/Installation/AMG.png' },
  { id: 'inst2', title: 'Arvind_popup', category: 'Installation', src: '/projects/Installation/Arvind_popup.png' },
  { id: 'inst3', title: 'Claw_stick', category: 'Installation', src: '/projects/Installation/Claw_stick.png' },
  { id: 'inst4', title: 'Fevicol_clay', category: 'Installation', src: '/projects/Installation/Fevicol_clay.png' },
  { id: 'inst5', title: 'Fevicol_tank', category: 'Installation', src: '/projects/Installation/Fevicol_tank.png' },
  { id: 'inst6', title: 'Frames', category: 'Installation', src: '/projects/Installation/Frames.png' },
  { id: 'inst7', title: 'Frozenman', category: 'Installation', src: '/projects/Installation/Frozenman.jpg' },
  { id: 'inst8', title: 'Frozenmannight', category: 'Installation', src: '/projects/Installation/Frozenmannight.jpg' },
  { id: 'inst9', title: 'Roff_Annamorp', category: 'Installation', src: '/projects/Installation/Roff_Annamorp.png' },
  { id: 'inst10', title: 'Roff_wall', category: 'Installation', src: '/projects/Installation/Roff_wall.png' },
  { id: 'inst11', title: 'Screenshot_2026-03-08_at_3.24.51_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.24.51_PM.png' },
  { id: 'inst12', title: 'Screenshot_2026-03-08_at_3.26.45_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.26.45_PM.png' },
  { id: 'inst13', title: 'Screenshot_2026-03-08_at_3.35.35_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.35.35_PM.png' },
  { id: 'inst14', title: 'Screenshot_2026-03-08_at_3.41.56_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.41.56_PM.png' },
  { id: 'inst15', title: 'Screenshot_2026-03-08_at_3.42.49_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.42.49_PM.png' },
  { id: 'inst16', title: 'Screenshot_2026-03-08_at_3.44.03_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.44.03_PM.png' },
  { id: 'inst17', title: 'Screenshot_2026-03-08_at_3.44.21_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.44.21_PM.png' },
  { id: 'inst18', title: 'Screenshot_2026-03-08_at_3.48.52_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.48.52_PM.png' },
  { id: 'inst19', title: 'Screenshot_2026-03-08_at_3.49.11_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.49.11_PM.png' },
  { id: 'inst20', title: 'Screenshot_2026-03-08_at_3.50.37_PM', category: 'Installation', src: '/projects/Installation/Screenshot_2026-03-08_at_3.50.37_PM.png' },
  { id: 'inst21', title: 'Serria_display', category: 'Installation', src: '/projects/Installation/Serria_display.png' },
  { id: 'inst22', title: 'Serriea_airport', category: 'Installation', src: '/projects/Installation/Serriea_airport.png' },
  { id: 'inst23', title: 'Taniqsh_air', category: 'Installation', src: '/projects/Installation/Taniqsh_air.png' },
  { id: 'inst24', title: 'coforg_book', category: 'Installation', src: '/projects/Installation/coforg_book.png' },
  { id: 'inst25', title: 'lalbaugh_setup', category: 'Installation', src: '/projects/Installation/lalbaugh_setup.png' },
  { id: 'inst26', title: 'polycab_pot', category: 'Installation', src: '/projects/Installation/polycab_pot.png' },
  { id: 'inst27', title: 'swiggy_tea', category: 'Installation', src: '/projects/Installation/swiggy_tea.png' },

  // Story Boards
  { id: 'sb1', title: 'AC_TVC', category: 'Story Boards', src: '/projects/Story Boards/AC_TVC.png' },
  { id: 'sb2', title: 'CCL_Ad1', category: 'Story Boards', src: '/projects/Story Boards/CCL_Ad1.png' },
  { id: 'sb3', title: 'CCL_Ad2', category: 'Story Boards', src: '/projects/Story Boards/CCL_Ad2.png' },
  { id: 'sb4', title: 'Screenshot_2026-03-08_at_3.34.40_PM', category: 'Story Boards', src: '/projects/Story Boards/Screenshot_2026-03-08_at_3.34.40_PM.png' },

  // Print Ad
  { id: 'pr1', title: '1', category: 'Print Ad', src: '/projects/Print Ad/1.jpg' },
  { id: 'pr2', title: '10minute1', category: 'Print Ad', src: '/projects/Print Ad/10minute1.jpg' },
  { id: 'pr3', title: '10minute2', category: 'Print Ad', src: '/projects/Print Ad/10minute2.jpg' },
  { id: 'pr4', title: '10minute3', category: 'Print Ad', src: '/projects/Print Ad/10minute3.jpg' },
  { id: 'pr5', title: 'Fewi', category: 'Print Ad', src: '/projects/Print Ad/Fewi.png' },
  { id: 'pr6', title: 'Gf_Bf', category: 'Print Ad', src: '/projects/Print Ad/Gf_Bf.jpg' },
  { id: 'pr7', title: 'Newspaper_copy', category: 'Print Ad', src: '/projects/Print Ad/Newspaper_copy.jpg' },
  { id: 'pr8', title: 'Screenshot_2026-03-08_at_3.33.40_PM', category: 'Print Ad', src: '/projects/Print Ad/Screenshot_2026-03-08_at_3.33.40_PM.png' },
  { id: 'pr9', title: 'girl_fight02_2', category: 'Print Ad', src: '/projects/Print Ad/girl_fight02_2.jpg' },
  { id: 'pr10', title: 'pregnant_lady_011', category: 'Print Ad', src: '/projects/Print Ad/pregnant_lady_011.jpg' },
];

export interface VideoProject {
  id: string;
  title: string;
  src: string;
}

export const videos: VideoProject[] = [
  { id: 'v1', title: 'Anamorphic', src: '/projects/How would it look in real/Anamorphic.mp4' },
  { id: 'v2', title: 'Animated_Bulb_Filament_Glow_Video', src: '/projects/How would it look in real/Animated_Bulb_Filament_Glow_Video.mp4' },
  { id: 'v3', title: 'Car_Display_Animation', src: '/projects/How would it look in real/Car_Display_Animation.mp4' },
  { id: 'v4', title: 'Man_Jumping_On_Lit_Tiles_Video', src: '/projects/How would it look in real/Man_Jumping_On_Lit_Tiles_Video.mp4' },
  { id: 'v5', title: 'Tata_SIERRA_Crane', src: '/projects/How would it look in real/Tata_SIERRA_Crane.mp4' },
  { id: 'v6', title: 'Video_Generation_Moving_Canter', src: '/projects/How would it look in real/Video_Generation_Moving_Canter.mp4' },
  { id: 'v7', title: 'Video_Walk_Through_Generation_1_02', src: '/projects/How would it look in real/Video_Walk_Through_Generation_1_02.mp4' },
  { id: 'v8', title: 'mia_bee_cab', src: '/projects/How would it look in real/mia_bee_cab.mp4' },
  { id: 'v9', title: 'swiggyholi', src: '/projects/How would it look in real/swiggyholi.mp4' },
];
