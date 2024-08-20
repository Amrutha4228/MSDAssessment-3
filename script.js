function toggleState() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    if (button.textContent === 'Click Me') {
        container.style.backgroundColor = '#FF5733'; 
        text.textContent = 'Text After Click'; 
        button.textContent = 'Reset';
    } else {
        container.style.backgroundColor = '#4CAF50'; 
        text.textContent = 'Initial Text'; 
        button.textContent = 'Click Me'; 
    }
}
