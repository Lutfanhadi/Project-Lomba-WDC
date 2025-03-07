document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (togglePassword && passwordInput && eyeIcon) {
        togglePassword.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            } else {
                passwordInput.type = "password";
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            }
        });
    } else {
        console.error("Element #togglePassword, #password, atau #eyeIcon tidak ditemukan!");
    }

    const ulasanContainer = document.getElementById('ulasanContainer');
    let isDown = false;
    let startX;
    let scrollLeft;

    ulasanContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        ulasanContainer.classList.add('active:cursor-grabbing');
        startX = e.pageX - ulasanContainer.offsetLeft;
        scrollLeft = ulasanContainer.scrollLeft;
    });

    ulasanContainer.addEventListener('mouseleave', () => {
        isDown = false;
        ulasanContainer.classList.remove('active:cursor-grabbing');
    });

    ulasanContainer.addEventListener('mouseup', () => {
        isDown = false;
        ulasanContainer.classList.remove('active:cursor-grabbing');
    });

    ulasanContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ulasanContainer.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan geser
        ulasanContainer.scrollLeft = scrollLeft - walk;
    });
});
