todoList=JSON.parse(localStorage.getItem('todoList')||[];
displayTodo();
function AddTodo(){
  const todoName=document.querySelector('.js-input-todo')
  let name=todoName.value;
  const todoDate=document.querySelector('.js-dueDate');
  const dueDate=todoDate.value;
  todoList.push({
    // name:name,
    // dueDate:dueDate
    name,
    dueDate
});
  localStorage.setItem('todoList',JSON.stringify(todoList));
  todoName.value='';
  todoDate.value='';
  displayTodo();
}
function displayTodo(){
  let todoItems='';
  for(let i=0;i<todoList.length;i++){
    let todoObject=todoList[i];
    // const name=todoObject.name;
    // const dueDate=todoObject.dueDate;
    const {name,dueDate}=todoObject;
    let html=`
    <div>
    ${name}
    </div>
    <div>
     ${dueDate}
    </div>
    <div>
    <button onclick="
      todoList.splice(${i},1);
      localStorage.setItem('todoList',JSON.stringify(todoList));
      displayTodo();
    " class="css-delete-button">Delete</button>
    </div>`;
    todoItems+=html;
    // console.log(todoItems);
  }
  document.querySelector('.js-todoContainer').innerHTML=todoItems;
  document.querySelector('.js-dueDate').value='';
}
