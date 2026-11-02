// Q2: Student Form Validator (Forms + RegExp)
// Run this file in a browser. It creates the form using JavaScript.
"use strict";

document.body.innerHTML = `
    <h2>Student Registration Form</h2>
    <form id="studentForm" novalidate>
        <label>Name: <input id="studentName" type="text"></label><br><br>
        <label>Email: <input id="studentEmail" type="text"></label><br><br>
        <label>Phone: <input id="studentPhone" type="text"></label><br><br>
        <label>Password: <input id="studentPassword" type="password"></label><br><br>
        <button type="submit">Register</button>
    </form>
    <p id="formMessage"></p>
`;

const studentForm = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");

const validationRules = {
    studentName: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    studentEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    studentPhone: /^\d{10}$/,
    // At least one uppercase letter, one digit, and one special character.
    studentPassword: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let allValid = true;
    const fields = Object.keys(validationRules);

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const isValid = validationRules[fieldId].test(field.value.trim());

        field.style.border = isValid ? "2px solid green" : "2px solid red";
        if (!isValid) allValid = false;
    });

    if (allValid) {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent =
            "Please correct the fields with red borders. Name: alphabets only; email: valid format; phone: 10 digits; password: uppercase, number and special character required.";
        formMessage.style.color = "red";
    }
});
