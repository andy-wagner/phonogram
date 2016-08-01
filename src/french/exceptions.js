/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = compileExceptions({
  aigüe: '(ai•ɛ)(güe•gy)',
  aiguë: '(ai•ɛ)(guë•gy)',
  aigües: '(ai•ɛ)(güe•gy)(s•)',
  aiguës: '(ai•ɛ)(guë•gy)(s•)',
  ail: 'a(il•j)',
  almanach: 'almana(ch•)',
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  barbecue: 'barb(e•ø)(cue•kju)',
  bruxelles: 'br(u•y)(x•s)ɛ(lles•l)',
  et: 'e(t•)',
  femme: 'f(e•a)(mme•m)',
  femmes: 'f(e•a)(mme•m)(s•)',
  mes: 'm(es•ɛ)',
  munster: 'm(un•ẽ)st(e•ɛ)r',
  münster: 'm(ün•ẽ)st(e•ɛ)r',
  ses: 's(es•ɛ)',
  tes: 't(es•ɛ)',
  villa: 'villa',
  villas: 'villa(s•)',
  wagon: '(w•v)ag(on•õ)',
  wagons: '(w•v)ag(on•õ)(s•)'
});

export default EXCEPTIONS;

// MULTI:
// couvent, plus, est, os, dessein

// mille, ville, tranquille, villa
// outil, fusil, fils, ail
// os
// diazote
// tabac
// croc
// rhésus us$, us & coutumes
// joliet

// couvent, plus, est, +ment$

// ü û
// accent boniment mentent mangent, filament, proclament
// dévient devient
