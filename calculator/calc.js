function press(value) {
    document.getElementById("display").value += value;
    adjustFontSize();
}

function cleardisplay() {
    document.getElementById("display").value = "";
    adjustFontSize();
}

function calculate() {
   //alert("calculate function called, this is a test.")
     const display = document.getElementById("display");

   try {
        display.value = math.evaluate(display.value);
        adjustFontSize();
    } catch (error) {
        display.value = "Invalid expression";
    }
}

function sqr() {
    const display = document.getElementById("display");

    if (display.value.trim() === "") {
        return;
    }

    try {
        const num = math.evaluate(display.value);

        if (typeof num !== "number" || !Number.isFinite(num)) {
            throw new Error("Invalid number");
        }

        display.value = num * num;
        adjustFontSize();

    } catch (error) {
        display.value = "Invalid expression";
    }
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