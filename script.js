// // Select elements from the DOM
// const taskInput = document.getElementById("taskInput");  // The input box
// const addTaskBtn = document.getElementById("addTaskBtn"); // "Add" button
// const taskList = document.getElementById("taskList"); // The list where tasks will be added

// // Add event listener to the button to add tasks
// addTaskBtn.addEventListener("click", function() {
//     const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

//     if (taskText !== "") { // Check if the input is not empty
//         const li = document.createElement("li"); // Create a new list item `<li>`
//         li.innerHTML = `
//             <span>${taskText}</span>
//             <button class="delete">X</button>
//         `; // Add task text and delete button inside `<li>`

//         taskList.appendChild(li); // Append the new task to the task list
//         taskInput.value = ""; // Clear the input box

//         // Mark task as completed when clicked
//         li.addEventListener("click", function() {
//             li.classList.toggle("completed"); // Toggle the "completed" CSS class
//         });

//         // Delete task when "X" button is clicked
//         li.querySelector(".delete").addEventListener("click", function(event) {
//             event.stopPropagation(); // Prevents marking as completed when clicking delete
//             li.remove(); // Remove the task from the list
//         });
//     }
// });




const taskinput= document.getElementById(taskinput);
const addtaskbtn = document.getElementById(addtaskbtn);
const addtask = document.getElementById(addtask);

addtaskbtn.addEventListener("click",function() {

    const tasktext = taskinput.ariaValueMax.trim();
    if(tasktext !==""){

        const li = document.createElement("li");
         
        li.innerHTML = `
        <span>${tasktext}</span>
        <button class="delete">delete</button>
        `;
        taskList.appendchild(li);
        taskinput.value = "";
        li.addEventListener("click",function(){
            li.classList.toggle("completed");
        });
        li.querySelector(".delete").addEventListener("click",function(event){
            event.stopPropagation();
            li.remove();
        });


    }


})


