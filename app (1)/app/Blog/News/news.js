document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    const bookList = document.querySelector('.book-list');

    // Function to slide books left
    leftButton.addEventListener('click', () => {
        bookList.scrollBy({
            left: -200, // Amount to slide left (negative value for left direction)
            behavior: 'smooth' // Smooth scrolling
        });
    });

    // Function to slide books right
    rightButton.addEventListener('click', () => {
        bookList.scrollBy({
            left: 200, // Amount to slide right
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
