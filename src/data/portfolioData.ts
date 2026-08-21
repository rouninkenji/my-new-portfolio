import { 
  FaTwitter, 
  FaGithub, 
  FaStackOverflow, 
  FaInstagram, 
  FaBriefcase 
} from 'react-icons/fa';

export interface Project {
  id: number;
  title: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}

export const navItems: string[] = ['Home', 'About', 'Projects', 'Articles', 'Contact'];

export const socialLinks = [
  { id: 'twitter', icon: FaTwitter, href: '#twitter' },
  { id: 'github', icon: FaGithub, href: '#github' },
  { id: 'stackoverflow', icon: FaStackOverflow, href: '#stackoverflow' },
  { id: 'instagram', icon: FaInstagram, href: '#instagram' },
  { id: 'portfolio', icon: FaBriefcase, href: '#portfolio' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    badge: 'JS',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-black font-bold',
    description: 'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui.',
  },
  {
    id: 2,
    title: 'Project 2',
    badge: '🐍',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-lg',
    description: 'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui.',
  },
  {
    id: 3,
    title: 'Project 3',
    badge: 'HTML5',
    badgeBg: 'bg-orange-500',
    badgeText: 'text-white text-xs font-extrabold',
    description: 'Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui.',
  },
];