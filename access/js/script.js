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

let cart = [];

const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsDiv = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("open");
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
});

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = Number(btn.dataset.price);

        cart.push({ name, price });

        updateCart();
    });
});

function updateCart() {
    cartItemsDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-row");

        div.innerHTML = `
            <strong>${item.name}</strong><br>
            #${item.price.toFixed(2)}
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        cartItemsDiv.appendChild(div);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            cart.splice(index, 1);
            updateCart();
        });
    });
}