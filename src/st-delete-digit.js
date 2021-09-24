import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arrNum = n.toString().split('');
  let newArr = [];

  for (let i = 0; i < arrNum.length; i++) {
    arrNum.splice(i, 1);
    newArr.push(Number(arrNum.join('')));
    arrNum = n.toString().split('');
  }

  return Math.max.apply(null, newArr);
}