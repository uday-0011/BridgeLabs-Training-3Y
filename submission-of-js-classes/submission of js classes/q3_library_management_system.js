// Q3 – Library Management System (Classes + Objects)
"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }
        this.isIssued = true;
        return `Issued: ${this.title}`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} was not issued.`;
        }
        this.isIssued = false;
        return `Returned: ${this.title}`;
    }
}

const books = [
    new Book("Clean Code", "Robert C. Martin", "ISBN-1001"),
    new Book("Atomic Habits", "James Clear", "ISBN-1002"),
    new Book("The Hobbit", "J. R. R. Tolkien", "ISBN-1003", true)
];

function displayAvailableBooks() {
    console.log("\\nAvailable books:");
    const availableBooks = books.filter((book) => !book.isIssued);
    if (availableBooks.length === 0) console.log("No books available.");
    availableBooks.forEach((book) => console.log(`${book.title} — ${book.author} (${book.isbn})`));
}

function issueByISBN(isbn) {
    const book = books.find((item) => item.isbn === isbn);
    if (!book) {
        console.log(`No book found with ISBN ${isbn}.`);
        return;
    }
    console.log(book.issueBook());
}

displayAvailableBooks();
issueByISBN("ISBN-1002");
displayAvailableBooks();

// In a real app, get the ISBN with prompt() or a form, then call issueByISBN(isbn).