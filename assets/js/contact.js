// ==========================================
// 1. GLOBAL THEME CACHE INTERCEPTOR (IIFE)
// ==========================================
(function () {
    const cachedPreloaderTheme = localStorage.getItem("nx-theme") || "light";
    if (cachedPreloaderTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
})();

// ==========================================
// 2. RUN TIME ACCELERATION CORE LOADER
// ==========================================
window.addEventListener("load", () => {
    const preloaderElement = document.getElementById("nxPreloader");
    if (preloaderElement) {
        preloaderElement.classList.add("fade-out");
        setTimeout(() => {
            preloaderElement.remove();
        }, 500);
    }
});

// ==========================================
// 3. UI LAYOUT CONTROL LIFECYCLE INTERACTION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    const themeIcon = themeToggleBtn.querySelector(".theme-icon");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nx-nav-link");

    // Route Tracking Path Matcher Matrix
    const currentPath = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        const hrefAttr = link.getAttribute("href");
        if (currentPath === hrefAttr || (currentPath === "" && hrefAttr === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Handle Theme States Switch Click Events
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.className = "bx bx-sun theme-icon";
    } else {
        themeIcon.className = "bx bx-moon theme-icon";
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        themeIcon.className = isDark ? "bx bx-sun theme-icon" : "bx bx-moon theme-icon";
        localStorage.setItem("nx-theme", isDark ? "dark" : "light");
    });

    // Mobile Navigation Drawer Toggle Handler Button
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-active");
        const toggleIcon = menuToggle.querySelector("i");
        if (navMenu.classList.contains("mobile-active")) {
            toggleIcon.className = "bx bx-x";
        } else {
            toggleIcon.className = "bx bx-menu-alt-right";
        }
    });


});

// Main section starts here

/* ==========================================================================
   NEXUIST LOGISTICS INTERACTIVE CONTACT RUNTIME PIPELINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initializeSecureContactFormPipeline();
});

function initializeSecureContactFormPipeline() {
    const form = document.getElementById('nexuistContactForm');
    const successModal = document.getElementById('successModal');
    
    if (!form || !successModal) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard HTTP document refresh mutations

        // Extract Input Reference Nodes
        const nameInput = document.getElementById('nlName');
        const emailInput = document.getElementById('nlEmail');
        const messageInput = document.getElementById('nlMessage');

        let formsAreValid = true;

        // Reset previous focus shells
        [nameInput, emailInput, messageInput].forEach(input => {
            if(input) input.closest('.input-shell').style.borderColor = '';
        });

        // Basic Client-Side Native Valuations
        if (!nameInput.value.trim()) {
            markInputAsInvalid(nameInput);
            formsAreValid = false;
        }
        if (!validateEmailFormatPattern(emailInput.value.trim())) {
            markInputAsInvalid(emailInput);
            formsAreValid = false;
        }
        if (!messageInput.value.trim()) {
            markInputAsInvalid(messageInput);
            formsAreValid = false;
        }

        if (!formsAreValid) return; // Halt script execution space if validation conditions fail

        // Button state processing animation simulation
        const submitBtn = document.getElementById('nlSubmitBtn');
        const fallbackText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class='bx bx-loader-alt bx-spin'></i> <span>Encrypting Transmission...</span>`;

        setTimeout(() => {
            // Trigger Modal UI Pipeline state change after emulated API response latency
            successModal.classList.add('active');
            
            // Clear application memory state and form elements
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = fallbackText;
        }, 1200);
    });

    // Handle internal escape routing keys out of modal
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && successModal.classList.contains('active')) {
            closeSuccessVerificationModal();
        }
    });
}

function markInputAsInvalid(element) {
    if(!element) return;
    const parentShell = element.closest('.input-shell');
    if(parentShell) {
        parentShell.style.borderColor = 'var(--status-failed)';
        element.focus();
    }
}

function validateEmailFormatPattern(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

window.closeSuccessVerificationModal = function() {
    const successModal = document.getElementById('successModal');
    if(successModal) {
        successModal.classList.remove('active');
    }
};

// Main section ends here