
// Checks if 2 characters are the same case (upper or lower). Only meant to account for single length strings 

function sameCase(a, b){
    if(isLetter(a) && isLetter(b)){
      if((a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b)){
        return 1
      }
      else {
        return 0
      }
    }
    return -1
  }
  
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }