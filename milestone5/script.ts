document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();




    // Get form element
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fatherNameElement = document.getElementById('fatherName') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const userNameElement = document.getElementById('userName') as HTMLInputElement;



//Create if all elements are present
    if (profilePicInput &&  nameElement && fatherNameElement && emailElement && phoneElement && userNameElement && educationElement 
        && experienceElement && skillsElement) {
            const name = nameElement.value;
            const fatherName = fatherNameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const userName = userNameElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;
        

      
        // Profile picture element
        const profilePicFile = profilePicInput.files?.[0];
        const profilePicURL = profilePicFile 
        ? URL.createObjectURL(profilePicFile) : "";



        // Create the resume  HTML output
        const resumeOutput = `
        <h2>Resume</h2>

        ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profilePic">` : ''}
        <p><strong>Name: </strong><span class="editable">${name}</span></p>
        <p><strong>Father Name: </strong><span class="editable">${fatherName}</span></p>
        <p><strong>Email: </strong><span class="editable">${email}</span></p>
        <p><strong>Phone: </strong><span class="editable">${phone}</span></p>
        <p><strong>UserName: </strong><span class="editable">${userName}</span></p>
        
        <h3>Education</h3>
        <p class="editable">${education}</p>
        
        <h3>Experience</h3>
        <p class="editable">${experience}</p>
        
        <h3>Skills</h3>
        <p class="editable">${skills}</p>`;


        // Resume Output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");


        //create container for button
        const buttonContainer = document.createElement("div");
        buttonContainer.id = "buttonscontainer";
        resumeOutputElement.appendChild(buttonContainer);



        //add download PDF button
        const downloadPdfButton = document.createElement("button");
        downloadPdfButton.textContent = 'Download as PDF';
        downloadPdfButton.addEventListener("click", () =>{
            window.print(); //open the print dualog, allowing the user to save as PDF
        });
        buttonContainer.appendChild(downloadPdfButton);


        //Add sharable link button
        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Share Link";
        shareLinkButton.addEventListener("click", async () => {
            try{
                //create a unique shareable link (similate it in this case)
                const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                /\s+/g, "_")}_cv.html`;

                //use clipboard API to copy the shareable link
                await navigator.clipboard.writeText(shareableLink);
                alert("Shareable Link Copied To Clipboard");
            }catch(err){
                console.error("Failed to copy link :", err);
                alert("Failed to copy link to clipboard. Please try again"); 
            }
        });
        buttonContainer.appendChild(shareLinkButton);
        } else{
            console.error("Resume output container is not found")
        }
    } else {
        console.error("Form Elements are Missing.");
    }
});




function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing');

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}

makeEditable();