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

let inputName = document.getElementById("inputName");
let inputDesc = document.getElementById("inputDescription");
let inputAssignedTo = document.getElementById("assignedTo");
let inputDate = document.getElementById("dueDate");
let inputStatus = document.getElementById("status");


//  Set intial validation booleans, they're false at first, invalid.
let nameValid = false;
let descValid = false;
let assignedToValid = false;
let dueDateValid = false;
let statusValid = false;
let validation = false;

//  When data is entered, run function that checks to see if inputs are valid

function validateTaskForm (inputName, inputDesc, inputAssignedTo, inputDate, inputStatus) {
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
    if (nameValid && descValid && assignedToValid && dueDateValid && dueDateValid && statusValid === true) {
        validation = true;
    
   
    } else {
        validation = false;
    }
    return validation;
    
};

function invalidAlert (validation) {
    if (validation = false) {
        alert("The task you've entered has some invalid information");
    }
    
};

// Now the function is made, I need to call the function with the form button.
document.getElementById("addTask").addEventListener('click', function() {
    console.log(validateTaskForm(inputName.value, inputDesc.value, inputAssignedTo.value, inputDate.value, inputStatus.value));
    invalidAlert();
            
});

// Making a JSON Structure
let jsonStructure = {
    "id":"0",
    "name" : "",
    "description" : "description",
    "assignedTo" : "assignedTo",
    "dueDate" : "dueDate",
    "status" : "status",







}
