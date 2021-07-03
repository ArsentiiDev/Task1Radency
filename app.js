//variables
const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
]
//seceltors
const todoName = document.querySelector('.add_todo_name');
const todoContent = document.querySelector('.add_todo_content');
const todoButton = document.querySelector('.add_todo_btn');
const todoList = document.querySelector('.todo_list');
const todoCategory = document.querySelector('.category_list');
const todoDates = document.querySelector('.add_todo_dates');
//event listeners
todoButton.addEventListener('click', addItem);
//functions
function addItem(event) {
    //prevent from submitting
    event.preventDefault()
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('list_item_div')
    const newTodo = document.createElement('li');
    const date = new Date()
    let dates = (todoDates.value).split(',')
    console.log(todoContent.value)
    /*newTodo.innerHTML='<form>'+'<div class="todoNameIcon">'+setIcon(todoCategory.value)+checkNull(todoName.value)+'</div>'+'<span class="todo_list_date">'+months[date.getMonth()]+' '+date.getDay()+','+date.getFullYear()+'</span>'+'<span class="todo_item_category">'+todoCategory.value+'</span>'+'<span class="todo_item_content">'+checkNull(todoContent.value)+'</span>'+'<span class="todo_list_dates>'+dates+'</span></form>';*/
    newTodo.innerHTML='<form>'+'<span>'+setIcon(todoCategory.value)+checkNull(todoName.value)+'</span>'+'<span>'+months[date.getMonth()]+' '+date.getDay()+','+date.getFullYear()+'</span>'+'<span>'+todoCategory.value+'</span>'+'<span>'+checkNull(todoContent.value)+'</span>'+'<span>'+dates+'</span>'+'</form>';
    newTodo.classList.add('list_item_li')
    todoDiv.appendChild(newTodo);
    //edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'
    editButton.classList.add('edit-btn')
    newTodo.appendChild(editButton)
    //archive button
    const archiveButton = document.createElement('button');
    archiveButton.innerHTML = '<i class="fas fa-archive"></i>'
    archiveButton.classList.add('archive-btn')
    newTodo.appendChild(archiveButton)
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn')
    newTodo.appendChild(deleteButton)
    todoList.appendChild(todoDiv)
}
function getSelectedValue() {
    let selectedValue = document.querySelector(".category_list").value
    console.log(selectedValue)
}
function setIcon(value) {
    console.log(value)
    if(value == 'qoute') return '<i class="fas fa-quote-right" id="qouteIcon"></i>'
    if(value == 'task') return '<i class="fas fa-thumbtack" id="taskIcon"></i>'
    if(value == 'idea') return '<i class="fas fa-lightbulb" id="ideaIcon"></i>'
    if(value == 'random thought') return '<i class="fas fa-head-side-virus" id="randomIcon"></i>'
}
function checkNull(value) {
    if(!value) return 'None';
    else return value;
}