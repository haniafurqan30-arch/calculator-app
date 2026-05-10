
var display = document.getElementById("display")

function putValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "error";
    }
}
