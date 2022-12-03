export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  // Your code here!
  const indexOfN = nums.indexOf(n);
  //get the index of the item n then use that to get the next one 
  if(indexOfN < 0 ) return null;
  if(indexOfN === nums.length-1) return null; 
  
  return nums[indexOfN +1];
  
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  const frequencies = {1:0, 0:0};
  const strSplit = str.split("");
  
  strSplit.forEach(x => { 
    if(frequencies[x] !==undefined){
      
      frequencies[x]++;
    }
  });
  return frequencies;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const newN = n.toString().split("");
  const reverseN = [] ;

  newN.forEach( x => {
    reverseN.push(x); 
  })
  
  const newReverseN=reverseN.reverse().join('');  
  return parseFloat(newReverseN);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

  let sum=0; 
  arrs.forEach(function(item){
    const sumitem = item.reduce((accumulator, currentValue) => accumulator + currentValue);
    sum += sumitem; //ahh took a while..
  });

  return sum; 
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
 
  if (arr.length >1) {
    const firstItem = arr[0];
    const lastItem = arr[arr.length-1];

    arr[0] = lastItem;
    arr[arr.length-1]= firstItem;
   // console.log(arr);
  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  
  const arrObj = Object.values(haystack); // convert it to array so can use some() 

  //create expression for some()
  const findWords =  (element) => (typeof element === 'string') && element.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  return arrObj.some(findWords);

};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  const frequencies = {};
  const strSplit = str.split(" ");
  console.log(strSplit);
 
  strSplit.forEach(x => { 
     
    const reg = new RegExp(/^[a-zA-Z]/); //to test the last char
    
    x= x.toLowerCase();

    let oddChar=x.substring((x.length-1));
    console.log(oddChar);
    
    if(!reg.test(oddChar)) {
      x = (x.slice(0, -1));
      console.log(x);     
    }

    if(frequencies[x] !==undefined){      
      frequencies[x]++;

    }else{
      frequencies[x]= 1;
    } 

  });

  return frequencies;

};
