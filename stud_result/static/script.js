function validateForm() {
    const fields = ['math', 'science', 'english','marathi','hindi','social studies'];
    for (let field of fields) {
        const value = document.forms[0][field].value;
        if (value < 0 || value > 100) {
            alert("Please enter marks between 0 and 100.");
            return false;
        }
    }
    return true;
}
