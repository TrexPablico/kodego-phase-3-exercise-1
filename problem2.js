function checkOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }

  return true;
}
const array1 = [2, 4, 6, 8, 10];
console.log(checkOdd(array1));

const array2 = [1, 2, 3, 4, 5, 6];
console.log(checkOdd(array2));
