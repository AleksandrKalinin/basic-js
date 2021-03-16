const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.depth = [];
    this.temp = 1;
  }


  calculateDepth(array){
    for (var i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])){
        this.temp += 1;
        this.calculateDepth(array[i])
      }
      else{
        this.depth.push(this.temp);
        this.temp = 1;
      }
    }
    return Math.max.apply(null, this.depth);
  } 
};