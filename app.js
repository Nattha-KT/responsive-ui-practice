const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSubMenu(button) {
  //The nextElementSibling property returns the next element in the same tree level
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  Array.from(sidebar.getElementsByClassName("show")).forEach((url) => {
    url.classList.remove("show");
    url.previousElementSibling.classList.remove("rotate");
  });
}
