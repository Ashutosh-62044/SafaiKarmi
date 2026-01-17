
import React from 'react';
import { 
  WashingMachine, 
  Droplets, 
  Hammer, 
  Paintbrush, 
  HardHat, 
  Zap,
  CheckCircle,
  Clock,
  ShieldCheck,
  Star,
  Wind,
  Trash2,
  Wrench,
  ShowerHead,
  Sparkles,
  Lightbulb
} from 'lucide-react';
import { Service, ServiceCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'deep-cleaning',
    name: 'Full Home Deep Cleaning',
    description: 'Scrubbing every corner, kitchen degreasing, and bathroom sanitization.',
    price: 'Starting from 1200/-',
    category: ServiceCategory.CLEANING,
    icon: 'WashingMachine',
    rating: 4.9,
    reviews: 1240,
    estimatedTime: '4-6 hours',
    isPopular: true
  },
  {
    id: 'sofa-cleaning',
    name: 'Sofa & Carpet Shampoo',
    description: 'Deep extraction cleaning for fabric and leather upholstery.',
    price: 'Starting from 499/-',
    category: ServiceCategory.CLEANING,
    icon: 'Wind',
    rating: 4.7,
    reviews: 850,
    estimatedTime: '2 hours'
  },
  {
    id: 'toilet-cleaning',
    name: 'Toilet-Cleaning',
    description: 'Deep sanitization and stain removal for toilets, tiles, and fixtures to ensure a fresh and hygienic washroom.',
    price: 'Starting from 399/-',
    category: ServiceCategory.CLEANING,
    icon: 'Sparkles',
    rating: 4.7,
    reviews: 850,
    estimatedTime: '2 hours'
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning ',
    description: 'Thorough cleaning and disinfection of floors, walls, fittings, and surfaces for a sparkling and germ-free bathroom .',
    price: 'Starting from 499/-',
    category: ServiceCategory.CLEANING,
    icon: 'ShowerHead',
    rating: 4.7,
    reviews: 850,
    estimatedTime: '1 hours'
  },
  {
    id: 'leakage-repair',
    name: 'Leakage & Pipe Repair',
    description: 'Fixing leaky faucets, pipes, and clogged drains with professional tools.',
    price: 'Starting from 499/-',
    category: ServiceCategory.PLUMBING,
    icon: 'Droplets',
    rating: 4.8,
    reviews: 2100,
    estimatedTime: '1-2 hours',
    isPopular: true
  },
  {
    id: 'furniture-repair',
    name: 'Furniture Repair',
    description: 'Expert woodwork for chairs, tables, cabinets, and doors.',
    price: 'Starting from 299/-',
    category: ServiceCategory.CARPENTRY,
    icon: 'Hammer',
    rating: 4.6,
    reviews: 430,
    estimatedTime: '3 hours'
  },
  {
    id: 'wall-painting',
    name: 'Interior Wall Painting',
    description: 'Premium finish painting for living rooms, bedrooms, and offices.',
    price: 'Starting from 1999/-',
    category: ServiceCategory.PAINTING,
    icon: 'Paintbrush',
    rating: 4.9,
    reviews: 670,
    estimatedTime: '2-3 days'
  },
  {
    id: 'construction-labor',
    name: 'Construction Labor',
    description: 'Reliable labor for site preparation, excavation, and manual help.',
    price: 'Starting from 250/-',
    category: ServiceCategory.CONSTRUCTION,
    icon: 'HardHat',
    rating: 4.5,
    reviews: 320,
    estimatedTime: 'Flexible'
  },
  {
    id: 'fan-installation',
    name: 'Fan & Light Installation',
    description: 'Safe installation of ceiling fans, chandeliers, and wall lights.',
    price: 'Starting from 299',
    category: ServiceCategory.ELECTRICAL,
    icon: 'Zap',
    rating: 4.8,
    reviews: 1540,
    estimatedTime: '45 mins',
    isPopular: true
  },
  {
    id: 'ac-repair',
    name: 'AC Repair & Service',
    description: 'Gas charging, filter cleaning, and breakdown repair for all AC types.',
    price: 'Starting from 399',
    category: ServiceCategory.ELECTRICAL,
    icon: 'Wind',
    rating: 4.7,
    reviews: 980,
    estimatedTime: '1.5 hours'
  },
  {
    id: 'plumbing-install',
    name: 'Sanitary Installation',
    description: 'Installing toilets, sinks, showers, and water heater units.',
    price: 'Starting from 499/-',
    category: ServiceCategory.PLUMBING,
    icon: 'Wrench',
    rating: 4.6,
    reviews: 510,
    estimatedTime: '3 hours'
  }
];

export const FEATURES = [
  {
    title: 'Verified Experts',
    description: 'Every Safai Karmi is background-checked and professionally trained.',
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />
  },
  {
    title: 'On-Time Service',
    description: 'We respect your time. Our team arrives exactly when scheduled.',
    icon: <Clock className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Not happy with the work? We will redo it until you are satisfied.',
    icon: <CheckCircle className="w-6 h-6 text-green-600" />
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. Know exactly what you pay before we start.',
    icon: <Star className="w-6 h-6 text-blue-600" />
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'WashingMachine': return <WashingMachine className="w-8 h-8" />;
    case 'Droplets': return <Droplets className="w-8 h-8" />;
    case 'Hammer': return <Hammer className="w-8 h-8" />;
    case 'Paintbrush': return <Paintbrush className="w-8 h-8" />;
    case 'HardHat': return <HardHat className="w-8 h-8" />;
    case 'Zap': return <Zap className="w-8 h-8" />;
    case 'Wind': return <Wind className="w-8 h-8" />;
    case 'Wrench': return <Wrench className="w-8 h-8" />;
    case 'Lightbulb': return <Lightbulb className="w-8 h-8" />;
    case 'ShowerHead': return <ShowerHead className="w-8 h-8" />;
    case 'Sparkles': return <Sparkles className="w-8 h-8" />;
    case 'Trash2': return <Trash2 className="w-8 h-8" />;
    default: return <Hammer className="w-8 h-8" />;
  }
};
