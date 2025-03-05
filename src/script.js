document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("containerNavbar");
  const toggleMenu = document.getElementById("toggleMenu");
  const toggleClose = document.getElementById("toggleClose");
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");
  const searchContainer = searchInput.parentElement; // Ambil parent input untuk animasi
  

  if (toggleMenu && toggleClose) {
    toggleMenu.addEventListener("click", () => {
      container.classList.toggle("-translate-x-full");
    });
    toggleClose.addEventListener("click", () => {
      container.classList.toggle("-translate-x-full");
    });
  }
  


  function toggleSearch() {
    if (searchInput.classList.contains("opacity-100")) {
      searchInput.classList.remove("opacity-100");
      searchContainer.style.width = "0";
      searchInput.style.width = "0";
      searchInput.blur();
    } else {
      searchInput.classList.add("opacity-100");
      searchContainer.style.width = "10rem"; // Sesuaikan lebar yang diinginkan
      searchInput.style.width = "100%";
      searchInput.focus();
    }
  }

  if (searchButton) {
    searchButton.addEventListener("click", toggleSearch);
  }


});


document.addEventListener("DOMContentLoaded", () => {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.innerHTML = '<i class="fa-solid fa-eye cursor-pointer"></i>'; // Ganti ikon menjadi "eye"
      } else {
        passwordInput.type = "password";
        this.innerHTML = '<i class="fa-solid fa-eye-slash cursor-pointer"></i>'; // Kembali ke "eye-slash"
      }
    });
  } else {
    console.error("Element #togglePassword atau #password tidak ditemukan!");
  }
});
