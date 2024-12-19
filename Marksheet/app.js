document.getElementById("addSubject").addEventListener("click", () => {
    const subjectContainer = document.getElementById("subjectContainer");

    // Create new subject row
    const newRow = document.createElement("div");
    newRow.classList.add("subject-row");

    // Add input for subject name
    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.name = "subjectName";
    subjectInput.placeholder = "Enter subject name";
    subjectInput.required = true;

    // Add input for subject marks
    const marksInput = document.createElement("input");
    marksInput.type = "number";
    marksInput.name = "subjectMarks";
    marksInput.placeholder = "Enter marks";
    marksInput.required = true;

    // Append inputs to the row
    newRow.appendChild(subjectInput);
    newRow.appendChild(marksInput);

    // Append row to the container
    subjectContainer.appendChild(newRow);
});

document.getElementById("generateMarksheet").addEventListener("click", () => {
    const subjectRows = document.querySelectorAll(".subject-row");
    let totalMarks = 0;
    let totalSubjects = 0;

    subjectRows.forEach((row) => {
        const marksInput = row.querySelector('input[name="subjectMarks"]');
        const marks = parseFloat(marksInput.value);
        if (!isNaN(marks)) {
            totalMarks += marks;
            totalSubjects++;
        }
    });

    if (totalSubjects === 0) {
        alert("Please enter valid marks for at least one subject.");
        return;
    }

    const percentage = (totalMarks / (totalSubjects * 100)) * 100;

    let grade;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "Fail";

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Total Subjects:</strong> ${totalSubjects}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}/${totalSubjects * 100}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});
