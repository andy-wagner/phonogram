/**
 * Phonogram German Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/german';

export default {
  fn: poetic,
  cases: [
    ['fuerst', 'fyrst'],
    ['fürst', 'fyrst'],
    ['fuß', 'fus']
  ]
};
