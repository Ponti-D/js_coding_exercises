export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let smallNums = [];
  //using for loop
  /*   for(let i = 0; i < nums.length; i++){
        if(nums[i] < 1){
          smallNums.push(nums[i]);
        }
    } 
  */
 //using for each
  nums.forEach(item => {
    if(item < 1) smallNums.push(item);
  });
  
  return smallNums ;

}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  let namesWithChar = [];
  //using for loop
  /* for(let i = 0; i < names.length; i++){
      if(names[i].substring(0,1).toUpperCase() === char.toUpperCase()){
        namesWithChar.push(names[i]);
      }
  } */

  //using foreach
  names.forEach(element => {
    if(element.substring(0,1).toUpperCase() === char.toUpperCase()){
      namesWithChar.push(element);
    }});

  return namesWithChar;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  let verbsFound =[];
  //using for loop
  /* for(let i = 0 ; i < words.length ;i++ ){
        if(words[i].substring(0,3) ==='to ') verbsFound.push(words[i]);
      } */

  //using foreach
  words.forEach(element => {
    if(element.substring(0,3) ==='to ') verbsFound.push(element);
  });

  return verbsFound;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let results =[];
  //using forloop
  /* for(let i = 0 ; i < nums.length ;i++ ){
    if(nums[i] % 1===0) results.push(nums[i]);
  } */

  //using filter
  results =nums.filter(function(item){
    if(item % 1 === 0) {
      return true;
    }else {
      return false;
    }
  });
  
  return results;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here

  let citiesFound=[];

  /* for(let i = 0 ; i < users.length ; i++){
    citiesFound.push(users[i].data.city.displayName);
  } */

  //using .map()
  citiesFound = users.map(function(element){
    return element.data.city.displayName;
 });
  return citiesFound;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  
  let findSquareRoots = [];
  //using  forloop
  /* for(let i = 0 ; i < nums.length ;i++ ){
    findSquareRoots.push( parseFloat( Math.sqrt(nums[i]).toFixed(2))); //to keep .00 away use parseFloat
  } */
  //using foreach
  nums.forEach(function (element)  {
    findSquareRoots.push(parseFloat( Math.sqrt(element).toFixed(2)));
  });
  return findSquareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  
  let sentencesFound = [];
  //using for loop
 /* for(let i = 0 ; i < sentences.length ;i++ ){
  if(sentences[i].toLowerCase().includes(str.toLowerCase())) sentencesFound.push(sentences[i]); //for not being case sensitive
 } */

 //using filter
 sentencesFound = sentences.filter(function (item){
  if(item.toLowerCase().includes(str.toLowerCase())) {
   return true;
  }else {
   return false;
  }
});
 return sentencesFound;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  
  let longestSides =[];
   
 /*  for (let i = 0; i < triangles.length; i++) {
    //console.log(triangles[i]);
    longestSides.push(Math.max(...triangles[i])); //using max method we can pass array in ..  
  } */

  //using foreach
  triangles.forEach(function(item) {
    longestSides.push(Math.max(...item));
  }); 
  
  return longestSides;

}
