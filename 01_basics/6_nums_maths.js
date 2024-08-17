const score = 400

const balance = new Number(100)
//console.log(balance)
//console.log(balance.toString().length)
//console.log(balance.toFixed(1))


const otherNumber = 23.7688
//console.log(otherNumber.toPrecision(3))
const hund=3400000
//console.log(hund.toLocaleString('en-In'))

//++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,6,8,6))



const rand =Math.random()
console.log(rand)
console.log(rand * 10)
console.log((rand * 10)+1)
console.log(Math.floor((rand * 10)+1))


const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
