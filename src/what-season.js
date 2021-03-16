const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

	Date.prototype.isValid = function () {
	  return this.getTime() === this.getTime();
	};   
	if (date == undefined) {
		return 'Unable to determine the time of year!'
	}
	else if(!(date instanceof Date)){
		throw new Error();
	}
	else if(!date.isValid()){
		throw new Error();
	}	
	else {
		let month = date.getMonth();
		if(month >= 2 && month <= 4){
			return 'spring';
		}
		else if(month >= 5 && month <= 7){
			return 'summer';
		}
		else if(month >= 8 && month <= 10){
			return 'autumn';
		}
		else {
			return 'winter';
		}		
	}
};
