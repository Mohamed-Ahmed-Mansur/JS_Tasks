const addTask = document.getElementById('add');
const listOfTaskes = document.getElementById('insert-Task');
const arr = ["low", "Low", "intermidiate", "Intermidiate", "high", "High"];

function validation(x, y) {
    x === "" || arr.includes(y) === false ? alert('please re-enter task name and priority correctly') : x, y;
}

addTask.addEventListener('click', () => {
    let taskName = document.getElementById('task').value;
    let priorityLevel = document.getElementById('priority').value;
    validation(taskName, priorityLevel)
    if (taskName != "" && arr.includes(priorityLevel) != false) {
        // Adding new rows and columns
        const row = listOfTaskes.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        row.setAttribute("id", "new-row");
        // Assigning cells value
        let x = document.getElementById('insert-Task').rows.length;
        cell1.innerHTML = x;
        cell2.innerHTML = taskName;
        cell3.innerHTML = priorityLevel;
        // Defining Button
        const removeButton = document.createElement('Button');
        const editButton = document.createElement('Button');
        const node1 = document.createTextNode('edit');
        const node2 = document.createTextNode('remove');
        editButton.appendChild(node1);
        removeButton.appendChild(node2);
        cell4.appendChild(editButton);
        cell4.appendChild(removeButton);
        editButton.setAttribute("id", "new-button");
        removeButton.setAttribute("id", "new-button");
        removeButton.addEventListener('click', () => {
            row.style.display = 'none';
        });
    }
});



