function sequence(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(sequence([1, 2, 3, 1]));
console.log(sequence([1, 3, 1]));
console.log(sequence([1, 2, 3]));
console.log(sequence([2, 3, 4]));
console.log(sequence([5, 6, 7, 9]));
console.log(sequence([2, 2, 3, 1]));
