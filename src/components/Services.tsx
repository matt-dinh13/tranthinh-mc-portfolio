"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { services } from '@/lib/data';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Services() {
  const { language, isVietnamese } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {isVietnamese ? service.title : service.titleEn}
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {isVietnamese ? service.description : service.descriptionEn}
              </p>
              
              <div className="space-y-3">
                {(isVietnamese ? service.features : service.featuresEn).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-amber-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t.services.cta.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.services.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium text-lg rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              {t.services.cta.getQuote}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-amber-300 text-amber-700 font-medium text-lg rounded-full hover:bg-amber-50 transition-all duration-300 flex items-center gap-2"
            >
              {t.services.cta.viewWork}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
