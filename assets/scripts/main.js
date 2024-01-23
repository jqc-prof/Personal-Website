function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to represent the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the form data to a server (simulated using a JSON file)
    saveFormData(formData);
}

function saveFormData(formData) {
    // Simulated backend: Append data to a JSON file
    const fs = require('fs');
    const existingData = JSON.parse(fs.readFileSync('formData.json', 'utf-8') || '[]');
    existingData.push(formData);
    fs.writeFileSync('formData.json', JSON.stringify(existingData, null, 2));

    alert('Form submitted successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('imageGallery');

    // Replace these URLs with your image URLs
    const imageUrls = [
        '../assets/images/photomode_02102023_002353.png'
    ];

    // Create image elements and append them to the gallery
    imageUrls.forEach(function(url) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Gallery Image';
        img.addEventListener('click', function() {
            // Handle click event (e.g., open a modal with the full-size image)
            console.log('Image clicked:', url);
        });
        gallery.appendChild(img);
    });
});
