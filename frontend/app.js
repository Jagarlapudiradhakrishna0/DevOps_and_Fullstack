const API_BASE_URL = 'http://localhost:5000/api';

// Navigation
document.getElementById('dashboardBtn').addEventListener('click', () => switchSection('dashboard'));
document.getElementById('expensesBtn').addEventListener('click', () => switchSection('expenses'));
document.getElementById('incomeBtn').addEventListener('click', () => switchSection('income'));

// Add Expense
document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
document.getElementById('addIncomeBtn').addEventListener('click', addIncome);

function switchSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));

    // Show selected section
    document.getElementById(section).classList.add('active');
    event.target.classList.add('active');

    // Load data
    if (section === 'dashboard') loadDashboard();
    else if (section === 'expenses') loadExpenses();
    else if (section === 'income') loadIncome();
}

async function loadDashboard() {
    try {
        const response = await fetch(`${API_BASE_URL}/dashboard`);
        const data = await response.json();
        document.getElementById('totalIncome').textContent = `$${data.totalIncome}`;
        document.getElementById('totalExpenses').textContent = `$${data.totalExpenses}`;
        document.getElementById('balance').textContent = `$${data.balance}`;
    } catch (error) {
        console.error('Error loading dashboard:', error);
    }
}

async function loadExpenses() {
    try {
        const response = await fetch(`${API_BASE_URL}/expenses`);
        const expenses = await response.json();
        const list = document.getElementById('expensesList');
        list.innerHTML = '';
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>
                    <div><strong>${expense.title}</strong></div>
                    <div>$${expense.amount}</div>
                </span>
            `;
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading expenses:', error);
    }
}

async function addExpense() {
    const title = document.getElementById('expenseTitle').value;
    const amount = document.getElementById('expenseAmount').value;

    if (!title || !amount) {
        alert('Please fill all fields');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/expenses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, amount: parseFloat(amount) })
        });

        if (response.ok) {
            document.getElementById('expenseTitle').value = '';
            document.getElementById('expenseAmount').value = '';
            loadExpenses();
            loadDashboard();
        }
    } catch (error) {
        console.error('Error adding expense:', error);
    }
}

async function loadIncome() {
    try {
        const response = await fetch(`${API_BASE_URL}/income`);
        const incomeData = await response.json();
        const list = document.getElementById('incomeList');
        list.innerHTML = '';
        incomeData.forEach(income => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>
                    <div><strong>${income.source}</strong></div>
                    <div>$${income.amount}</div>
                </span>
            `;
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading income:', error);
    }
}

async function addIncome() {
    const source = document.getElementById('incomeSource').value;
    const amount = document.getElementById('incomeAmount').value;

    if (!source || !amount) {
        alert('Please fill all fields');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/income`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ source, amount: parseFloat(amount) })
        });

        if (response.ok) {
            document.getElementById('incomeSource').value = '';
            document.getElementById('incomeAmount').value = '';
            loadIncome();
            loadDashboard();
        }
    } catch (error) {
        console.error('Error adding income:', error);
    }
}

// Load dashboard on startup
loadDashboard();
