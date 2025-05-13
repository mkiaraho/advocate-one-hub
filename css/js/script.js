function showMessage() {
    alert("Thank you for joining Advocate One Hub! Stay tuned for our latest updates.");
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    }

    alert("Thank you, your message has been sent!");
    return true;
}
