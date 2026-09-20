function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value.trim() !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
document.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) || ['+', '-', '*', '/'].includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});