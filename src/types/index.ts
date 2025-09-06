export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  features: string[];
  featuresEn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  nameVi: string;
  event: string;
  eventVi: string;
  quote: string;
  quoteVi: string;
  rating: number;
  date: string;
  dateVi: string;
}

export interface Event {
  id: string;
  title: string;
  titleEn: string;
  type: string;
  typeEn: string;
  date: string;
  location: string;
  locationEn: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}
