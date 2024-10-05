# Personal Finance Manager (Expense Tracker)
This is a simple web-based Personal Finance Manager application that helps you track your income and expenses. It allows you to add, view, and delete transactions, and it calculates the total amount based on the transactions.

## Features

- **Add Transactions**: Easily add income or expense transactions with the following details:
  - **Name**: Description of the transaction.
  - **Amount**: The monetary value of the transaction.
  - **Type**: Specify whether the transaction is an income or an expense.
  - **Currency**: Choose the currency (USD, EUR, INR).

- **View Transactions**: View all your transactions in a table format.
- **Delete Transactions**: Remove any transaction from the list.
- **Total Amount**: View the total amount calculated based on your transactions.
- **Local Storage**: Stores transactions in the browser's local storage, so your data persists across sessions.

## Demo
[Link to demo](https://codepen.io/Shravan-Dalavi/pen/poXPPpr)


![image](https://github.com/user-attachments/assets/5dc10e84-4c5b-4404-b027-7ac9845c6cea)


## Installation
1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/expense-tracker.git
    ```
2. **Navigate to the project directory:**

    ```sh
    cd expense-tracker
    ```
3. **Open `index.html` in your web browser:**

    You can simply open the `index.html` file in your web browser to start using the application.

## Usage
1. **Add a Transaction:**

    - Fill in the transaction name.
    - Enter the amount.
    - Select the type (Income or Expense).
    - Choose the currency (USD, EUR, INR).
    - Click the "Add Expense" button to add the transaction.

2. **View Transactions:**
    - All transactions will be displayed in a table below the form.
    - The total amount will be updated and displayed in INR.

3. **Delete a Transaction:**
    - Click on the "Delete" button next to a transaction to remove it from the list.

## Customization

You can customize the application according to your needs:

- **Add more currencies:** Edit the `currency` dropdown in `index.html` to include more currencies.
- **Modify styles:** Update the `style.css` file to change the look and feel of the application.
- **Add features:** Extend the functionality by adding more features like filtering transactions, exporting data, etc.

## File Structure
```s
expense-tracker/
│
├── index.html # The main HTML file
├── style.css # The CSS file for styling the application
├── script.js # The JavaScript file for the application logic
```
