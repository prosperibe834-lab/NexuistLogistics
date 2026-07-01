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

// ==========================================================================
// NEXUIST TALENT VECTOR DISPATCH CONTROLLER & MONITOR
// ==========================================================================

function allocateTalentVector() {
    const zone = document.getElementById('deploymentZone').value;
    const cadre = document.getElementById('crewCadre').value;
    const scale = document.getElementById('allocationScale').value;
    
    const outputBox = document.getElementById('talentOutput');
    
    if (!zone || !cadre) {
        alert("Please specify deployment tactical zone and targeted crew cadre.");
        return;
    }

    // Unhide tactical field allocation logs
    outputBox.classList.remove('hidden');

    // Base Multipliers
    let baseOutlayRate = 150.00;
    let etaAssemblyMinutes = 15;
    let identifierTag = "VEC-LND";

    // Cadre Calculation Settings
    if (cadre === "heavyfreight") {
        baseOutlayRate = 420.00;
        etaAssemblyMinutes = 30;
        identifierTag = "VEC-HAUL";
    } else if (cadre === "customs") {
        baseOutlayRate = 280.00;
        etaAssemblyMinutes = 45;
        identifierTag = "VEC-PORT";
    }

    // Allocation Scale Multipliers
    let scaleMultiplier = 1.0;
    if (scale === "priority") {
        scaleMultiplier = 2.5; // Multi-crew cluster dispatch
        etaAssemblyMinutes = Math.round(etaAssemblyMinutes * 0.6); // 40% faster staging response
    } else if (scale === "enterprise") {
        scaleMultiplier = 8.0; // Retainer account architecture
        etaAssemblyMinutes = 5; // Instant dedicated assignment
    }

    // Compile randomized active dispatch serial 
    const zoneCode = zone.split('_')[0];
    const randomizedSerial = Math.floor(100 + Math.random() * 899);
    const resolvedVectorId = `${identifierTag}-${zoneCode}-${randomizedSerial}`;

    // Compute finalized structural allocations
    const finalManagementCost = (baseOutlayRate * scaleMultiplier).toFixed(2);

    // Render back to UI elements
    document.getElementById('outVectorId').innerText = resolvedVectorId;
    document.getElementById('outLatency').innerText = `Est. Assembly ~ ${etaAssemblyMinutes} Mins`;
    document.getElementById('outTalentCost').innerText = `$${parseFloat(finalManagementCost).toLocaleString()}`;
}

// Live Standby Personnel Counter Simulation 
document.addEventListener("DOMContentLoaded", () => {
    const crewRadarLabel = document.getElementById('liveOperatorCount');
    if (crewRadarLabel) {
        setInterval(() => {
            const baseCount = 84;
            const fluctuation = Math.floor(Math.random() * 7) - 3; // variations of +/- 3 operators
            crewRadarLabel.innerText = `SYS_RADAR_ACTIVE // ${baseCount + fluctuation} Operators Available on Immediate Standby`;
        }, 3500);
    }
});

// Main section ends here