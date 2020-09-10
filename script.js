let addButton = document.getElementById("add");
let todoList = document.getElementById("todoList");

let toggleCheck = (id) => {
    document.getElementById(id).classList.toggle('checked');
}

const removeItem = (id) => {     
    let item = document.getElementById(id);
    item.remove();
}

let createTodo = (todo) => {
    let countItems = "item" + (todoList.getElementsByTagName("li").length + 1);
    let item = document.createElement("li");
    item.setAttribute("id", countItems);

    let itemCheckbox = document.createElement("input");
    // Assigning the attributes to create checkbox 
    itemCheckbox.type = "checkbox";
    itemCheckbox.onclick = () => toggleCheck(item.id);

    let itemLabel = document.createElement("label");
    itemLabel.appendChild(document.createTextNode(todo)); 

    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.innerHTML = "Delete";
    // itemDeleteButton.className = "delete";
    itemDeleteButton.onclick = () => removeItem(item.id);

    item.appendChild(itemCheckbox);
    item.appendChild(itemLabel);
    item.appendChild(itemDeleteButton);
 
    return item;
}

addButton.addEventListener('click', () => {
    event.preventDefault();
    let inputTodo = document.getElementById("newTodo");

    if(inputTodo.value === "") {
        return;
    }
    else {
        let newItem = createTodo(inputTodo.value);
        todoList.appendChild(newItem);
        inputTodo.value = "";
    }
});