const palindromes = function(str) {
  const chkStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	let charCount = 0;
    if(chkStr === "") {
		
		return false;
	}
    if ((chkStr.length) % 2 === 0) {
		charCount = (chkStr.length) / 2;
	} else {
        if (chkStr.length === 1) {
			
			return true;
		} else {
            charCount = (chkStr.length - 1) / 2;
		}
	}
    for (let i = 0; i < charCount; i++) {
        if (chkStr[i] != chkStr .slice(-1-i)[0]) {
			
			return false;
		}
	}
	
	return true;
}

module.exports = palindromes
