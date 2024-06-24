// ================================================================= //
// --- When someone clicks the hamburger button -------------------- //
// ================================================================= //

// Constants and Variables
const nav = document.querySelector("#navbarSupportedContent");
const navToggle = document.querySelector(".navbar-toggler");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        // if the nav is closed, open it
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        // if the nav is open, close it
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});


// ================================================================= //
// --- data-bs-toggle="dropdown" only with screen width > 62rem ---- //
// ================================================================= //

const updateDropdownToggle = () => {
    const screenWidth = window.innerWidth;
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dataBsToggle = dropdownToggle.getAttribute("data-bs-toggle");

    if (screenWidth > 992) {
        dropdownToggle.setAttribute("data-bs-toggle", "");
    }
    else {
        dropdownToggle.setAttribute("data-bs-toggle", "dropdown");
    }
}


// ================================================================= //
// --- When the page is resized ------------------------------------ //
// ================================================================= //

window.addEventListener("resize", () => {
    updateDropdownToggle();
});


// ================================================================= //
// --- Dark/Light mode functions ----------------------------------- //
// ================================================================= //

// Constants and Variables
const checkbox = document.querySelector("#checkbox");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("#footer");
let darkMode = localStorage.getItem("darkMode");

// enableDarkMode
const enableDarkMode = () => {
    navbar.setAttribute("data-bs-theme", "dark");

    // change to link-light
    let links = document.getElementsByClassName("link-dark");
    for (var i = 0; i < links.length - 1; i++) {
        links[i].classList.add("link-light");
        links[i].classList.remove("link-dark");
    }

    // change to bg-dark
    footer.classList.add("bg-dark");
    footer.classList.remove("bg-light");

    // add darkmode class
    document.body.classList.add("darkmode");

    // update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

// disableDarkMode
const disableDarkMode = () => {
    navbar.setAttribute("data-bs-theme", "light");

    // change to link-dark
    let links = document.getElementsByClassName("link-light");
    for (var i = 0; i < links.length - 1; i++) {
        links[i].classList.add("link-dark");
        links[i].classList.remove("link-light");
    }

    // change to bg-light
    footer.classList.add("bg-light");
    footer.classList.remove("bg-dark");

    // remove darkmode class
    document.body.classList.remove("darkmode");

    // update darkMode in the localStorage
    localStorage.setItem("darkMode", "disabled");
};


// ================================================================= //
// --- When DOM content is loaded ---------------------------------- //
// ================================================================= //

document.addEventListener("DOMContentLoaded", () => {
    darkMode = localStorage.getItem("darkMode");
    
    if (darkMode === "enabled") {
        enableDarkMode();
        // checked true
        checkbox.checked = true;
    }
    else {
        disableDarkMode();
        // checked false
        checkbox.checked = false;
    }

    updateDropdownToggle();
});

// ================================================================= //
// --- When someone clicks the checkbox input ---------------------- //
// ================================================================= //

checkbox.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})

