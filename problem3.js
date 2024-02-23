function multiplyString(str, n) {
  if (typeof n !== "number" || n <= 0) {
    n - 1;
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

console.log(multiplyString("hi", 5));
console.log(multiplyString("Trex", 3));
console.log(multiplyString("MilkTea", 90));
console.log(multiplyString("Robot"));
