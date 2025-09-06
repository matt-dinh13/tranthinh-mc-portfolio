export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    bookNow: string;
    viewPortfolio: string;
    stats: {
      events: string;
      languages: string;
      years: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    stats: {
      eventsHosted: string;
      languages: string;
      yearsExperience: string;
      clientSatisfaction: string;
    };
    specializations: {
      title: string;
      bilingual: {
        title: string;
        description: string;
      };
      cultural: {
        title: string;
        description: string;
      };
      personal: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      title: string;
      description: string;
      getQuote: string;
      viewWork: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    getInTouch: string;
    form: {
      name: string;
      email: string;
      phone: string;
      eventType: string;
      eventDate: string;
      guestCount: string;
      message: string;
      sendMessage: string;
      eventTypes: {
        wedding: string;
        corporate: string;
        concert: string;
        cultural: string;
        other: string;
      };
    };
    methods: {
      call: string;
      email: string;
      location: string;
      follow: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const translations: Record<string, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      services: "Dịch vụ",
      portfolio: "Portfolio",
      testimonials: "Đánh giá",
      contact: "Liên hệ"
    },
    hero: {
      badge: "Người dẫn chương trình chuyên nghiệp",
      title: "Trần Thịnh",
      subtitle: "Cho đám cưới, sự kiện doanh nghiệp & nhiều hơn nữa",
      description: "MC song ngữ chuyên tạo ra những khoảnh khắc khó quên cho đám cưới, sự kiện doanh nghiệp và lễ hội văn hóa trên khắp Việt Nam.",
      bookNow: "Đặt ngay",
      viewPortfolio: "Xem Portfolio",
      stats: {
        events: "Sự kiện",
        languages: "Ngôn ngữ",
        years: "Năm kinh nghiệm"
      }
    },
    about: {
      title: "Gặp gỡ",
      subtitle: "Trần Thịnh",
      description1: "Với hơn một thập kỷ kinh nghiệm làm Người dẫn chương trình, tôi chuyên tạo ra những khoảnh khắc khó quên cho đám cưới, sự kiện doanh nghiệp và lễ hội văn hóa trên khắp Việt Nam.",
      description2: "Sinh ra và lớn lên tại Huế, tôi hiểu rõ di sản văn hóa phong phú của Việt Nam đồng thời thông thạo cả tiếng Việt và tiếng Anh. Sự kết hợp độc đáo này cho phép tôi phục vụ các cặp đôi quốc tế, khách hàng doanh nghiệp và gia đình địa phương với chuyên môn ngang nhau.",
      description3: "Phương pháp của tôi là cá nhân, chuyên nghiệp và đam mê. Tôi tin rằng mỗi sự kiện đều kể một câu chuyện, và vai trò của tôi là đảm bảo câu chuyện đó được mở ra một cách đẹp đẽ, tạo ra những kỷ niệm tồn tại suốt đời.",
      stats: {
        eventsHosted: "Sự kiện đã tổ chức",
        languages: "Ngôn ngữ",
        yearsExperience: "Năm kinh nghiệm",
        clientSatisfaction: "Hài lòng khách hàng"
      },
      specializations: {
        title: "Điều gì làm tôi đặc biệt",
        bilingual: {
          title: "Thành thạo song ngữ",
          description: "Chuyển đổi liền mạch giữa tiếng Việt và tiếng Anh để đảm bảo mọi khách mời đều cảm thấy được bao gồm và hiểu rõ."
        },
        cultural: {
          title: "Nhạy cảm văn hóa",
          description: "Hiểu biết sâu sắc về truyền thống Việt Nam và phong tục quốc tế cho những lễ kỷ niệm chân thực."
        },
        personal: {
          title: "Cá nhân hóa",
          description: "Mỗi sự kiện đều độc đáo. Tôi dành thời gian để hiểu tầm nhìn của bạn và biến nó thành hiện thực với niềm đam mê và sự chính xác."
        }
      }
    },
    services: {
      title: "Dịch vụ của tôi",
      subtitle: "Dịch vụ",
      description: "Từ đám cưới thân mật đến sự kiện doanh nghiệp lớn, tôi cung cấp dịch vụ MC chuyên nghiệp làm cho mọi dịp trở nên thực sự đặc biệt.",
      cta: {
        title: "Sẵn sàng tạo nên sự kiện khó quên?",
        description: "Hãy thảo luận về sự kiện của bạn và cách tôi có thể giúp tạo ra những khoảnh khắc kỳ diệu mà bạn và khách mời sẽ trân trọng mãi mãi.",
        getQuote: "Nhận báo giá",
        viewWork: "Xem công việc của tôi"
      }
    },
    contact: {
      title: "Hãy kết nối",
      subtitle: "Kết nối",
      description: "Sẵn sàng tạo nên sự kiện khó quên? Hãy liên hệ và thảo luận cách tôi có thể giúp tạo ra những khoảnh khắc kỳ diệu.",
      getInTouch: "Liên hệ với tôi",
      form: {
        name: "Họ và tên *",
        email: "Email *",
        phone: "Số điện thoại",
        eventType: "Loại sự kiện",
        eventDate: "Ngày sự kiện",
        guestCount: "Số lượng khách mời dự kiến",
        message: "Tin nhắn *",
        sendMessage: "Gửi tin nhắn",
        eventTypes: {
          wedding: "Đám cưới",
          corporate: "Sự kiện doanh nghiệp",
          concert: "Buổi hòa nhạc/Show trực tiếp",
          cultural: "Sự kiện văn hóa",
          other: "Khác"
        }
      },
      methods: {
        call: "Gọi điện",
        email: "Email",
        location: "Địa điểm",
        follow: "Theo dõi tôi"
      }
    },
    footer: {
      tagline: "Tạo ra những khoảnh khắc khó quên cho sự kiện đặc biệt của bạn",
      rights: "© 2024 Trần Thịnh. Tất cả quyền được bảo lưu."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    hero: {
      badge: "Master of Ceremonies",
      title: "Tran Thinh",
      subtitle: "For Weddings, Corporate Events & More",
      description: "Bilingual MC specializing in creating unforgettable moments for weddings, corporate events, and cultural celebrations across Vietnam.",
      bookNow: "Book Now",
      viewPortfolio: "View Portfolio",
      stats: {
        events: "Events",
        languages: "Languages",
        years: "Years"
      }
    },
    about: {
      title: "Meet",
      subtitle: "Tran Thinh",
      description1: "With over a decade of experience as a Master of Ceremonies, I specialize in creating unforgettable moments for weddings, corporate events, and cultural celebrations across Vietnam.",
      description2: "Born and raised in Hue, I understand the rich cultural heritage of Vietnam while being fluent in both Vietnamese and English. This unique combination allows me to serve international couples, corporate clients, and local families with equal expertise.",
      description3: "My approach is personal, professional, and passionate. I believe every event tells a story, and my role is to ensure that story unfolds beautifully, creating memories that last a lifetime.",
      stats: {
        eventsHosted: "Events Hosted",
        languages: "Languages",
        yearsExperience: "Years Experience",
        clientSatisfaction: "Client Satisfaction"
      },
      specializations: {
        title: "What Makes Me Special",
        bilingual: {
          title: "Bilingual Excellence",
          description: "Seamlessly switching between Vietnamese and English to ensure every guest feels included and understood."
        },
        cultural: {
          title: "Cultural Sensitivity",
          description: "Deep understanding of Vietnamese traditions and international customs for authentic celebrations."
        },
        personal: {
          title: "Personal Touch",
          description: "Every event is unique. I take time to understand your vision and bring it to life with passion and precision."
        }
      }
    },
    services: {
      title: "My Services",
      subtitle: "Services",
      description: "From intimate weddings to grand corporate events, I provide professional MC services that make every occasion truly special.",
      cta: {
        title: "Ready to Make Your Event Unforgettable?",
        description: "Let's discuss your event and how I can help create magical moments that you and your guests will cherish forever.",
        getQuote: "Get a Quote",
        viewWork: "View My Work"
      }
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Connect",
      description: "Ready to make your event unforgettable? Get in touch and let's discuss how I can help create magical moments.",
      getInTouch: "Get In Touch",
      form: {
        name: "Full Name *",
        email: "Email *",
        phone: "Phone Number",
        eventType: "Event Type",
        eventDate: "Event Date",
        guestCount: "Approximate Guest Count",
        message: "Message *",
        sendMessage: "Send Message",
        eventTypes: {
          wedding: "Wedding",
          corporate: "Corporate Event",
          concert: "Concert/Live Show",
          cultural: "Cultural Event",
          other: "Other"
        }
      },
      methods: {
        call: "Call Me",
        email: "Email Me",
        location: "Location",
        follow: "Follow Me"
      }
    },
    footer: {
      tagline: "Creating unforgettable moments for your special events",
      rights: "© 2024 Tran Thinh. All rights reserved."
    }
  }
};
