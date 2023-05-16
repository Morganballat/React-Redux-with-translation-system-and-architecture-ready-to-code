import translations from '../translations.json';

export const getTranslation = (lang: string) => {
  const availableTranslations = translations as { [key: string]: { [key: string]: string } };

  if (availableTranslations[lang]) {
    return availableTranslations[lang];
  }
  
  return translations['en'];
};
