"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Users, Globe, Calendar, Heart } from 'lucide-react';

export function About() {
  const { language, isVietnamese } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: t.about.stats.eventsHosted,
      color: "text-amber-600"
    },
    {
      icon: Globe,
      value: "2",
      label: t.about.stats.languages,
      color: "text-orange-600"
    },
    {
      icon: Calendar,
      value: "10+",
      label: t.about.stats.yearsExperience,
      color: "text-red-600"
    },
    {
      icon: Heart,
      value: "100%",
      label: t.about.stats.clientSatisfaction,
      color: "text-pink-600"
    }
  ];

  const specializations = [
    {
      icon: "🌐",
      title: t.about.specializations.bilingual.title,
      description: t.about.specializations.bilingual.description,
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🏮",
      title: t.about.specializations.cultural.title,
      description: t.about.specializations.cultural.description,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "💝",
      title: t.about.specializations.personal.title,
      description: t.about.specializations.personal.description,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title} <span className="gradient-warm">{t.about.subtitle}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description2}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.description3}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t.about.specializations.title}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{spec.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {spec.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {spec.description}
              </p>
              <div className={`w-full h-1 bg-gradient-to-r ${spec.color} rounded-full mt-6`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
