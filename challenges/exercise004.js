export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let smallNums = [];
  for(let i = 0; i < nums.length; i++){
      if(nums[i] < 1){
        smallNums.push(nums[i]);
      }
  }
  return smallNums ;

}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesWithChar = [];
  for(let i = 0; i < names.length; i++){
      if(names[i].substring(0,1).toUpperCase() === char.toUpperCase()){
        namesWithChar.push(names[i]);
      }
  }
  return namesWithChar;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbsFound =[];
  for(let i = 0 ; i < words.length ;i++ ){
    if(words[i].substring(0,3) ==='to ') verbsFound.push(words[i]);
  }
  return verbsFound;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let results =[];
  for(let i = 0 ; i < nums.length ;i++ ){
    if(nums[i] % 1===0) results.push(nums[i]);
  }
  return results;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let citiesFound=[];

  for(let i = 0 ; i < users.length ; i++){
    citiesFound.push(users[i].data.city.displayName);
  }
  return citiesFound;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let findSquareRoots = [];
  for(let i = 0 ; i < nums.length ;i++ ){
    findSquareRoots.push( parseFloat( Math.sqrt(nums[i]).toFixed(2))); //to keep .00 away use parseFloat
  }
  return findSquareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let sentencesFound = [];
 for(let i = 0 ; i < sentences.length ;i++ ){
  if(sentences[i].toLowerCase().includes(str.toLowerCase())) sentencesFound.push(sentences[i]); //for not being case sensitive
 }
 return sentencesFound;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  
  let longestSides =[];
   
  for (let i = 0; i < triangles.length; i++) {
    //console.log(triangles[i]);
    longestSides.push(Math.max(...triangles[i])); //using max method we can pass array in ..  
  }
  return longestSides;

}
