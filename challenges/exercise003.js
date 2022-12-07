export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
 
  return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newCamelCaseWords = words[0];
  
  for (let i = 1; i < words.length; i++) {
    let newWord = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    newCamelCaseWords += newWord;
  }
  return newCamelCaseWords;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let countSubjects = 0;

  people.forEach((element) => {
    countSubjects = countSubjects + element.subjects.length;
  });
  return countSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  return menu.some((menu) => menu.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicateValues = arr1.filter((value) => arr2.includes(value)).sort();

  return duplicateValues.filter((value, index) => duplicateValues.indexOf(value) === index);
}
