// Code for sidebar 
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function toggleContent() {
    // Hide the hero section
    document.getElementById('welcome-section').style.display = 'none';

    // Show the loader
    document.getElementById('loader').style.display = 'flex';

    // Set a 4-second delay before hiding the loader and showing the main content
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none'; // Hide the loader
        document.getElementById('other-content').style.display = 'block'; // Show the other content
        document.body.classList.add('original-body');
    }, 1500); // 4000 milliseconds = 4 seconds
}

// Flip 9 Pillars feature cards
function flipCard(card) {
    card.classList.toggle('flip');
}   