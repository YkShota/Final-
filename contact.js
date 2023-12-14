document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to the submit button
    document.getElementById("submit-button").addEventListener("click", function () {
        // Replace the contents of the contact-page with a thank you message
        document.getElementById("contact-page").innerHTML = "<p style='font-size: 24px;'>Thank you for your message</p>";
    });
});
