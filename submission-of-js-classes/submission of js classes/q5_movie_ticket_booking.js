// Q5 – Movie Ticket Booking (Objects + RegExp)
"use strict";

const bookingForm = document.getElementById("bookingForm");
const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const seats = Number(bookingForm.elements.seats.value);
    const errors = [];

    if (!namePattern.test(name)) errors.push("Name must contain alphabets and spaces only.");
    if (!emailPattern.test(email)) errors.push("Enter a valid email address.");
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        errors.push("Choose between 1 and 10 seats.");
    }

    const message = document.getElementById("bookingMessage");
    const ticketElement = document.getElementById("ticket");

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        ticketElement.hidden = true;
        return;
    }

    const booking = { name, email, seats };
    message.textContent = "Booking successful!";
    ticketElement.hidden = false;
    ticketElement.textContent =
        `MOVIE TICKET\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    console.log("Booking saved:", booking);
});