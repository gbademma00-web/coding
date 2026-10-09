// Start 1
// const $coursName = "JavaScript Basics"
// const day = `Friday`
// const week = null
// let _studentCount 

// console.log($coursName.length)
// console.log(day.toUpperCase(day))
// console.log(week)
// console.log(_studentCount + " " + "Students attended today's Class")

// // Start 2
// // Operators
// const a = 10
// const b = 5
// let sum = a + b
// let diff = a - b
// let multiply = a * b
// let divide = a / b
// let reminder = a % b
// let exponential = a ** b
// let count = 5
// count--
// console.log(sum)
// console.log(diff) 
// console.log(multiply)
// console.log(divide)
// console.log(reminder)
// console.log(exponential)
// console.log(count)

// // Start 3
// // Comparison 
// const fName = "5"
// const lName = 5
// const sName = 6

// console.log(fName == lName) //True
// console.log(fName !== sName) //False

// // Start 4
// // Logic Operation
// const a = 10
// const b = 5
// const c = 6
// const d = 10

// console.log(a > b)
// console.log(a < b)
// console.log(a < c)
// console.log(c >= b)
// console.log(d <= c)
// console.log(d >= a)

// Start 4 Logic Operators
// const name = "Antthony"
// const message = `Welcome, ${name}`
// // $ + {variable}
// let Age = 2026-1999
// let Age2 = 2026-2010
// const hasID = true

// console.log(message)
// console.log("I am " + Age + " years old")
// console.log("I am " + Age2 + " years old")
// console.log(Age >= 18 && hasID)
// console.log(Age < 18 || hasID)
// console.log(Age2 > 18 != hasID)
// console.log(Age2 < 18 || hasID)

// Start 5 If statement
// Add another condition to the 'else if' but NO condition to the 'else'
// let score =  65

// console.log("Your Score is " + score)
// if (score >= 90) {
//     console.log("Grade: A")
// } else if (score >= 70) {
//      console.log("Grade: B")
// } else if (score >= 60) {
//      console.log("Grade: C")
// } else {
//     console.log("Grade: Needs Improvement")
// }

// Start 6 Looping  Statement {for loop & while loop}
// While loop most suitable for conditions to be met. Don't know when the condition will stop, but declare it to stop once the condition becomes false (fuel gauge)
// let count = 1
// while (count <= 10) {
//     console.log("Count it: " + count)
//     count = count + 1
// }
// For loop most suitable for numbers (phone charging) let i = 1 is the initialiation. i <= 10 is the condition. i++ is the afterthought
// for (let i = 1; i <= 10; i++) {
//     console.log(
//         "Numbers:" + i
//     )
// }
// Start 7 Function Statement
// function functionName (which you will call) (parameters) {console or task}
// functionName("arguements")
// function helloStudents(name) {
//     console.log("Hello, welcome to to today's class of JavaScript " + name + "!")
// }
// helloStudents("Micheal")
// helloStudents("Emmanuella")
// helloStudents("Israel")

//"Return" values 
//  function add(a, b) {
//     return a + b [as long as there is 'return' the function will never stop executing]
// }

// let perimeter = add(4, 5) * 2
// let result = add(4, 5) * 8
// console.log(perimeter)
// console.log(result)

// Parameters and arguements
// function area(a, b) {
//     console.log(0.5 * a * b)
// }

// area(8, 2) * 2
//The variable [* 2] did not work, because it is only executing the function described in the console.log, so the * 2 can't work


// Start 8 Arrays: set of objects that have same properties, like "fruit". It is an orderly arrangement set of value under a single variable element. it have an index
//  const fruits = ["Apple", "Banana", "Orange"]

//  const num = [2, 5, 12, 17, 20]

//  const mixed = [2, "Mary", true, null]
// // Push adds item at the end of the element in an array "Push = Unshift"
//  fruits.push("Mango")
//  fruits.push("Cherry")
// // Pop removes the last item in the element
//  fruits.pop()
// // Shift removes the first item in the element "Shift = Pop"
//  fruits.shift()
// //  Unshift adds an item to the beginning
// fruits.unshift("Guava")
// // Includes chcek if an item is an element 
// // IndexOf to check its location {but you have to define the element (as const) in a variable to be able to use it}
// const fruit= fruits.indexOf("Banana")
// // Includes checks if an item is in the array and returns a boolean value (true or false) 
// const inde = fruits.includes("Apple")

//  console.log(fruit)
//  console.log(inde)
//  console.log(fruits)

// Start 9 Looping through an array
// const colors = ["Red", "Blue", "Green"]
// const name = "Anthony"

// console.log(name.length)
// First style
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }
// Second style. We can use i or another name
// for (let glory of colors) {
//     console.log(glory)
// }
// Third style {For each looping}
// const colors = ["Red", "Blue", "Green"]

// colors.forEach(function(color, index) {
//     console.log(index + ":" + color)
// }
// )

// Start 10 Objects
// const id= {
//     name: "Ajayi Hikmat",
//     sId: "AH01",
//     age: 16,
//     isPresent: true,
//     class: "SS1",
//     subjects: ["Maths", "Science", "English"]
// }
// id.class = "SS2"
// const key = "sId"

// console.log(id.class)
// console.log(id[key])

// Start 11 Array of Objects
// const pupils = [
//     {id:1, name: "Ajayi", age: 16, isPresent: true},
//     {id:2, name: "Anthony", age: 16, isPresent: false},
//     {id:3, name: "Makinde", age: 16, isPresent: true},
// ]

// console.log(pupils[0].name)
// console.log(pupils[1].isPresent)
// console.log(pupils[2].age)
// console.log(pupils[2].name)
// console.log(pupils[1].age)
// console.log(pupils[1].name)

// Start 12 Looping of Objects
const pupils = [
    {id:1, name: "Ajayi", age: 16, isPresent: true},
    {id:2, name: "Anthony", age: 16, isPresent: false},
    {id:3, name: "Makinde", age: 16, isPresent: true},
]
// iho can be replaced with anything, as long as you are defining the array class "pupils", this array class shows where each element will be taken from.
for (let ilo of pupils) {
    if (ilo.isPresent === true) {
        console.log(ilo.name + " is Present " + ilo.age)
    }
    else {
        console.log(ilo.name + " is Absent ")
    }
}