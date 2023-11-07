'use client';

import useLocalStorage from "@/utils/hooks/useLocalStorage";
import React, { createContext, useContext, useEffect, useState } from "react";

type LanguageContextProvider = {
  children: React.ReactNode
}

export type Language = 'pt' | 'en';

type LanguageContext = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContext | null>(null);

export default function LanguageContextProvider({ children }: LanguageContextProvider) {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a useLanguageProvider');
  }

  return context;
}