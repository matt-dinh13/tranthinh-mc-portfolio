"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { events } from '@/lib/data';
import { Calendar, MapPin, ExternalLink, X } from 'lucide-react';

export function Portfolio() {
  const { language, isVietnamese } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isVietnamese 
      ? date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="portfolio" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isVietnamese ? 'Portfolio' : 'Portfolio'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isVietnamese 
              ? 'Khám phá những sự kiện đáng nhớ mà tôi đã dẫn chương trình'
              : 'Explore the memorable events I have hosted'
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-200/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {event.type === 'Đám cưới' || event.type === 'Wedding' ? '💒' :
                     event.type === 'Buổi hòa nhạc' || event.type === 'Concert' ? '🎤' :
                     event.type === 'Doanh nghiệp' || event.type === 'Corporate' ? '🏢' : '🏮'}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-amber-700">
                    {isVietnamese ? event.type : event.typeEn}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isVietnamese ? event.title : event.titleEn}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {isVietnamese ? event.description : event.descriptionEn}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{isVietnamese ? event.location : event.locationEn}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">
                    {isVietnamese ? 'Xem chi tiết' : 'View Details'}
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-amber-100 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  {isVietnamese ? selectedEvent.title : selectedEvent.titleEn}
                </h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 hover:bg-amber-50 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-orange-200/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">
                      {selectedEvent.type === 'Đám cưới' || selectedEvent.type === 'Wedding' ? '💒' :
                       selectedEvent.type === 'Buổi hòa nhạc' || selectedEvent.type === 'Concert' ? '🎤' :
                       selectedEvent.type === 'Doanh nghiệp' || selectedEvent.type === 'Corporate' ? '🏢' : '🏮'}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{isVietnamese ? selectedEvent.location : selectedEvent.locationEn}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {isVietnamese ? selectedEvent.description : selectedEvent.descriptionEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
