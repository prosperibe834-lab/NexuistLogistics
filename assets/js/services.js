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
   NEXUIST LOGISTICS SERVICES PROCESSING RUNTIME ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initializeRateCalculationMatrix();
    initializeInteractiveCardClickFeedback();
});

function initializeRateCalculationMatrix() {
    const serviceSelector = document.getElementById('calcServiceType');
    const weightInput = document.getElementById('calcWeight');
    const resultDisplay = document.getElementById('calcTotalValue');

    if (!serviceSelector || !weightInput || !resultDisplay) return;

    // Execution routine to process math metrics
    const executeRecalculation = () => {
        const selectedOption = serviceSelector.options[serviceSelector.selectedIndex];
        const baseRate = parseFloat(selectedOption.getAttribute('data-rate')) || 0;
        const enteredWeight = parseFloat(weightInput.value) || 0;

        // Base rate equation
        const computedAllocation = baseRate * enteredWeight;

        // High precision animated value rendering transition
        animateFinancialValueOutput(parseFloat(resultDisplay.innerText) || 0, computedAllocation, resultDisplay);
    };

    // Bind event matrix structures
    serviceSelector.addEventListener('change', executeRecalculation);
    weightInput.addEventListener('input', executeRecalculation);

    // Initial load compilation sequence
    executeRecalculation();
}

/**
 * High frequency visual value stepper animation
 */
function animateFinancialValueOutput(start, end, element) {
    const duration = 250; // Milliseconds allocation space
    const startTime = performance.now();

    const frameStep = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progression = Math.min(elapsed / duration, 1);
        
        // Linear ease progression mapping
        const currentFrameValue = start + (end - start) * progression;
        element.innerText = currentFrameValue.toFixed(2);

        if (progression < 1) {
            requestAnimationFrame(frameStep);
        }
    };

    requestAnimationFrame(frameStep);
}

function initializeInteractiveCardClickFeedback() {
    const cards = document.querySelectorAll('.nl-service-card');
    const serviceSelector = document.getElementById('calcServiceType');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const TargetServiceKey = card.getAttribute('data-service');
            if (serviceSelector && TargetServiceKey) {
                // Focus synchronization mapping
                serviceSelector.value = TargetServiceKey;
                serviceSelector.dispatchEvent(new Event('change'));
                
                // Visual confirmation scroll target execution
                serviceSelector.closest('.nl-calculator-wrapper').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

// Main section ends here