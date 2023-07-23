const themeToggleButton = document.querySelector("button.theme-toggle-button");

function changeTheme() {
    // Selecting all the elements the their styles need to be changed
  document.body.classList.toggle("light");
  document.querySelector("nav").classList.toggle("light");
  document.querySelector(".nav-right a").classList.toggle("light");
  document.querySelector("button.theme-toggle-button").classList.toggle("light");
  document.querySelector("svg").classList.toggle("light");
  document.querySelector("section.for-light-theme1").classList.toggle("light");
  document.querySelector("section.for-light-theme2").classList.toggle("light");
  document.querySelector("section.for-light-theme3").classList.toggle("light");
}

themeToggleButton.addEventListener("click", changeTheme);


