# 🧪 AutomationExercise – Functional Test Cases  
## 📌 Task 2 – Manual Test Case Documentation

---

## 📖 Project Overview

This document contains detailed functional test cases for validating core functionalities on AutomationExercise.com.

The objective is to verify that major user workflows operate correctly according to expected business behavior.

---

# ✅ 1. Create New User Account

| Field | Details |
|-------|---------|
| Test Case ID | TC_01 |
| Module | Authentication |
| Priority | High |
| Precondition | User must not already be registered |

### Test Steps
1. Navigate to the homepage.
2. Click on **Signup / Login**.
3. Enter a valid name and new email address.
4. Click **Signup**.
5. Fill in all required registration details.
6. Click **Create Account**.

### Expected Result
- Account is created successfully.
- User is redirected to logged-in homepage.
- Username is displayed in the header.

---

# ✅ 2. User Login

| Field | Details |
|-------|---------|
| Test Case ID | TC_02 |
| Module | Authentication |
| Priority | High |
| Precondition | User account already exists |

### Test Steps
1. Navigate to homepage.
2. Click **Signup / Login**.
3. Enter valid registered email.
4. Enter correct password.
5. Click **Login**.

### Expected Result
- User logs in successfully.
- Username appears in navigation bar.
- No error message is displayed.

---

# ✅ 3. Search for a Product

## 🔍 TC_03 – Search with Valid Product Name

| Field | Details |
|-------|---------|
| Test Case ID | TC_03 |
| Module | Product Search |
| Priority | Medium |

### Test Steps
1. Navigate to **Products** page.
2. Enter a valid product name in the search bar.
3. Click **Search**.

### Expected Result
- Relevant products are displayed.
- Search results match the entered keyword.

---

## 🔍 TC_04 – Search with Invalid Product Name

| Field | Details |
|-------|---------|
| Test Case ID | TC_04 |
| Module | Product Search |
| Priority | Medium |

### Test Steps
1. Enter an invalid or random product name.
2. Click **Search**.

### Expected Result
- "No products found" message is displayed.
- No unrelated products appear.

---

# ✅ 4. Add Product to Cart

| Field | Details |
|-------|---------|
| Test Case ID | TC_05 |
| Module | Cart |
| Priority | High |

### Test Steps
1. Navigate to **Products** page.
2. Select a product.
3. Open product details page.
4. Click **Add to Cart**.
5. Navigate to Cart page.

### Expected Result
- Product is added successfully.
- Confirmation message appears.
- Product is visible in cart with correct name and price.

---

# ✅ 5. Add a Product Review

| Field | Details |
|-------|---------|
| Test Case ID | TC_06 |
| Module | Product Review |
| Priority | Medium |
| Precondition | User must be logged in |

### Test Steps
1. Navigate to product details page.
2. Scroll to review section.
3. Enter valid name.
4. Enter valid email.
5. Write review message.
6. Click **Submit**.

### Expected Result
- Review is submitted successfully.
- Success confirmation message appears.
- Review is visible under the product.
