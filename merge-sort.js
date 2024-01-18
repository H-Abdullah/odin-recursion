function mergeSort(arr) {
  // return the arr if left with one element 
  if (arr.length <= 1) {
    return arr;
  }
  
  // get midpoint for the arr 
  const midpoint = Math.floor(arr.length / 2 );
  // get left half of the arr
  const leftHalf = arr.slice(0, midpoint);
  // get right half of the arr 
  const rightHalf = arr.slice(midpoint);
  
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  // left and right value only appear after mergeSort reached base case 
  let leftArray = left;
  let rightArray = right;
  let resultArr = [];

  // check if whether the array still can do comparison (< lesser than) or (> more than) 
  while (leftArray.length > 0 && rightArray.length > 0) {
    // check if array (< lesser than) or (= equal)
    if (leftArray[0] <= rightArray[0]) {
      resultArr.push(leftArray.shift());
    } else {
      // if array (> more than) 
      resultArr.push(rightArray.shift());
    }
  }

  // concat the remaining array from while loop 
  resultArr = resultArr.concat(leftArray, rightArray);
  return resultArr
} 

const arr1 = [4, 2, 5, 1, 9, 10, 7, 43, 75, 8.2, 7, 6];
const arr2 = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(arr1));