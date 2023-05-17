import enGBJson from "../translations/en-GB.json";
import enUSJson from "../translations/en-US.json";
import frJson from "../translations/fr.json";

export const getTranslation = (key: string) => {
  const lang: string = navigator.language;
  const enGB = enGBJson as { [key: string]: string };
  const enUS = enUSJson as { [key: string]: string };
  const fr = frJson as { [key: string]: string };

  switch (lang) {
    case "en-GB":
      return enGB[key];
    case "en-US":
      return enUS[key];
    case "fr":
      return fr[key];
    default:
      return enUS[key];
  }
};
