import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Copied from QuickStart tutorial, https://react.i18next.com/guides/quick-start
// However, this would give me a error, so i ended up using this:
// https://stackoverflow.com/questions/55183356/react-i18next-hooks-error-when-using-t-from-usetranslation

// the translations
// (tip move them in a JSON file and import them)
const translationResources = {
    en: {
        translation: {
            "AppHeaderTitle": "RSS News!",
            "AppHeaderLead": "Date: {{currDate}}, Week: {{currWeek}}",
            "Toggle": "Toggle",
            "ShowAll": "Show All",
            "HideAll": "Hide All",
            "Language": "Language",
            "English": "English",
            "Swedish": "Swedish",
        }
    },
    sv: {
        translation: {
            "AppHeaderTitle": "RSS Nyheter!",
            "AppHeaderLead": "Datum: {{currDate}}, Vecka: {{currWeek}}",
            "Toggle": "Växla",
            "ShowAll": "Visa Allt",
            "HideAll": "Göm Allt",
            "Language": "Språk",
            "English": "Engelska",
            "Swedish": "Svenska",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: translationResources,
        lng: "en",
        debug: true,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;