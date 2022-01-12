import { read } from './services/reader';
import { DictionaryEntry } from './models';
import { DICTIONARY_PATH } from './constants/paths';

export function getDictionary() : DictionaryEntry[] {
  const words = read(DICTIONARY_PATH);

  return words;
}

export default {
  getDictionary,
};
