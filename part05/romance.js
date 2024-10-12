const books = [
    {
        title: "Pride and Prejudice by Jane Austen",
        description: "One of the most famous romance novels of all time, featuring the beloved characters Elizabeth Bennet and Mr. Darcy.",
        cover: "images/pride_prejudice.jpg"
    },
    {
        title: "Me Before You by Jojo Moyes",
        description: "A heart-wrenching romance between Louisa Clark and Will Traynor that challenges their outlooks on life and love.",
        cover: "images/me_before_you.jpg"
    },
    {
        title: "The Notebook by Nicholas Sparks",
        description: "A classic romance that tells the enduring love story of Noah and Allie, spanning decades.",
        cover: "images/the_notebook.jpg"
    },
    {
        title: "Outlander by Diana Gabaldon",
        description: "A sweeping romance set in 18th-century Scotland, filled with adventure, history, and unforgettable love.",
        cover: "images/outlander.jpg"
    },
    {
        title: "The Time Traveler's Wife by Audrey Niffenegger",
        description: "A love story that defies time, exploring the relationship between Henry and Clare, as Henry travels unpredictably through time.",
        cover: "images/time_travelers_wife.jpg"
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
