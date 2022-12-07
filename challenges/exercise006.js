export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  
  let sumOfNumber=0;

  arr.forEach(num => {
    if(num % 3===0 || num % 5===0){
      sumOfNumber +=num;
    }
  });

  return sumOfNumber;
};

export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  
  const regExDNA = new RegExp(/^[rRcCgGtTaA]+$/);
  return (regExDNA.test(str)) ;
   
};

export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  const strArr = str.split("");

  let validDNAPairs=strArr.find((element) => element ==='T');
  validDNAPairs += strArr.find((element) => element ==='G');
  validDNAPairs += strArr.find((element) => element ==='A');
  validDNAPairs += strArr.find((element) => element === 'C');

  return validDNAPairs;

};


export const isItPrime = (n) => {

  if (n === undefined) throw new Error("n is required");
  
  if(n > 2){
    for(let i= 2; i< n ; i++){
      if(n % i === 0){
        return false;  
      }  
    }
   return true; 
  }
 
};


export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  
  let matrix = [];

  for (let row  =0 ; row < n; row++ ){
    let matrixLine = [];  
    for(let column  = 0 ; column < n ; column ++){
      matrixLine[column ] = fill ;
    }
    matrix[row]  = matrixLine;  
  }
  return matrix;
  
};


export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  
  let numberOfStaff=0;
  
  staff.forEach(staff => {
    if(staff.rota.includes(day)){ numberOfStaff++;}
  });
  return numberOfStaff>=3;

};
