import { NavItem, TeamMember } from './types';


// Using high-quality Unsplash images to represent the visual assets described in the prompt
export const IMAGES = {
  heroAerial: "./image/Gemini_Generated_Image_no69fkno69fkno69.png", // Local DAINO aerial image
  heroAlt: "./image/inside_shot.png", // Image 9
  smartBins: "./image/Abfallmanagment.png", // Image 1 - Tech/Recycle
  solarCanopy: "./image/lkw_parkplat_mit_shlaffpuds.png", // Image 2 - Solar
  aiLogistics: "./image/Gemini_Generated_Image_983vyr983vyr983v (1).png", // Image 3 - Automation
  futureDome: "./image/speer_expirens.png", // Image 5 - VR/Dome vibe
  blueprint: "./image/Team.jpg", // Image 7 - Blueprint
  truckCharging: "./image/electric_lkw_laden.png", // Image 8 - Charging
  interiorMall: "./image/inside_shot.png", // Image 10 - Interior
  greenRoof: "./image/green.png", // Image 11 - Nature/Green
  teamPlaceholder: "./image/Gemini_Generated_Image_xgoh8fxgoh8fxgoh.png",
  plan: "./image/plan.png",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Business', path: '/business' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Aras Shikh-Mousa", role: "", image: "./image/Aras.jpg" },
  { name: "Alaa-Aldin Khadijeh", role: "", image: "./image/Alla.jpeg" },
  { name: "Felix Ritz-Valentin", role: "", image: "./image/Felix.jpg"},
  { name: "Tim Kreutzer", role: "", image: "./image/Tim.png"  },
  { name: "Deny Deprez", role: "", image: "./image/Deny.jpg" },
  { name: "Maik Girlinger", role: "", image: "./image/Maik.jpg" },
  { name: "Jandost Ahmad", role: "", image: "./image/Jandost.jpg" },
];
