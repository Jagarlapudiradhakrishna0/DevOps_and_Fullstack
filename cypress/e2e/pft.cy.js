describe('Personal Finance Tracker - End-to-End Tests', () => {
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Should navigate to Dashboard and load summary data', () => {
    cy.visit(`${baseUrl}`);
    
    // Check that Dashboard section is visible
    cy.get('#dashboard').should('be.visible');
    
    // Check for summary cards
    cy.get('.summary-cards').should('exist');
    cy.get('.income-card').should('be.visible');
    cy.get('.expense-card').should('be.visible');
    cy.get('.balance-card').should('be.visible');
    
    // Verify dashboard data loads
    cy.get('#totalIncome').should('contain', '$');
    cy.get('#totalExpenses').should('contain', '$');
    cy.get('#balance').should('contain', '$');
  });

  it('Should add a new expense and verify it appears in the list', () => {
    // Navigate to Expenses section
    cy.get('#expensesBtn').click();
    cy.get('#expenses').should('be.visible');

    // Get initial expense count
    cy.get('#expensesList li').then($items => {
      const initialCount = $items.length;

      // Add new expense
      cy.get('#expenseTitle').type('Test Expense');
      cy.get('#expenseAmount').type('150.50');
      cy.get('#addExpenseBtn').click();

      // Verify expense appears in list
      cy.get('#expensesList li').should('have.length', initialCount + 1);
      cy.get('#expensesList').should('contain', 'Test Expense');
      cy.get('#expensesList').should('contain', '150.50');
    });

    // Clear form inputs
    cy.get('#expenseTitle').should('have.value', '');
    cy.get('#expenseAmount').should('have.value', '');
  });

  it('Should add a new income record and verify updates on Dashboard', () => {
    // Navigate to Income section
    cy.get('#incomeBtn').click();
    cy.get('#income').should('be.visible');

    // Get initial income count
    cy.get('#incomeList li').then($items => {
      const initialCount = $items.length;

      // Add new income
      cy.get('#incomeSource').type('Test Income Source');
      cy.get('#incomeAmount').type('2500');
      cy.get('#addIncomeBtn').click();

      // Verify income appears in list
      cy.get('#incomeList li').should('have.length', initialCount + 1);
      cy.get('#incomeList').should('contain', 'Test Income Source');
      cy.get('#incomeList').should('contain', '2500');
    });

    // Navigate to Dashboard and verify balance updated
    cy.get('#dashboardBtn').click();
    cy.get('#dashboard').should('be.visible');
    cy.get('#totalIncome').should('not.be.empty');
  });

  it('Should display all expense items with correct format', () => {
    cy.get('#expensesBtn').click();

    cy.get('#expensesList li').each(($li) => {
      cy.wrap($li).should('contain', '$');
      cy.wrap($li).find('strong').should('exist');
    });
  });

  it('Should display all income items with correct format', () => {
    cy.get('#incomeBtn').click();

    cy.get('#incomeList li').each(($li) => {
      cy.wrap($li).should('contain', '$');
      cy.wrap($li).find('strong').should('exist');
    });
  });

  it('Should validate form inputs before adding expense', () => {
    cy.get('#expensesBtn').click();

    // Try to add expense without title
    cy.get('#expenseAmount').type('100');
    cy.get('#addExpenseBtn').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill all fields');
    });

    // Try to add expense without amount
    cy.get('#expenseAmount').clear();
    cy.get('#expenseTitle').type('Valid Title');
    cy.get('#addExpenseBtn').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill all fields');
    });
  });

  it('Should validate form inputs before adding income', () => {
    cy.get('#incomeBtn').click();

    // Try to add income without source
    cy.get('#incomeAmount').type('100');
    cy.get('#addIncomeBtn').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill all fields');
    });

    // Try to add income without amount
    cy.get('#incomeAmount').clear();
    cy.get('#incomeSource').type('Valid Source');
    cy.get('#addIncomeBtn').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fill all fields');
    });
  });

  it('Should navigate between all sections without errors', () => {
    // Test each navigation button
    cy.get('#dashboardBtn').click();
    cy.get('#dashboard').should('be.visible');
    cy.get('#expenses').should('not.be.visible');
    cy.get('#income').should('not.be.visible');

    cy.get('#expensesBtn').click();
    cy.get('#dashboard').should('not.be.visible');
    cy.get('#expenses').should('be.visible');
    cy.get('#income').should('not.be.visible');

    cy.get('#incomeBtn').click();
    cy.get('#dashboard').should('not.be.visible');
    cy.get('#expenses').should('not.be.visible');
    cy.get('#income').should('be.visible');

    cy.get('#dashboardBtn').click();
    cy.get('#dashboard').should('be.visible');
  });

  it('Should display proper styling and layout', () => {
    // Check navbar styling
    cy.get('.navbar').should('exist');
    cy.get('.navbar h1').should('contain', 'Personal Finance Tracker');

    // Check navigation buttons
    cy.get('.nav-links button').should('have.length', 3);

    // Check dashboard cards styling
    cy.get('.card').should('have.class', 'income-card');
    cy.get('.card').should('have.class', 'expense-card');
    cy.get('.card').should('have.class', 'balance-card');
  });
});
