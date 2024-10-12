// Define the list of books with their images, titles, and descriptions
const popularBooks = [
    { img: 'https://picsum.photos/200/300?random=1', title: 'Fantasy', description: 'A fantastic new novel.' },
    { img: 'https://picsum.photos/200/300?random=2', title: 'Popular Book 2', description: 'A bestselling mystery.' },
    { img: 'https://picsum.photos/200/300?random=3', title: 'Popular Book 3', description: 'An exciting fantasy.' },
    { img: 'https://picsum.photos/200/300?random=4', title: 'Popular Book 4', description: 'A thrilling crime drama.' },
    { img: 'https://picsum.photos/200/300?random=5', title: 'Popular Book 5', description: 'A gripping historical fiction.' },
    { img: 'https://picsum.photos/200/300?random=6', title: 'Popular Book 6', description: 'An inspiring non-fiction.' },
    { img: 'https://picsum.photos/200/300?random=7', title: 'Popular Book 7', description: 'A heartwarming romance.' },
    { img: 'https://picsum.photos/200/300?random=8', title: 'Popular Book 8', description: 'A deep dive into a scientific mystery.' },
    { img: 'https://picsum.photos/200/300?random=9', title: 'Popular Book 9', description: 'An adventurous sci-fi journey.' },
    { img: 'https://picsum.photos/200/300?random=10', title: 'Popular Book 10', description: 'A captivating fantasy epic.' }
];

// Keep track of the current index for each book
let currentBookIndexes = Array(popularBooks.length).fill(0);

// Function to change the content of a book when clicked
function changeBook(bookIndex) {
    // Increment the current index of the clicked book, wrapping back to the start if necessary
    currentBookIndexes[bookIndex] = (currentBookIndexes[bookIndex] + 1) % popularBooks.length;

    // Get the new book data
    const bookData = popularBooks[currentBookIndexes[bookIndex]];

    // Update the content of the clicked book
    const bookItem = document.getElementById(`book${bookIndex + 1}`);
    bookItem.querySelector('img').src = bookData.img;
    bookItem.querySelector('h3').textContent = bookData.title;
    bookItem.querySelector('p').textContent = bookData.description;
}
