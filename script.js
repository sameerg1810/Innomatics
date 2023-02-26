function Placement() {
  var x = document.getElementById("placement");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
