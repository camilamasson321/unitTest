// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

const { dollarsToYen } = require('./app.js');

test('turns 10 dollars into 1065 yen', () => {
    //inside the test we call our sum function with 2 numbers
    let total = dollarsToYen(10);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(1065);
});

const { eurosToDollars } = require('./app.js');

test('turns 10 dollars into 12 euros', () => {
    //inside the test we call our sum function with 2 numbers
    let total = eurosToDollars(10);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(12);
});

const { yenToPound } = require('./app.js');

test('turns 1000 yen into 6.254886630179828 pounds', () => {
    //inside the test we call our sum function with 2 numbers
    let total = yenToPound(1000);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(6.254886630179828);
});