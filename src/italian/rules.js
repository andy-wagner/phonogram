/* eslint quote-props: 0 */
/**
 * Phonogram Italian rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of Italian words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

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

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    [null, 'ʒ']
  ]
});
