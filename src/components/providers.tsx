"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TranslationType } from '@/types/translations';
import { es } from '@/i18n/es';
import { en } from '@/i18n/en';
import { ru } from '@/i18n/ru';

type Language = 'es' | 'en' | 'ru';

type TranslationsContextType = {
  t: TranslationType;
  currentLang: Language;
  changeLang: (lang: Language) => void;
  availableLanguages: { code: Language; name: string; }[];
};

const translations = {
  es,
  en,
  ru,
};

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [t, setT] = useState<TranslationType>(translations[currentLang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-lang') as Language;
      if (savedLang) {
        setCurrentLang(savedLang);
        setT(translations[savedLang]);
      }
    }
  }, []);

  useEffect(() => {
    setT(translations[currentLang]);
  }, [currentLang]);

  const changeLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const value = {
    t,
    currentLang,
    changeLang,
    availableLanguages: [
      { code: 'es' as Language, name: 'Español' },
      { code: 'en' as Language, name: 'English' },
      { code: 'ru' as Language, name: 'Русский' }
    ]
  };

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
}
