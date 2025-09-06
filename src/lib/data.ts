import { Service, Testimonial, Event, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: "+84 123 456 789",
  email: "hello@tranthinh.com",
  location: "Hue, Vietnam",
  social: {
    instagram: "https://instagram.com/tranthinh",
    facebook: "https://facebook.com/tranthinh",
    youtube: "https://youtube.com/tranthinh"
  }
};

export const services: Service[] = [
  {
    id: "weddings",
    title: "Wedding MC",
    description: "Professional wedding ceremonies and receptions with bilingual expertise",
    icon: "💒",
    features: ["Ceremony coordination", "Reception hosting", "Bilingual announcements", "Timeline management"]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Business conferences, galas, and professional celebrations",
    icon: "��",
    features: ["Conference hosting", "Award presentations", "Networking facilitation", "Professional announcements"]
  },
  {
    id: "concerts",
    title: "Live Shows",
    description: "Dynamic MC for concerts, festivals, and entertainment events",
    icon: "🎤",
    features: ["Artist introductions", "Crowd engagement", "Event flow management", "Technical coordination"]
  },
  {
    id: "cultural",
    title: "Cultural Events",
    description: "Traditional ceremonies, festivals, and heritage celebrations",
    icon: "🏮",
    features: ["Cultural sensitivity", "Traditional knowledge", "Community events", "Heritage preservation"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah-michael",
    name: "Sarah & Michael Johnson",
    event: "Wedding at Imperial City",
    quote: "Tran Thinh made our wedding absolutely perfect! His bilingual skills were incredible - he seamlessly switched between Vietnamese and English throughout the ceremony.",
    rating: 5,
    date: "December 2024"
  },
  {
    id: "nguyen-family",
    name: "Nguyen Family",
    event: "50th Anniversary Celebration",
    quote: "We hired Tran Thinh for our parents' 50th anniversary and he exceeded all expectations. He understood our cultural traditions perfectly.",
    rating: 5,
    date: "November 2024"
  },
  {
    id: "hue-festival",
    name: "Hue Music Festival",
    event: "Concert Series",
    quote: "Tran Thinh was the perfect MC for our music festival. He kept the crowd energized and handled technical issues with grace.",
    rating: 5,
    date: "October 2024"
  }
];

export const events: Event[] = [
  {
    id: "imperial-wedding",
    title: "Imperial City Wedding",
    type: "Wedding",
    date: "2024-12-15",
    location: "Imperial City, Hue",
    description: "A magical wedding ceremony in the historic Imperial City with 200 guests",
    image: "/api/placeholder/400/300"
  },
  {
    id: "music-festival",
    title: "Hue Music Festival",
    type: "Concert",
    date: "2024-11-20",
    location: "Hue City Center",
    description: "Hosting the annual music festival with international and local artists",
    image: "/api/placeholder/400/300"
  },
  {
    id: "corporate-gala",
    title: "TechCorp Annual Gala",
    type: "Corporate",
    date: "2024-10-10",
    location: "Hue Convention Center",
    description: "Award ceremony and gala dinner for 500+ corporate executives",
    image: "/api/placeholder/400/300"
  }
];
