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
