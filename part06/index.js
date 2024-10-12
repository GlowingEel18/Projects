// JavaScript for Hamburger Menu Functionality
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbar.classList.toggle('active');
});

// Async function to fetch the JSON data
const fetchBooks = async () => {
    try {
        // Fetching the JSON data asynchronously
        const response = await fetch('https://glowingeel18.github.io/csce242/assignments/Projects/part06/data/popularBooks.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response as JSON
        const books = await response.json();

        // Calling the function to display books
        displayBooks(books);
    } catch (error) {
        console.error('Error fetching the books:', error);
        // Display an error message on the page
        const container = document.getElementById('book-container');
        if (container) {
            container.innerHTML = '<p>Failed to load book data. Please try again later.</p>';
        }
    }
};

// Function to display the books on the page
const displayBooks = (books) => {
    const container = document.getElementById('book-container');

    // Ensure the container exists
    if (!container) {
        console.error('Error: #book-container not found');
        return;
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    books.forEach(book => {
        // Create div for each book
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        // Create img element
        const img = document.createElement('img');
        img.src = `https://glowingeel18.github.io/csce242/assignments/Projects/part06/images/books/${book.image}`;
        img.alt = book.title;
        img.width = 250;
        img.height = 250;

        // Error handling for missing images (optional)
        img.onerror = () => {
            img.src = 'fallback-image.jpg'; // A default image to show in case the fetch fails
        };

        // Create link for book title
        const link = document.createElement('a');
        link.href = book.link;
        link.target = '_blank';
        const title = document.createElement('h3');
        title.textContent = book.title;
        link.appendChild(title);

        // Create paragraph for book description
        const description = document.createElement('p');
        description.textContent = book.description;

        // Append img, link, and description to the book item
        bookItem.appendChild(img);
        bookItem.appendChild(link);
        bookItem.appendChild(description);

        // Append book item to container
        container.appendChild(bookItem);
    });
};

// Call the function to fetch and display books when the page loads
window.onload = () => fetchBooks();
