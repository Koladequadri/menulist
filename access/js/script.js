const buttons = document.querySelectorAll("nav button");
const items = document.querySelectorAll(".menu-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        items.forEach(item => {
            if (filter === "all") {
                item.style.display = "block";
            } else {
                item.style.display = item.classList.contains(filter)
                    ? "block"
                    : "none";
            }
        });
    });
});