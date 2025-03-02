// Description: This file contains the JavaScript code for the website.

function ocultItems(sectionId) {

    let section = document.getElementById(sectionId);
    let arrow = section.previousElementSibling.querySelector("#arrow");

    if (section.classList.contains("visible")) {

        section.classList.remove("visible");
        section.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
        setTimeout(() => { section.style.display = "none"; }, 300);

    } else {

        section.style.display = "flex";
        section.classList.remove("hidden");
        section.classList.add("visible");
        arrow.style.transform = "rotate(90deg)";

    }
    
}


function selectLang() {

    const flags = document.querySelectorAll('.flag');

    for (let i = 0; i < flags.length; i++) {
    
        flags[i].addEventListener('click', function() {
    
            for (let j = 0; j < flags.length; j++) {
    
                flags[j].classList.add('grayscale');
    
            }
    
            this.classList.remove('grayscale');
    
        });
    
    }

}

document.addEventListener('DOMContentLoaded', selectLang);