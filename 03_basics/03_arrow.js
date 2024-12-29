// const user= {
//     username: "gitesh",
//     prices: 199,
 
//     welcome:function(){
//         console.log(`${this.username} Welcome to the website`)
//         console.log(this)
//     }
// }
// user.welcome()
// user.username = "sam"
// user.welcome()
// console.log(this) //gives empty object {}


//+++++++++
// function chai(){
//     console.log(this)    
// }
// chai() //gives object with various properties

// const chai = function(){
//     let username= "gitesh"
//     console.log(this.username )    
// }
const chai = () =>{
    let username= "gitesh"
    console.log(this)    
}
// chai() 


// basic arrow
// const addtwo = (a,b) => {
//     return a+b//expllicit return
// }


const addtwo = (a, b) => a+b //implicit return 

const two = (a, b) => {return a+b}

const tow = (a, b) => ({a+b})
console.log(tow(2,3))



