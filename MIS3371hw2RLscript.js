/* Name: Ricky Le
    File: MIS3371homework2.html
    Date Created: 2026-03-22
    Date Updated: 2026-03-26
    Purpose: MIS 3371 Homework 2, css styling for the patient registration form, adding new styles for the new fields and review section
*/

// Set dynamic Date limits (120 years ago to Today)
const dobField = document.getElementById('dob');
const today = new Date();
const maxDate = today.toISOString().split('T')[0];
const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate()).toISOString().split('T')[0];
dobField.setAttribute('max', maxDate);
dobField.setAttribute('min', minDate);

// Update Salary Slider Display
function updateSalaryDisplay(val) {
    document.getElementById('salaryDisplay').innerText = "$" + Number(val).toLocaleString();
}

// Password Matching and Logic
function validatePasswords() {
    const p1 = document.getElementById('pw1').value;
    const p2 = document.getElementById('pw2').value;
    const uid = document.getElementById('userid').value;

    if (p1 !== p2) {
        alert("Passwords do not match!");
        return false;
    }
    if (p1.includes(uid)) {
        alert("Password cannot contain your User ID!");
        return false;
    }
    return true;
}

// Generate Review Area
function generateReview() {
    const form = document.getElementById('patientForm');
    const formData = new FormData(form);
    const reviewArea = document.getElementById('review-area');
    const content = document.getElementById('review-content');
    
    reviewArea.style.display = 'block';
    let html = "<table border='1' style='width:100%; border-collapse: collapse;'>";
    
    formData.forEach((value, key) => {
        if (key === 'zip' && value.length > 5) {
            value = value.substring(0, 5) + " (Truncated)";
        }
        html += `<tr><td><strong>${key.toUpperCase()}</strong></td><td>${value}</td><td>PASS</td></tr>`;
    });
    
    html += "</table>";
    content.innerHTML = html;
    reviewArea.scrollIntoView();
}