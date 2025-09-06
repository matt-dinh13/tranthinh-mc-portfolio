import { Service, Testimonial, Event, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: "+84 123 456 789",
  email: "hello@tranthinh.com",
  location: "Huế, Việt Nam",
  social: {
    facebook: "https://facebook.com/tranthinh",
    instagram: "https://instagram.com/tranthinh",
    tiktok: "https://tiktok.com/@tranthinh"
  }
};

export const services: Service[] = [
  {
    id: "weddings",
    title: "MC Đám Cưới",
    titleEn: "Wedding MC",
    description: "Dịch vụ MC chuyên nghiệp cho lễ cưới và tiệc cưới với chuyên môn song ngữ",
    descriptionEn: "Professional wedding ceremonies and receptions with bilingual expertise",
    icon: "💒",
    features: ["Điều phối lễ cưới", "Dẫn chương trình tiệc cưới", "Thông báo song ngữ", "Quản lý thời gian"],
    featuresEn: ["Ceremony coordination", "Reception hosting", "Bilingual announcements", "Timeline management"]
  },
  {
    id: "corporate",
    title: "Sự Kiện Doanh Nghiệp",
    titleEn: "Corporate Events",
    description: "Hội nghị kinh doanh, gala và các lễ kỷ niệm chuyên nghiệp",
    descriptionEn: "Business conferences, galas, and professional celebrations",
    icon: "🏢",
    features: ["Dẫn chương trình hội nghị", "Trao giải thưởng", "Tạo kết nối", "Thông báo chuyên nghiệp"],
    featuresEn: ["Conference hosting", "Award presentations", "Networking facilitation", "Professional announcements"]
  },
  {
    id: "concerts",
    title: "Show Trực Tiếp",
    titleEn: "Live Shows",
    description: "MC năng động cho buổi hòa nhạc, lễ hội và sự kiện giải trí",
    descriptionEn: "Dynamic MC for concerts, festivals, and entertainment events",
    icon: "🎤",
    features: ["Giới thiệu nghệ sĩ", "Tương tác khán giả", "Quản lý luồng sự kiện", "Điều phối kỹ thuật"],
    featuresEn: ["Artist introductions", "Crowd engagement", "Event flow management", "Technical coordination"]
  },
  {
    id: "cultural",
    title: "Sự Kiện Văn Hóa",
    titleEn: "Cultural Events",
    description: "Lễ kỷ niệm truyền thống, lễ hội và các sự kiện di sản",
    descriptionEn: "Traditional ceremonies, festivals, and heritage celebrations",
    icon: "🏮",
    features: ["Nhạy cảm văn hóa", "Hiểu biết truyền thống", "Sự kiện cộng đồng", "Bảo tồn di sản"],
    featuresEn: ["Cultural sensitivity", "Traditional knowledge", "Community events", "Heritage preservation"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah-michael",
    name: "Sarah & Michael Johnson",
    nameVi: "Sarah & Michael Johnson",
    event: "Wedding at Imperial City",
    eventVi: "Đám cưới tại Cố đô Huế",
    quote: "Tran Thinh made our wedding absolutely perfect! His bilingual skills were incredible - he seamlessly switched between Vietnamese and English throughout the ceremony.",
    quoteVi: "Trần Thịnh đã làm cho đám cưới của chúng tôi hoàn hảo tuyệt đối! Kỹ năng song ngữ của anh ấy thật đáng kinh ngạc - anh ấy chuyển đổi liền mạch giữa tiếng Việt và tiếng Anh trong suốt buổi lễ.",
    rating: 5,
    date: "December 2024",
    dateVi: "Tháng 12, 2024"
  },
  {
    id: "nguyen-family",
    name: "Nguyen Family",
    nameVi: "Gia đình Nguyễn",
    event: "50th Anniversary Celebration",
    eventVi: "Lễ kỷ niệm 50 năm ngày cưới",
    quote: "We hired Tran Thinh for our parents' 50th anniversary and he exceeded all expectations. He understood our cultural traditions perfectly.",
    quoteVi: "Chúng tôi thuê Trần Thịnh cho lễ kỷ niệm 50 năm ngày cưới của bố mẹ và anh ấy đã vượt quá mọi mong đợi. Anh ấy hiểu rõ truyền thống văn hóa của chúng tôi.",
    rating: 5,
    date: "November 2024",
    dateVi: "Tháng 11, 2024"
  },
  {
    id: "hue-festival",
    name: "Hue Music Festival",
    nameVi: "Lễ hội Âm nhạc Huế",
    event: "Concert Series",
    eventVi: "Chuỗi buổi hòa nhạc",
    quote: "Tran Thinh was the perfect MC for our music festival. He kept the crowd energized and handled technical issues with grace.",
    quoteVi: "Trần Thịnh là MC hoàn hảo cho lễ hội âm nhạc của chúng tôi. Anh ấy giữ cho khán giả luôn sôi động và xử lý các vấn đề kỹ thuật một cách duyên dáng.",
    rating: 5,
    date: "October 2024",
    dateVi: "Tháng 10, 2024"
  }
];

export const events: Event[] = [
  {
    id: "imperial-wedding",
    title: "Đám Cưới Cố Đô",
    titleEn: "Imperial City Wedding",
    type: "Đám cưới",
    typeEn: "Wedding",
    date: "2024-12-15",
    location: "Cố đô Huế, Huế",
    locationEn: "Imperial City, Hue",
    description: "Lễ cưới kỳ diệu tại Cố đô Huế lịch sử với 200 khách mời",
    descriptionEn: "A magical wedding ceremony in the historic Imperial City with 200 guests",
    image: "/api/placeholder/400/300"
  },
  {
    id: "music-festival",
    title: "Lễ Hội Âm Nhạc Huế",
    titleEn: "Hue Music Festival",
    type: "Buổi hòa nhạc",
    typeEn: "Concert",
    date: "2024-11-20",
    location: "Trung tâm Thành phố Huế",
    locationEn: "Hue City Center",
    description: "Dẫn chương trình lễ hội âm nhạc hàng năm với các nghệ sĩ quốc tế và địa phương",
    descriptionEn: "Hosting the annual music festival with international and local artists",
    image: "/api/placeholder/400/300"
  },
  {
    id: "corporate-gala",
    title: "Gala Thường Niên TechCorp",
    titleEn: "TechCorp Annual Gala",
    type: "Doanh nghiệp",
    typeEn: "Corporate",
    date: "2024-10-10",
    location: "Trung tâm Hội nghị Huế",
    locationEn: "Hue Convention Center",
    description: "Lễ trao giải và tiệc gala cho hơn 500 giám đốc điều hành doanh nghiệp",
    descriptionEn: "Award ceremony and gala dinner for 500+ corporate executives",
    image: "/api/placeholder/400/300"
  }
];
