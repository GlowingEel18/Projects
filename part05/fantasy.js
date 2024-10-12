// Array of Fantasy Books
const fantasyBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "An adventure-filled journey of a hobbit, dwarves, and a dragon.",
        image: "images/hobbit.jpg"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The magical world of wizards begins with young Harry Potter.",
        image: "images/harry_potter.jpg"
    },
    {
        title: "A Song of Ice and Fire",
        author: "George R.R. Martin",
        description: "The epic fantasy saga of kings, queens, knights, and dragons.",
        image: "images/song_of_ice_and_fire.jpg"
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        description: "The story of a magically gifted young man and his rise to legend.",
        image: "images/name_of_the_wind.jpg"
    },
    {
        title: "Mistborn",
        author: "Brandon Sanderson",
        description: "A world ruled by a dark lord, where magic is the key to rebellion.",
        image: "images/mistborn.jpg"
    }
];

// Function to select a random fantasy book
function displayRandomBook() {
    const randomIndex = Math.floor(Math.random() * fantasyBooks.length);
    const book = fantasyBooks[randomIndex];
    
    // Populate the featured book section with details
    const featuredBookElement = document.getElementById("featured-book");
    featuredBookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>By ${book.author}</p>
        <p>${book.description}</p>
    `;
}

// Call the function to display the book when the page loads
window.onload = displayRandomBook;


// JavaScript to reload/refresh the page when the "More..." button is clicked
document.getElementById('moreButton').addEventListener('click', () => {
    // You can refresh the page using location.reload() method
    location.reload();
});
