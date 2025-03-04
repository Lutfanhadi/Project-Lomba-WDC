document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("containerNavbar")
    const toggleMenu = document.getElementById("toggleMenu");
    const toggleClose = document.getElementById("toggleClose")

    toggleMenu.addEventListener("click", () => {
        container.classList.toggle("-translate-x-full")
    })

    toggleClose.addEventListener("click", () => {
        container.classList.toggle("-translate-x-full")
    })

})