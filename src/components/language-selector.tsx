"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/components/providers";

export function LanguageSelector() {
  const { currentLang, changeLang, availableLanguages } = useTranslations();

  const languageFlags = {
    es: "🇪🇸",
    en: "🇬🇧",
    ru: "🇷🇺"
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/50 transition-all"
        >
          <span className="mr-2 text-xl">{languageFlags[currentLang as keyof typeof languageFlags]}</span>
          <span className="text-white">{availableLanguages.find(lang => lang.code === currentLang)?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 backdrop-blur-sm border border-red-500/20">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLang(lang.code as 'es' | 'en' | 'ru')}
            className="text-white hover:bg-red-500/20 cursor-pointer"
          >
            <span className="mr-2 text-xl">{languageFlags[lang.code as keyof typeof languageFlags]}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
