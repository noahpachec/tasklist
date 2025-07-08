const body = document.getElementsByName("body")
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        createTask()
    }
})

let draggedItem;
function addDragHandler(li) {
            li.addEventListener("dragstart", (event) => {
                console.log("dragging");
                draggedItem = li
            })
        }

function createTask() {
    const input = document.getElementById("input").value
    const text = input.trim()
    if (text !== "") {
        const li = document.createElement("li")
        li.setAttribute("draggable", true)
        li.textContent = text
        document.getElementById("active-tasks").appendChild(li)
        li.classList.add("task-items")
        li.classList.add("incomplete")
        completeButton(li)
        addDragHandler(li)
        document.getElementById("input").value = "";
    }
    else {
        alert("Invalid task")
    }
}



function completeButton(li) {
    const com = document.createElement("button")
    com.classList.add("incomButt")
    li.insertBefore(com, li.firstChild);
    completeCount = 0;
    compToggle(li, com);
    }


function compToggle(li, com) {
    com.addEventListener("click", function(event) {
        if (li.classList.contains("complete")) {
                com.classList.remove("commButt")
                com.parentElement.classList.remove("complete")
                com.classList.add("incomButt")
                com.parentElement.classList.add("incomplete")
            }
        else if (li.classList.contains("incomplete")) {
                com.classList.remove("incomButt")
                com.parentElement.classList.remove("incomplete")
                com.classList.add("commButt")
                com.parentElement.classList.add("complete")
                console.log(completeCount)
            }
        taskSort(li)
    })
    
}

function taskSort(li) {
    const compTask = document.getElementById("complete-tasks")
    const actTask = document.getElementById("active-tasks")
    if (li.classList.contains("complete")) {
        compTask.appendChild(li)
    }
    else if (li.classList.contains("incomplete")) {
        actTask.appendChild(li)
    }
}
    
        
