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
        // removeButton(li)
        completedButton(li)
        addDragHandler(li)
        document.getElementById("input").value = ""
    }
}

// function removeButton(li) {
//     const del = document.createElement("button")
//     del.classList.add("remButt")
//     del.textContent = "❌"
//     del.id = "del"
//     li.appendChild(del)
//     del.addEventListener("click", function () {
//         this.parentElement.remove()
//     })

// }

function completedButton(li) {
    const com = document.createElement("div")
    com.classList.add("incomButt")
    li.appendChild(com)
    completeCount = 0;
    addEventListener("click", (event) => {
        compToggle(li, com)})
    }

function compToggle(li, com) {
    if (li.classList.contains("completed")) {
        com.addEventListener("click", (event) => {
            com.classList.remove("commButt")
            com.parentElement.classList.remove("complete")
            com.classList.add("incomButt")
            com.parentElement.classList.add("incomplete")
            completeCount -= 1;
        })}
    else {
        com.addEventListener("click", (event) => {
            com.classList.remove("incomButt")
            this.parentElement.classList.remove("incomplete")
            com.classList.add("commButt")
            this.parentElement.classList.add("completed")
            completeCount += 1;
            console.log(completeCount)
        })}
    }
    
        
    
    
    // com.addEventListener("click", function () {
    //     com.classList.remove("incomButt")
    //     this.parentElement.classList.remove("incomplete")
    //     com.classList.add("commButt")
    //     this.parentElement.classList.add("completed")
    //     completeCount += 1;
    //     console.log(completeCount)
    //     com.addEventListener("click", function () {
    //         if (com.classList.contains("commButt")) {
    //             com.classList.remove("commButt")
    //             com.parentElement.classList.remove("complete")
    //             com.classList.add("incomButt")
    //             com.parentElement.classList.add("incomplete")
    //             completeCount -= 1;
    //         }
    //     })
    // })
