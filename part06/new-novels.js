// Array containing the list of books with title, description, image, and file links
const books = [
    {
        title: "The Untold Adventure",
        description: "A gripping tale of adventure and mystery.",
        imgSrc: "images/new-novel1.jpg",
        pdfLink: "novel1.pdf"
    },
    {
        title: "Shadows in the Dark",
        description: "An intense thriller that will keep you on the edge of your seat.",
        imgSrc: "images/new-novel2.jpg",
        pdfLink: "novel2.pdf"
    },
    {
        title: "The Last Kingdom",
        description: "A historical novel set in medieval times.",
        imgSrc: "images/new-novel3.jpg",
        pdfLink: "novel3.pdf"
    },
    {
        title: "Echoes of the Past",
        description: "A captivating historical mystery.",
        imgSrc: "images/new-novel4.jpg",
        pdfLink: "novel4.pdf"
    },
    {
        title: "Beyond the Stars",
        description: "A science fiction novel set in a distant galaxy.",
        imgSrc: "images/new-novel5.jpg",
        pdfLink: "novel5.pdf"
    }
];

// Function to shuffle and select random books to display using arrow function
const getRandomBooks = () => {
    const shuffledBooks = books.sort(() => 0.5 - Math.random());
    return shuffledBooks.slice(0, 3); // Select the first 3 books
}

// Function to display the selected books on the page using arrow function
const displayBooks = () => {
    const bookListContainer = document.getElementById('novel-list');
    const randomBooks = getRandomBooks();

    // Clear any existing books
    bookListContainer.innerHTML = '';

    // Create and append the book items
    randomBooks.forEach(book => {
        const bookItem = `
            <div class="novel-item">
                <img src="${book.imgSrc}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
            </div>
        `;
        bookListContainer.innerHTML += bookItem;
    });
}

// Run the function to display books when the page loads using arrow function
window.onload = () => displayBooks();

// JavaScript to reload/refresh the page when the "More..." button is clicked
document.getElementById('moreButton').addEventListener('click', () => {
    // You can refresh the page using location.reload() method
    location.reload();
});
