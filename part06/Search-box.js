document.addEventListener('DOMContentLoaded', () => {
    // Select the search button and input field
    const searchButton = document.querySelector('button'); // No need for [type="submit"] since your button doesn't have a type attribute
    const searchInput = document.getElementById('search-input');

    // Add event listener to the search button
    searchButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents page reload or form submission

        // Get the trimmed search input value
        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText === "") {
            alert("Please enter a search term or URL.");
        } else {
            // Check if the input is a valid URL (starts with http/https)
            const urlPattern = /^(https?:\/\/)/;

            if (urlPattern.test(searchText)) {
                // If it's a URL, open it in a new tab
                window.open(searchText, '_blank');
            } else {
                // Otherwise, check if the search term matches a book in the list
                searchBook(searchText);
            }
        }
    });
});

// Function to search for books by name
function searchBook(searchText) {
    // List of available books with their corresponding URLs
    const books = {
        "the awakening": "TheAwakening.html",
        "to kill a mockingbird": "TKAM.html",
        "fahrenheit 451": "Fahrenheit451.html",
        "trigger warning": "TriggerWarning.html",
        "smoke and mirrors": "Smoke&Mirrors.html",
        "strange chemistry": "StrangeChemistry.html",
        "gory details": "GoryDetails.html",
        "periodic tales": "PeriodicTales.html",
        "the view from the cheap seats": "CheapSeats.html",
        "how to take smart notes": "SmartNotes.html"
    };

    // Check if the search term matches any book in the list
    if (books[searchText]) {
        // If a match is found, navigate to the corresponding book page
        window.location.href = books[searchText];
    } else {
        // If no match is found, perform a Google search with the entered search term
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        window.location.href = googleSearchUrl;
    }
}

// JavaScript to handle the hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navbar.classList.toggle('active');
    });

    // Search functionality (optional)
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.getElementById('search-input').value.trim();
        if (searchInput) {
            console.log('Searching for:', searchInput);
            // Implement your search logic here
            alert(`Searching for: ${searchInput}`);
        } else {
            alert('Please enter a search term');
        }
    });
});
