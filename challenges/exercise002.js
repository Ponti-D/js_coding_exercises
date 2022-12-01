export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  let fillings= JSON.stringify(sandwich.fillings);
  fillings=JSON.parse(fillings); //to get array of fillings
  return fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let isPersonFromManchester = (person.city==='Manchester');
  return isPersonFromManchester;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  
  //devided people with 40 (bus can hold), use ceil to round up any bits
  return Math.ceil(people / 40);

}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  const numberOfSheeps = arr.filter(word => word ==='sheep'); //using filter method you can find the sheep
  return numberOfSheeps.length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //return the flag
  return person.address.city==='Manchester';
}
