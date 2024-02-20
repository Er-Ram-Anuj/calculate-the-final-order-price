
    let cart = [];

    function addToCart(itemName, price) {
        let itemExists = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === itemName) {
                cart[i].quantity++;
                itemExists = true;
                break;
            }
        }
        if (!itemExists) {
            cart.push({ name: itemName, price: price, quantity: 1 });
        }
        displayCart();
    }

    function displayCart() {
        let cartItemsHTML = "";
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let itemTotal = cart[i].price * cart[i].quantity;
            total += itemTotal;
            cartItemsHTML += `<div class="cart-item">
                                <span>${cart[i].name}</span>
                                <span>Quantity: ${cart[i].quantity}</span>
                                <span>Price: $${cart[i].price}</span>
                                <span>Total: $${itemTotal}</span>
                             </div>`;
        }
        document.getElementById("cart-items").innerHTML = cartItemsHTML;
        document.getElementById("total").innerHTML = `Total: $${total}`;
    }
