// Function to append characters to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate result
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
