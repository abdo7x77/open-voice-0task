<<<<<<< HEAD
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get the current page URL
const currentPage = window.location.pathname;

// Loop through each nav link
navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    if (link.getAttribute('href').includes(currentPage.split('/').pop())) {
        // Add the 'active' class to the matching link
        link.classList.add('active');
    } else {
        // Remove the 'active' class from non-matching links
        link.classList.remove('active');
    }
});
=======
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get the current page URL
const currentPage = window.location.pathname;

// Loop through each nav link
navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    if (link.getAttribute('href').includes(currentPage.split('/').pop())) {
        // Add the 'active' class to the matching link
        link.classList.add('active');
    } else {
        // Remove the 'active' class from non-matching links
        link.classList.remove('active');
    }
});
>>>>>>> 54630548b14a7bfff96131e3d711ca4d343eafa3
