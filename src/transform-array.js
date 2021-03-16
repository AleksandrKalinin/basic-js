const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let newArray = [];
	if (!(Array.isArray(arr))){
		throw new Error(); 
	}
	else{
		let flag; let index;
		for (var i = 0; i < arr.length; i++) {
			if (flag && i == index + 1) {
				newArray.pop();
				flag = false;
				index = null;
			}
			else if (arr[i] == '--discard-next' && arr[i + 1] !== undefined ) {
				flag = true;
				index = i + 1;
			}
			else if(arr[i] == '--discard-prev' && arr[i - 1] !== undefined) {
				newArray.pop();
			}
			else if(arr[i] == '--double-next' && arr[i + 1] !== undefined){
				newArray.push(arr[i+1])
			}
			else if(arr[i] == '--double-prev' && arr[i - 1] !== undefined){
				newArray.push(arr[i-1])
			}
			else {
				if (arr[i] !== '--discard-next' 
						   && arr[i] !== '--discard-prev'
						   && arr[i] !== '--double-next'
						   && arr[i] !== '--double-prev'
						   ) {
					newArray.push(arr[i]);
				}
			}
		}
		return newArray;
	}
};
