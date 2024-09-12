const btn = document.getElementById("menue-btn");
const nav = document.getElementById("menue");

function openMenue() {
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}

btn.addEventListener("click", openMenue);
