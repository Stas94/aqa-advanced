function checkOrder(available, ordered) {
  if (available < ordered) {
    console.log("Your order is too large, we don’t have enough goods.");
    return false;
  }

  if (ordered === 0) {
    console.log("Your order is empty");
    return false;
  }

  console.log("Your order is accepted");
  return true;
}

console.log(checkOrder(5, 6));