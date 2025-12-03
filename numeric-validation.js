function validateNumericInput() {
            let age = document.forms["numericForm"]["age"].value;

            // Check if empty
            if (age === "") {
                alert("Age field cannot be empty.");
                return false;
            }

            // Check if numeric
            if (isNaN(age)) {
                alert("Please enter a valid numeric value.");
                return false;
            }

            // Check valid range
            if (age < 1 || age > 120) {
                alert("Please enter a number between 1 and 120.");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }