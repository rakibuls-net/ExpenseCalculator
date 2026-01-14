const expenseInput = document.getElementById('expenseInput');
const addBtn = document.getElementById('addBtn');
const totalExpense = document.getElementById('totalExpense');
const expenseList = document.getElementById('expenseList');

// Array Declaration
let expenses = [];

// Add Button e Click
addBtn.addEventListener('click', function() {
    const value = expenseInput.value.trim();

    // Validation: 
    if (value === '' || isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    const amount = parseFloat(value);
    expenses.push(amount);

    // New List ITem make
    const li = document.createElement('li');
    li.textContent = `$${amount.toFixed(2)}`;
    expenseList.appendChild(li);

    // Total Expence Calculate
    const total = expenses.reduce((sum, curr) => sum + curr, 0);
    totalExpense.textContent = total.toFixed(2);

    //
    expenseInput.value = '';
});
