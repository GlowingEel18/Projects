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
        const response = await fetch('../part06/data/popularBooks.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //Parsing the response as JSON
        return await response.json();
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
const displayBooks = async () =>  {
    let books = await fetchBooks();
    const booksGrid  = document.getElementById('books-grid');
    let i = 0
    books.forEach((book) => {
        i = i+1;
        console.log("book: ", book);
        booksGrid.append(getBookItem(book, i));
    });
}

const getBookItem = (book, i) => {
    // Create a new div element
    var div = document.createElement("div");
    // Optionally, set attributes or styles for the div
    div.id = "book"+i; // Set an ID for the div
    div.className = "book-item"; // Set a class for the div
    // Append the div to an existing element in your HTML
    // Create a new image element
    var img = document.createElement("img");
    // Set the source attribute for the image
    img.src = book.image;
    // Optionally, set other attributes like alt text or width and height
    img.alt = book.title;
    img.width = 250; // Set the width to 250px
    img.height = 250; // Set the height to 250px
    // Append the image to an existing element in your HTML
    div.appendChild(img);
    // Create a new anchor element
    var anchor = document.createElement("a");
    // Set the href attribute for the anchor
    anchor.href = book.link;
    // Optionally, set other attributes like target
    anchor.target = "_blank"; // Opens the link in a new tab
    // Append the anchor to an existing element in your HTML
    // Create a new h3 element
    var heading = document.createElement("h3");
    heading.textContent = book.title;
    // Append the h3 element to the anchor
    anchor.appendChild(heading);
    div.appendChild(anchor);

    // Create a new paragraph element
    var para = document.createElement("p");
    // Add text to the paragraph
    para.textContent = book.description;
    // Append the paragraph to an existing element in your HTML
    //document.body.appendChild(para);
    div.appendChild(para);
    return div
}

// Call the function to fetch and display books when the page loads
window.onload = () => displayBooks();

