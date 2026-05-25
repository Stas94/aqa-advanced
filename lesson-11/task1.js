const printAfterDelay = (text, milliseconds) => {
  setTimeout(() => console.log(text), milliseconds);
};

printAfterDelay("Привіт", 2000);

printAfterDelay("Hello World", 500);

printAfterDelay("JavaScript", 0);