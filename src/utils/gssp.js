import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

export const GSSP = (translationKeys) => {
  return async context => {
    const locale = context.locale;
    const translations = await serverSideTranslations(locale, ['translations'], nextI18NextConfig);

    if (translationKeys && translations._nextI18Next) {
      // To filter and send only the required translations for each page
      translations._nextI18Next.initialI18nStore[locale]['translations'] = translationKeys.reduce(
        (acc, key) => {
          const allTranslations = translations._nextI18Next.initialI18nStore[locale]['translations'];
          if (allTranslations[key]) {
            acc[key] = allTranslations[key];
          }
          return acc;
        },
        {},
      );
    }

    return { props: {...translations} };
  };
};
