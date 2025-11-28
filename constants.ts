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
  greenRoof: "./public/image/Gemini_Generated_Image_xgoh8fxgoh8fxgoh.png", // Image 11 - Nature/Green
  teamPlaceholder: "./image/Gemini_Generated_Image_xgoh8fxgoh8fxgoh.png",
  
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
  { name: "Dr. Elena Weber", role: "CEO & Founder", image: "./image/Aras.jpg", quote: "Redefining the pause." },
  { name: "Marco Rossi", role: "Head of Architecture", image: "./image/Alla.jpeg", quote: "Form follows nature." },
  { name: "Sarah Jenkins", role: "Sustainability Lead", image: "./image/Felix.jpg", quote: "Zero waste, infinite potential." },
  { name: "Kenji Sato", role: "Tech Innovation", image: "./image/Tim.png", quote: "AI is our infrastructure." },
  { name: "Amara Okani", role: "Customer Experience", image: "./image/Deny.jpg", quote: "Hospitality meets future." },
  { name: "David Müller", role: "Logistics Director", image: "./image/Maik.jpg", quote: "Efficiency in motion." },
  { name: "Lina Schmidt", role: "Green Energy Engineer", image: "./image/Jandost.jpg", quote: "Powering the journey." },
];
