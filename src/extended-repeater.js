const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  str = str !== undefined ? str + '' : '';
  addition = addition !== undefined  ? addition + '' : '';
  separator = separator !== undefined ? separator + '' : '+';
  additionSeparator = additionSeparator ? additionSeparator + '' : '|';
  repeatTimes = repeatTimes ? repeatTimes : 1;
  additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes : 1;

  let finalString = [];
  for (var i = 0; i < repeatTimes; i++) {
    let temp = '';
    let additions = [];
    for (var j = 0; j < additionRepeatTimes; j++) {
      additions.push(addition)
    }
    additions = additions.join(additionSeparator);
    temp += str + additions;
    finalString.push(temp);
  }
  return finalString.join(separator);
};
  