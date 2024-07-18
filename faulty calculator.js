/* create a faulty calculator using javascript

this faulty calculator does following
1. it takes two numbdrs as input from the user 
2. it performs wrong operation as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

it performs wrong operation 10% of the times

*/

let random = Math.random
console.log(random)
let a = prompt("enter first number")
let b = prompt("enter operation")
let c = prompt("enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-":"/",
    "/":"**",
}



if (random>0.1) {
    // perform correct calculator
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
 
}