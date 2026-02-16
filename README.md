# Personal Finance Tracker - DevOps & Fullstack Assignment

## 📋 Overview
This is a complete DevOps and Fullstack project implementing an **End-to-End Integration Testing CI Pipeline** for a Personal Finance Tracker application. The project includes:

- **Backend APIs** built with Express.js
- **Frontend UI** built with vanilla JavaScript/HTML/CSS
- **Integration Tests** using Jest + Supertest
- **E2E Tests** using Cypress
- **CI/CD Pipeline** using GitHub Actions

## 🏗️ Project Structure

```
project-root/
├── backend/
│   ├── app.js                 # Express app with APIs
│   ├── server.js              # Server entry point
│   ├── package.json           # Backend dependencies
│   ├── tests/
│   │   └── integration.test.js # Jest + Supertest integration tests
│   └── .gitignore
├── frontend/
│   ├── index.html             # Main HTML file
│   ├── app.js                 # Frontend JavaScript logic
│   ├── styles.css             # Frontend styling
│   └── package.json           # Frontend dependencies
├── cypress/
│   ├── e2e/
│   │   └── pft.cy.js          # Cypress E2E test cases
│   └── package.json           # Cypress config
├── .github/workflows/
│   ├── ci.yml                 # Basic CI pipeline
│   └── full-pipeline.yml      # Complete CI/CD with E2E tests
├── cypress.config.js          # Cypress configuration
├── package.json               # Root package.json
└── README.md                  # This file
```

## 🎯 Learning Objectives

### Morning Session (Lab 13): Integration Testing
- Setup Express backend with REST APIs
- Write integration tests using Jest + Supertest
- Configure CI pipeline to run tests automatically
- Validate API responses and data consistency

### Afternoon Session: End-to-End Testing
- Build frontend UI connected to backend APIs
- Write comprehensive E2E tests using Cypress
- Test complete user flows from UI to database
- Capture screenshots on test failures
- Generate and store test artifacts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- GitHub account

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Start Backend Server** (Terminal 1)
```bash
cd backend
npm start
# Backend runs on http://localhost:5000
```

4. **Start Frontend Server** (Terminal 2)
```bash
cd frontend
npm start
# Frontend runs on http://localhost:3000
```

5. **Run Integration Tests** (Terminal 3)
```bash
cd backend
npm test
```

6. **Run E2E Tests** (Terminal 3)
```bash
npx cypress run --headless
# Or interactive mode:
npx cypress open
```

## 📝 API Endpoints

### Dashboard
- **GET** `/api/dashboard`
  - Returns: `{ totalIncome, totalExpenses, balance }`

### Expenses
- **GET** `/api/expenses` - Get all expenses
- **POST** `/api/expenses` - Create new expense
  - Body: `{ title, amount }`

### Income
- **GET** `/api/income` - Get all income records
- **POST** `/api/income` - Create new income
  - Body: `{ source, amount }`

## ✅ Test Coverage

### Integration Tests (5 tests)
1. Dashboard API returns correct summary data ✓
2. Expenses API supports fetch (GET) operation ✓
3. Expenses API supports create (POST) + fetch consistency ✓
4. Income API supports fetch (GET) operation ✓
5. Income API supports create (POST) + fetch consistency ✓

### E2E Tests (9 tests)
1. Navigate to Dashboard and load summary data ✓
2. Add a new expense and verify it appears in list ✓
3. Add a new income record and verify Dashboard update ✓
4. Display all expense items with correct format ✓
5. Display all income items with correct format ✓
6. Validate form inputs before adding expense ✓
7. Validate form inputs before adding income ✓
8. Navigate between all sections without errors ✓
9. Display proper styling and layout ✓

## 🔄 CI/CD Pipeline

### Workflow Files

**ci.yml** - Basic Integration Testing
- ✓ Checkout code
- ✓ Setup Node.js
- ✓ Install dependencies
- ✓ Start backend server
- ✓ Run integration tests
- ✓ Stop backend server
- ✓ Upload logs as artifact

**full-pipeline.yml** - Complete CI/CD Pipeline
- ✓ Run integration tests (backend only)
- ✓ Start backend server
- ✓ Start frontend server
- ✓ Run E2E tests (Cypress)
- ✓ Capture screenshots on failure
- ✓ Record videos of all tests
- ✓ Upload artifacts (logs, screenshots, videos)
- ✓ Generate test reports

### Triggering CI Pipeline
- Automatically runs on `push` to main branch
- Automatically runs on `pull_request` to main branch
- Can be manually triggered (if configured)

## 📊 Test Results & Artifacts

After CI pipeline completes, check GitHub Actions:
1. **Actions** tab → Select workflow run
2. **Artifacts** section shows:
   - `cypress-videos/` - Test execution videos
   - `cypress-screenshots/` - Failure screenshots
   - `server-logs/` - Backend and frontend logs
   - `backend-test-results/` - Jest coverage reports

## 🔐 Authentication & GitHub Setup

1. **Create GitHub Repository**
   ```bash
   # Go to github.com → New repository
   # Create empty repository (no README)
   ```

2. **Initialize Git locally**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Backend APIs + Integration Tests + CI Pipeline"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

3. **Access CI Pipeline**
   - Go to your repo → **Actions** tab
   - You should see workflow running
   - Wait for it to complete
   - Check logs to verify all tests pass

## 🛠️ Troubleshooting

### Backend Server Not Starting
```bash
# Check if port 5000 is in use
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill existing process and restart
```

### E2E Tests Timeout
- Increase timeout in `cypress.config.js`
- Ensure backend and frontend are running
- Check network connectivity

### Git Push Fails
```bash
# Ensure SSH key is configured or use HTTPS
# Update remote URL if needed:
git remote set-url origin https://github.com/<username>/<repo-name>.git
```

## 📌 Important Notes

- Backend uses in-memory data storage (resets on restart)
- Frontend runs on port 3000, Backend on port 5000
- CORS is enabled to allow frontend-backend communication
- Tests reset data before each test for consistency
- CI pipeline captures all test artifacts automatically

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [Jest Testing Framework](https://jestjs.io/)
- [Supertest for API Testing](https://github.com/visionmedia/supertest)
- [Cypress E2E Testing](https://www.cypress.io/)
- [GitHub Actions CI/CD](https://docs.github.com/en/actions)

## 📞 Support

For issues or questions:
1. Check CI pipeline logs in GitHub Actions
2. Review Cypress screenshots in artifacts
3. Check console logs in browser developer tools
4. Verify backend is running: `curl http://localhost:5000/api/dashboard`

## 📄 License

MIT License - See LICENSE file for details

---

**Course:** B.Tech Professional Elective - DevOps & Fullstack  
**Code:** 23CS102PE405  
**Year:** 2025-26, Even Semester  
**Date:** 16.02.2026  
**Instructors:** Dr. Mohammed Ali Shaik, Dr. R. Vijaya Prakash, Dr. N. Venkatesh, Mr. Sudheer Kumar
