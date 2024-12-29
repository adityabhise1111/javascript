javascript execution context 

//1 global execution context (reffered to this keyword) 
// js is single threaded language
// js is synchronous language

//2 functional execution context
//3 eval function execution context( not used property of global)


// 2 phases of execution 
//1. memory creation phase (space allocated) 
//2. execution phase ()

let val1 = 10
let val2 = 20
function add(val1){
    let res = val1+val2
    console.log(res)
}   
let res = add(val1, val2)
console.log(res)

//step 1: global execution alocated in this keyword

//step 2: memory creation phase 
//       variables  
//       val1 =undefined, 
//       val2 = undefined,
//       add = definition, 
//       res1 = undefined
//       res2 = undefined

//step 3: execution phase
//       val1 = 10
//       val2 = 20
//       add = nothing origina l definitinon already there
       
//       add num 
//       new variable environment created
//           with execution thread
//           3.1 again memory creation phase
//               val1 = undefined
//               val2 = undefined
//               res = undefined

//           3.2 execution phase
//               val1 = 10
//               val2 = 20
//               res = 30
//               console.log(30)
//               return to global
//               environment is destroyed
//       res = undefined
//       console.log(undefined)
//       return undefined

//step 4: end of execution

//step 5: end of global execution




