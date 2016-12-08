/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
 */
import {compileRules, INITIAL} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'a';
export const E = 'e';
export const I = 'i';
export const O = 'o';
export const U = 'u';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;
export const WALL = `(?:[^${VOWELS}][^${E}]|[^${VOWELS}]{2}|[^${VOWELS}]?$)`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Before "ll", "a" is pronounced *ɔ*
    [/a(?=ll)/, 'ɔ'],

    // Before "ai" & "ay" is pronounced *ɛj*
    [/a[iy]/, 'ɛj'],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [`a(?=[lt][${VOWELS}])`, 'ɛj'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // Before some vowels, "c" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    [null, 'k']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "er" is pronounced *ə*
    [/er$/, 'ʌr'],
    [/ers$/, 'ʌz'],

    // Final "ern" is prounounced *ə*
    [/ern$/, 'ʌn'],
    [/erns$/, 'ʌnz'],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 'z'],

    // "ee" is pronounced *i*
    ['ee', 'i'],

    // "ei" is pronounced *i*
    ['ei', 'i'],

    // Before a final "t", "e" is prounounced *ɛ*
    [/e(?=ts?$)/, 'ɛ'],

    // Before "tr", "e" is pronounced *e*
    [/e(?=tr)/, 'e'],

    // Else, "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Final "ire" is pronounced *ajə*
    [/ire$/, 'ajʌr'],
    [/ires$/, 'ajʌz'],

    // Before a wall, "i" is pronounced *i*
    [`i(?=${WALL})`, 'i'],

    // Else, "i" is pronounced *aj*
    [null, 'aj']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'dj',

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l'],

    [null, 'l']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // "oa" is pronounced *o*
    ['oa', 'o'],

    // "oo" is pronounced *u*
    ['oo', 'u'],

    // "oy" is pronounced *ɔj*
    ['oy', 'ɔj'],

    // Before a wall, "o" is pronounced *ɔ*
    [`o(?=${WALL})`, 'ɔ'],

    // Else, "o" is pronounced *oʊ*
    [null, 'o']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f'],

    [null, 'p']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // "qu" is pronounced *k*
    ['qu', 'k'],

    [null, 'k']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // "stle" is pronounced "søl"
    ['stle', 'sʌl'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // "between" two vowels, "s" is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${VOWELS}]$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // "tion" is pronounced *ʃʌn*
    ['tion', 'ʃʌn'],

    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Leading "u" is pronounced *ju*
    ['u', 'ju', INITIAL],

    // "ue" is pronounced *ue*
    ['ue', 'u'],

    // Before "m" or "n", "u" is pronounced *ʌ*
    [/u(?=[mn])/, 'ʌ'],

    [null, 'u']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "wr" is pronounced *r*
    ['wr', 'r'],

    [null, 'w']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ]
});

// myths -> simplification
// ə -> er for harmonization
// drop ʊ for harmonization
// normalize diphtongs
// make some r disappear for normal version
