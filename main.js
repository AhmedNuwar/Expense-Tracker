const budgetForm = document.getElementById('budget-form');
const expenseForm = document.getElementById('expense-form');
const budgetInput = document.getElementById('budget-input');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');

const budgetAmount = document.getElementById('budget-amount');
const remainingAmount = document.getElementById('remaining-amount');
const totalAmount = document.getElementById('total-amount');
const expenseList = document.getElementById('expense-list');

let budget = 0;
let totalExpenses = 0;

// Set Budget
budgetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  budget = parseFloat(budgetInput.value);

  if (budget > 0) {
    budgetAmount.textContent = budget.toFixed(2);
    remainingAmount.textContent = budget.toFixed(2);
    budgetInput.value = '';
  }
});

// Add Expense
expenseForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (expenseName && expenseAmount > 0) {
    // Add to expense list
    const li = document.createElement('li');
    li.innerHTML = `${expenseName} - <strong>${expenseAmount.toFixed(2)} EGP</strong> 
      <button onclick="removeExpense(this, ${expenseAmount})" 
      style="color: red; border: none; background: none; cursor: pointer;">✖</button>`;
    expenseList.appendChild(li);

    // Update total and remaining
    totalExpenses += expenseAmount;
    totalAmount.textContent = totalExpenses.toFixed(2);
    remainingAmount.textContent = (budget - totalExpenses).toFixed(2);

    // Clear inputs
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
  }
});

// Remove Expense
function removeExpense(button, amount) {
  // Remove the expense
  button.parentElement.remove();

  // Update total and remaining
  totalExpenses -= amount;
  totalAmount.textContent = totalExpenses.toFixed(2);
  remainingAmount.textContent = (budget - totalExpenses).toFixed(2);
}
