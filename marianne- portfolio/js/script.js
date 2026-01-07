document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("email-popup");
    const closeBtn = document.querySelector(".close-btn");
    const openBtns = document.querySelectorAll("#open-popup, #open-popup-cta");

    // Show popup after 5 seconds
    setTimeout(() => { popup.style.display = "flex"; }, 5000);

    // Open popup via buttons
    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
        });
    });

    // Close popup
    closeBtn.addEventListener("click", () => { popup.style.display = "none"; });
    window.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });
});
