function updatePreview() {
  const nameInput = (<HTMLInputElement>document.getElementById("name")).value;
  const emailInput = (<HTMLInputElement>document.getElementById("email")).value;
  const phoneInput = (<HTMLInputElement>document.getElementById("phone")).value;
  const educationInput = (<HTMLTextAreaElement>document.getElementById("education")).value;
  const experienceInput = (<HTMLTextAreaElement>document.getElementById("experience")).value;
  const skillsInput = (<HTMLTextAreaElement>document.getElementById("skills")).value;

  // Update the resume preview section
  document.getElementById("preview-name")!.innerText = nameInput;
  document.getElementById("preview-email")!.innerText = emailInput;
  document.getElementById("preview-phone")!.innerText = phoneInput;
  document.getElementById("preview-education")!.innerText = educationInput;
  document.getElementById("preview-experience")!.innerText = experienceInput;
  document.getElementById("preview-skills")!.innerText = skillsInput;
}

function addEventListeners() {
  const form = document.getElementById("resume-form");

  form?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    updatePreview();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
});
