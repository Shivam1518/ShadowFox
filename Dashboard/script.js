// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Example: Toggle the active class on the navigation menu for mobile view
    const menuToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
      });
    }
  
    // Example: Displaying a simple alert when a button is clicked
    const fanZoneButton = document.querySelector("#fanZoneButton");
  
    if (fanZoneButton) {
      fanZoneButton.addEventListener("click", function() {
        alert("Welcome to the RCB Fan Zone!");
      });
    }
  
    // Example: Handling form submissions on the Contact Page
    const contactForm = document.querySelector("#contactForm");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
  
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
  
        if (name && email && message) {
          alert(`Thank you, ${name}! We have received your message.`);
          contactForm.reset(); // Reset the form after submission
        } else {
          alert("Please fill out all the fields.");
        }
      });
    }
  
    // You can add other JS functionality here based on your website's needs
  });
  