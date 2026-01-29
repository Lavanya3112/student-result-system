function validateForm() {
  const name = document.getElementById("name").value.trim();
  const fields = ['maths', 'science', 'english', 'marathi', 'hindi', 'social'];

  if (name === "") {
    showError("Please enter student name");
    return false;
  }

  for (let field of fields) {
    const value = Number(document.getElementById(field).value);

    if (isNaN(value)) {
      showError("Please fill all marks");
      return false;
    }

    if (value < 0 || value > 100) {
      showError("Marks must be between 0 and 100");
      return false;
    }
  }

  hideError();
  return true;
}

function handleSubmit() {
  if (!validateForm()) return;

  const name = document.getElementById("name").value.trim();

  const subjects = {
    Maths: Number(document.getElementById("maths").value),
    Science: Number(document.getElementById("science").value),
    English: Number(document.getElementById("english").value),
    Marathi: Number(document.getElementById("marathi").value),
    Hindi: Number(document.getElementById("hindi").value),
    Social: Number(document.getElementById("social").value)
  };

  processResult(name, subjects);
}

function processResult(name, subjects) {
  const PASS_MARK = 35;
  let total = 0;
  let failedSubjects = [];

  for (let subject in subjects) {
    total += subjects[subject];
    if (subjects[subject] < PASS_MARK) {
      failedSubjects.push(subject);
    }
  }

  const percentage = Number(((total / 600) * 100).toFixed(2));

  let grade = "Fail";
  if (percentage >= 75) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";

  displayResult(name, total, percentage, grade, failedSubjects);
}

function displayResult(name, total, percentage, grade, failedSubjects) {
  let percentColor = percentage >= 40 ? "green" : "red";

  let statusHTML =
    failedSubjects.length > 0
      ? `<p style="color:red;">Failed in: ${failedSubjects.join(", ")}</p>`
      : `<p style="color:green;">Passed all subjects</p>`;

  document.getElementById("resultBox").innerHTML = `
    <h3>Result for ${name}</h3>
    <p>Total Marks: ${total} / 600</p>
    <p style="color:${percentColor};">Percentage: ${percentage}%</p>
    <p>Grade: ${grade}</p>
    ${statusHTML}
  `;

  saveResult(name, total, percentage, grade);
}

function showError(message) {
  const errorBox = document.getElementById("error");
  errorBox.innerText = message;
  errorBox.style.display = "block";
}

function hideError() {
  document.getElementById("error").style.display = "none";
}

function saveResult(name, total, percentage, grade) {
  const record = {
    name,
    total,
    percentage,
    grade,
    date: new Date().toLocaleString()
  };

  let results = JSON.parse(localStorage.getItem("results")) || [];
  results.push(record);
  localStorage.setItem("results", JSON.stringify(results));
}