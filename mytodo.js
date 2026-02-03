const input = document.querySelector('#placeholder')
const deleteb = document.querySelector('#deletebu')
const ultag = document.querySelector('#ul')
const button = document.querySelector('#add')
const mydate = document.querySelector('#date')

  button.addEventListener('click',add)
window.addEventListener('load', loadmytodo )

// THIS MY ADD FUNCTION,WHE  I USE BOTH MY CREATODO AND SAVETODO FUNCTION
function add() {

 
if(!input.value || !mydate.value) return;
createtodo(input.value,mydate.value)
saveTodo(input.value,mydate.value)

input.value = ''
mydate.value = ''
}
 

function createtodo(task, date) {
const li = document.createElement('li')
       
   li.style.fontSize = '22px'
    li.style.fontWeight = 'bold'
   li.style.alignItems = 'Center'
   li.style.listStyle = 'none'
   li.classList.add('box')
   const span = document.createElement('span')
   span.textContent = `${task} - ${date}`

   const deletemybutton = document.createElement('button')
   deletemybutton.textContent ='DELETE'
deletemybutton.style.backgroundColor = 'red'
deletemybutton.style.width = '90px'
deletemybutton.style.height = '40px'

  
deletemybutton.addEventListener('click', () => {

    li.remove()
         deleteone(task,date) 
   
})
   li.append(span,deletemybutton)
   ultag.appendChild(li)
li.value = ''
    
}

function saveTodo(task, date) {
    const todolist = JSON.parse(localStorage.getItem('todoolist')) || [] 
    todolist.push({task,date,});
    localStorage.setItem('todoolist', JSON.stringify(todolist))
}
function loadmytodo() {
    const todolist = JSON.parse(localStorage.getItem('todoolist')) || [];
    todolist.forEach(todo => {
createtodo(todo.task, todo.date)

    })
}

function deleteone() {
let todolist = JSON.parse(localStorage.getItem('todolist'))

   todolist =     localStorage.removeItem('todoolist')


}



deleteALL ()

function deleteALL () {
deleteb.addEventListener('click', ()=>  {



        localStorage.removeItem('todoolist')
    
    ultag.innerHTML = '';
})
}





 function cook(name) {
    name = "ife"
   console.log(`HELLO MUM COOK FOR ${name}`)
 }

