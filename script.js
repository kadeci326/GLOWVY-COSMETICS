
const products = [
    
const products = [
    {
        name: "Lip Gloss",
        price: 250,
        image: "images/lip-gloss.jpg"
    },
    {
        name: "Face Powder",
        price: 500,
        image: "images/face-powder.jpg"
    },
    {
        name: "Body Lotion",
        price: 450,
        image: "images/body-lotion.jpg"
    },
    {
        name: "Perfume",
        price: 800,
        image: "images/perfume.jpg"
    },
    {
        name: "Foundation",
        price: 650,
        image: "images/foundation.jpg"
    }
];

];
     
function showProducts() {
    let message = "<h2>Our Products</h2>";

    products.forEach(function(product, index) {
        message += `
            <div class="product-card">
                <img src="${product.image}"
                     alt="${product.name}"
                     class="product-image"
                     onerror="this.style.display='none'">
                <h3>${index + 1}. ${product.name}</h3>
                <p>Price: KSh ${product.price}</p>
            </div>
        `;
    });

    document.getElementById("output").innerHTML = message;
}

}

function showPrices() {
    let message = "<h2>Product Prices</h2>";

    products.forEach(function(product) {
        message += "<p>" + product.name + " - KSh " +
            product.price + "</p>";
    });

    document.getElementById("output").innerHTML = message;
}

function placeOrder() {
    document.getElementById("output").innerHTML = `
        <h2>Place an Order</h2>
        <form onsubmit="sendOrder(event)">
            <label>Your Name</label><br>
            <input id="customerName" type="text"
                placeholder="Enter your name" required><br><br>

            <label>Choose a Product</label><br>
            <select id="productName" required>
                ${products.map(function(product) {
                    return `<option value="${product.name}">
                        ${product.name} - KSh ${product.price}
                    </option>`;
                }).join("")}
            </select><br><br>

            <label>Quantity</label><br>
            <input id="quantity" type="number"
                min="1" value="1" required><br><br>

            <button type="submit">Continue to WhatsApp</button>
        </form>
    `;
}

function sendOrder(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const productName = document.getElementById("productName").value;
    const quantity = Number(document.getElementById("quantity").value);
    const product = products.find(function(item) {
        return item.name === productName;
    });

    if (!product || quantity < 1) {
        alert("Please select a product and valid quantity.");
        return;
    }

    const total = product.price * quantity;

    const message = `Hello Glowvy Cosmetics! My name is ${name}. I would like to order ${quantity} ${productName}(s). Total: KSh ${total}. Please confirm availability.`;

    // Replace 2547XXXXXXXX with your WhatsApp business number.
    const whatsappNumber = "254795902330";

    }

    window.open(
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

function showMpesa() {
    document.getElementById("output").innerHTML = `
        <h2>M-Pesa Payments</h2>
        <p>Pay using M-Pesa after confirming your order with us.</p>
        <p>We will provide the correct payment details here.</p>
        <p><strong>Always confirm payment details before sending money.</strong></p>
    `;
}

function contactUs() {
    document.getElementById("output").innerHTML = `
        <h2>Contact Glowvy Cosmetics</h2>
        <p>We are happy to help you choose your beauty products!</p>
        <p>WhatsApp ordering will be enabled once you add
        your business number.</p>
    `;
}
