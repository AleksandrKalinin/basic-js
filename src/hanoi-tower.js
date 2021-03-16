const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let params = {}
  let moves = Math.pow(2,disksNumber) - 1;
  let hour = 3600;
  let time = Math.floor(moves / turnsSpeed * hour);
  params["turns"] = moves;
  params["seconds"] = time;
  return params;
};
