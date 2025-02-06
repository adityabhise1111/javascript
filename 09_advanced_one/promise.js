const promise1 = new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()    
    },10);
    
})

promise1.then(function(){
    console.log("Promise is consumed")

})


const promise2 = new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed")
        resolve({name:"aditya", surname:"bhise"})    
    },10);
    
})
promise2.then(function(data){
    console.log(data)

})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({name:"manish", surname:"jaiswal"})
        }
        else{
            reject("rejected piece")
        }
    },1000)
})
promise3.then((user)=>{
    console.log(user);
    return user.surname;
}).then((surname)=>{
    console.log(surname)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("either erreo eithre resolved"))
