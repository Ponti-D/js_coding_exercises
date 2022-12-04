// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  //take word first char..convert to cap then add the rest of word string to it
  let capWord = word.charAt(0).toUpperCase() + word.substring(1, word.length);
  return  capWord;

}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  // Add your code here!
  //take first char of each name, uppercase it then add then with .
  let firstNameInitial =firstName[0].toUpperCase();
  let lastNameInitial = lastName[0].toUpperCase();
 
  return firstNameInitial + "." + lastNameInitial; 

}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  // Add your code here!

  //set the pricewith VAT then calculate the VAT and add to it
  let priceWithVAT=originalPrice;

  if (vatRate !== 0 ){ 
    //toFixed returns string and adds 0 to whole number - so need to parseto back to numeric type
    priceWithVAT =  parseFloat(((vatRate / 100 * originalPrice)  + originalPrice).toFixed(2));

  }
  return  priceWithVAT ;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

  let priceWithDiscount=originalPrice;
  if (reduction!== 0 ){ 
      priceWithDiscount =   parseFloat(Math.abs((reduction / 100 * originalPrice)  - originalPrice).toFixed(2));
  }
  
  return priceWithDiscount;

}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let totalChars = str.length; //get the length
    
  //check if it's even or odd using % modulo
  if(totalChars % 2 == 0) {
       //if it's even get 2 from middle (char 0 based)
       let startAt = (totalChars/2)+1;       
       return str.substring(startAt-2, startAt);
  } 
  else { //odd 
      //if it's odd get the middle char
    
      let startAt =Math.round((totalChars/2))-1;
    
      return str.substring(startAt,startAt+1);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  //using built-in array methods split,reverse and join
  let splitWords = word.split(""); //split words into array 

  splitWords =splitWords.reverse(); //reverse it
  splitWords = splitWords.join(""); //then join them together

  return splitWords;

}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!

  //go through each element of words, reverse it then assign to new array 
  let newWords = [];

  for(let i = 0; i < words.length; i++){

      let splitWord=words[i].split("");
      let newWord = splitWord.reverse().join("");
      
      newWords.push(newWord);
  }
  return newWords;

}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!

  let jsonUsers = JSON.stringify(users); //make it string then parse it to get objects with properties
  let newusers=JSON.parse(jsonUsers);
  let linuxCount=0;
   
  newusers.forEach(user => {
   // console.log(user.type);
    if(user.type=="Linux") linuxCount++; //count linux users
  });
  return linuxCount;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
   
  let meanScore = 0;
  for(let i=0;i<scores.length;i++){
    //loop the array scores add then and then devide the total with length of array 
    meanScore+=scores[i];
  }

  return parseFloat((meanScore /= scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  //if n is devisible by 3 using % modulo opeation
  if(n % 3 === 0 && n % 5 === 0){
    return "fizzbuzz";
  }
  else if(n % 5 === 0){
    return "buzz";
  }
  else if(n % 3 !== 0 && n % 5 !== 0 ){
    return n;
  }
  else if(n % 3 === 0){
    return "fizz";
  }
   

}
