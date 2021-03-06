/* eslint quote-props: 0 */
/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
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

// The wall is either:
//   1) a consonant followed by a non-e vowel
//   2) two consonants
//   3) the end of the word preceded by an optional vowel
export const WALL = `(?:[^${VOWELS}][^${E}]|[^${VOWELS}]{2}|[^${VOWELS}]?$)`;
export const SOFT_WALL = `(?:[^${VOWELS}]{2}|[^${VOWELS}]?$)`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (')
  //----------------------------------------------------------------------------
  '\'': '',

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Initial "any" is pronounced *ɛni*
    [/any/, 'ɛni', INITIAL],

    // Initial "a" is pronounced *a* before some consonants
    [/a(?=[rx])/, 'a', INITIAL],

    // Sometimes initial "a" is pronounced *ʌ*
    [/a(?=b(?![ds])|ll|ss|cqu)/, 'ʌ', INITIAL],

    // Before "ou", "a" is silent
    [/a(?=ou)/, ''],

    // Final "ard" is pronounced *ʌ*
    [/a(?=rds?$)/, 'ʌ', /[^h]$/],

    // "aisl" is pronounced *ajl*
    ['aisl', 'ajl'],

    // "answ" is pronounced *ans*
    ['answ', 'ans'],

    // "augh(a)n" is pronounced *ɔn*
    [/augha?n$/, 'ɔn'],

    // "awn" if pronounced *ɔn*
    [/awn/, 'ɔn'],

    // "aight" is pronounced *ɛjt*
    ['aight', 'ɛjt'],

    // "aught" is pronounced *ɔt* or *af*
    [/augh(?=[eit]|$)/, 'af', /(?:^l|dr)$/],
    [/aught/, 'ɔt'],

    // Before "w(e)", "a" is pronounced *o*
    [/awe?/, 'ɔ'],

    // Before "ll", "a" is pronounced *ɔ*
    [/a(?=ll)/, 'ɔ'],

    // Before final "l" or "n", "a" is pronounced *ʌ*
    ['ality', 'ʌlti'],
    [/a(?=ls?$)/, 'ʌ'],

    // Final "an" is sometimes pronounced *ʌ*
    [/a(?=ns?$)/, 'ʌ', `(?:[${VOWELS}][gl]|th)`],

    // Before "ai" & "ay" is pronounced *ɛj*
    [/ay$/, 'ɛ'],
    [/ai(?=r)/, 'ɛ'],
    [/a[iy](?:g(?=n))?/, 'ɛj'],

    // "ae" is usually pronounced *ɛ*
    ['ae', 'ɛ'],

    // "a" is usually pronounced *a* after a "z"
    ['a', 'a', /z$/],

    // Before some letter "a" is pronounced *ɛ*
    [/an(?=gi|ge[dr]?)/, 'ɛjn', /(?:ch|[dmr])$/],
    [/a(?=tio|mp|n[dgx]|nc[eiy]|ry)/, 'ɛ'],
    [/a(?=nt(?!$))/, 'ɛ', /[^w]/],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [/a(?=cia|bou|(?:gu?|[bcdfklmnptvz])(?:i[en]|e)|or)/, 'ɛj'],
    [/a(?=mi)/, 'ɛj', /./],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL}|o)`, 'a'],

    // Usuallu, "au" is pronounced *ɔ*
    ['au', 'ɔ'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // Initial "be" before a consonant is pronounced *bi*
    [`be(?=[^${VOWELS}][${VOWELS}])`, 'bi', INITIAL],

    // "business" is pronounced *biznɛs*
    ['business', 'biznɛs'],

    // "beau" is pronounced *bju*
    [/beau(?=t)/, 'bju'],

    // "buy" is pronounced *baj*
    ['buy', 'baj'],

    // Double "b" is squeezed
    ['bb', 'b'],

    [null, 'b']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // Initial "cha" is sometimes pronounced *ka*
    [/cha(?=rac|ris|o)/, 'ka'],

    // Final "ch" is pronounced *k* after some letters
    [/ch(?=s?$)/, 'k', `[^${VOWELS}]a$`],

    // Final "cally" elides the "a"
    [/cally$/, 'kli'],

    // "cester" is pronounced *stʌr*
    ['cester', 'stʌr'],

    // "cqu" is pronounced *kw*
    ['cqu', 'kw'],

    // "ci" before some consonants is pronounced *ʃ*
    [/ci(?=ous|a[ln])/, 'ʃ'],
    [`ciat(?=[${VOWELS}](?!o))`, 'ʃjɛjt'],

    // "cc" before "o" or "h" is squeezed
    [/cch/, 'k'],
    [/cc(?=o)/, 'k'],

    // "ch" before "d" is usually pronounced *ʃ*
    [/ch(?=d)/, 'ʃ'],

    // "ch" before a consonant is pronounced *k*
    [`ch(?=[^${VOWELS}])`, 'k'],

    // "ch" is pronounced *k* in some greek roots
    [/ch(?=o(?!k))/, 'k', /i$/],
    ['ch', 'k', /(?:psy|[mt]e)$/],

    // "ch" is pronounced *tʃ*
    ['ch', 'tʃ'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // Before some vowels, "c" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    [null, 'k']
  ],

  //-- (d)
  //----------------------------------------------------------------------------
  d: [

    // "dd" is squeezed
    ['dd', 'd'],

    // "d" before a "g" and a vowel is useless
    [/d(?=g[eiy])/, ''],

    [null, 'd']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Before some consonants an initial "e" is prononced *ɛ*
    [`e(?=[mp]|d[^${VOWELS}])`, 'ɛ', INITIAL],

    // Final "eight" is pronounced *ɛjt* or *ajt*
    [/eight$/, 'ajt', /(?:sl|h)$/],
    [/eight$/, 'ɛjt'],

    // Final "ese" is pronounced *iz*
    [/ese$/, 'iz'],

    // Final "ene" is pronounced *in*
    [/ene(?=s?$)/, 'in'],

    // Final "en" is sometimes prounounced *ʌrn*
    [/en(?=s?$)/, 'ʌn', /.[dgptv]$/],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 's', /[fkt]$/],
    [/es$/, 'iz', /(?:[cs]h|[csz])$/],
    [/es$/, 'z'],

    // Final "el" is pronounced *ʌl*
    [/el(?=s?$)/, 'ʌl'],

    // Sometimes, final "ed" does not pronounced "e"
    [/e(?=d$)/, 'ɛ', /(?:^.|sl)$/],
    [/ened$/, 'ʌnd'],
    [/ed$/, 'd', /(?:[^s]l|sh|[gkmnprsvw])$/],

    // "ebt" is pronounced *ɛt*
    ['ebt', 'ɛt'],

    // Sometimes, in the middle of a word, the "e" can be silent
    [/e(?=n)/, '', /r[cs]$/],
    [`e(?=th|[lrst][${VOWELS}])`, '', /(?:gu|[fmt])$/],

    // "ewey" and "ewi" are pronounced *uwi*
    [/ew(?:ey|i(?!sh))/, 'uwi'],

    // "ew" is pronounced *ju* or *u*
    ['ew', 'ju', /(?:[^k]|^)(?:[pt]h|s[kt]|[bdfmn]|^)$/],
    ['ew', 'u'],

    // "eye" is pronounced *aj*
    ['eye', 'aj'],

    // "eous" is prounounced *jʌs*
    ['eous', 'ʃʌs', /ght$/],
    ['eous', 'jʌs'],

    // "eu" is pronounced *ju*
    [/eu(?!s)/, 'ju'],

    // "ee" is pronounced *i*
    ['eese', 'iz'],
    ['ee', 'i'],

    // Final "ey" is pronounced *ɛ* after some consonants
    [/ey$/, 'ɛ', /(?:th|[bhv])$/],

    // "ea" is sometimes pronounced *a*
    [/ea(?=rth)/, 'a', /h$/],

    // "ea" is sometimes pronounced *ʌ*
    [/ea(?=(?:rth|rse|rch|r[dl]))/, 'ʌ'],

    // "ea" is sometimes pronounced *ɛ*
    [/ea(?=th[ei])/, 'i', /br$/],
    [/ea(?=ch)/, 'i', /[bp]$/],
    [/ea(?=lth|nse|[lmp]t)/, 'ɛ'],
    [/ea(?!n)/, 'ɛ', /(?:thr|spr|[bgt]r|ph|(?:^|[^p])p|[bhwy])$/],
    [/ea(?=d(?:ow|y)|san|nt$)/, 'ɛ', /(?:st|pl|[mr])$/],
    [/ea(?=th|d)/, 'ɛ', /dr?$/],
    [/ea(?=th)/, 'ɛ', /[lf]$/],

    // "ea|ey" is pronounced *i*
    [/e[ay]/, 'i'],

    // "eipt" is pronounced *it*
    ['eipt', 'it'],

    // "eign" is pronounced *ɛjn*
    ['eign', 'ɛjn'],

    // "eir" is pronounced *ɛr*
    [/eir(?=s?$)/, 'ɛr'],

    // "ei" is pronounced *i* or *ɛ* or *ei* or *ajs*
    [/eis/, 'ajs', /^[fh]$/],
    [/ei(?=sh)/, 'ej'],
    [/ei(?=s[mt])/, 'ei'],
    [/ei(?=ce|s)/, 'ɛ'],
    ['ei', 'i'],

    // Before doubled consonants, "e" is pronounced *ɛ*
    [`e(?=([^${VOWELS}])\\1)`, 'ɛ'],

    // Sometimes "e" is pronounced *ɛ*
    [`e(?=cial|vel|qu(?!a)|ck|rc|[fp]t|s(?:k|qu|t)|sc(?!i)|h(?=[^${VOWELS}]|$)|c[^${VOWELS}]|t[^${VOWELS}h]|du|cio|m(?![${VOWELS}])|[klnpxz]|th?s?$)`, 'ɛ'],
    [/e(?=f)/, 'ɛ', /^d$/, NEGATIVE],
    [/e(?=v$)/, 'ɛ'],

    // Before "r", "e" is pronounced *ʌ*
    [/e(?=r(?!o))/, 'ʌ'],

    // Before "n" and some other consonants, "e" is pronounced *ɛ*
    [/en(?=[dt])/, 'ɛn'],

    // Else, "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // Final "ful" is pronounced *ful*
    [/full?/, 'ful'],

    // Final "fied" is pronounced *fajd*
    [/fied$/, 'fajd'],

    // "friend" is pronounced *frɛnd*
    ['friend', 'frɛnd'],

    // "fiend" is pronounced *find*
    ['fiend', 'find'],

    // "ff" is squeezed
    ['ff', 'f'],

    [null, 'f']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // Final "g(er)" is pronounced *g*
    [/g(?=e(?:ring|red|rs?|d)$)/, 'g', /(?:en|(?:ch|gr|fl|[dmrv])an|[bg]in)$/, NEGATIVE],

    // "gauge" is pronounced *gɛjdʒ*
    ['gauge', 'gɛjdʒ'],

    // "gine" is pronounced *dʒin*
    ['gine', 'dʒin'],

    // "gion" is sometimes pronounced *dʒ*
    [/gi(?=on)/, 'dʒ', /[ei]$/],

    // "gh" is pronounced *g*
    ['gh', 'g'],

    // "g" is silent before "th"
    [/gth/, 'θ'],

    // "gg" before "e" is pronounced *dʒ*
    [/gg(?=e)/, 'dʒ'],

    // "gg" is pronounced *g*
    ['gg', 'g'],

    // "gu" before some vowels
    [/gu(?=a)/, 'gw'],
    ['gu', 'g'],

    // Before some vowels "g" is pronounced *dʒ*
    [/geo(?=r)/, 'dʒɔ'],
    [/g(?=ing?|[ey](?![it]))/, 'dʒ'],

    // Non-initial "g" before an "i" is pronounced *dʒ*
    [/g(?=i)/, 'dʒ', INITIAL, NEGATIVE],

    // Else "g" is pronounced *g*
    [null, 'g']
  ],

  //-- (h)@
  //----------------------------------------------------------------------------
  h: [

    // Initial "here" is pronounced *hir*
    ['here', 'hir', INITIAL],

    // Final "h" is silent after a vowel
    [/h$/, '', `[${VOWELS}]$`],

    // "hav" is sometimes pronounced *hav*
    [/hav(?=e$|i)/, 'hav', INITIAL],

    // "h" is silent before some clusters
    [`h(?=our|[^${VOWELS}])`, ''],

    // "h" is silent after some consonants
    ['h', '', /[klx]$/],

    [null, 'h']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Initial "i" before some consonants is pronounced *i*
    [/i(?=n)/, 'i', INITIAL],

    // Final "ify" is pronounced *ifaj*
    [/if[iy]$/, 'ifaj'],

    // Final "ied" is sometimes pronounced *ajd*
    [/ied$/, 'ajd', /[dlt]$/],

    // Final "ieth" is pronounced *ijʌθ*
    [/ieths?$/, 'ijʌθ'],

    // Final "ier" is pronounced *ijʌr*
    [/ier(?=s?$)/, 'ijʌr', /[fv]$/],

    // Final "il" is pronounced *ʌl*
    [/il(?=s?$)/, 'ʌl'],

    // Final "ies" is pronounced *ajz*
    [/ies$/, 'ajz', /^.{1,2}$/],

    // "isl" is sometimes pronounced *ajl*
    [/isl(?=and|es?$)/, 'ajl'],

    // "ial" is sometimes pronounced *ajʌl*
    ['ial', 'ajʌl', /[ldv]$/],

    // "iety?" is pronounced *ajʌt* or *jɛt*
    [/iet(?=[iy])/, 'ajʌt'],
    [/iet/, 'ajʌt', /(?:qu|d)$/],
    [/iett?/, 'jɛt'],

    // "iew" is pronounced *ju*
    ['iew', 'ju'],

    // Final "igh" is pronounced *aj*
    [/igh(?=s?$)/, 'aj'],

    // "imb" is sometimes pronounced *ajmb*
    [/imb/, 'ajmb', /cl$/],

    // "ind" is pronounced *ajnd* after some consonants
    [/ind/, 'ajnd', /(?:bl|gr|[bfkm])$/],

    // Final "ire" is pronounced *ajʌr*
    [/ire(?=s?$)/, 'ajʌr'],

    // "ight" is pronounced *ajt*
    ['ight', 'ajt'],

    // "ious" is pronounced *jʌs*
    ['ious', 'jʌs'],

    // Before a consonant and a vowel, "i" is pronounced *aj*
    [/i(?=ve[rn]?s?$)/, 'i', /[glt]/],
    [/i(?=o)/, 'j', /.r$/],
    [`i(?=gr|[^${VOWELS}]e(?![ow]|c)|o(?!u))`, 'aj'],

    // After some clusters, "i" is pronounced *aj*
    [/i(?!n)/, 'aj', /(?:sc|z)$/],

    // "i" before some vowels is pronounced *j*
    [/i(?=a|ou)/, 'j'],

    // "i" before some consonants is pronounced *ʌ*
    [/i(?=rst|rth|r[cd]|rs?$)/, 'ʌ'],

    // "ie" is pronounced *i*
    [/ie(?!n)/, 'i'],

    // Else, "i" is pronounced *aj*
    [null, 'i']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: [

    // "jewel" is pronounced *jul*
    ['jewel', 'jul'],

    [null, 'dʒ']
  ],

  //-- (k)
  //----------------------------------------------------------------------------
  k: [

    // "kn" is pronounced *n*
    ['kn', 'n'],

    [null, 'k']
  ],

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "lieute" is pronounced *lɛftʌ*
    ['lieute', 'lɛftʌ'],

    // Some consonant clusters + "le" are pronounced *ʌl*
    [/le(?=s?$)/, 'ʌl', /(?:st|([bdgtz])\1?|[cpsx])$/],

    // "ll" is squeezed
    ['ll', 'l'],

    [null, 'l']
  ],

  //-- (m)
  //----------------------------------------------------------------------------
  m: [

    // Initial "mcc?" is pronounced *mak*
    [/mcc?/, 'mak', INITIAL],

    // Final "mn" is pronounced *m*
    [/mn$/, 'm'],

    // "mayor" is pronounced *mɛr*
    ['mayor', 'mɛr'],

    // Double "m" is squeezed
    ['mm', 'm'],

    [null, 'm']
  ],

  //-- (n)
  //----------------------------------------------------------------------------
  n: [

    // Double "n" is squeezed
    ['nn', 'n'],

    // n't is pronounced *ʌnt* after a consonant
    ['n\'t', 'ʌnt', `[^${VOWELS}]$`],

    [null, 'n']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Final "omb" is pronounced *umb* after some letters
    [/omb(?=s?$)/, 'umb', /[tw]/],

    // Final "ought" is prounounced *ɔt*
    [/ought(?=s?$)/, 'ɔt'],

    // "oi(ce|d)" is pronounced *ɔj*
    [/o[iy](?=ce|d)/, 'ɔj'],

    // "ough" is pronounced *u*, *o* or *ʌf*
    [/ough/, 'u', /thr$/],
    [/ough/, 'ʌf', /[cnt]$/],
    [/ough/, 'o'],

    // Final "o" is pronounced *o*
    [/o$/, 'o'],

    // "oft(en)" is pronounced *ɔf*
    [/oft(?=en)/, 'ɔf'],

    // Before "v", "o" is pronounced *ɔ*, *o* or *u*
    [`o(?=v[${VOWELS}])`, 'ɔ', /b$/],
    [`o(?=v[${VOWELS}])`, 'u', /(pr|m)$/],

    // "one" is sometimes pronounced *wan*
    [/one/, 'wan', `(?:^$|[${VOWELS}]$)`],

    // "ouch" is pronounced *u* *aʊ* or *ʌ*
    [/ouche(?![dr])/, 'uʃ'],
    [/ou(?=ch)/, 'ʌ', /t$/],
    [/ou(?=ch)/, 'aʊ'],

    // "ouse" is pronounced *aʊs* sometimes
    [/ous(?=[ei])/, 'aʊs', /[hm]/],

    // "ou(rse)" is pronounced *ɔ*
    [/ou(?=r[cs]e|rt)/, 'ɔ'],

    // "ou" before "r" is pronounced *aʊ* after some consonants
    [/ou(?=r)/, 'aʊ', /(?:^|sc?|fl|[dh])$/],
    [/ou(?=r)/, 'ʌ'],

    // "ou" before "t" is pronounced *aʊ*
    [/ou(?=t)/, 'aʊ'],

    // "ou" befoure "ld" is pronounced *o* or *u*
    [/oul(?=d(?=n|$))/, 'u', /sh|[cw]$/],
    [/ou(?=ld)/, 'o'],

    // "ous" is pronounced *ʌs*
    [/ous/, 'ʌs'],
    [/ou(?=ce|pl)/, 'ɔ'],

    // "oin" is generally pronounced *ɔjn*
    [/oin(?!g)/, 'ɔjn', 'her', NEGATIVE],

    // "oi" is generally pronounced *ɔj* before some consonants
    [/oi(?=[ls]|$)/, 'ɔj', /a$/, NEGATIVE],

    // "ounge" is sometimes pronounced *aʊdʒ*
    [/ounge/, 'aʊdʒ', /(?:scr|l)$/],

    // "oubt" is pronounced *aʊt*
    ['oubt', 'aʊt'],

    // "ou" before "ng" is pronounced *ʌ*
    [/ou(?=ng)/, 'ʌ'],

    // "oun" before "d" or "t" is pronounced *aʊn*
    [/oun/, 'aʊn'],

    // Final "oul" is pronounced *aʊl* sometimes
    [/oul(?=s?$)/, 'aʊl', /[fs]$/],

    // "oe" is pronounced *u* after "sh"
    ['oe', 'u', /sh$/],

    // "oe" is pronounced *ɔ* after some consonants
    ['oe', 'ɔ', /d$/],

    // "ow" is pronounced *aʊ* before "se"
    [/ow(?=se)/, 'aʊ'],

    // "own" is pronounced *aʊn* sometimes
    ['own', 'aʊn', /(?:c[lr]|fr|[dgt])$/],
    ['own', 'on'],

    // "ow" is pronounced *o* or *aʊ*
    [/ow/, 'aʊ', /(?:^$|(?:^|[^s])[hnpw]$|ll|c$)/],
    ['ow', 'o'],

    // "oa" is pronounced *o*
    [/oa(?=r)/, 'ɔ'],
    ['oa', 'o'],

    // "oo" is pronounced *o* if in "door/floor" words
    ['oo(?=r)', 'ɔ', /(?:^d|fl)$/],

    // "oo" is pronounced *u*
    ['oo', 'u'],

    // "oy" is pronounced *ɔj*
    ['oy', 'ɔj'],

    // Before a wall, "o" is pronounced *ɔ*
    [/o(?=gr)/, 'o'],
    [/o(?=r[ns])/, 'ɔ'],
    [`o(?=${SOFT_WALL}|lu|[mrx])`, 'ɔ', /(?:(?:[^ct]|^)h|e)$/, NEGATIVE],

    // Else, "o" is pronounced *o*
    [null, 'o']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // Initial "ps" is pronounced *s*
    ['ps', 's', INITIAL],

    // Initial "pn" is pronounced *n*
    ['pn', 'n', INITIAL],

    // "peop" is pronounced *pi*
    [/peo(?=p)/, 'pi'],

    // "pp" is squeezed
    ['pp', 'p'],

    // "ph" is pronounced *f*
    ['ph', 'f'],

    [null, 'p']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // Final "que" is pronounced *k*
    [/que$/, 'k'],

    // "qui" before "al" is pronounced *kwij*
    [/qui(?=al)/, 'kwij'],

    // "qu" is pronounced *kw*
    ['qu', 'kw'],

    // Else "q" is pronounced *k*
    [null, 'k']
  ],

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // Final "r" after consonants is pronounced *ʌr*
    [/r$/, 'ʌr', `[^${VOWELS}]$`],

    // After some letters, a final "re" is pronounced *ʌr*
    [/re(?=s?$)/, 'ʌr', /[gt]$/],

    // Double "r" is squeezed
    ['rr', 'r'],

    // In "rh", the "h" is silent
    ['rh', 'r'],

    [null, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // Final "shire" is pronounced *ʃʌr*
    [/shire$/, 'ʃʌr', /.$/],

    // Final "sm" is pronounced *zʌm* after some vowels
    [/sm$/, 'zʌm', /[ai]/],
    [/sm(?=a)/, 'zm'],
    [/s(?=n)/, 'z'],

    // "sch" is pronounced *sk* or *ʃ*
    [/sch(?=o?ol|ed|iz)/, 'sk'],
    ['sch', 'ʃ'],

    // "stion" is pronounced *stʃʌn*
    ['stion', 'stʃʌn'],

    // "sword" is pronounced *sɔrd*
    ['sword', 'sɔrd'],

    // "sign" is pronounced *sajn* or *zajn*
    [/sign(?=s?$)/, 'zajn', /(?:de|re)$/],
    [/s?sign(?=s?$)/, 'sajn'],

    // "ssi" is pronounced *ʃ* before some vowels
    [/ssi(?=a)/, 'ʃ'],
    [/s[hs]ion/, 'ʃʌn'],
    [/ssu(?=r)/, 'ʃʌ'],

    // "sual" is pronounced *ʒʌ*
    [/sua(?=l)/, 'ʒʌ'],

    // "sion" is pronounced *ʒʌn*
    [/sion/, 'ʒʌn'],

    // "st(en)" is sometimes pronounced *s*
    [/st(?=en)/, 's', /(?:g?li|moi|fa)/],

    // "sc" before an "i" is pronounced *s*
    [/sc(?=[ei])/, 's'],

    // Double "s" is squeezed
    ['ss', 's'],

    // After some consonants, "s" is pronounced *z*
    ['s', 'z', /g$/],

    // "st(l)" is pronounced "s" or "z"
    [/s(?=l)/, 'z', /ea$/],
    [/st(?=l)/, 's'],

    // "sh" is pronounced *ʃ*
    [/sh(?!ap)/, 'ʃ'],

    // "s" after "oo" is usually pronounced *s*
    [/s/, 's', /[^h]oo$/],

    // Plural "s" is sometimes pronounced *s*
    [/s$/, 's', /(?:ph|[afikptu])$/],

    // Else it is pronounced *z*
    [/s$/, 'z'],

    // "between" two vowels, "s" is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${A + I + O + U}]w?$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Final "th" is pronounced *θ*
    [/th$/, 'θ'],

    // Final "thm" is pronounced *ðʌm*
    [/thm(?=s?$)/, 'ðʌm'],

    // "tth" is sometimes pronounced *θ*
    [/tth(?=ias|ew)/, 'θ'],

    // Else it clusters
    [/tth(?=r)/, 'tθ'],

    // "tice" is usually pronounced *tis*
    [/t?tice/, 'tis', /en$/, NEGATIVE],

    // "tt" is squeezed
    ['tt', 't'],

    // Initial "th" for various words
    [/th(?=(?:emselves|emself|yself|eirs?|ese|ine|ose|at|ee|em|ey|is|y)$)/, 'ð', INITIAL],

    // Initial "thom"
    [/th(?=om)/, 't', INITIAL],

    // Initial "th" is usually pronounced *θ*
    ['th', 'θ', /^e?$/],

    // After some letters, "th" is always pronounced *t*
    [/th/, 't', /s$/],

    // "tial" is pronounced *ʃ*
    [/ti(?=al)/, 'ʃ'],

    // Between some letters "th" is usually pronounced *ð*
    [/th(?=[ei])/, 'ð', /.a$/],
    [/th(?=er|o)/, 'ð'],

    // Else usually, "th" is pronounced *θ*
    ['th', 'θ'],

    // Final "two" is pronounced *tu*
    [/two$/, 'tu'],

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "ture" is pronounced *tʃʌ*
    [/tur(?=[ei])/, 'tʃʌr'],

    // "tues?" is pronounced *tʃu*
    [/tu(?=es?)/, 'tʃu'],

    // "tion" is pronounced *ʃʌn*
    ['tion', 'ʃʌn'],
    ['tio', 'ʃo'],

    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Leading "u" is sometimes pronounced *ju*
    [/u(?=ni(?=vers|qu|t))/, 'ju', INITIAL],

    // Before seome letters, "u" is pronounced *u*
    [/u(?=th|j)/, 'u'],

    // "ush" after "b" and "p" is pronounced *u*
    [/u(?=sh)/, 'u', /[bp]/],

    // "uss" after some consonants is pronounced *u* else it would be *ʌ*
    [/u(?=ss)/, 'u', /[pw]/],

    // "u" is sometimes pronounced *ju* after a "c"
    [/u(?=[rt](?!t)e)/, 'ju', /c$/],

    // "u" is pronounced *u* or *ju* before "ke"
    [/u(?=ke)/, 'u', /l$/],
    [/u(?=pe)/, 'u', /s$/],
    [/u(?=[bk]e|ca)/, 'ju'],

    // "ue" or "ume" is pronounced *u* or *ju*
    [`(?:ue|u(?=[mn][${VOWELS}]))`, 'ju', /[bcdfhmt]$/],
    ['ue', 'u'],

    // "u" is sometimes pronounced *ju* after a "m"
    [/u(?=[ls][eiy])/, 'ju', /[dm]$/],

    // "u" is sometimes pronounced *ju* after a "f"
    [`u(?=[grt][^grt]|[sz][${VOWELS}])`, 'ju', /f$/],

    // "u" is sometimes pronounced *u* after "r"
    [`u(?=[^${VOWELS}]e)`, 'u', /r$/],

    // "u" is pronounced *u* after "j" and before some letters
    [`u(?=[dln][${VOWELS}])`, 'u', /j$/],

    // "u" is pronounced *ju* after a non-initial "p"
    [/u(?=ny|[bpr][ei])/, 'ju', /^p$/],
    ['u', 'ju', /.p$/],

    // Before some letters "u" is pronounced *ju*
    [/u(?=a)/, 'ʃu', /[ck]t$/],
    [/u(?=ce|[ao])/, 'ju'],

    // After some letters "u" is pronounced *ju*
    ['u', 'ju', /st$/],

    // Before "m" or "n", "u" is pronounced *ʌ*
    [/u(?=[mn])/, 'ʌ'],

    [null, 'ʌ']
  ],

  //-- (v)
  //----------------------------------------------------------------------------
  v: [

    // "veil" is pronounced *vɛjl*
    // Note - this rule is here not to overcharge the "e" rules
    [/veill?/, 'vɛjl'],

    [null, 'v']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "warwick" is pronounced *worik*
    ['warwick', 'worik'],

    // "women" is pronounced *wimɛn*
    ['women', 'wimɛn'],

    // "wh" is pronounced *w*
    ['wh', 'w'],

    // "wr" is pronounced *r*
    ['wr', 'r'],

    [null, 'w']
  ],

  //-- (x)
  //----------------------------------------------------------------------------
  x: [

    // Initial "x" before an "a" is pronounced *z*
    [/x(?=a)/, 'z', INITIAL],

    // Before "iet", "x" is pronounced *z*
    [/x(?=iet)/, 'z'],

    // "xc" is pronounced *ks*
    ['xc', 'ks'],

    // Between some letters, "x" is pronounced *gz*
    [/x(?=h?[aui])/, 'gz', /^e$/],

    // "x" before "u" or "ious" is pronounced *kʃ*
    [/x(?=ious|u)/, 'kʃ'],

    [null, 'ks']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // Final "ye" is pronounced *aj*
    [/ye(?=[ds]?$)/, 'aj'],

    // In a three letters or less word, "y" is pronounced *aj*
    [/y$/, 'aj', /^.{1,2}$/],

    // Before another vowel, "y" is pronounced *j*
    [/yie/, 'ji'],
    [/y(?=m[aei]|[bp][ei]|ger|ch|[aiks])/, 'aj'],
    [`y(?=[${VOWELS}])`, 'j'],

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ],

  //-- (z)
  //----------------------------------------------------------------------------
  z: [

    // "zz" is squeezed
    ['zz', 'z'],

    [null, 'z']
  ]
});
