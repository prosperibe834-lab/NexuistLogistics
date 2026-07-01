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

document.addEventListener('DOMContentLoaded', () => {
  const modeCards = document.querySelectorAll('.mode-card');
  const originSelect = document.getElementById('intlOrigin');
  const destSelect = document.getElementById('intlDest');
  const weightInput = document.getElementById('cargoWeight');
  const valueInput = document.getElementById('cargoValue');
  const incotermsSelect = document.getElementById('incoterms');
  const priceDisplay = document.getElementById('intlEstimatedPrice');
  const estimatorBox = document.getElementById('intlCostEstimator');
  const timelineProgress = document.getElementById('freightTimelineProgress');
  const freightForm = document.getElementById('intlFreightForm');

  let activeFreightMode = 'air';

  // Toggle Mode Active Selections
  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      modeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activeFreightMode = card.dataset.mode;
      
      // Update dummy progress bars dynamically based on transit selections
      if (activeFreightMode === 'ocean') {
        timelineProgress.style.width = '20%';
      } else {
        timelineProgress.style.width = '45%';
      }
      calculateInternationalQuote();
    });
  });

  function calculateInternationalQuote() {
    const weight = parseFloat(weightInput.value) || 0;
    const itemValue = parseFloat(valueInput.value) || 0;

    if (weight <= 0 || originSelect.value === destSelect.value) {
      priceDisplay.textContent = '$0.00';
      return;
    }

    // Set variable weights for Sea routes vs Air lines
    let ratePerKg = activeFreightMode === 'air' ? 9.25 : 3.15;
    let baseRate = activeFreightMode === 'air' ? 150.00 : 380.00;

    let subTotal = baseRate + (weight * ratePerKg);

    // Apply premium cargo liability insurance loading parameters
    if (incotermsSelect.value === 'full') {
      subTotal += (itemValue * 0.025);
    }

    // Output formatted premium Fintech string currency representation
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(subTotal);

    estimatorBox.classList.add('pulse');
    priceDisplay.textContent = formattedPrice;

    setTimeout(() => {
      estimatorBox.classList.remove('pulse');
    }, 200);
  }

  // Live Input Observers
  weightInput.addEventListener('input', calculateInternationalQuote);
  valueInput.addEventListener('input', calculateInternationalQuote);
  originSelect.addEventListener('change', calculateInternationalQuote);
  destSelect.addEventListener('change', calculateInternationalQuote);
  incotermsSelect.addEventListener('change', calculateInternationalQuote);

  // Form submission sequence
  freightForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Secure International Manifest Dispatched!\nRoute: ${originSelect.value} ➔ ${destSelect.value}\nMode: ${activeFreightMode.toUpperCase()}\nEstimated Cost: ${priceDisplay.textContent}`);
  });
});

// Main section ends here