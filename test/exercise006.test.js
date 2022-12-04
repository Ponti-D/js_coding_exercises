import {
    sumMultiples,
    isValidDNA,
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

