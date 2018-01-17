import test from 'ava';
import arraySame from 'array-same';
import numberArray from '.';

test('simple sequential array', t => {
  t.true(arraySame(numberArray(5), [0, 1, 2, 3, 4]));
});

test('long sequential array', t => {
  t.is(numberArray(500).length, 500);
});

test('with offset', t => {
  t.true(arraySame(numberArray(5, 2), [2, 3, 4, 5, 6]));
});

test('with step', t => {
  t.true(arraySame(numberArray(5, 0, 2), [0, 2, 4, 6, 8]));
});
