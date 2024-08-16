//dynamic
//Primitive

// 7 types : string ,Number , Boolean , null , Undefined , Symbol ,Bigint
const id = Symbol('456')
const gid = Symbol('456') //id not = gid
console.log(id === gid) //false


// Reference (non premitive)

// Array , objects , functions

const heros =["shaktiman","naagraj"]

let myObj = {
    name:"aditya",
    age:20,
}

const myFunction = function (){
    console.log("Namste");
}

console.log(typeof myFunction )

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (premitive copy), heap(non premi reff)

let hobby = "coding"
let nxthobby = hobby
nxthobby = "drawing";
console.log(nxthobby)

console.log(hobby)

let user ={
    email : "user@gmail.com",
    upi: "user@upi"
}

let user2 = user

user2.email ="user@outlook.com"
console.log(user.email)
console.log(user.email)