// Select the button with theme class
const themeButton = document.getElementsByClassName('theme')[0];
// Select the body element
const body = document.getElementsByTagName('body')[0];
// When this element is clicked turn the background color of the main element to white and the color to black
// Write the Event handler function
function changeColors() {
    body.style.backgroundColor = '#FFF';
    body.style.color = '#000';
}
// Add an Event Handler for it(name and function)
themeButton.addEventListener('click', changeColors);
