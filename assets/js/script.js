const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 66) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});
