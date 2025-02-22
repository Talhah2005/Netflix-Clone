document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 200, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -200, behavior: "smooth" });
    });
});
