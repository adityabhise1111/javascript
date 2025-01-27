const buttons = document.querySelectorAll('.button');
const body= document.querySelector('body')
//console.log(buttons);
buttons.forEach(
  (button)=>{
    //console.log(button);
    button.addEventListener('click',(e)=>{
      console.log(e.target.id)
      if(e.target.id){
        body.style.backgroundColor=e.target.id;
      }else{
        console.log("click on boxes");
      }
    })
  }
)