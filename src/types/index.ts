export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
  rating: number;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}
