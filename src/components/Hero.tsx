"use client";

import { useState, useEffect } from 'react';
import { ArrowDown, Star, Users, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export function Hero() {
  const { language, isVietnamese } = useLanguage();
  const t = translations[language];
  const [currentEventType, setCurrentEventType] = useState(0);

  const eventTypes = isVietnamese 
    ? ['Đám cưới', 'Sự kiện doanh nghiệp', 'Buổi hòa nhạc', 'Lễ hội văn hóa']
    : ['Weddings', 'Corporate Events', 'Concerts', 'Cultural Festivals'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventType((prev) => (prev + 1) % eventTypes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [eventTypes.length]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-amber-200/30 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border border-orange-200/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-200/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-sm border border-amber-200/50">
            <Star className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-800 font-medium text-sm">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
            <span className="block">{t.hero.title}</span>
            <span className="block font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </h1>

          {/* Dynamic Event Type */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-amber-700">
              {eventTypes[currentEventType]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium text-lg rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.hero.bookNow}
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-amber-300 text-amber-700 font-medium text-lg rounded-full hover:bg-amber-50 transition-all duration-300"
            >
              {t.hero.viewPortfolio}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm font-medium">{t.hero.stats.events}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-600 text-sm font-medium">{t.hero.stats.languages}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm font-medium">{t.hero.stats.years}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-amber-600 hover:text-amber-700 transition-colors duration-300"
        >
          <span className="text-xs mb-2 font-medium">
            {isVietnamese ? 'Cuộn xuống' : 'Scroll'}
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
