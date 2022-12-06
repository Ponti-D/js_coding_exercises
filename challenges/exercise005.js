export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  const indexOfN = nums.indexOf(n);

  if(indexOfN < 0 ) return null;
  if(indexOfN === nums.length-1) return null; 
  
  return nums[indexOfN +1];
  
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

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
 
  return parseFloat(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let sum=0; 
  arrs.forEach((item) => {
    const sumitem = item.reduce((accumulator, currentValue) => accumulator + currentValue);
    sum += sumitem;
  });

  return sum; 
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
 
  if (arr.length >1) {
    const firstItem = arr[0];
    const lastItem = arr[arr.length-1];

    arr[0] = lastItem;
    arr[arr.length-1]= firstItem;

  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  const arrObj = Object.values(haystack); 
  const findWords =  (element) => (typeof element === 'string') && element.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  return arrObj.some(findWords);

};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = {};
  const strSplit = str.split(" ");
  console.log(strSplit);
 
  strSplit.forEach(x => { 
     
    const reg = new RegExp(/^[a-zA-Z]/); 
    
    x= x.toLowerCase();

    let oddChar=x.substring((x.length-1));
    
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
