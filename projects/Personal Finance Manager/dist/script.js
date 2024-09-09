// Get references to necessary DOM elements
const expenseForm = document.getElementById("expense-form"); 
const expenseList = document.getElementById("expense-list"); 
const totalAmountElement = document.getElementById("total-amount");

// Initialize expenses array from localStorage
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Conversion rates (for demonstration purposes, replace with real API data)
const conversionRates = {
    "USD": 74.85,
    "EUR": 88.55,
    "INR": 1
};

// Function to render expenses in tabular form
function renderExpenses() {
    // Clear expense list
    expenseList.innerHTML = "";

    // Initialize total amount in INR
    let totalAmountInINR = 0;

    // Loop through expenses array and create table rows
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        const expenseRow = document.createElement("tr");
        expenseRow.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.amount} ${expense.currency}</td>
            <td>${expense.type}</td>
            <td class="delete-btn" data-id="${i}">Delete</td>
        `;
        expenseList.appendChild(expenseRow);

        // Convert amount to INR and update total amount
        const amountInINR = expense.amount * conversionRates[expense.currency];
        if (expense.type === "expense") {
            totalAmountInINR -= amountInINR;
        } else {
            totalAmountInINR += amountInINR;
        }
    }

    // Update total amount display
    totalAmountElement.textContent = totalAmountInINR.toFixed(2);

    // Save expenses to localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to add expense
function addExpense(event) {
    event.preventDefault();

    // Get expense name, amount, type, and currency from form
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseTypeInput = document.getElementById("transaction-type");
    const currencyInput = document.getElementById("currency");
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    const expenseType = expenseTypeInput.value;
    const currency = currencyInput.value;

    // Clear form inputs
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseTypeInput.value = "";
    currencyInput.value = "";

    // Validate inputs
    if (expenseName === "" || isNaN(expenseAmount) || expenseType === "" || currency === "") {
        alert("Please enter valid expense details.");
        return;
    }

    // Create new expense object
    const expense = {
        name: expenseName,
        amount: expenseAmount,
        type: expenseType,
        currency: currency
    };

    // Add expense to expenses array
    expenses.push(expense);

    // Render expenses
    renderExpenses();
}

// Function to delete expense
function deleteExpense(event) {
    if (event.target.classList.contains("delete-btn")) {
        // Get expense index from data-id attribute
        const expenseIndex = parseInt(event.target.getAttribute("data-id"));

        // Remove expense from expenses array
        expenses.splice(expenseIndex, 1);

        // Render expenses
        renderExpenses();
    }
}

// Add event listeners
expenseForm.addEventListener("submit", addExpense);
expenseList.addEventListener("click", deleteExpense);

// Render initial expenses on page load
renderExpenses();