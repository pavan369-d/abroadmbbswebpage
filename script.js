document.getElementById("leadForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let phone = document.querySelector('input[name="phone"]').value.trim();
    let country = document.querySelector('select[name="country"]').value.trim();
    let errorMessages = [];

    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        errorMessages.push("Invalid Name: Only letters and spaces are allowed.");
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errorMessages.push("Invalid Email: Please enter a valid email address.");
    }

  
    if (!/^\d{10}$/.test(phone)) {
        errorMessages.push("Invalid Phone: Phone number must be 10 digits.");
    }

    
    if (country === "") {
        errorMessages.push("Please select a preferred country.");
    }

    
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
    } else {
        alert("Application Submitted Successfully!");
        document.getElementById("leadForm").submit(); // Submit the form if no errors
    }
});

