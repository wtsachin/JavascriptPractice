// Primitive
/*
    - call by value
    -
    7 Types = String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const idanatherId = Symbol('123')

console.log(id === idanatherId)

const bigNumber = 6547896547896541n

// Reference Type (Reference Type)
/**
 * Array, Objects, Functions
 * browser events
 */

const heros = ["Shaktiman", "nagar", "doga"]
let myObj = {
    name : "Sachin",
    age : 25
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
- Stack (Primitive) Heap (Non Primitive)

*/