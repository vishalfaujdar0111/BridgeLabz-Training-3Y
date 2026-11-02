// Q5: Movie Ticket Booking (Objects + RegExp)
// Run this file in a browser.
"use strict";

document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>
    <form id="bookingForm" novalidate>
        <label>Name: <input id="bookingName" type="text"></label><br><br>
        <label>Email: <input id="bookingEmail" type="email"></label><br><br>
        <label>Seats (1-10): <input id="bookingSeats" type="number" min="1" max="10"></label><br><br>
        <button type="submit">Book Tickets</button>
    </form>
    <p id="bookingMessage"></p>
    <pre id="ticketDetails"></pre>
`;

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const ticketDetails = document.getElementById("ticketDetails");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seats = Number(document.getElementById("bookingSeats").value);

    const nameIsValid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsAreValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    if (!nameIsValid || !emailIsValid || !seatsAreValid) {
        bookingMessage.textContent =
            "Invalid input. Enter a name using alphabets, a valid email, and seats from 1 to 10.";
        bookingMessage.style.color = "red";
        ticketDetails.textContent = "";
        return;
    }

    const booking = { name, email, seats };
    bookingMessage.textContent = "Booking successful!";
    bookingMessage.style.color = "green";
    ticketDetails.textContent =
        `MOVIE TICKET\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    console.log("Booking object:", booking);
});
