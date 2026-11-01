function explore() {
    alert("welcome to apis web!");

    document.querySelector("p").innerText =
        "u are now exploring apis web!";
}function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("navLinks").classList.remove("active");
}const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(element => {
    observer.observe(element);
});
