"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              Trần Thịnh
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="tel:+84123456789"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Gọi ngay</span>
            </a>
            <a
              href="mailto:hello@tranthinh.com"
              className="flex items-center gap-2 px-4 py-2 border border-amber-300 text-amber-700 rounded-full hover:bg-amber-50 transition-all duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-amber-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors duration-200"
              >
                {t.nav.contact}
              </button>
              
              {/* Mobile Contact Actions */}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+84123456789"
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>Gọi ngay</span>
                </a>
                <a
                  href="mailto:hello@tranthinh.com"
                  className="flex items-center gap-2 px-4 py-3 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
