import { useState, useEffect } from 'react';
import { es } from '@/i18n/es';
import { en } from '@/i18n/en';
import { ru } from '@/i18n/ru';
import { TranslationType } from '@/types/translations';

type Language = 'es' | 'en' | 'ru';

const translations: Record<Language, TranslationType> = {
  es,
  en,
  ru,
};

export const useTranslations = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-lang') as Language;
      return savedLang || 'es';
    }
    return 'es';
  });
  const [t, setT] = useState(translations[currentLang]);

  useEffect(() => {
    // Actualizar las traducciones cuando cambie el idioma
    setT(translations[currentLang]);
  }, [currentLang]);

  const changeLang = (lang: Language) => {
    setCurrentLang(lang);
    // Guardar la preferencia de idioma en localStorage
    localStorage.setItem('preferred-lang', lang);
  };

  return {
    t,
    currentLang,
    changeLang,
    availableLanguages: [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' }
    ] as const
  };
};
