/*
  //Problem
  ----------
  1.Write a function that returns the sum of two numbers.
  2.Write a function that returns the sum of all numbers regardless of params.

  //Example
  ----------
  For param1 = 1 and param2 = 2, the outputshould be add(param1, param2) = 3;

  //Hints
  -----
  Arithmetic operator
  rest operators
  forEach();
*/

function sum(param1, param2) {
  return param1 + param2;
}
console.log(sum(15, 30));



function totalSum(...params1) {
  let total = 0;
  params1.forEach(element=> {
    total += element;
  });
  return total;
}
console.log(totalSum(1,2,3,4,10));