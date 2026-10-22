
document.getElementById("marksForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    if ([a, b, c].some(m => m < 0 || m > 100)) {
        alert("Enter marks between 0 and 100");
        return;
    }

    let total = a + b + c;
    let percentage = total / 3;

    document.getElementById("result").innerHTML =
        "<h3>Result</h3>" +
        "Name: " + name + "<br>" +
        "Total Marks: " + total + "/300<br>" +
        "Percentage: " + percentage.toFixed(2) + "%";
});
