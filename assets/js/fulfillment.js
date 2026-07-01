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
// NEXUIST SMART WAREHOUSE CONFIGURATOR & CLOCK ENGINE
// ==========================================================================

function allocateWarehouseNode() {
    const hub = document.getElementById('warehouseHub').value;
    const profile = document.getElementById('payloadProfile').value;
    const duration = document.getElementById('storageDuration').value;
    
    const outputBox = document.getElementById('warehouseOutput');
    
    if (!hub || !profile) {
        alert("Please select a target facility hub and freight profile configuration.");
        return;
    }

    // Unhide telemetry logs output box
    outputBox.classList.remove('hidden');

    // Financial Calculation Logic
    let dailyBaseFee = 12.50; // base rate per pallet/slot
    let profileMultiplier = 1.0;
    let environmentalTarget = "Standard Controlled Ambient Room";

    if (profile === "electronics") {
        profileMultiplier = 1.45;
        environmentalTarget = "High-Security ESD Protected Grid";
    } else if (profile === "coldchain") {
        profileMultiplier = 1.75;
        environmentalTarget = "Precision Deep Chill Zone (-18°C)";
    }

    // Compile node tracking address hash 
    const hubCode = hub.split('_')[0];
    const randomizedCluster = Math.floor(1000 + Math.random() * 9000);
    const nodeAddress = `NEX-${hubCode}-AISLE_${randomizedCluster}`;

    // Final math output calculations
    const localizedSum = (dailyBaseFee * duration * profileMultiplier).toFixed(2);

    // Write allocations back to the user interface
    document.getElementById('outNodeAddress').innerText = nodeAddress;
    document.getElementById('outEnvironment').innerText = environmentalTarget;
    document.getElementById('outStorageCost').innerText = `$${parseFloat(localizedSum).toLocaleString()}`;
}

// Live Time-Sync Frame Simulator inside the pill banner
document.addEventListener("DOMContentLoaded", () => {
    const timeSyncLabel = document.getElementById('liveTimeSync');
    if (timeSyncLabel) {
        setInterval(() => {
            const now = new Date();
            timeSyncLabel.innerText = `SYS_SYNC_OK // ${now.toISOString().replace('T', ' ').substring(0, 19)} UTC`;
        }, 1000);
    }
});
// Main Section ends here