// User Login

// Variables for HTML Elements


// Add Event Listener
document.getElementById("login-btn").addEventListener("click", login);

// Event Function
function login() {
    // Get Input
    let username = document.getElementById("user-in").value;
    let password = document.getElementById("pass-in").value;

    // Check the info
    if (username === "admin" && password === "1234") {
        alert("Login Successful");
    } else if (username === "" && password === "") {
        alert("Please enter your username and password")
    } else if (username === "") {
        alert("Please enter your username")
    } else if (password === "") {
        alert("Please enter your password")
    } else if (username !== "admin") {
        alert("Invalid Username");
    } else if (password !== "1234") {
        alert("Invalid Password");
    }
}