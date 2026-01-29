# 📊 Student Marks & Result Calculator

A simple and interactive web application to calculate student results based on subject-wise marks. The app validates input, calculates total marks, percentage, grade, and pass/fail status, and displays results dynamically on the same page.

---

## 🚀 Features

* User-friendly interface with clean design
* Subject-wise marks input (Maths, Science, English, Marathi, Hindi, Social Studies)
* Client-side validation (marks between 0–100)
* Automatic calculation of:

  * Total Marks
  * Percentage
  * Grade (A / B / C / Fail)
  * Pass/Fail status per student
* Percentage displayed in **green (pass)** or **red (fail)**
* Results displayed instantly without page reload
* Stores result history using **browser localStorage**
* Responsive layout with background image

---

## 🛠️ Tech Stack

* **Frontend:**

  * HTML5
  * CSS3
  * JavaScript (DOM manipulation, validation, logic)

* **Backend:**

  * Flask (Python) – used to serve the HTML template

---

## 📂 Project Structure

```
project/
│
├── app.py
├── templates/
│   └── index.html
│
├── static/
│   ├── script.js
│   └── background.jpg
│
└── README.md
```

---

## 🧠 How It Works

1. User enters name and subject marks.
2. JavaScript validates inputs (no empty fields, marks between 0–100).
3. Total marks and percentage are calculated.
4. Grade and pass/fail status are determined based on logic.
5. Result is displayed dynamically on the same page.
6. Result data is saved in browser localStorage.

---

## ▶️ How to Run the Project

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Install Flask (if not installed):

   ```bash
   pip install flask
   ```

3. Run the app:

   ```bash
   python app.py
   ```

4. Open browser and go to:

   ```
   http://127.0.0.1:5000
   ```

---

## 📌 Grading Criteria

* **A Grade:** 75% and above
* **B Grade:** 60% – 74%
* **C Grade:** 40% – 59%
* **Fail:** Below 40%

Passing mark per subject: **35**

---

## 🌱 Future Improvements (Optional)

* Add result history table view
* Export results to CSV
* Add charts for performance analysis
* Store data in a database
* Add login system for multiple students

---

## 👩‍💻 Author

**Lavanya Ajit Dive**
Second-year Data Science student
Interested in data analysis, frontend logic, and practical real-life projects

---
