function login(username, password) {
    if (username && password) {
        return "Login successful";
    }

    return "Invalid credentials";
}

console.log(login("sona", "12345"));