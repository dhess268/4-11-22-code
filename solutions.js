
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
// Checks if string input is a letter!
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}



// Tests if a score is better than
function betterThanAverage(classPoints, yourPoints) {
classPoints.push(yourPoints)
return yourPoints > classPoints.reduce(((acc, current) => acc + current), 0) / classPoints.length
}




// Reversed the inputted string can also use .split('')
function solution(str){
    return Array.from(str).reverse().join('')
}


// Reverses the space separated string
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

// Based on that funny problem
function howManyLightsabersDoYouOwn(name) {
if(name === 'Zach'){
    return 18
}
else{
    return 0
}
} 