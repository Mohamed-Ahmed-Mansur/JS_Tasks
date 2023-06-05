const addTask = document.getElementById('add');
const listOfTaskes = document.getElementById('insert-Task');
const arr = ["low", "Low", "intermidiate", "Intermidiate", "high", "High"];
let taskArray = [];
let noDublicate = [];
let tasksArray = [];
let taskIndex = 0;

function validation(x, y) {
    x === "" || arr.includes(y) === false ||  noDublicate.includes(x) === true ? alert('you entered a wrong ethier task name or priority or repeated task name') : x, y;
}

addTask.addEventListener('click', () => {
    let taskName = document.getElementById('task').value;
    let priorityLevel = document.getElementById('priority').value;
    validation(taskName, priorityLevel)
    if (taskName != "" && arr.includes(priorityLevel) != false && noDublicate.includes(taskName) === false) {
        //document.getElementById('task').value = '';
        //document.getElementById('priority').value = '';
        // sorting table rows
        noDublicate.push(taskName);
        taskArray.push(taskName);
        taskArray.push(priorityLevel);
        tasksArray.push(taskArray);
        tasksArray.sort();
        taskIndex = tasksArray.indexOf(taskArray);
        taskArray = [];
        console.log(noDublicate);
        console.log(tasksArray);
        // Adding new rows and columns
        const row = listOfTaskes.insertRow(taskIndex);
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
        // Assigning an id for each new button
        editButton.setAttribute("id", "edit-button");
        removeButton.setAttribute("id", "remove-button");
        // Take actions onclick for each new button
        removeButton.addEventListener('click', () => {
            row.style.display = 'none';
        });
        editButton.addEventListener('click', () => {
            editButton.style.display = 'none';
            // Creating new inputs when edit button takes action
            const newInput1 = document.createElement('input');
            const newInput2 = document.createElement('input');
            newInput1.setAttribute('placeholder', 'please edit your task name');
            newInput2.setAttribute('placeholder', 'please edit your priority level');
            newInput1.setAttribute('id', 'new-input-1');
            newInput2.setAttribute('id', 'new-input-2');
            newInput1.setAttribute('value', cell2.innerHTML);
            newInput2.setAttribute('value', cell3.innerHTML);
            cell2.innerHTML = "";
            cell3.innerHTML = "";
            cell2.appendChild(newInput1);
            cell3.appendChild(newInput2);
            // Creating two more buttons save & delete
            const saveButton = document.createElement('Button');
            const deleteButton = document.createElement('Button');
            const node3 = document.createTextNode('save');
            const node4 = document.createTextNode('delete');
            saveButton.appendChild(node3);
            deleteButton.appendChild(node4);
            cell4.appendChild(saveButton);
            cell4.appendChild(deleteButton);
            // Assigning an id for each new button
            saveButton.setAttribute("id", "save-button");
            deleteButton.setAttribute("id", "delete-button");
            saveButton.addEventListener('click', () => {
                validation(newInput1.value, newInput2.value);
                if (newInput1.value != "" && arr.includes(newInput2.value) != false && noDublicate.includes(taskName) === false) {
                    saveButton.style.display = 'none';
                    deleteButton.style.display = 'none';
                    editButton.style.display = 'inline';
                    cell2.innerHTML = newInput1.value;
                    cell3.innerHTML = newInput2.value;
                }
            });
            deleteButton.addEventListener('click', () => {
                newInput1.value = '';
                newInput2.value = '';
            });
        });
    }
});






