// Q8: Dynamic Object Updater
// Run this file in a browser.
"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Edit User Details</h2>
    <form id="userForm">
        <label>Name: <input id="userName" type="text"></label><br><br>
        <label>Email: <input id="userEmail" type="email"></label><br><br>
        <label>Age: <input id="userAge" type="number"></label><br><br>
        <button type="submit">Update User</button>
    </form>
    <h3>Updated User Object</h3>
    <pre id="userOutput"></pre>
`;

const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

// Show the original values in the form and output.
document.getElementById("userName").value = user.name;
document.getElementById("userEmail").value = user.email;
document.getElementById("userAge").value = user.age;
userOutput.textContent = JSON.stringify(user, null, 2);

userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update the existing object with the values entered by the user.
    user.name = document.getElementById("userName").value.trim();
    user.email = document.getElementById("userEmail").value.trim();
    user.age = Number(document.getElementById("userAge").value);

    userOutput.textContent = JSON.stringify(user, null, 2);
    console.log("Updated user object:", user);
});
