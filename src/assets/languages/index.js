import dk from './dk.json';
import en from './en.json';
import de from './de.json';

export const dictionaryList = { en, dk, de };

export const languageOptions = {
  en: { country: 'En', flag: require('../icons/united-kingdom.png') },
  dk: { country: 'Dk', flag: require('../icons/denmark.png') },
  de: { country: 'De', flag: require('../icons/germany.png') },
};
