// Fibonacci is a sequence of numbers where each number is the sum of the two preceding ones,
// usually starting with 0 and 1. The sequence begins 0, 1, 1, 2, 3, 5, 8, 13, and so on. 
// The Fibonacci sequence exhibits a mathematical pattern found in various natural phenomena
//  and is widely used in mathematics and computer science for its unique properties and applications.

function fiboLoop(n) {
  
  if ( n === 1 || n === 2 ) {
    return 1;
  }

  let fValue = 1;
  let sValue = 1;
  let fiboArray = [0, 1,];

  for (let i = 3; i <= n; i++) {
    let tValue = fValue + sValue;
    fValue = sValue;
    sValue = tValue;
    fiboArray.push(sValue);
  }

  return fiboArray;
}

console.log(fiboLoop(10));

function fiboRecursion(n) {
  if ( n === 1 || n === 2 ) return 1;

  return fiboRecursion(n-1) + fiboRecursion(n-2);
}

console.log(fiboRecursion(10));
