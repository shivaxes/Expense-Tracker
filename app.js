document.addEventListener('DOMContentLoaded', function() {
  const expenseNameInput = document.getElementById('expense-name');
  const expenseAmountInput = document.getElementById('expense-amount');
  const addExpenseButton = document.getElementById('add-expense');
  const expenseList = document.getElementById('expense-list');

  // Load expenses from local storage
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  // Display expenses
  const displayExpenses = () => {
      expenseList.innerHTML = '';
      expenses.forEach((expense, index) => {
          const li = document.createElement('li');
          li.textContent = `${expense.name}: ${expense.amount}`;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete Expense';
          deleteButton.onclick = () => {
              expenses.splice(index, 1);
              localStorage.setItem('expenses', JSON.stringify(expenses));
              displayExpenses();
          };
          li.appendChild(deleteButton);
          expenseList.appendChild(li);


          const editButton=document.createElement('button');
          editButton.textContent = 'Edit Expense';
          editButton.onclick = () => {
              expenses.splice(index, 1);
              localStorage.setItem('expenses', JSON.stringify(expenses));
              displayExpenses();
          };
          li.appendChild(editButton);
          expenseList.appendChild(li);
      });
  };

  // Add new expense
  addExpenseButton.addEventListener('click', () => {
      const name = expenseNameInput.value;
      const amount = expenseAmountInput.value;

      if (name && amount) {
          const expense = { name, amount };
          expenses.push(expense);
          localStorage.setItem('expenses', JSON.stringify(expenses));
          displayExpenses();
          expenseNameInput.value = '';
          expenseAmountInput.value = '';
      }
  });

  displayExpenses();
});
