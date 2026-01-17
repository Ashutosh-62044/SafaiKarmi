
export enum ServiceCategory {
  ALL = 'All',
  CLEANING = 'Cleaning',
  PLUMBING = 'Plumbing',
  CARPENTRY = 'Carpentry',
  PAINTING = 'Painting',
  CONSTRUCTION = 'Construction Labor',
  ELECTRICAL = 'Electrical'
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: ServiceCategory;
  icon: string;
  rating: number;
  reviews: number;
  estimatedTime: string;
  isPopular?: boolean;
}

export interface BookingData {
  serviceId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  notes?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
