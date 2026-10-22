
document.getElementById("gradeForm")
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

    let percentage = (a + b + c) / 3;
    let grade;

    if (percentage >= 90)
        grade = "A";
    else if (percentage >= 75)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 40)
        grade = "D";
    else
        grade = "F";

 


    document.getElementById("result").innerHTML =
        "<h3>Result</h3>" +
        "Name: " + name + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
});
