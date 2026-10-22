
document.getElementById("resultForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value; 
    let roll = document.getElementById("roll").value;
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    if ([a, b, c].some(m => m < 0 || m > 100)) {
        alert("Enter marks between 0 and 100");
        return;
    }



    let total = a + b + c;
    let percentage = total / 3;

    let table = document.getElementById("resultTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    row.insertCell(2).innerText = total + "/300";
    row.insertCell(3).innerText =
        percentage.toFixed(2) + "%";

    this.reset();
});
