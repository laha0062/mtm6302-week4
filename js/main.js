console.log("js file added")

const region = "Canada"

if(region === "Canada"){
    console.log("You are seeing the canadian version of the site")
}

let price = 20
const shippingFee = 15
let cartTotal

if(price >= 50){
    cartTotal = price
}
else {
    cartTotal = price + shippingFee
}

document.getElementById("cart1").innerHTML += "your cart total is " + cartTotal

//reassigning the price
price = 105
const discount = 0.15

if(price >= 100){
    cartTotal = price - (price * discount)
} else if(price >= 50) {
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
document.getElementById("cart2").innerHTML += "your cart total is " + cartTotal

/* Switch */

let planet = "Saturn"
let message 
switch(planet){
    case "Earth":
        message = "welcome to the third planet!"
        break
    case "Mars":
        message = "welcome to the red planet!"
        break
    case "Jupiter":
        message = "welcome to the largest planet"
        break
    default:
        message = `you are on ${planet} we do not service ${planet} yet!`
}
document.getElementById("planet").innerHTML += message

// Switch example 2 with stacking cases
let answer = "c"

switch (answer) {
    case "a":
    case "b":
    case "d":
        document.getElementById("quiz").innerHTML += "incorrect answer please try again"

        break
    case "c":
        document.getElementById("quiz").innerHTML += "correct answer, good job"
}

/* Functions */

function myName(){
    return "Iain"
}
let firstName = myName()
document.querySelector(".container h1").innerHTML += " " + firstName

//by typing changeBg(xxxx), the fuction name, into the console with an input we can change to color of the page
function changeBg(bgColor){
    document.querySelector("body").style.backgroundColor = bgColor
}

function textResize(newFontSize){
    document.querySelector("html").style.fontSize = newFontSize
}

//cal
function calculator(a,b,operator){
    let result
    switch (operator) {
        case "add":
            result = a + b
            break;
        case "sub":
            result = a - b   
            break;
        case "multi":
            result = a * b
            break
        case "div":
            result = a / b
            break
        default:
            result = "I do not understand"
            break;
    }
    return result
}
console.log(calculator(34, 56, "multi"))
console.log(calculator(21, 21, "add"))