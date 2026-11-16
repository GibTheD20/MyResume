 function goToPage2() {
    window.location.href = "/calculator/";

function press(value) {
    document.getElementById("display").value += value;
}

function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
   alert("calculate function called, this is a test.")
    let display = document.getElementById("display");

   try {
    display.value = eval(display.value);
   } catch {
    display.value = "You broke it... Great job."
   }
}

function sqr() {
    const display = document.getElementById("display");
    let num = Number(display.value);
    display.value = num * num;
}
function adjustFontSize() {
    const display = document.getElementById("display");
    const length = display.value.length;
    
    if (length > 12) {
        display.style.fontSize = "16px";
    } else if (length > 9) {
        display.style.fontSize = "20px";
    } else {
        display.style.fontSize = "25px";
    }
}
 
    function updateDisplay(value) {
const display = document.getElementById("display");
display.value = value;
    }
function goToPage3() {
 window.location.href = "Page3.html";
}
