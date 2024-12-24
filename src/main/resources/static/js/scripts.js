document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("patientForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const patientData = {
            name: form.name.value,
            age: parseInt(form.age.value),
            contact: form.contact.value,
            medicalHistory: form.medicalHistory.value
        };

        fetch("/api/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientData)
        })
        .then(response => {
            if (response.ok) {
                alert("Patient added successfully!");
                form.reset();
            } else {
                alert("Error adding patient. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
    });
});