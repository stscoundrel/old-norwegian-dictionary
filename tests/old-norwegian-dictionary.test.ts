import { getDictionary } from '../src';

describe('Old Norwegian Dictionary test suite', () => {
  test('Dictionary contains correct amount of word definitions', () => {
    const result = getDictionary();

    expect(result.length).toBe(42021);
  });

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary();

    result.forEach((entry) => {
      // Only expected keys.
      expect(Object.keys(entry)).toEqual(['word', 'definition', 'partOfSpeech']);

      // Fields are non-empty strings.
      expect(entry.word.length > 0).toBeTruthy();
      expect(entry.partOfSpeech.length > 0).toBeTruthy();
      expect(entry.definition.length > 0).toBeTruthy();
    });
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    // Random samples from dictionary.
    expect(result[0].word).toBe('-æri');
    expect(result[0].partOfSpeech).toBe('uten ordklasse');
    expect(result[0].definition).toBe('-æri (af ár dvs. Aar) i hallæri.');

    expect(result[10000].word).toBe('fri');
    expect(result[10000].partOfSpeech).toBe('m');
    expect(result[10000].definition).toBe('fri, m. = friðill. Hým. 9.');

    expect(result[25000].word).toBe('náðuliga');
    expect(result[25000].partOfSpeech).toBe('adv');
    expect(result[25000].definition).toBe('náðuliga, adv.  1)  i Stilhed, ubemærket; hann bauð at hafa Hánef þar á launþar til, er skip kemr n. at, svá athonum mætti útan koma Vem. 591; B.biskup biðr nú því öruggari til guðsaf öllu hjarta, sem hann má þat náð-uligar ok leyniligar gera fyrir mönn-um Mar. 116911 fg; biðjandi því meðmeira athuga, sem hann mátti leyni-ligar ok auðveldligar (&vl náðuligar)Mar. 83710. 34.  2)  naadigen; biðjom vér,at þér takir þessum várum erendumbetr ok náðuligar, en vér erum verðirDN. VII, 19013.');

    expect(result[42000].word).toBe('þyrnir');
    expect(result[42000].partOfSpeech).toBe('m');
    expect(result[42000].definition).toBe('þyrnir, m. Tjørn, Tornebusk. Stj. 39611;Hom. 10218; Post. 75034; Klm. 54615;Mar. 3378. 10351.');
  });
});
