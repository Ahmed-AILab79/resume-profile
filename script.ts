// Function to update resume display with form inputs
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

// Function to enable editing of the resume sections
function enableEditing(): void {
    const editableSections = document.querySelectorAll('[contenteditable="true"]');

    editableSections.forEach((section) => {
        section.addEventListener('input', () => {
            const sectionId = section.getAttribute('id');
            const updatedContent = section.textContent;

            // Log or store the updated content
            console.log(`${sectionId} updated to: ${updatedContent}`);
        });
    });
}

// Function to save the updated content to localStorage
function saveToLocalStorage(): void {
    const editableSections = document.querySelectorAll('[contenteditable="true"]');

    editableSections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const updatedContent = section.textContent;

        // Save the updated content to localStorage
        if (sectionId && updatedContent) {
            localStorage.setItem(sectionId, updatedContent);
        }
    });
}

// Function to load saved content from localStorage
function loadFromLocalStorage(): void {
    const editableSections = document.querySelectorAll('[contenteditable="true"]');

    editableSections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const savedContent = localStorage.getItem(sectionId!);

        // If there's saved content, load it into the editable section
        if (savedContent) {
            section.textContent = savedContent;
        }
    });
}

// Merge all actions into one window.onload
window.onload = () => {
    loadFromLocalStorage();  // Load saved content
    enableEditing();         // Enable editing functionality
};

// Save content before the page is unloaded
window.onbeforeunload = () => {
    saveToLocalStorage();  // Save content when leaving the page
};
