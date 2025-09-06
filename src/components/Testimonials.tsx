"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const { language, isVietnamese } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isVietnamese ? 'Đánh giá từ khách hàng' : 'Client Testimonials'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isVietnamese 
              ? 'Những lời khen ngợi từ các cặp đôi và gia đình đã tin tưởng tôi'
              : 'Praise from couples and families who have trusted me'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100 mb-16 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-amber-200" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{isVietnamese 
                  ? testimonials[currentTestimonial].quoteVi 
                  : testimonials[currentTestimonial].quote
                }"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {(isVietnamese 
                    ? testimonials[currentTestimonial].nameVi 
                    : testimonials[currentTestimonial].name
                  ).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {isVietnamese 
                      ? testimonials[currentTestimonial].nameVi 
                      : testimonials[currentTestimonial].name
                    }
                  </div>
                  <div className="text-amber-600 font-medium">
                    {isVietnamese 
                      ? testimonials[currentTestimonial].eventVi 
                      : testimonials[currentTestimonial].event
                    }
                  </div>
                  <div className="text-sm text-gray-500">
                    {isVietnamese 
                      ? testimonials[currentTestimonial].dateVi 
                      : testimonials[currentTestimonial].date
                    }
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-amber-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5 text-amber-600" />
              </button>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                "{isVietnamese ? testimonial.quoteVi : testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  {(isVietnamese ? testimonial.nameVi : testimonial.name).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {isVietnamese ? testimonial.nameVi : testimonial.name}
                  </div>
                  <div className="text-amber-600 font-medium text-sm">
                    {isVietnamese ? testimonial.eventVi : testimonial.event}
                  </div>
                  <div className="text-xs text-gray-500">
                    {isVietnamese ? testimonial.dateVi : testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
