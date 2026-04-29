// Full version

function isAdult(age) {
  if (age >= 18) {
    console.log("Особа є повнолітньою");
    return true;
  } else {
    console.log("Особа не повнолітня");
    return false;
  }
}

// abridged version

function isAdult(age) {
  console.log(age >= 18 ? "Особа є повнолітньою" : "Особа не повнолітня");
  return age >= 18;
}

console.log(isAdult(25));
console.log(isAdult(15));