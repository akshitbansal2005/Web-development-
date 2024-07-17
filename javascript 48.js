function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " your course is good too!")
}

// console.log("hey harry you are nice")
// console.log("hey harry you are good")
// console.log("hey harry your tshirt is nice!")
// console.log("hey harry your course is good too!")

// nice("Rohan")

// nice("shivam")

function sum(a, b, c = 3) {
    // console.log(a + b) 
    return a + b + c
}

result1 = sum(8, 9)
result2 = sum(4, 4)
result3 = sum(6, 3, 1)

console.log("the sum of these numbers is:", result1)
console.log("the sum of these numbers is:", result2)
console.log("the sum of these numbers is:", result3)


const func1 = (x)=>{
    console.log("i am a arrow function", x)
}

func1(34);
func1(66);
func1(84);