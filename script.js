let toggleCheck = (id) => {
    document.querySelector('#' + id).classList.toggle('checked');
}

const removeItem = (id) => {   
    let item = document.getElementById(id);
    item.remove();
}

let createTodo = (todo) => {
    let countItems = "todo" + (todoList.getElementsByTagName("li").length + 1);
    let item = document.createElement("li");
    item.setAttribute("id", countItems);

    let itemCheckbox = document.createElement("input");
    itemCheckbox.type = "checkbox";
    itemCheckbox.addEventListener('click', () => toggleCheck(item.id));

    let itemLabel = document.createElement("label");
    itemLabel.appendChild(document.createTextNode(todo)); 

    let itemDeleteButton = document.createElement("button");
    itemDeleteButton.textContent = "Delete";
    // itemDeleteButton.className = "delete";
    itemDeleteButton.addEventListener('click', () => removeItem(item.id));

    item.appendChild(itemCheckbox);
    item.appendChild(itemLabel);
    item.appendChild(itemDeleteButton);
 
    return item;
}

let addNewTodo = () => {
    let inputTodo = document.querySelector("#newTodo");

    if(inputTodo.value === "") {
        return;
    }
    else {
        let newItem = createTodo(inputTodo.value);
        let todoList = document.querySelector("#todoList");
        todoList.appendChild(newItem);
        inputTodo.value = "";
    }
}

document.querySelector("#add").addEventListener('click', () => {
    event.preventDefault();  
    addNewTodo();
});

document.querySelector("#newTodo").addEventListener('keyup', (event) => {
    if(event.keyCode === 13 || event.key === "Enter")
    {
        event.preventDefault();
        addNewTodo();
    }
});