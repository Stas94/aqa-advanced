
// Full version

const initialArray = [1, 2, 3, 4, 5];

const mutatedArray = initialArray.map((value, index) => {
    return value * index;
});

console.log(mutatedArray);


// abridged version

const initialArray = [1, 2, 3, 4, 5];

const mutatedArray = initialArray.map((value, index) => value * index);

console.log(mutatedArray);