// Select the button with theme class
const themeButton = document.getElementsByClassName('theme')[0];
// Select the body element
const body = document.getElementsByTagName('body')[0];
// Select all 3 main sections
const aboutMe = document.querySelector('.about-me');
const projects = document.querySelector('.projects');
const skills = document.querySelector('.skills');
// When this element is clicked turn the background color of the main element to white and the color to black so as the 3 main sections
// Write the Event handler function
function changeColors() {
    body.style.backgroundColor = '#FFF';
    body.style.color = '#000';

    aboutMe.style.backgroundColor = '#FFF';
    aboutMe.style.color = '#000';

    projects.style.backgroundColor = '#FFF';
    projects.style.color = '#000';

    skills.style.backgroundColor = '#FFF';
    skills.style.color = '#000';
}
// Add an Event Handler for it(name and function)
themeButton.addEventListener('click', changeColors);
