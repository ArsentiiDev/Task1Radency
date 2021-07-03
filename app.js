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
todoList.addEventListener('click', deleteCheck);
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
    newTodo.innerHTML='<form>'+'<span>'+setIcon(todoCategory.value)+checkNull(todoName.value)+'</span>'+'<p>'+months[date.getMonth()]+' '+date.getDay()+','+date.getFullYear()+'</p>'+'<span>'+todoCategory.value+'</span>'+'<span>'+checkNull(todoContent.value)+'</span>'+'<span>'+dates+'</span>'+'</form>';
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
    //append to list
    todoList.appendChild(todoDiv)
    const todos = todoList.childNodes;
    console.log(todos)
    //clear input values
    todoName.value =""
    todoContent.value =""
    todoDates.value =""
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
function deleteCheck(e) {
    const item = e.target;
    //delete
    const todo = item.parentElement;
    if(item.classList[0]==='delete-btn'){
        todo.remove();
    } else if(item.classList[0]==='edit-btn'){
        const form = todo.firstElementChild;
        const spanName = form.firstElementChild;
        const spans = form.childNodes;
        console.log(spans)
        spans.forEach(function(currentValue,currentIndex,listObj){
            if(currentIndex==1) ++currentIndex;
            if(currentIndex==2){
                const select = document.createElement('select');
                let firstOption = new Option('Random Thought','random thought');
                let secondOption = new Option("Idea","idea");
                let thirdOption = new Option('Task','task');
                let forthOption = new Option('Quote','quote');
                let options = [firstOption,secondOption,thirdOption,forthOption];
                for(let i=0; i<4; i++){
                select.options[select.options.length]=options[i];
                }
                form.insertBefore(select,spans[currentIndex]);
                form.removeChild(spans[++currentIndex]);
            }
            const input = document.createElement('input');
            input.type = "text";
            console.log(currentIndex);
            input.value=spans[currentIndex].textContent;
            input.classList.add('edit_input')
            console.log(spans);
            form.insertBefore(input,spans[currentIndex]);
            form.removeChild(spans[++currentIndex])
        })
           
            const submitBtn = item.firstChild;
            submitBtn.classList.toggle('fa-pencil-alt');
            submitBtn.classList.toggle('fa-check');
            item.classList.toggle('edit-btn');
            item.classList.toggle('submit-btn');
    }
}
