const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let name = [];
	if (Array.isArray(members)) {
		for (var i = 0; i < members.length; i++) {
			let item = members[i];
			if (typeof item == 'string') {
				for (var j = 0; j < item.length; j++) {
					if(item[j] !== ' '){
						name.push(item[j].toUpperCase())
						break;
					}
				}
			}
		}
		return name.sort().join('');		
	}
	else {
		return false
	}
};
