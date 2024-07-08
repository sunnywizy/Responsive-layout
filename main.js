const toggleButton = document.querySelector(".menu--btn");
const nav = document.querySelector(".nav__links")

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
})