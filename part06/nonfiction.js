const books = [
    {
        title: "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
        description: "Sapiens explores the history and impact of Homo sapiens, from ancient times to the present.",
        cover: "images/sapiens.jpg"
    },
    {
        title: "Educated by Tara Westover",
        description: "A memoir about growing up in a strict and abusive household in rural Idaho but eventually escaping to learn about the world through education.",
        cover: "images/educated.jpg"
    },
    {
        title: "The Immortal Life of Henrietta Lacks by Rebecca Skloot",
        description: "The story of Henrietta Lacks and how her cells contributed to numerous medical breakthroughs.",
        cover: "images/henrietta_lacks.jpg"
    },
    {
        title: "Thinking, Fast and Slow by Daniel Kahneman",
        description: "A groundbreaking book that explains the two systems of thinking: the fast, intuitive, and emotional; and the slower, more deliberative, and logical.",
        cover: "images/thinking_fast_slow.jpg"
    },
    {
        title: "Becoming by Michelle Obama",
        description: "A deeply personal memoir by the former First Lady of the United States.",
        cover: "images/becoming.jpg"
    }
];

// Function to display a random book using arrow function
const displayRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    document.getElementById('book-title').textContent = selectedBook.title;
    document.getElementById('book-description').textContent = selectedBook.description;
    document.getElementById('book-cover').src = selectedBook.cover;
};

// Call the function when the page loads using arrow function
window.onload = () => displayRandomBook();

// JavaScript to reload/refresh the page when the "More..." button is clicked
document.getElementById('moreButton').addEventListener('click', () => {
    // You can refresh the page using location.reload() method
    location.reload();
});
