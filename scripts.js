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
        document.getElementById("tasks").appendChild(li)
        li.classList.add("task-items")
        li.classList.add("incomplete")
        removeButton(li)
        completedButton(li)
        addDragHandler(li)
        document.getElementById("input").value = ""
    }
}

function removeButton(li) {
    const del = document.createElement("button")
    del.classList.add("remButt")
    del.textContent = "❌"
    del.id = "del"
    li.appendChild(del)
    del.addEventListener("click", function () {
        this.parentElement.remove()
    })
}

function completedButton(li) {
    const com = document.createElement("button")
    com.classList.add("comButt")
    com.textContent = "✔️"
    li.appendChild(com)
    completeCount = 0;
    com.addEventListener("click", function () {
        this.parentElement.classList.remove("incomplete")
        this.parentElement.classList.add("completed")
        completeCount += 1;
        console.log(completeCount)
    })
}