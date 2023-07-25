// Take the button element
const themeToggleButton = document.querySelector(".theme-toggle-button");
// Write a  function for addEventListener() method that activate
// - the light class for the respective element that written in to css file
function changeColor() {
  document.body.classList.toggle("light");
  document.querySelector("nav").classList.toggle("light");
  document.querySelector(".nav-right a").classList.toggle("light");
  document.querySelector("button").classList.toggle("light");
  document.querySelector("svg").classList.toggle("light");
  document.querySelector("form").classList.toggle("light");
  document.querySelector(".submit input").classList.toggle("light");
}
// Create a addEventListener for the button.theme-toggle-button
themeToggleButton.addEventListener("click", changeColor);
