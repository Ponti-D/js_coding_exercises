import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,

} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () =>{
  const arr = [1,3,5,2];    
     expect(sumMultiples(arr)).toBe(8);
  });
});

describe("isValidDNA", () => {
   test("return true string may contain characters C, G, T or A only.",() =>{
        const str ="CTG";
        expect(isValidDNA(str)).toBe(true);
    });
    test("return false - if string contains other characters thats is not C, G, T or A",() =>{
        const str ="CTGmmm";
        expect(isValidDNA(str)).toBe(false);
    });
});

describe("getComplementaryDNA", () =>{
    test("return a string of the complementary base pairs. In DNA,, T always pairs with A, and C always pairs with G", ()=> {
        const str ="CTGA";
        expect(getComplementaryDNA(str)).toEqual("TGAC");
    });
});

describe("isItPrime", () =>{
    test("This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", ()=> {     
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(6)).toBe(false);
    });
 
});
describe("createMatrix", () =>{
    test("return an array of n arrays, each filled with n items", ()=> {  
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
        expect(createMatrix(5, "red")).toEqual(
        [
            ["red", "red", "red", "red", "red"],
            ["red", "red", "red", "red", "red"],
            ["red", "red", "red", "red", "red"],
            ["red", "red", "red", "red", "red"],
            ["red", "red", "red", "red", "red"]
        ]);    
    });
});
describe("areWeCovered",()=>{
    const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"] },
        { name: "John", rota: ["Saturday", "Sunday", "Tuesday"] },
        { name: "Jane", rota: ["Sunday", "Monday", "Tuesday", "Wednesday"] }
    ];
    
    test("return true if at least 3 staff members are scduled for a give day", ()=>{
        expect(areWeCovered(staff,"Monday")).toBe(true);
    });
    test("return false if less than 3 staff members are scduled for a give day", ()=>{
        expect(areWeCovered(staff,"Friday")).toBe(false);
    });
});
 