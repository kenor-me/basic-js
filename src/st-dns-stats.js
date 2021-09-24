import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let resultObj = {};

  for (let i = 0; i < domains.length; i++) {
    let newArr = domains[i].split('.').reverse();
    let str = '';

    for (let j = 0; j < newArr.length; j++) {
      str += `.${newArr[j]}`;
      if (resultObj[str] === undefined) {
        resultObj[str] = 1;
      } else {
        resultObj[str] += 1;
      }
    }
  }
  return resultObj;
}