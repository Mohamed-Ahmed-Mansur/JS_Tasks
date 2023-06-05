const addTask = document.getElementById('add');
const listOfTaskes = document.getElementById('insert-Task');
let taskArray = [];
let noDublicate = [];
let tasksArray = [];
let taskIndex = 0;

function validation(x) {
    x === "" || tasksArray.includes(x) === true ? alert('you entered a wrong or repeated task name') : x;
}

addTask.addEventListener('click', () => {
    let taskName = document.getElementById('task').value;
    let selectedPriority = document.getElementById('priority').value;
    validation(taskName);
    if (taskName != "" && tasksArray.includes(taskName) === false) {
        //document.getElementById('task').value = '';
        // sorting table rows with no dublicate task name
        tasksArray.push(taskName);
        tasksArray.sort();
        taskIndex = tasksArray.indexOf(taskName);
        // Adding new rows and columns
        const row = listOfTaskes.insertRow(taskIndex);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        row.setAttribute("id", "new-row");
        // Assigning cells value
        let count = listOfTaskes.rows.length;
        cell1.innerHTML = count;
        cell2.innerHTML = taskName;
        cell3.innerHTML = selectedPriority;
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
            tasksArray.splice(tasksArray.indexOf(cell2.innerHTML), 1);
        });
        editButton.addEventListener('click', () => {
            editButton.style.display = 'none';
            addTask.disabled = true;
            const targetIndex = tasksArray.indexOf(cell2.innerHTML);
            tasksArray.splice(tasksArray.indexOf(cell2.innerHTML), 1);
            // Creating new inputs when edit button takes action
            const newTaskName = document.createElement('input');
            const priorityLevels = document.createElement('select');
            newTaskName.setAttribute('placeholder', 'please edit your task name');
            newTaskName.setAttribute('id', 'new-input-1');
            newTaskName.setAttribute('value', cell2.innerHTML);
            priorityLevels.setAttribute('id', 'priority');
            priorityLevels.insertAdjacentHTML("beforeend", `
                <option>low</option>
                <option>intermediate</option>
                <option>high</option>
            `);
            cell2.innerHTML = "";
            cell3.innerHTML = "";
            cell2.appendChild(newTaskName);
            cell3.appendChild(priorityLevels);
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
                if (newTaskName.value != "" && tasksArray.includes(newTaskName.value) === false) {
                    saveButton.style.display = 'none';
                    deleteButton.style.display = 'none';
                    editButton.style.display = 'inline';
                    addTask.disabled = false;
                    cell2.innerHTML = newTaskName.value;
                    cell3.innerHTML = priorityLevels.value;
                    tasksArray.push(cell2.innerHTML);
                    tasksArray.sort();
                } else {
                    alert('please enter a correct task name')
                }
            });
            deleteButton.addEventListener('click', () => {
                newTaskName.value = '';
            });
        });
    }
});