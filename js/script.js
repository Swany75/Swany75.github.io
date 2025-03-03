const translations = {

    en: {
        edat: "🎂 20 years old",
        grauMitja: "💻 Technician in Microinformatics Systems Networks",
        grauSuperior: "🌐 Student in Systems and Network Administration",
        aficions: "🔐 Ethical Hacking & CyberSecurity Enthusiast",
        titolProjectes: "Projects",
        projecteArchLinux: "Arch Linux Custom DE",
        notpublished: "Not Published",
        projecteArchLinuxDesc: "My personal dotfiles for my Arch Linux setup. I use i3-gaps as my window manager and Polybar as my status bar.",
        projecteMediaServer: "Media Server",
        published: "Published",
        projecteMediaServerDesc: "My personal media server and NAS. I use Jellyfin for media streaming and Nextcloud for cloud storage.",
        projectePython: "Python Scripts",
        projectePythonDesc: "I enjoy programming in Python. I've created several scripts, such as Tic-Tac-Toe and a Discord bot, but my most ambitious project is Brisca.",
        projecteObsidian: "Obsidian Vault",
        projecteObsidianDesc: "My personal documentation system in Obsidian. I've made significant progress, but it's not finished yet.",
        titolCertificats: "Certificates",
        titolContacte: "Contact",
        checkProjets: "Check out more of my projects on my <a href='https://github.com/Swany75?tab=repositories' target='_blank'>GitHub</a>.",
        titolCerts: "Certificates",
        titolContact: "Contact",
        footerText: "© 2025 Juan Dalmau. All rights reserved."
    },

    es: {
        edat: "🎂 20 años",
        grauMitja: "💻 Técnico en Sistemas Microinformáticos y Redes",
        grauSuperior: "🌐 Estudiante en Administración de Sistemas y Redes",
        aficions: "🔐 Entusiasta de Hacking Ético y Ciberseguridad",
        titolProjectes: "Proyectos",
        projecteArchLinux: "Arch Linux Custom DE",
        notpublished: "No Publicado",
        projecteArchLinuxDesc: "Mis archivos personales para la configuración de Arch Linux. Uso i3-gaps como gestor de ventanas y Polybar como barra de estado.",
        projecteMediaServer: "Servidor de Medios",
        published: "Publicado",
        projecteMediaServerDesc: "Mi servidor personal de medios y NAS. Uso Jellyfin para streaming de medios y Nextcloud para almacenamiento en la nube.",
        projectePython: "Scripts en Python",
        projectePythonDesc: "Me gusta programar en Python. He creado varios scripts, como Tic-Tac-Toe y un bot de Discord, pero mi proyecto más ambicioso es Brisca.",
        projecteObsidian: "Obsidian Vault",
        projecteObsidianDesc: "Mi sistema de documentación personal en Obsidian. He avanzado bastante, pero aún no está terminado.",
        titolCertificats: "Certificados",
        titolContacte: "Contacto",
        checkProjets: "Comprueba mis proyectos en mi <a href='https://github.com/Swany75?tab=repositories' target='_blank'>GitHub</a>.",
        titolCerts: "Certificados",
        titolContact: "Contacto",
        footerText: "© 2025 Juan Dalmau. Todos los derechos reservados."
    },

    ca: {
        edat: "🎂 20 anys",
        grauMitja: "💻 Tècnic en Sistemes Microinformàtics i Xarxes",
        grauSuperior: "🌐 Estudiant en Administració de Sistemes i Xarxes",
        aficions: "🔐 Entusiasta de l'Hacking Ètic i la Ciberseguretat",
        titolProjectes: "Projectes",
        projecteArchLinux: "Arch Linux Custom DE",
        notpublished: "No Publicat",
        projecteArchLinuxDesc: "Els meus fitxers personals per a la configuració d'Arch Linux. Utilitzo i3-gaps com a gestor de finestres i Polybar com a barra d'estat.",
        projecteMediaServer: "Servidor de Mitjans",
        published: "Publicat",
        projecteMediaServerDesc: "El meu servidor personal de mitjans i NAS. Utilitzo Jellyfin per al streaming de mitjans i Nextcloud per a l'emmagatzematge al núvol.",
        projectePython: "Scripts en Python",
        projectePythonDesc: "M'agrada programar en Python. He creat diversos scripts, com Tic-Tac-Toe i un bot de Discord, però el meu projecte més ambiciós és Brisca.",
        projecteObsidian: "Obsidian Vault",
        projecteObsidianDesc: "El meu sistema de documentació personal en Obsidian. He fet un gran progrés, però encara no està acabat.",
        titolCertificats: "Certificats",
        titolContacte: "Contacte",
        checkProjets: "Comprova els meus projectes en el meu <a href='https://github.com/Swany75?tab=repositories' target='_blank'>GitHub</a>.",
        titolCerts: "Certificats",
        titolContact: "Contacte",
        footerText: "© 2025 Juan Dalmau. Tots els drets reservats."
    }

};

function changeLanguage(lang) {
    // Informacio personal
    document.getElementById("edat").textContent = translations[lang].edat;
    document.getElementById("grauMitja").textContent = translations[lang].grauMitja;
    document.getElementById("grauSuperior").textContent = translations[lang].grauSuperior;
    document.getElementById("aficions").textContent = translations[lang].aficions;

    // Projectes
    document.getElementById("titolProjectes").textContent = translations[lang].titolProjectes;

    // Projecte Arch Linux
    document.getElementById("projecteArchLinux").textContent = translations[lang].projecteArchLinux;
    document.getElementById("notpublished-ArchLinux").textContent = translations[lang].notpublished;
    document.getElementById("projecteArchLinuxDesc").textContent = translations[lang].projecteArchLinuxDesc;

    // Projecte Media Server
    document.getElementById("projecteMediaServer").textContent = translations[lang].projecteMediaServer;
    document.getElementById("published-MediaServer").textContent = translations[lang].published;
    document.getElementById("projecteMediaServerDesc").textContent = translations[lang].projecteMediaServerDesc;

    // Projecte Python Scripting
    document.getElementById("projectePython").textContent = translations[lang].projectePython;
    document.getElementById("published-Python").textContent = translations[lang].published;
    document.getElementById("projectePythonDesc").textContent = translations[lang].projectePythonDesc;

    // Projecte Obsidian Vault
    document.getElementById("projecteObsidian").textContent = translations[lang].projecteObsidian;
    document.getElementById("notpublished-Obsidian").textContent = translations[lang].notpublished;
    document.getElementById("projecteObsidianDesc").textContent = translations[lang].projecteObsidianDesc;

    // New translations
    document.getElementById("titolCerts").textContent = translations[lang].titolCerts;
    document.getElementById("titolContact").textContent = translations[lang].titolContact;
    document.querySelector("footer p").textContent = translations[lang].footerText;
    document.getElementById("checkProjets").innerHTML = translations[lang].checkProjets;

    localStorage.setItem("selectedLang", lang);
}

function ocultItems(sectionId) {
    let section = document.getElementById(sectionId);
    let arrow = section.previousElementSibling.querySelector("#arrow");

    if (section.classList.contains("visible")) {
        section.classList.remove("visible");
        section.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
        section.style.visibility = "hidden";
    } else {
        section.style.visibility = "visible";
        section.classList.remove("hidden");
        section.classList.add("visible");
        arrow.style.transform = "rotate(90deg)";
    }
}

function selectLang() {

    let flags = document.querySelectorAll('.flag');

    for (let i = 0; i < flags.length; i++) {

        flags[i].addEventListener('click', function() {

            let selectedLang = this.getAttribute("data-lang");

            for (let j = 0; j < flags.length; j++) {
                flags[j].classList.add('grayscale');
            }

            this.classList.remove('grayscale');
            changeLanguage(selectedLang);

        });

    }

}

document.addEventListener('DOMContentLoaded', function() {

    let savedLang = localStorage.getItem("selectedLang") || "en";
    changeLanguage(savedLang);

    let flags = document.querySelectorAll('.flag');
    
    for (let i = 0; i < flags.length; i++) {

        if (flags[i].getAttribute("data-lang") === savedLang) {

            flags[i].classList.remove("grayscale");

        } else {

            flags[i].classList.add("grayscale");

        }

    }

    selectLang();

});