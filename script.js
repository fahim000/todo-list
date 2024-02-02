const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list");

function addTask() {
    if (inputbox.value === '') {
        alert("Doing nothing is not a task.");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
        savedata();
    }
    inputbox.value = '';
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listcontainer.innerHTML = storedData;
    }
}

showtask();
