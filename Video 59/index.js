/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)

let a = prompt("Enter your first number: ")
let b = prompt("Enter operation: ")
let c = prompt("Enter your second number: ")


obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // performs correct calculations
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    // preforms wrong calculations
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
