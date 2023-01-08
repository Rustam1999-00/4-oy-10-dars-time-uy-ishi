
var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elList = document.querySelector('.js-list');
var elBtn = document.querySelector('.js-btn');

let inputval = +elInput.value

elForm.addEventListener('submit',(evt)=>{
    evt.preventDefault();

let newItem = document.createElement('li');
newItem.setAttribute('class','text-dark ')
let newText = document.createElement('p');
newText.textContent = elInput.value
newText.setAttribute('class','bg-warning px-4 py-3  rounded-circle d-inline ms-3 ')

newItem.appendChild(newText)

elList.appendChild(newText)



let inteval = setInterval (()=>{

    newText.textContent--
 
 console.log('hbh');
},1000)


  
let time = setTimeout(() => {
    clearInterval(inteval)
    newText.setAttribute('class','d-none')
  },elInput.value * 1000);
  elInput.value = '';
})
elBtn.addEventListener('click',function(){ 
   clearTimeout(time)

})



