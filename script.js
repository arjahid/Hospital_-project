let users = [];

const registerUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    if (email && password) {
        users.push({ email, password});
        alert("Registration successful!");
        clearAuthFields();
        toggleLogin();
    } else {
        alert("Please fill out all fields.");
    }
}

const loginUser = () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert("Login successful!");
        document.getElementById("auth").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Invalid email or password.");
    }
}

const clearAuthFields = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("accountNumber").value = "";
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
}

const toggleLogin = () => {
    document.getElementById("auth").style.display = "none";
    document.getElementById("login").style.display = "flex";
}

const toggleRegister = () => {
    document.getElementById("auth").style.display = "flex";
    document.getElementById("login").style.display = "none";
}
