// Description: This file contains the JavaScript code for the website.

function ocultItems() {
    let x = document.getElementById("certificates-toggle");
    let arrow = document.getElementById("arrow");

    if (x.classList.contains("visible")) {
        x.classList.remove("visible");
        x.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
        setTimeout(() => {
            x.style.display = "none";
        }, 300);
    } else {
        x.style.display = "flex";
        x.classList.remove("hidden");
        x.classList.add("visible");
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