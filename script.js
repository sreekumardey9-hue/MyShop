// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA9-3q-gVMQJqe_7BF8ojnu21CxNlatHnY",
  authDomain: "myshop-fc2bb.firebaseapp.com",
  projectId: "myshop-fc2bb",
  storageBucket: "myshop-fc2bb.appspot.com",
  messagingSenderId: "469326585683",
  appId: "1:469326585683:web:412699ec702da4b9d98ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// =====================
// REGISTER
// =====================

window.register = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email=="" || password==""){
document.getElementById("error").innerText="Enter email and password";
return;
}

createUserWithEmailAndPassword(auth,email,password)

.then(()=>{
alert("Account Created Successfully");
window.location="login.html";
})

.catch(e=>{
document.getElementById("error").innerText=e.message;
});

};



// =====================
// LOGIN
// =====================

window.login = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{
alert("Login Successful");
window.location="home.html";
})

.catch(e=>{
document.getElementById("error").innerText=e.message;
});

};



// =====================
// CART SYSTEM
// =====================

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



// =====================
// CHECKOUT
// =====================

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



// =====================
// PRODUCT SEARCH
// =====================

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



// =====================
// CLEAR CART
// =====================

function clearCart() {

cart = [];
total = 0;

localStorage.removeItem("cart");
localStorage.removeItem("total");

updateCart();

}