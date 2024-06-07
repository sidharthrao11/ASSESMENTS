(function() {
    // Get the display element
    const display = document.getElementById('display');
    
    // Get all buttons
    const buttons = document.querySelectorAll('.btn');
    
    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // If button is clear
            if (button.textContent === 'C') {
                display.value = '';
            }
            // If button is equal to =
            else if (button.textContent === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            // Otherwise append the button's value to display
            else {
                display.value += button.textContent;
            }
        });
    });
})();