
// -------- function declaration ------------

function calcRectangle(width, height) {
    return width * height;
}

console.log(calcRectangle(5, 10));


// -------- function expression ------------

const calcRectangle1 = function(width, height) {
    return width * height;
}

console.log(calcRectangle1(10, 20));


// -------- arrow function ------------

const calcRectangle2 = (width, height) => {
    return width * height;
}

console.log(calcRectangle2(100, 100));


// -------- arrow function ------------

const calcRectangle3 = (width, height) => width * height;

console.log(calcRectangle3(50, 10));