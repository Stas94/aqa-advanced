function isAdult(age) {
  if (age >= 18) {
    console.log("Особа є повнолітньою");
    return true;
  } else {
    console.log("Особа не повнолітня");
    return false;
  }
}

console.log(isAdult(25));
console.log(isAdult(15));