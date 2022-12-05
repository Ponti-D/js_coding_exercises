// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return  word.charAt(0).toUpperCase() + word.substring(1, word.length);

}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
 
  return  firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();

}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  return  parseFloat(((vatRate / 100 * originalPrice)  + originalPrice).toFixed(2)); 
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  return parseFloat(Math.abs((reduction / 100 * originalPrice)  - originalPrice).toFixed(2));

}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let totalChars = str.length;
    
  if(totalChars % 2 == 0) {
    let startAt = (totalChars/2)+1;       
    return str.substring(startAt-2, startAt);
  } 
  else {
    let startAt =Math.round((totalChars/2))-1;
    return str.substring(startAt,startAt+1);

  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");

}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newWords = [];
  words.forEach(element => {
    let newWord = reverseWord(element);
    newWords.push(newWord);
  });
   
  return newWords;

}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let linuxCount=0;
   
  users.forEach(user => {if(user.type=="Linux") linuxCount++; });

  return linuxCount;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
  let meanScore = 0;
  scores.forEach(element => meanScore+=element);
  
  return parseFloat((meanScore /= scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
 
  if(n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  if(n % 5 === 0)  return "buzz" ;
  if(n % 3 !== 0 && n % 5 !== 0 ) return n;
  if(n % 3 === 0) return "fizz"
   

}
