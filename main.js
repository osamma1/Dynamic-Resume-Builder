function updatePreview() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var educationInput = document.getElementById("education").value;
    var experienceInput = document.getElementById("experience").value;
    var skillsInput = document.getElementById("skills").value;
    // Update the resume preview section
    document.getElementById("preview-name").innerText = nameInput;
    document.getElementById("preview-email").innerText = emailInput;
    document.getElementById("preview-phone").innerText = phoneInput;
    document.getElementById("preview-education").innerText = educationInput;
    document.getElementById("preview-experience").innerText = experienceInput;
    document.getElementById("preview-skills").innerText = skillsInput;
}
function addEventListeners() {
    var form = document.getElementById("resume-form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        updatePreview();
    });
}
document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();
});
