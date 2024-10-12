const books = [
    {
        title: "Dune by Frank Herbert",
        description: "Set in the distant future amidst a huge interstellar empire, Dune explores the complex interactions of politics, religion, and ecology.",
        cover: "images/dune.jpg"
    },
    {
        title: "The Left Hand of Darkness by Ursula K. Le Guin",
        description: "A tale of intrigue, betrayal, and survival on a planet where the inhabitants can change gender at will.",
        cover: "images/left_hand_darkness.jpg"
    },
    {
        title: "Foundation by Isaac Asimov",
        description: "A mathematician develops 'psychohistory', a method of predicting the future, to save the galaxy from chaos.",
        cover: "images/foundation.jpg"
    },
    {
        title: "Neuromancer by William Gibson",
        description: "A classic cyberpunk novel that follows a washed-up computer hacker hired for one last job.",
        cover: "images/neuromancer.jpg"
    },
    {
        title: "Snow Crash by Neal Stephenson",
        description: "A mind-bending cyberpunk thriller involving virtual reality, viruses, and ancient myths.",
        cover: "images/snow_crash.jpg"
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
