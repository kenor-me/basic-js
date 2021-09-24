import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let additional = '';
  let newStr = '';
  str = String(str);

  // кол-во повторений строки
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  // строка, разделяющая повторы str
  if (!options.separator) {
    options.separator = '+';
  }
  // это дополнительная строка, которая будет добавляться к каждому повторению строки str
  if (options.addition === undefined) {
    options.addition = '';
  }
  // устанавливает количество повторений сложения дополнительной строки
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  // это строка, разделяющая повторы добавления
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    additional += options.addition + options.additionSeparator;
  }
  additional += options.addition;

  for (let j = 1; j < options.repeatTimes; j++) {
    newStr += str + additional + options.separator;
  }
  newStr += str + additional;

  return newStr;
}