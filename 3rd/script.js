
let students = [];

function addResult() {
    let name = document.getElementById("name").value;
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    if (name === "" || 
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === "" ||
        a < 0 || a > 100 || b < 0 || b > 100 || c < 0 || c > 100) {
        alert("Enter valid details and marks between 0 and 100");
        return;
    }

    let total = a + b + c;
    let percentage = (total / 300) * 100;

    students.push({ name, total, percentage });

    let table = document.getElementById("result");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = total;
    row.insertCell(2).innerText = percentage.toFixed(2) + "%";

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].percentage > topper.percentage) {
            topper = students[i];
        }
    }

    document.getElementById("topper").innerText =
        "Topper: " + topper.name + " (" +
        topper.percentage.toFixed(2) + "%)";

    document.getElementById("name").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
}
