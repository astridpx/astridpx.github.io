let wrapperCard = document.querySelector(".wrapper-card");
let students = document.querySelector(".student-card");
let issueBook = document.querySelector(".issue-book-card");
let allRecords = document.querySelector(".return-books-card");
let books = document.querySelector(".book-card");

// student card link
students.addEventListener("click", () => {
  window.location.href = "student-records.html";
});

issueBook.addEventListener("click", () => {
  window.location.href = "issue-book.html";
});

allRecords.addEventListener("click", () => {
  window.location.href = "return-book.html";
});

books.addEventListener("click", () => {
  window.location.href = "books.html";
});
