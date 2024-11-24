// Sample book data from order
const orderData = [
    { title: "The Great Gatsby", quantity: 1, price: 12.99 },
    { title: "1984", quantity: 2, price: 9.99 },
    { title: "To Kill a Mockingbird", quantity: 1, price: 14.99 },
];

// Function to display items in the cart and calculate the total price
function displayOrderDetails() {
    const orderDetails = document.getElementById("orderDetails");
    const totalAmountElement = document.getElementById("totalAmount");
    let total = 0;

    orderDetails.innerHTML = ""; // Clear previous items

    orderData.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "mb-2";
        itemElement.innerHTML = `
            <strong>${item.title}</strong><br>
            Quantity: ${item.quantity}<br>
            Price: $${(item.price * item.quantity).toFixed(2)}
        `;
        orderDetails.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmountElement.textContent = `$${total.toFixed(2)}`;
}

// Functions to show payment forms
function showCardPayment() {
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("bankForm").style.display = "none";
    document.getElementById("promptPayForm").style.display = "none";
}

function showBankPayment() {
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("bankForm").style.display = "block";
    document.getElementById("promptPayForm").style.display = "none";
}

function showPromptPay() {
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("bankForm").style.display = "none";
    document.getElementById("promptPayForm").style.display = "block";
}

// Initial setup
document.addEventListener("DOMContentLoaded", displayOrderDetails);

function processPayment(method) {
    let paymentMethod = "";

    switch (method) {
        case "card":
            paymentMethod = "Card Payment";
            break;
        case "bank":
            const selectedBank = document.getElementById("bankSelect").value;
            paymentMethod = `Bank Transfer (${selectedBank})`;
            break;
        case "promptpay":
            paymentMethod = "PromptPay";
            break;
        default:
            paymentMethod = "Unknown Method";
    }

    // Simulate payment process (e.g., validating and submitting data)
    console.log(`Processing payment with method: ${paymentMethod}`);

    // Show success modal
    const successModal = new bootstrap.Modal(document.getElementById("successModal"));
    successModal.show();
}
