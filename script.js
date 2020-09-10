const toggleCheck = (id) => document.querySelector('#' + id).classList.toggle('checked');

const removeItem = (id) => document.querySelector('#' + id).remove();

const createTodo = () => {
    const inputTodo = document.querySelector("#newTodo").value;

    if(inputTodo === "") {
        return;
    }
    else {
        const countItems = "todo" + (todoList.getElementsByTagName("li").length + 1);
        const item = document.createElement("li");
        item.setAttribute("id", countItems);

        const itemCheckbox = document.createElement("input");
        itemCheckbox.type = "checkbox";
        itemCheckbox.addEventListener('click', () => toggleCheck(item.id));

        const itemLabel = document.createElement("label");
        itemLabel.appendChild(document.createTextNode(inputTodo)); 

        const itemDeleteButton = document.createElement("button");
        itemDeleteButton.textContent = "Delete";
        // itemDeleteButton.className = "Delete";
        itemDeleteButton.addEventListener('click', () => removeItem(item.id));

        item.appendChild(itemCheckbox);
        item.appendChild(itemLabel);
        item.appendChild(itemDeleteButton);
    
        document.querySelector("#todoList").appendChild(item);
        document.querySelector("#newTodo").value = "";
    }
}

document.querySelector("#add").addEventListener('click', (event) => {
    event.preventDefault();  
    createTodo();
});

document.querySelector("#newTodo").addEventListener('keyup', (event) => {
    if(event.keyCode === 13 || event.key === "Enter")
    {
        event.preventDefault();
        createTodo();
    }
});