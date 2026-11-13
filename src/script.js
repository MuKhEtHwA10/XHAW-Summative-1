document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FORM ERROR HANDLING ---
    const form = document.getElementById('bookingForm');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const packageChoice = document.getElementById('package').value;

        // Basic validation
        if (name === "" || email === "" || packageChoice === "") {
            // Show Error
            formMessage.className = "error-msg";
            formMessage.innerText = "Error: Please fill in all fields before submitting.";
            formMessage.classList.remove('hidden');
        } else if (!email.includes('@')) {
            // Show specific error for email
            formMessage.className = "error-msg";
            formMessage.innerText = "Error: Please enter a valid email address.";
            formMessage.classList.remove('hidden');
        } else {
            // Success state
            formMessage.className = "success-msg";
            formMessage.innerText = "Success! Thank you, " + name + ". Your booking request for the " + packageChoice + " package has been sent.";
            formMessage.classList.remove('hidden');
            
            // Clear the form
            form.reset();
        }
    });

    // --- 2. DROP-DOWN MENU (ACCORDION) FUNCTIONALITY ---
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle the active class on the clicked button
            this.classList.toggle('active');
            
            // Get the content panel next to the button
            const content = this.nextElementSibling;
            
            // Toggle display of content
            if (content.style.display === "block") {
                content.style.display = "none";
                this.querySelector('span').innerText = "+";
            } else {
                content.style.display = "block";
                this.querySelector('span').innerText = "-";
            }
        });
    });
});