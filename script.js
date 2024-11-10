// Example of form validation if you have a form on the contact page
function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[0-9]{10}$/;

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}
