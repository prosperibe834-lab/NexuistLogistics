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


// Main Section starts here

// ==========================================================================
// NEXUIST MARITIME MESH MATRIX CALCULATOR
// ==========================================================================

function calculateOceanRoute() {
    const origin = document.getElementById('loadingPort').value;
    const destination = document.getElementById('dischargePort').value;
    const size = document.getElementById('containerSize').value;
    
    const outputBox = document.getElementById('maritimeOutput');
    
    if (!origin || !destination) {
        alert("Please set your loading terminal and destination paths.");
        return;
    }

    // Unveil financial breakdown ledger
    outputBox.classList.remove('hidden');

    // Base Multipliers
    let baseContainerRate = size === "40" ? 1850 : 1100;
    let distanceDays = 14;
    let terminalMarkup = 1.0;

    // Calculation Matrix Parsing
    if (origin === "LOS_APAPA" && destination === "RTM_NL") {
        distanceDays = 18;
        terminalMarkup = 1.12;
    } else if (origin === "LOS_APAPA" && destination === "HAM_DE") {
        distanceDays = 21;
        terminalMarkup = 1.18;
    } else if (origin === "PHC_ONNE" && destination === "RTM_NL") {
        distanceDays = 20;
        terminalMarkup = 1.15;
    } else if (origin === "PHC_ONNE" && destination === "HAM_DE") {
        distanceDays = 23;
        terminalMarkup = 1.22;
    } else {
        distanceDays = 16;
        terminalMarkup = 1.08;
    }

    // Sum finalized pricing metrics
    const overallCost = (baseContainerRate * terminalMarkup).toFixed(2);
    
    // UI Assignments
    const originLabel = origin.split('_')[1];
    const destLabel = destination.split('_')[0];

    document.getElementById('ledgerRoute').innerText = `${originLabel} Terminal ➔ ${destLabel} Central`;
    document.getElementById('ledgerDays').innerText = `Est. ${distanceDays} Days Sea Transit`;
    document.getElementById('ledgerCost').innerText = `$${parseFloat(overallCost).toLocaleString()}`;
}

// Main Section ends here