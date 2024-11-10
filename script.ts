function updateResume(): void {
    // Get values from form inputs
    const nameValue: string = (document.getElementById('nameInput') as HTMLInputElement).value;
    const contactValue: string = (document.getElementById('contactInput') as HTMLInputElement).value;
    const educationValue: string = (document.getElementById('educationInput') as HTMLInputElement).value;
    const skillsValue: string = (document.getElementById('skillsInput') as HTMLInputElement).value;
    const experienceValue: string = (document.getElementById('experienceInput') as HTMLInputElement).value;

    // Update resume display sections
    (document.getElementById('name') as HTMLElement).innerText = nameValue;
    (document.getElementById('contact-info') as HTMLElement).innerText = contactValue;
    (document.querySelector('section:nth-of-type(1) p') as HTMLElement).innerText = educationValue;
    (document.querySelector('section:nth-of-type(2) ul') as HTMLElement).innerHTML = `<li>${skillsValue}</li>`;
    (document.querySelector('section:nth-of-type(3) h3') as HTMLElement).innerText = experienceValue;
}