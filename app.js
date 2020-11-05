// "TaskID":`${taskManager.taskArray.length < 1 ? 1: taskManager.taskArray.length+1}`

// Validation and verification of form inputs Start

// document.querySelector('#addTask').addEventListener('click', 
// function validateTaskForm(){

//     let isNameValid = document.forms["inputForm"] ["inputName"].value;
    // if ((isNameValid.length != -1) && (isNameValid > 8)) {
    //     return true;
//     }else {
//         alert ("Please enter a valid name");
//         return false;
//     }
    

// });

// validateTaskForm();

// documentaddTaskButton.addEventListener("click",;

// function validateName() {
// console.log("Is this button working");
// return validateName();
// };
// validateName();

//  Make form inputs variables.
// Using const as opposed to let const means the values cannot be overidden unless re-done






//  When data is entered, run function that checks to see if inputs are valid

function validateTaskForm (inputName, inputDesc, inputAssignedTo, inputDate, inputStatus) {
    //  Set intial validation booleans, they're false at first, invalid.
    let iconValid = false;
    let nameValid = false;
    let descValid = false;
    let assignedToValid = false;
    let dueDateValid = false;
    let statusValid = false;
    let validation = false;

    if(inputIcon !== "") {
        iconValid = true;
    }
    if ((inputName.length != -1) && (inputName.length > 8)) {
        nameValid = true;
    } else {
        nameValid = false;
    } if ((inputDesc.length != -1)&& (inputDesc.length > 20)) {
        descValid = true;
    } else {
        descValid = false;
    } 
    if ((inputAssignedTo.length != -1)&&(inputAssignedTo.length > 8)) {
        assignedToValid  = true;
    } else {
        assignedToValid = false;
    }
    if (inputDate !== "") {
        dueDateValid = true;
    } else {
        dueDateValid = false;
    }
    if (inputStatus !== "") {
        statusValid = true;
    } else {
        statusValid = false;
    }

    if (iconValid && nameValid && descValid && assignedToValid && dueDateValid && dueDateValid && statusValid === true) {
        validation = true;
    
   
    } else {
        validation = false;
    }

    
    return validation;
    
};





// Now the function is made, I need to call the function with the form button.
document.getElementById("addTask").addEventListener('click', function() {

    const inputIcon = document.getElementById("inputIcon").value;
    const inputName = document.getElementById("inputName").value;
    const inputDesc = document.getElementById("inputDescription").value;
    const inputAssignedTo = document.getElementById("assignedTo").value;
    const inputDate = document.getElementById("dueDate").value;
    const inputStatus = document.getElementById("status").value;



    // console.log(validateTaskForm(inputName.value, inputDesc.value, inputAssignedTo.value, inputDate.value, inputStatus.value));
    
    let inputValid = validateTaskForm (inputIcon, inputName, inputDesc, inputAssignedTo, inputDate, inputStatus);

    if (inputValid == true) {
        createTaskObject(inputIcon, inputName, inputDesc, inputAssignedTo, inputDate, inputStatus, myTaskManager.allTasks); //returned item is the updated array
        //ion order to find out that last item added to the array, use the below. gets the length of the current array, -1 == final index position 
        let taskIndex = myTaskManager.allTasks.length-1;
        //now that we have indentifed the final index pos, pass that object into the addTaskCard function
        myTaskManager.addTaskCard(myTaskManager.allTasks[taskIndex])
        // Todo: Run the add task function as well
    }   
console.log(myTaskManager.allTasks);

            
});

// for (let i = 0; i < 3; i++) {
//     createTaskObject(inputName, inputDesc, inputAssignedTo, inputDate, inputStatus);
// }

// console.log()

class TaskManager {
    constructor (array, name) {
        this.allTasks = array;
        this.name = name;
    }

    getAllTasks(){
        console.log(this.allTasks);
    }

    addTaskCard(task) {
        const cardHTML = `<div class="card taskCards outputCardFormat">
        <img src="${task.icon}" class="card-img outputImgCard" alt="...">
        <div class="card-header">
        Task Id: ${task.id}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${task.name}</li>
        <li class="list-group-item">Description: ${task.description}</li>
        <li class="list-group-item">Assign To: ${task.assignedTo}</li>
        <li class="list-group-item">Date due: ${task.dueDate}</li>
        <li class="list-group-item">Status: ${task.status}</li>
        </ul>
    </div>`;

        const cardContainer = document.getElementById("taskPort");
        cardContainer.innerHTML += cardHTML;
  
        // const listHTML = `<li class="list-group-item listItemFormat">
        //     <div class="container liContainer col-md-11">
        //         <div class="card bg-light text-white listImgCard">
        //             <img src="images\Task pipes.jpg" class="card-img listImages" id="overlay"  alt="...">
        //             <div class="card-img-overlay overlay" >
        //             <h5 class="card-title">Task ID: ${task.id}</h5>
        //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p class="card-text">Last updated 3 mins ago</p>
        //             </div>
        //         </div>
        //     </div>                        
        // </li>`

        // const listRow = document.querySelector("#listOfTasks");
        // listRow.innerHTML += listHTML;

}

}

function createTaskObject(inputIcon, inputName, inputDesc, inputAssignedTo, inputDate, inputStatus) {
  // Making a JSON Structure
    myTaskManager.allTasks.push({
        "id": `${myTaskArray.length <1 ? 1 : myTaskArray.length +1}`,
        "icon" : inputIcon,
        "name" : inputName,
        "description" : inputDesc,
        "assignedTo" : inputAssignedTo,
        "dueDate" : inputDate,
        "status" : inputStatus,
    })
    // JSON Structure End
    return myTaskManager.allTasks;  
};





let myTaskArray = [];

let myTaskManager = new TaskManager(myTaskArray, "thisIsATask");



// Icon select

// var iconSelect;

//     window.onload = function(){

//         iconSelect = new IconSelect("my-icon-select");

//         var icons = [];
//         icons.push({'iconFilePath':'images/icons/1.png', 'iconValue':'1'});
//         icons.push({'iconFilePath':'images/icons/2.png', 'iconValue':'2'});
//         icons.push({'iconFilePath':'images/icons/3.png', 'iconValue':'3'});

//         iconSelect.refresh(icons);

//     };