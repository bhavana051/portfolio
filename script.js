const emailLink = document.getElementById('emailLink');

        // Add a click event listener to the email link
        emailLink.addEventListener('click', function(event) {
            // Prevent the default behavior of following the href
            event.preventDefault();

            // Replace 'recipient@example.com' with the recipient's email address
            const recipientEmail = 'bhavanasherla9@gmail.com';

            // Create the mailto URL
            const mailtoUrl = `mailto:${recipientEmail}`;

            // Set the window location to the mailto URL to open the email client
            window.location.href = mailtoUrl;
        });