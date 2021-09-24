import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = [];
  let count = 0;
  let filterArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);

  for (const iterator of arr) {
    if (iterator === -1) newArr.push(iterator);
    else {
      newArr.push(filterArr[count]);
      count++;
    }
  }
  return newArr;
}