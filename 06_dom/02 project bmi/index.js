const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const h= parseInt(document.querySelector('#height').value)
  const w= parseInt(document.querySelector('#weight').value)
  const r= document.querySelector('#results')

  if(h ===''||h<0||isNaN(h)){
    r.innerHTML = "give valid number";
  }else if(w ===''||w<0||isNaN(w)){
    r.innerHTML = "give valid number";
  }else{
  const bmi= (w/ ((h*h)/10000)).toFixed(2) 

  console.log(bmi);
  r.innerHTML=`<span>${bmi}</span>`;
  };

});