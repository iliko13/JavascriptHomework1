//დავალება 1

function Homework1(a, b) {
    if (a === b) {
        return "ტოლია"
    } else {
        return "არ არის ტოლი"
    }
}

console.log(Homework1(4, 4)) // ტოლია
console.log(Homework1(3, 4)) // არ არის ტოლი

//დავალება 2

function toCelsius(fahrenheit) {
    let fTemp = fahrenheit;
    let ftoCel = 5 / 9 * (fTemp - 32);
    let message =fTemp + "is" + ftoCel;
    
    
    if (typeof(fahrenheit) === "string") {
        return "False"
      } else {
        return message
      }
  }

console.log(toCelsius("ilia")) // false
console.log(toCelsius(10)) // -12.2


//დავალება 3

function homework3 (a, b, operation) {
    if (operation === "*") return a * b;
    if (operation === "-") return a - b;
    if (operation === "+") return a + b;
    if (operation === "/") return b === 0 ? "can not divide" : a / b;
    if (operation !== "/" && operation !== "*" && operation !== "-" && operation !== "+")
    return "Please enter correct number"
}

console.log(homework3(2, 5, "*")) // 10
console.log(homework3(10, 5, "/")) // 2
console.log(homework3(2, 5, "+")) // 7
console.log(homework3(2, 5, "-")) // -3
console.log(homework3(2, 5, "&")) //Please enter correct number