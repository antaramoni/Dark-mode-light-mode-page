const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const textBox = document.getElementById("text-box");

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_camping_${color}.svg`;
  image2.src = `img/undraw_social_interaction_${color}.svg`;
  image3.src = `img/undraw_Imagination_${color}.svg`;
  image4.src = `img/undraw_Profile_data_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 /50%)"
    : "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 /50%)"
    : "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

/*
// Dark Mode style
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
  //console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Dark Mode";

  // toggleIcon.children[1].classList.remove("fa-sun");
  // toggleIcon.children[1].classList.add("fa-moon");
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

 
  //image1.src = "img/undraw_camping_dark.svg";
  //image2.src = "img/undraw_social_interaction_dark.svg";
  //image3.src = "img/undraw_Imagination_dark.svg";
  //image4.src = "img/undraw_Profile_data_dark.svg";
  
  imageMode("dark");
}
*/

/*
// Light Mode style
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 /50%)";

  //console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Light Mode";

  //toggleIcon.children[1].classList.remove("fa-moon");
  //toggleIcon.children[1].classList.add("fa-sun");
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  
  //image1.src = "img/undraw_camping_light.svg";
  //image2.src = "img/undraw_social_interaction_light.svg";
 // image3.src = "img/undraw_Imagination_light.svg";
 // image4.src = "img/undraw_Profile_data_light.svg";
  imageMode("light");
}
*/

// Switch Theme dynamically
function switchTheme(event) {
  //  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

// EVent Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
