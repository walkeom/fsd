
let students = [];

function addResult() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    if (name === "" || roll === "" ||
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === "" ||
        a < 0 || a > 100 ||
        b < 0 || b > 100 ||
        c < 0 || c > 100) {
        alert("Enter valid details and marks between 0 and 100");
        return;
    }

    let total = a + b + c;
    let percentage = (total / 300) * 100;

    students.push({ name, roll, total, percentage });

    let table = document.getElementById("resultTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    row.insertCell(2).innerText = total;
    row.insertCell(3).innerText = percentage.toFixed(2) + "%";

    let result = "Pass";

    if (a < 35 || b < 35 || c < 35) {
        result = "Fail";
    }

    row.insertCell(4).innerText = result;

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
    document.getElementById("roll").value = "";
    document.getElementById("m1").value = "";
    document.getElementById("m2").value = "";
    document.getElementById("m3").value = "";
}
