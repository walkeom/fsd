
document.getElementById("empForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let department = document.getElementById("department").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        return;
    }

// !/^[0-9]{10}$/.test(phone)

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        return;
    }

    if (department === "") {
        alert("Please select a department");
        return;
    }

    document.getElementById("message").innerText =
        "Employee registered successfully!";

    this.reset();
});
