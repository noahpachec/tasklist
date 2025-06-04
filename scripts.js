const body = document.getElementsByName("body")
body.addEventListener("keydown", function() {
    if (key === "Enter") {
        createTask()
    }
})


function createTask() {
    const input = document.getElementById("input").value
    const text = input.trim()
    if (text !== "") {
        const li = document.createElement("li")
        li.textContent = text
        document.getElementById("tasks").appendChild(li)
        li.classList.add("task-items")
        li.classList.add("incomplete")
        removeButton(li)
        completedButton(li)
    }
    console.log("hello")  
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