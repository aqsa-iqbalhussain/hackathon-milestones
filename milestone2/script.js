var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2><b> Resume </b></h2>\n    <h3> Personal Information</h3>\n    <p><b> Name:</br>".concat(name, "</p>\n    <p><b> Email:</br>").concat(email, "</p>\n    <p><b> Phone:</br>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n     <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    \n    \n    \n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error(' The resume display element is missing.');
    }
});
