// Select the input display
const display = document.querySelector('input[type="text"]');

// Function to append values to the display
const appendToDisplay = (value) => {
    display.value += value;
};

// Function to clear the display
const clearDisplay = () => {
    display.value = '';
};

// Function to delete the last character
const deleteLast = () => {
    display.value = display.value.slice(0, -1);
};

// Function to evaluate the result
const evaluateResult = () => {
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        display.value = 'Error'; // Handle invalid input
    }
};

// Event listeners for buttons
document.getElementById('AC').addEventListener('click', clearDisplay); // Clear
document.getElementById('DE').addEventListener('click', deleteLast); // Delete
document.getElementById('dot').addEventListener('click', () => appendToDisplay('.')); // Dot
document.getElementById('divison').addEventListener('click', () => appendToDisplay('/')); // Division
document.getElementById('seven').addEventListener('click', () => appendToDisplay('7')); // 7
document.getElementById('eight').addEventListener('click', () => appendToDisplay('8')); // 8
document.getElementById('nine').addEventListener('click', () => appendToDisplay('9')); // 9
document.getElementById('multiply').addEventListener('click', () => appendToDisplay('*')); // Multiply
document.getElementById('four').addEventListener('click', () => appendToDisplay('4')); // 4
document.getElementById('five').addEventListener('click', () => appendToDisplay('5')); // 5
document.getElementById('six').addEventListener('click', () => appendToDisplay('6')); // 6
document.getElementById('minus').addEventListener('click', () => appendToDisplay('-')); // Minus
document.getElementById('one').addEventListener('click', () => appendToDisplay('1')); // 1
document.getElementById('two').addEventListener('click', () => appendToDisplay('2')); // 2
document.getElementById('three').addEventListener('click', () => appendToDisplay('3')); // 3
document.getElementById('plus').addEventListener('click', () => appendToDisplay('+')); // Plus
document.getElementById('zerozero').addEventListener('click', () => appendToDisplay('00')); // 00
document.getElementById('zero').addEventListener('click', () => appendToDisplay('0')); // 0
document.getElementById('ans').addEventListener('click', evaluateResult); // Equal
