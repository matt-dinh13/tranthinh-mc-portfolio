"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isVietnamese: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('vi'); // Vietnamese as default
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL path for language
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/en')) {
        setLanguage('en');
      } else if (path.startsWith('/vi')) {
        setLanguage('vi');
      } else {
        // Default to Vietnamese if no language in URL
        setLanguage('vi');
      }
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    
    // Update URL without page reload
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const newPath = currentPath.startsWith('/vi') || currentPath.startsWith('/en') 
        ? currentPath.replace(/^\/(vi|en)/, `/${newLanguage}`)
        : `/${newLanguage}${currentPath}`;
      
      window.history.pushState({}, '', newPath);
    }
  };

  if (!mounted) {
    return <div>{children}</div>;
  }

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleLanguageChange, 
        isVietnamese: language === 'vi' 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
