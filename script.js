function updateResume() {
    // Get values from form inputs
    var nameValue = document.getElementById('nameInput').value;
    var contactValue = document.getElementById('contactInput').value;
    var educationValue = document.getElementById('educationInput').value;
    var skillsValue = document.getElementById('skillsInput').value;
    var experienceValue = document.getElementById('experienceInput').value;
    // Update resume display sections
    document.getElementById('name').innerText = nameValue;
    document.getElementById('contact-info').innerText = contactValue;
    document.querySelector('section:nth-of-type(1) p').innerText = educationValue;
    document.querySelector('section:nth-of-type(2) ul').innerHTML = "<li>".concat(skillsValue, "</li>");
    document.querySelector('section:nth-of-type(3) h3').innerText = experienceValue;
}
