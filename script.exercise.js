// console.log("hello world")

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box1").forEach(e=>{
//     e.style.backgroundColor = "red"
// })

//  document.querySelectorAll(".box2").forEach(e=>{
//      e.style.backgroundColor = "blue"
//  })

//  document.querySelectorAll(".box3").forEach(e=>{
//      e.style.backgroundColor = "green"

//  })

//  document.querySelectorAll(".box4").forEach(e=>{
//      e.style.backgroundColor = "yellow"

//  })

//  document.querySelectorAll(".box5").forEach(e=>{
//      e.style.backgroundColor = "grey"

//  })

console.log("script.js initializing")
let boxes = documnet.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255); 
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})