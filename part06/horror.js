const books = [
    {
        title: "The Shining by Stephen King",
        description: "A family heads to an isolated hotel for the winter, where an evil presence influences the father into violence while his psychic son sees horrific visions.",
        cover: "images/shining.jpg"
    },
    {
        title: "Dracula by Bram Stoker",
        description: "The classic gothic novel that introduced the character of Count Dracula and established many conventions of subsequent vampire fantasy.",
        cover: "images/dracula.jpg"
    },
    {
        title: "Frankenstein by Mary Shelley",
        description: "A novel about a scientist who creates a grotesque creature in an unorthodox scientific experiment that leads to terrifying consequences.",
        cover: "images/frankenstein.jpg"
    },
    {
        title: "It by Stephen King",
        description: "In the small town of Derry, children are terrorized by an ancient, shape-shifting entity that takes on the form of a clown named Pennywise.",
        cover: "images/it.jpg"
    },
    {
        title: "The Haunting of Hill House by Shirley Jackson",
        description: "A chilling tale of four people who are drawn to a haunted mansion, where strange and terrifying things begin to happen.",
        cover: "images/haunting_hill_house.jpg"
    }
];

// Function to display a random book using arrow function
const displayRandomBook = () => {
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
