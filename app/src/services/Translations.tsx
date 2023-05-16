import translations from "../translations.json";

export const getTranslation = (lang: string, key: string) => {
  const availableTranslations = translations as {
    [lang: string]: { [key: string]: string };
  };
  
  if (availableTranslations[lang][key]) {
    return availableTranslations[lang][key];
  }

  return availableTranslations["en"][key];
};
