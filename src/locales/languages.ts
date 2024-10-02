import { StorageKeys, getStorageString, setStorageString } from "@/common/localStorage";

export interface Language {
  name: string,
  emoji: string,
  contributors: string[],
}

// name: Display name
// emoji: Some unicode flag emoji, idk
// contributors: array of names

export const languages = {
  "en-gb": {
    name: "English",
    emoji: "🇬🇧",
    contributors: ["https://github.com/SupertigerDev"]
  },
  "af-za": {
    name: "Afrikaans",
    emoji: "🇿🇦",
    contributors: ["https://github.com/mooocksadev"]
  },
  "be-by": {
    name: "Belarusian",
    emoji: "🇧🇾",
    contributors: ["https://github.com/1enify"]
  },
  "pt-br": {
    name: "Brazilian Portuguese",
    emoji: "🇧🇷",
    contributors: ["https://github.com/Jerkycat", "https://gitlab.com/Gersonzao"]
  },
  "zn-hant": {
    name: "Chinese (Traditional)",
    emoji: "🇹🇼",
    contributors: ["Dsiahrz"]
  },
  "nl-nl": {
    name: "Dutch",
    emoji: "🇳🇱",
    contributors: ["https://github.com/captainqdev"]
  },
  "fr-FR": {
    name: "French",
    emoji: "🇫🇷",
    contributors: ["https://github.com/guiguitator"]
  },
  "de-de": {
    name: "German",
    emoji: "🇩🇪",
    contributors: ["https://github.com/F-iiral", "https://github.com/Deutscher775"]
  },
  "hu-hu": {
    name: "Hungarian",
    emoji: "🇭🇺",
    contributors: ["https://github.com/andrasdaradici"]
  },
  "fil-ph": {
    name: "Filipino",
    emoji: "🇵🇭",
    contributors: ["https://github.com/serenemm"]
  },
  "pl-pl": {
    name: "Polish",
    emoji: "🇵🇱",
    contributors: ["https://github.com/Ciach0", "https://github.com/CyberL1"]
  },
  "ro-ro": {
    name: "Romanian",
    emoji: "🇷🇴",
    contributors: ["GNU/Alex"]
  },
  "ru-ru": {
    name: "Russian",
    emoji: "🇷🇺",
    contributors: ["https://github.com/FAYSi223"]
  },
  "es-es": {
    name: "Spanish",
    emoji: "🇪🇸",
    contributors: ["Linterna001"]
  },
  "tr-tr": {
    name: "Turkish",
    emoji: "🇹🇷",
    contributors: ["https://github.com/slideglide"]
  },
  "ja-ja": {
    name: "Japanese",
    emoji: "🇯🇵",
    contributors: ["https://github.com/spookehneko"]
  }
};

export function getCurrentLanguage() {
  return getStorageString(StorageKeys.APP_LANGUAGE, null)?.replace("-", "_");
}
export function setCurrentLanguage(key: string) {
  return setStorageString(StorageKeys.APP_LANGUAGE, key);
}

export function getLanguage(key: string) {
  if (!(languages as any)[key.replace("_", "-")]) return undefined;
  return import(`./list/${key.replace("_", "-")}.json`);
}
