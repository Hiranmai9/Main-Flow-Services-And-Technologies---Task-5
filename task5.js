document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const display = document.querySelector('.display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    const result = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.value = result;
                    currentInput = result;
                    operator = '';
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});


