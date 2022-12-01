export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!

  if(nums.length===0) return []; //return empty array is nums empty
  let numSquares=[] ;
  nums.forEach(element => {
    numSquares.push(element*element);
  });
  
  return numSquares;

}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let newCamelCaseWords=words[0];
  for(let i = 1;i<words.length;i++){
    let newWord=words[i].charAt(0).toUpperCase() + words[i].substring(1);
    newCamelCaseWords+=newWord;
  }
  return newCamelCaseWords;

}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
