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
// NEXUIST AIR LOGISTICS INTERACTIVE CONTROLLER
// ==========================================================================

function calculateAirMetric() {
    const origin = document.getElementById('originAirport').value;
    const destination = document.getElementById('destAirport').value;
    const weight = document.getElementById('cargoWeight').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    
    const outputBox = document.getElementById('routingResult');
    
    // Check form validation flags
    if (!origin || !destination || !weight) {
        alert("Please complete all fields to resolve lane routing metrics.");
        return;
    }
    
    if (origin === destination) {
        alert("Origin and Destination hubs cannot match. Please select an international connection path.");
        return;
    }

    // Unhide output framework with loading styles
    outputBox.classList.remove('hidden');
    
    // Process Lane Cost Calculation Logic
    let baseRate = priority === 'express' ? 4.80 : 2.50;
    let distanceFactor = 1.0;
    let estimatedHours = 6;

    // Route matrix weights
    if (origin === "LOS" && destination === "LHR") { distanceFactor = 1.2; estimatedHours = 6.5; }
    else if (origin === "LOS" && destination === "FRA") { distanceFactor = 1.4; estimatedHours = 7.0; }
    else if (origin === "PHC" && destination === "LHR") { distanceFactor = 1.35; estimatedHours = 8.5; }
    else { distanceFactor = 1.6; estimatedHours = 9.0; }

    if (priority === 'express') {
        estimatedHours = Math.round(estimatedHours * 0.8 * 10) / 10; // 20% faster transit
    }

    const calculatedPrice = (weight * baseRate * distanceFactor).toFixed(2);

    // Update Output Values
    document.getElementById('outRoute').innerText = `${origin} ➔ ${destination}`;
    document.getElementById('outTime').innerText = `${estimatedHours} Hours`;
    document.getElementById('outPrice').innerText = `$${parseFloat(calculatedPrice).toLocaleString()}`;
}

// Optional Scroll Reveal Animation Layer 
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        element.style.transition = "all 0.6s ease-out";
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            // Setup default styling states pre-reveal
            if(!el.style.opacity) {
                el.style.opacity = "0";
                el.style.transform = "translateY(25px)";
            }
            
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => { 
        handleScrollAnimation();
    });
    
    // Trigger baseline reveal loop on load checks
    setTimeout(handleScrollAnimation, 150);
});

// Main Section ends here