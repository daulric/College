import { withArray, recursive } from "../modules/fibonacci";

/* 
What i noticed is that even if the recursive method is faster in terms of writing the code, 
the execution time was very slow.

This best solution is to use an array for the fibonacci seqence and get the last element for the result.
*/

console.table(withArray(10));
console.log(recursive(10));