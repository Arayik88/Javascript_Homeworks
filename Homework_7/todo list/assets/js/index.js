const INPUT = document.getElementsByTagName("input")[0],
    TASK = document.getElementsByClassName("tasks")[0];
let counter = 0;

function add() {
    counter++;
    if (INPUT.value === "")
        return;
    TASK.innerHTML += `<div class="task"><input type = "checkbox" onchange="checkBoxChecked(this)" name = "check" id = "check"><p>${INPUT.value}</p><button onclick = "remove(this)">Remove</button></div>`;
    INPUT.value = "";
}

btn.addEventListener("click", add);

function remove(event) {
    event.parentNode.remove();
}

function checkBoxChecked(event) {
    if (event.checked) {
        event.nextSibling.style.textDecoration = "line-through";
        event.nextSibling.style.color = "black";
    } else {
        event.nextSibling.style.textDecoration = "none";
        event.nextSibling.style.color = "#000";
    }
}

window.onkeydown = (event) => {
    // noinspection JSDeprecatedSymbols
    if (event.keyCode === 13 || event.which === 13) {
        add();
    }
}