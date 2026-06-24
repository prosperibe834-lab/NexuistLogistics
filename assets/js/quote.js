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
   NEXUIST MULTI-STEP QUOTE CALCULATOR CONTROLLER ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initializeQuoteCalculationCore();
});

function initializeQuoteCalculationCore() {
    const form = document.getElementById('quoteEngineForm');
    if (!form) return;

    // Interface extraction mappings
    const vectorSelector = document.getElementById('quoteLogisticsVector');
    const weightInput = document.getElementById('quoteWeight');
    const volumeInput = document.getElementById('quoteVolume');
    const insuranceSelector = document.getElementById('quoteInsurance');

    // Outlet display elements
    const outBase = document.getElementById('ledgerBase');
    const outWeight = document.getElementById('ledgerWeight');
    const outVolume = document.getElementById('ledgerVolume');
    const outInsurance = document.getElementById('ledgerInsurance');
    const outGrandTotal = document.getElementById('ledgerGrandTotal');

    const recalculateInvoiceStatement = () => {
        // Step 1: Read Option Core Data Metrics
        const selectedVector = vectorSelector.options[vectorSelector.selectedIndex];
        const basePipelineFee = parseFloat(selectedVector.getAttribute('data-base')) || 0;
        const weightRateFactor = parseFloat(selectedVector.getAttribute('data-per-kg')) || 0;

        // Step 2: Extract User Inputs
        const operationalWeight = parseFloat(weightInput.value) || 0;
        const operationalVolume = parseFloat(volumeInput.value) || 0;
        
        const selectedInsurance = insuranceSelector.options[insuranceSelector.selectedIndex];
        const insuranceFee = parseFloat(selectedInsurance.getAttribute('data-fee')) || 0;

        // Step 3: Compute Matrix Algebra
        const computedWeightSurcharge = operationalWeight * weightRateFactor;
        const computedVolumeSurcharge = operationalVolume * 22.5; // Constant volumetric constant matrix allocation
        
        const absoluteGrandTotalValue = basePipelineFee + computedWeightSurcharge + computedVolumeSurcharge + insuranceFee;

        // Step 4: Render values smoothly into interface elements
        outBase.innerText = `$${basePipelineFee.toFixed(2)}`;
        outWeight.innerText = `$${computedWeightSurcharge.toFixed(2)}`;
        outVolume.innerText = `$${computedVolumeSurcharge.toFixed(2)}`;
        outInsurance.innerText = `$${insuranceFee.toFixed(2)}`;

        // High precision step animation for grand total element
        animateNumericQuoteCounter(parseFloat(outGrandTotal.innerText) || 0, absoluteGrandTotalValue, outGrandTotal);
    };

    // Bind event tracking matrix
    const interactionEvents = ['change', 'input'];
    const dynamicFormElements = [vectorSelector, weightInput, volumeInput, insuranceSelector];

    dynamicFormElements.forEach(element => {
        if (!element) return;
        interactionEvents.forEach(evt => element.addEventListener(evt, recalculateInvoiceStatement));
    });

    // Handle form submit verification logs
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Quote compiled successfully! Operational Allocation Matrix locked.`);
    });

    // Execute matrix initialization pipeline run
    recalculateInvoiceStatement();
}

/**
 * Visual linear animation stepper for financial totals
 */
function animateNumericQuoteCounter(startValue, endValue, targetDisplayElement) {
    const trackingDuration = 200; // time in milliseconds
    const trackingStartTime = performance.now();

    const processFrameUpdate = (currentFrameTime) => {
        const timeElapsed = currentFrameTime - trackingStartTime;
        const processProgression = Math.min(timeElapsed / trackingDuration, 1);
        
        const frameResultStepValue = startValue + (endValue - startValue) * processProgression;
        targetDisplayElement.innerText = frameResultStepValue.toFixed(2);

        if (processProgression < 1) {
            requestAnimationFrame(processFrameUpdate);
        }
    };

    requestAnimationFrame(processFrameUpdate);
}

// Main section ends here