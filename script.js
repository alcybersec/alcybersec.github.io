document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav a");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });

            // Close the menu after clicking a link
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");

        if (menuToggle.classList.contains("open")) {
            menuToggle.textContent = "✖"; // Unicode for X
        } else {
            menuToggle.textContent = "☰";
        }
    });
});