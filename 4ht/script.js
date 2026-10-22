
document.getElementById("empForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").innerText =
        "Employee registered successfully!";

    this.reset();
});
