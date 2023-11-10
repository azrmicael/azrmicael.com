// ================================================================= //
// --- When someone clicks the hamburger button -------------------- //
// ================================================================= //

// Constants
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
// --- Update video source according to screen width --------------- //
// ================================================================= //

const updateVideoSource = () => {
    const video = document.querySelector("#hero--video");
    const source = document.querySelector("#video--source");
    
    // change the video source, load and play
    source.setAttribute("src", "assets/mechanic-shop-desktop.mp4");
    video.load();
    video.play();
};


// ================================================================= //
// --- When Home's DOM content is loaded --------------------------- //
// ================================================================= //

if (document.getElementById("home")) {
    document.addEventListener("DOMContentLoaded", () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 799) {
            updateVideoSource();
        }
    });
}


// ================================================================= //
// --- Disabling form submissions if there are invalid fields ------ //
// ================================================================= //

(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
      
            form.classList.add('was-validated');

        }, false);
    });
})();