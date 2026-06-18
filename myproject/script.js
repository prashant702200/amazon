
var cartItems = 0;
var cartNames = [];

function addCart(productName) {
    cartItems = cartItems + 1;
    cartNames.push(productName);

    document.getElementById("cartCount").innerText = cartItems;
    document.getElementById("messageBox").innerText = productName + " added to your cart.";
}

function showCart() {
    if (cartItems == 0) {
        alert("Your cart is empty");
    } else {
        alert("You added: " + cartNames.join(", "));
    }
}

function searchProduct() {
    var searchValue = document.getElementById("searchInput").value.toLowerCase();
    var boxes = document.getElementsByClassName("box");
    var found = false;

    for (var i = 0; i < boxes.length; i++) {
        var productName = boxes[i].getAttribute("data-name");

        if (productName.includes(searchValue)) {
            boxes[i].style.display = "block";
            found = true;
        } else {
            boxes[i].style.display = "none";
        }
    }

    if (searchValue == "") {
        document.getElementById("messageBox").innerText = "You are on amazon mini project. Click add to cart button.";
    } else if (found == true) {
        document.getElementById("messageBox").innerText = "Showing results for: " + searchValue;
    } else {
        document.getElementById("messageBox").innerText = "No product found for: " + searchValue;
    }
}