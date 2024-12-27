document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.querySelector('.wrap_input');
    const btn = document.querySelector('.wrap_btn');
    const result = document.querySelector('.wrap_result');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // API Request Headers
    const requestHeaders = {
        "Content-Type": "application/json",
        "apikey": "0d509fe8cc254c46a8fa9f846c53a12d",
    };

    // Validate URL
    const validateURL = (url) => {
        const pattern = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([^\s]*)?$/;
        return pattern.test(url);
    };

    // Display Error
    const displayError = (message) => {
        result.textContent = message;
        result.style.color = 'red';
        result.style.display = 'block';

        // Simulate Light Broken State
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('light-broken');
        }
    };

    // Generate Short Link
    const getShortLink = () => {
        const userInput = urlInput.value.trim();

        if (!userInput) {
            displayError('⚠️ URL cannot be empty.');
            return;
        }

        if (!validateURL(userInput)) {
            displayError('⚠️ Please enter a valid URL.');
            return;
        }

        const linkRequest = {
            destination: userInput,
            domain: { fullName: "rebrand.ly" },
        };

        result.textContent = '⏳ Generating...';
        result.style.color = body.classList.contains('dark-mode') ? '#FFD700' : '#007bff';
        result.style.display = 'block';

        $.ajax({
            url: "https://api.rebrandly.com/v1/links",
            type: "POST",
            data: JSON.stringify(linkRequest),
            headers: requestHeaders,
            dataType: "json",
            success: (link) => {
                result.innerHTML = `✅ <a href="https://${link.shortUrl}" target="_blank">${link.shortUrl}</a>`;
                result.style.color = body.classList.contains('dark-mode') ? '#1E90FF' : '#0056b3';
                result.style.display = 'block';
            },
            error: () => {
                displayError('❌ Failed to generate the link. Try again later.');
            },
        });
    };

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-broken')) {
            body.classList.remove('light-broken');
        }
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌙 Dark Mode';
            themeToggle.classList.replace('btn-dark', 'btn-light');
        } else {
            themeToggle.textContent = '☀️ Light Mode';
            themeToggle.classList.replace('btn-light', 'btn-dark');
        }
    });

    btn.addEventListener('click', getShortLink);
});
