function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your authentication logic here.
    // For simplicity, we'll assume the login is successful.
    // You should replace this with your actual authentication logic.

    if (username === "your_username" && password === "your_password") {
        window.location.href = "index.html"; // Redirect to the home page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
