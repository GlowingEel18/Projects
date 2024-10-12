const books = [
    {
        title: "1984 by George Orwell",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        cover: "images/1984.jpg"
    },
    {
        title: "Pride and Prejudice by Jane Austen",
        description: "A romantic novel that deals with issues of class, marriage, and morality.",
        cover: "images/pride_and_prejudice.jpg"
    },
    {
        title: "To Kill a Mockingbird by Harper Lee",
        description: "A novel of racial injustice in the Deep South seen through the eyes of a child.",
        cover: "images/to_kill_a_mockingbird.jpg"
    },
    {
        title: "The Great Gatsby by F. Scott Fitzgerald",
        description: "A tragic story of Jay Gatsby and his obsession with Daisy Buchanan.",
        cover: "images/great_gatsby.jpg"
    },
    {
        title: "Moby Dick by Herman Melville",
        description: "A novel about Captain Ahab's obsessive quest to hunt the white whale, Moby Dick.",
        cover: "images/moby_dick.jpg"
    }
];

// Function to display a random book
function displayRandomBook() {
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    document.getElementById('book-title').textContent = selectedBook.title;
    document.getElementById('book-description').textContent = selectedBook.description;
    document.getElementById('book-cover').src = selectedBook.cover;
}

// Call the function when the page loads
window.onload = () => displayRandomBook();

// JavaScript to reload/refresh the page when the "More..." button is clicked
document.getElementById('moreButton').addEventListener('click', () => {
    // You can refresh the page using location.reload() method
    location.reload();
});
