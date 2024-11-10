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

function generateResumeLink(): string {
    const username: string = (document.getElementById('usernameInput') as HTMLInputElement).value;
    if (!username) {
        alert("Please enter a username.");
        return '';
    }
    return `https://${username}.vercel.app/resume`;
}

// Attach to a button or trigger event when the user clicks to generate the resume link
function handleGenerateLinkClick(): void {
    const resumeLink = generateResumeLink();
    if (resumeLink) {
        alert(`Your unique resume link: ${resumeLink}`);
    }
}

// Function to download the resume as a PDF
function downloadAsPDF(): void {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the resume content (you can select specific sections like name, education, etc.)
    const resumeContent = document.getElementById('resumeContent')?.innerHTML;

    if (resumeContent) {
        doc.html(resumeContent, {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10
        });
    } else {
        alert("Resume content is missing.");
    }
}

// Merge all actions into one window.onload function
window.onload = () => {
    loadFromLocalStorage();  // Load saved content
    enableEditing();         // Enable editing functionality
    document.getElementById('generateLinkButton')?.addEventListener('click', handleGenerateLinkClick); // Generate link
    document.getElementById('downloadPDFButton')?.addEventListener('click', downloadAsPDF); // Download PDF
};

// Save content before the page is unloaded
window.onbeforeunload = () => {
    saveToLocalStorage();  // Save content when leaving the page
};
