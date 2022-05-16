/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

    function addTwoNumber(a, b) {
        // code block
        return a + b;
    }

    let sum = addTwoNumber(3, 5);
    console.log(sum);

// // Arrow Function With Parameters

    const addTwoNumber = (a, b) => {
        // code block
        return a + b;
    }

    let sum3 = addTwoNumber(3, 5);
    console.log(sum3);

// // Single Line Arrow Function With Parameters

    const addTwoNumbers = (a, b) => a + b;
    const addTwoNumbers2 = (a, b) => (a + b); //* also valid *//
    
    let sum2 = addTwoNumbers (4, 8);
    console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("dikke bana");

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const multipleLinesOfCode = () => (
    `<p>
        Hallo allemaal,
        dit is het dan.
    </p>`
)

console.log(multipleLinesOfCode());