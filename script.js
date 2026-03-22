// Cart system
let cart = [];
let total = 0;

// Add product to cart
function addToCart(name, price) {

cart.push({
name: name,
price: price
});

total += price;

updateCart();

}

// Update cart display
function updateCart() {

let cartList = document.getElementById("cart");

if (!cartList) return;

cartList.innerHTML = "";

cart.forEach(function(item) {

let li = document.createElement("li");
li.innerText = item.name + " - ₹" + item.price;

cartList.appendChild(li);

});

// Cart count
let count = document.getElementById("count");
if (count) {
count.innerText = cart.length;
}

// Cart items
let items = document.getElementById("cart-items");
if (items) {
items.innerText = cart.length;
}

// Total price
let totalPrice = document.getElementById("total");
if (totalPrice) {
totalPrice.innerText = "₹" + total;
}

}

// Checkout system
function checkout() {

if (cart.length === 0) {

alert("Cart Empty");

} else {

// Save cart data
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("total", total);

// Redirect
window.location.href = "payment.html";

}

}

// Product search
function searchProduct() {

let searchInput = document.getElementById("search");

if (!searchInput) return;

let input = searchInput.value.toLowerCase();
let products = document.getElementsByClassName("product");

for (let i = 0; i < products.length; i++) {

let name = products[i]
.getElementsByTagName("h2")[0]
.innerText
.toLowerCase();

if (name.includes(input)) {

products[i].style.display = "block";

} else {

products[i].style.display = "none";

}

}

}

// Clear cart
function clearCart() {

cart = [];
total = 0;

localStorage.removeItem("cart");
localStorage.removeItem("total");

updateCart();

}