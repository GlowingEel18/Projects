const books = [
    {
        title: "The Atlantis Gene by A.G. Riddle",
        description: "A mind-bending thriller that mixes genetics, archeology, and historical mysteries in the quest to unlock the secrets of human evolution.",
        cover: "images/atlantis_gene.jpg"
    },
    {
        title: "The Da Vinci Code by Dan Brown",
        description: "A mystery involving ancient symbols, religious secrets, and cryptography set in the world of art history and science.",
        cover: "images/da_vinci_code.jpg"
    },
    {
        title: "The Martian by Andy Weir",
        description: "A gripping tale of survival on Mars, blending cutting-edge science with the thrilling adventure of one man’s fight to stay alive.",
        cover: "images/the_martian.jpg"
    },
    {
        title: "The Silent Patient by Alex Michaelides",
        description: "A psychological thriller that unravels deep scientific and psychological mysteries surrounding a silent patient.",
        cover: "images/silent_patient.jpg"
    },
    {
        title: "Dark Matter by Blake Crouch",
        description: "A mind-bending, alternate-reality thriller that explores quantum physics and the choices that shape our lives.",
        cover: "images/dark_matter.jpg"
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
