// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Select all Add to Cart buttons
    const cartButtons = document.querySelectorAll(".add-cart");

    // Cart count display
    const cartCount = document.getElementById("cart-count");

    let count = 0;

    // Add click event for each product button
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {

            count++; // Increase cart items
            cartCount.textContent = count; // Update cart number

            alert("Item added to cart successfully!");
        });
    });

});
