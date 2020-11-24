//Container
    //Header
    //Content
        //List
        //Add item

const clear = document.querySelector (".clear");
const datel
//  When data is entered, run function that checks to see if inputs are valid

function validateTaskForm (inputName, inputDesc, inputAssignedTo, inputDate, inputStatus) {
    //  Set intial validation booleans, they're false at first, invalid.
    // let iconValid = false;
    let nameValid = false;
    let descValid = false;
    let assignedToValid = false;
    let dueDateValid = false;
    let statusValid = false;
    let validation = false;

    // if(inputIcon !== "") {
    //     iconValid = true;
    // }
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
        // iconValid && 
   
    } else {
        validation = false;
    }

    
    return validation;
    
};





// Now the function is made, I need to call the function with the form button.
document.getElementById("addTask").addEventListener('click', function() {

    // const inputIcon = document.getElementById("inputIcon").value;
    const inputName = document.getElementById("inputName").value;
    const inputDesc = document.getElementById("inputDescription").value;
    const inputAssignedTo = document.getElementById("assignedTo").value;
    const inputDate = document.getElementById("dueDate").value;
    const inputStatus = document.getElementById("status").value;



    // console.log(validateTaskForm(inputName.value, inputDesc.value, inputAssignedTo.value, inputDate.value, inputStatus.value));
    
    let inputValid = validateTaskForm (inputName, inputDesc, inputAssignedTo, inputDate, inputStatus);
    // inputIcon

    if (inputValid == true) {
        createTaskObject(inputName, inputDesc, inputAssignedTo, inputDate, inputStatus, myTaskManager.allTasks); //inputIcon //returned item is the updated array
        //ion order to find out that last item added to the array, use the below. gets the length of the current array, -1 == final index position 
        let taskIndex = myTaskManager.allTasks.length-1;
        //now that we have indentifed the final index pos, pass that object into the addTaskCard function
        myTaskManager.addTaskCard(myTaskManager.allTasks[taskIndex])
        // Todo: Run the add task function as well
    }   
console.log(myTaskManager.allTasks);

            
});

class TaskManager {
    constructor (name) {
        this.allTasks = [];
        this.name = name;
    }

    getAllTasks(){
        console.log(this.allTasks);
    }

    addTaskCard(task) {
        let cardHTML = `<div class="card taskCards outputCardFormat" taskID ="${task.id}">
        <img src="" class="card-img outputImgCard" alt="...">
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
        <button type ="button" class = "btn-dark" id="deleteButton" job ="deleteButton" deleteID="${task.id}">Delete</button>
        <a href = "#mainForm"><button type ="button" class ="btn-dark container-fluid col-md-12" id ="updateCardButton" job ="update" updateID="${task.id}">Update</button></a>
    </div>`;

        const cardContainer = document.getElementById("taskPort");
        cardContainer.innerHTML += cardHTML;

  
        let listHTML = `<li class="list-group-item listItemFormat" taskID ="${task.id}">
        <div class="container liContainer col-md-11">
          <div class="card bg-light text-white listImgCard">
            <img src="images/Task image.png" class="card-img listImages" alt="...">
            <div class="card-img-overlay overlay">
              <h5 class="card-title">Assigned to: ${task.assignedTo}</h5>
              <p class="card-text"> ID: ${task.id}</p>
              <p class="card-text"> Date Due: ${task.dueDate}</p>
              <p class="card-text">Status: ${task.status}</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
          
      </li>`;

        const listRow = document.querySelector("#listOfTasks");
        // listRow.innerHTML += listHTML;
            listRow.insertAdjacentHTML('beforeend', listHTML);

}

deleteTask(element){
    let nestedID = element.parentNode.attributes.taskID.value;
    // console.log(nestedID);
   for(let i=0; i < this.allTasks.length; i++) {
        if(this.allTasks[i].ID = nestedID) {
            this.allTasks.splice(i,1)
            // Update Local Storage when I delete a task
            localStorage.setItem("taskMemory", JSON.stringify(myTaskManager.allTasks));
        }
            
   }
   element.parentNode.parentNode.removeChild(element.parentNode)

   let listElement = document.getElementsByClassName("listItemFormat");
   for(let i=0; i < listElement.length; i++) {
       element = listElement[i];
   }
    if(element.attributes.taskID.value == nestedID) {
        element.parentNode.removeChild(element);
    }  
   

}

updateTask(element) {
    // Add an update button
    // When the button si clicked (click event) trigger a function
    // Load the current card details back into the form
    // Change the save button to say update.
    let currentTask = {};
    let currentTaskID = element.parentNode.parentNode.attributes.taskID.value;
    
    for (let i=o; i < this.allTasks.length; i++){
        if(this.allTasks[i].ID == currentTaskID){
            currentTask = this.allTasks[i];
        }    
    }
    document.querySelector("#inputName").value = currentTask.name;
    document.querySelector("#inputDescription").value = currentTask.description;
    document.querySelector("#assignedTo").value = currentTask.assignedTo;

    // Overwriting add task button to say Confirm Changes whilst the form is updating a card.
    document.querySelector("#addTask").outerHTML = `<button type ="button" class ="btn-dark" id="saveFormUpdate" job="saveFormUpdate">Confirm Changes</button>`
    document.querySelector("#saveFormUpdate").addEventListener("click", function() {
      
        const inputName = document.getElementById("inputName").value;
        const inputDesc = document.getElementById("inputDescription").value;
        const inputAssignedTo = document.getElementById("assignedTo").value;
        const inputDate = document.getElementById("dueDate").value;
        const inputStatus = document.getElementById("status").value;

        let inputValid = validateTaskForm (inputName, inputDesc, inputAssignedTo, inputDate, inputStatus);
        if (inputValid == true) {
            currentTask.name = inputName;
            currentTask.description = inputDesc;
            currentTask.assignedTo = inputAssignedTo;
            currentTask.dueDate = inputDate;
            currentTask.status = inputStatus;
            localStorage.setItem("taskMemory", JSON.stringify(myTaskManager.allTasks));
            location.reload();
        }

    

    })

}

}

function createTaskObject(inputName, inputDesc, inputAssignedTo, inputDate, inputStatus) {
  // Making a JSON Structure
    myTaskManager.allTasks.push({
        "id": `${myTaskManager.allTasks.length <1 ? 1 : myTaskManager.allTasks.length +1}`,
        // "icon" : inputIcon,
        "name" : inputName,
        "description" : inputDesc,
        "assignedTo" : inputAssignedTo,
        "dueDate" : inputDate,
        "status" : inputStatus,
    })
    // JSON Structure End
    // Local Storage Code Start, it starts here because this where I'm creating my object to populate my cards.
    localStorage.setItem("taskMemory", JSON.stringify(myTaskManager.allTasks));

    return myTaskManager.allTasks;  
};

document.addEventListener("click", function(event){
    const definedButton = (event.target.nodeName == "BUTTON")
    if(definedButton) {
        const element = event.target;
        let buttonJob = element.attributes.job.value;
        if(buttonJob == "update"){
            myTaskManager.updateTask(element);
        } else if (buttonJob == "deleteButton"){
            myTaskManager.deleteTask(element);
        }

        // console.log(element.parentNode.attributes.taskID.value);
        
    }  
    
})


//The myTaskManager needs to be defined before the the if function runs
let myTaskManager = new TaskManager("thisIsATask"); 


// Calling data frrom Local Storage
let returnedData = localStorage.getItem("taskMemory");

if(returnedData){
    myTaskManager.allTasks = JSON.parse(returnedData);
    // This function allows the form to be populated from Local Storage and it's only called when data is in the local storage 
    populateFromMem(myTaskManager.allTasks)

} else {
    myTaskManager.taskMemory = [];
}

function populateFromMem(memoryArray) {
    for (let i=0; i < memoryArray.length; i++) {
        myTaskManager.addTaskCard(memoryArray[i]);
    }
}







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
