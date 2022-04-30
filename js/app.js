document.querySelector("#dark-mode-toggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

document.querySelector("#dark-mode-toggle-mb").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

window.onload = () => {
  fadeOut();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 8900);
}
