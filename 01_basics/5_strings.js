//declaration
const GameName = new String('aditya-pandurang-bhise')
const name = "adirtya"
const repo = 50
//console.log( name + repo + "value");
console.log( `Hellow my name is ${name} and my repos are ${repo}`);
console.log(GameName[0])
console.log(GameName.__proto__)
console.log(GameName.length)
console.log(GameName.toUpperCase())
console.log(GameName.charAt(2))
console.log(GameName.indexOf('t'))

const newString = GameName.substring(0,4)
console.log(newString);

const anotherString = GameName.slice(-8,4)//only here we can use -ve indexing
console.log(anotherString);

const newStringOne = "   aditya   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://aditya.com/aditya%20bhise"
console.log(url.replace('%20','-'))

console.log(url.includes('aditya'))
console.log(url.includes('pratik'))

console.log(GameName.split('-'))
 