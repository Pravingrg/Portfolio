document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const name = 'Pravin Gurung';
    let index = 0;

    function displayName() {
        if (index < name.length) {
            nameElement.textContent += name[index];
            index++;
            setTimeout(displayName, 100); // Adjust speed if needed
        } else {
            // Reset after displaying the whole name
            setTimeout(() => {
                nameElement.textContent = '';
                index = 0;
                displayName();
            }, 2000); // Pause before restarting the display
        }
    }

    displayName();
});