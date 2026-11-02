// Q7: Login Form Validation using RegExp
// Run this file in a browser.
"use strict";

document.body.innerHTML = `
    <h2>Login Form</h2>
    <form id="loginForm" novalidate>
        <label>Username: <input id="loginUsername" type="text"></label><br><br>
        <label>Password: <input id="loginPassword" type="password"></label><br><br>
        <button type="submit">Login</button>
    </form>
    <ul id="loginErrors"></ul>
    <p id="loginMessage"></p>
`;

const loginForm = document.getElementById("loginForm");
const loginErrors = document.getElementById("loginErrors");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }

    loginErrors.innerHTML = "";
    if (errors.length > 0) {
        errors.forEach(message => {
            const item = document.createElement("li");
            item.textContent = message;
            item.style.color = "red";
            loginErrors.appendChild(item);
        });
        loginMessage.textContent = "Login validation failed.";
        loginMessage.style.color = "red";
    } else {
        loginMessage.textContent = "Validation successful!";
        loginMessage.style.color = "green";
    }
});
