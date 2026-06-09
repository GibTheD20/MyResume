function goToPage2() {
    window.location.href = "page2.html";
}

function press(value) {
    document.getElementById("display").value += value;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    const display = document.getElementById("display");
    display.value = eval(display.value);
}
function sqr() {
    const display = document.getElementById("display");
    display.value = eval(display.value * display.value);
}
