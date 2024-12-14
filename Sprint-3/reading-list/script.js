// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  // select the <ul> reading list element
  const readingList = document.getElementById("reading-list");

  // iterate through the array
  books.forEach((book) => {
    // create a list item for each book
    const listItem = document.createElement("li");
    listItem.style.padding = "1rem";
    listItem.style.marginBottom = "1rem";
    listItem.style.alignItems = "center";
    listItem.style.listStyleType = "disc";

    // background color based on whether the book is already read
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    // create img element for the book cover
    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;

    // create container for the book details
    const bookDetails = document.createElement("div");

    // add book title
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = book.title;
    bookTitle.style.marginBottom = "0";

    // add book author
    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `by ${book.author}`;
    bookAuthor.style.marginTop = "0";
    bookAuthor.style.marginBottom = "1rem";

    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);

    listItem.appendChild(bookDetails);
    listItem.appendChild(bookImage);

    readingList.appendChild(listItem);
  });
}
// call the function to populate the reading list
readingList(books);
