// Tab Logic
const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontents');

// Toggling Active classes
tabLinks.forEach(button => {
    button.addEventListener('click', () => {
        tabLinks.forEach(btn => 
            btn.classList.remove('active'));
        tabContents.forEach(content =>
            content.classList.remove('active'));
        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
    
   });

