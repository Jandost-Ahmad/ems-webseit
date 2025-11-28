import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}
