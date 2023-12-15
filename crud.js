let input = document.getElementById('input')
let cont = document.querySelector('.container')
    document.body.append(cont)
let ul = document.createElement('ul')
    cont.append(ul)



let clear = document.createElement('b')
    clear.innerHTML   = '<br> <b onclick="clr()">Clear All</b> '
    

let l = null

function create(){


   if(l == null){

     if(input.value !=''){
          let li = document.createElement('li')
          li.innerHTML = '<p>'+input.value+'</p><span><button onclick="edit(this)">+</button><button onclick="del(this)">X</button></span>'
          ul.append(li)
          ul.append(clear)
    
     }else{
          alert('Invalid creadential')
     }
  
   }else{
        update(l)
   }
      
  input.value = ''


}



function edit(btn)
{
  l = btn.parentElement.parentElement.firstChild
  input.value = l.innerText
}


function update(list){
   list.innerHTML = input.value
   l = null
   input.value = ''

}

function del(btn){
     btn.parentElement.parentElement.remove()
}

function clr(){
   ul.innerHTML = ''
}