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
