//const addToDo = [];
let addToDo = JSON.parse(localStorage.getItem('addToDo')) || [];
// if(addToDo === null){
//     addToDo = [];
// }

function renderingToDo(){
    let divElement  = '';

for(let i =0; i < addToDo.length; i++){
    const valueObject = addToDo[i];
    const{todo} = valueObject
    const{dueDate} = valueObject;
    const Html = `<div>${todo}</div> <div> ${dueDate}</div>
                     <div><button class="delete-todo" onclick="deleteToDo(${i})">Delete</button>
                     </div> `
    divElement += Html;

}
console.log(divElement);
document.querySelector('.todo-value').innerHTML = `${divElement}`

}


function Addtodo(){
    const inputButton = document.querySelector('.js-input');
    const inputDate = document.querySelector('.js-input-date');
    let inputValue = inputButton.value;
    let dateValue = inputDate.value;
    if(inputValue && dateValue){
    addToDo.push({todo : inputValue , dueDate : dateValue});
    localStorage.setItem('addToDo' , JSON.stringify(addToDo));
    renderingToDo();
    inputButton.value = '';
    inputDate.value = '';
    }
    
    //console.log(addToDo);
}
function deleteToDo(index) {
    addToDo.splice(index, 1);
    localStorage.setItem('addToDo', JSON.stringify(addToDo));
    renderingToDo();
}
renderingToDo();