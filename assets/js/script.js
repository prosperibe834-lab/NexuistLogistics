// ==========================================
// 1. GLOBAL THEME CACHE INTERCEPTOR (IIFE)
// ==========================================
(function() {
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

 
 
    // ==========================================
    // 4. TRANSLATION DATA & INTERCEPT PIPELINE
    // ==========================================
    const languageMap = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
        { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
        { code: 'yo', name: 'Yorùbá', flag: '🇳🇬' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'pl', name: 'Polski', flag: '🇵🇱' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
        { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
        { code: 'ak', name: 'Akan', flag: '🇬🇭' },
        { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
        { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
        { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
        { code: 'as', name: 'অসমীয়া', flag: '🇮🇳' },
        { code: 'ay', name: 'Aymar aru', flag: '🇧🇴' },
        { code: 'az', name: 'Azərbaycanca', flag: '🇦🇿' },
        { code: 'bm', name: 'Bamanankan', flag: '🇲🇱' },
        { code: 'eu', name: 'Euskara', flag: '🇪🇸' },
        { code: 'be', name: 'Беларуская', flag: '🇧🇾' },
        { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
        { code: 'bho', name: 'भोजपुरी', flag: '🇮🇳' },
        { code: 'bs', name: 'Bosanski', flag: '🇧🇦' },
        { code: 'bg', name: 'Български', flag: '🇧🇬' },
        { code: 'ca', name: 'Català', flag: '🇪🇸' },
        { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
        { code: 'ny', name: 'Chichewa', flag: '🇲🇼' },
        { code: 'co', name: 'Corsu', flag: '🇫🇷' },
        { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
        { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
        { code: 'da', name: 'Dansk', flag: '🇩🇰' },
        { code: 'dv', name: 'ދިވެހިބަސް', flag: '🇲🇻' },
        { code: 'ee', name: 'Eʋegbe', flag: '🇬🇭' },
        { code: 'eo', name: 'Esperanto', flag: '🌐' },
        { code: 'et', name: 'Eesti', flag: '🇪🇪' },
        { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
        { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
        { code: 'fy', name: 'Frysk', flag: '🇳🇱' },
        { code: 'gl', name: 'Galego', flag: '🇪🇸' },
        { code: 'ka', name: 'ქართული', flag: '🇬🇪' },
        { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
        { code: 'gn', name: 'Guarani', flag: '🇵🇾' },
        { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
        { code: 'ht', name: 'Kreyòl Ayisyen', flag: '🇭🇹' },
        { code: 'haw', name: 'Ōlelo Hawaiʻi', flag: '🇺🇸' },
        { code: 'iw', name: 'עבריት', flag: '🇮🇱' },
        { code: 'hmn', name: 'Hmoob', flag: '🌐' },
        { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
        { code: 'is', name: 'Íslenska', flag: '🇮🇸' },
        { code: 'ilo', name: 'Ilokano', flag: '🇵🇭' },
        { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
        { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
        { code: 'jw', name: 'Basa Jawa', flag: '🇮🇩' },
        { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
        { code: 'kk', name: 'Қазақ тілі', flag: '🇰🇿' },
        { code: 'km', name: 'ភាសាខ្មែរ', flag: '🇰🇭' },
        { code: 'rw', name: 'Ikinyarwanda', flag: '🇷🇼' },
        { code: 'gom', name: 'கொங்கணி', flag: '🇮🇳' },
        { code: 'kri', name: 'Krio', flag: '🇸🇱' },
        { code: 'ku', name: 'Kurdî', flag: '🇮🇶' },
        { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
        { code: 'lo', name: 'ພາສາລາວ', flag: '🇱🇦' },
        { code: 'la', name: 'Latina', flag: '🇻🇦' },
        { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
        { code: 'ln', name: 'Lingála', flag: '🇨🇩' },
        { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
        { code: 'lg', name: 'Luganda', flag: '🇺🇬' },
        { code: 'lb', name: 'Lëtzebuergesch', flag: '🇱🇺' },
        { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
        { code: 'mg', name: 'Malagasy', flag: '🇲🇬' },
        { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
        { code: 'ml', name: 'മലയാളം', flag: '🇮🇳' },
        { code: 'mt', name: 'Malti', flag: '🇲🇹' },
        { code: 'mi', name: 'Māori', flag: '🇳🇿' },
        { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
        { code: 'mn', name: 'Монгол хэл', flag: '🇲🇳' },
        { code: 'my', name: 'မြန်မာဘာသာ', flag: '🇲🇲' },
        { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
        { code: 'no', name: 'Norsk', flag: '🇳🇴' },
        { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
        { code: 'om', name: 'Oromoo', flag: '🇪🇹' },
        { code: 'ps', name: 'پښتو', flag: '🇦𝒇' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
        { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
        { code: 'qu', name: 'Runasimi', flag: '🇵🇪' },
        { code: 'ro', name: 'Română', flag: '🇷🇴' },
        { code: 'sm', name: 'Gagana Sāmoa', flag: '🇼🇸' },
        { code: 'sa', name: 'संस्कृतम्', flag: '🇮🇳' },
        { code: 'gd', name: 'Gàidhlig', flag: '🇬🇧' },
        { code: 'nso', name: 'Sepedi', flag: '🇿🇦' },
        { code: 'sr', name: 'Српски', flag: '🇷🇸' },
        { code: 'st', name: 'Sesotho', flag: '🇿🇦' },
        { code: 'sn', name: 'ChiShona', flag: '🇿🇼' },
        { code: 'sd', name: 'سنڌي', flag: '🇵🇰' },
        { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
        { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
        { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
        { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
        { code: 'su', name: 'Basa Sunda', flag: '🇮🇩' },
        { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
        { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯' },
        { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
        { code: 'tt', name: 'Татарча', flag: '🇷🇺' },
        { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
        { code: 'ti', name: 'ትግርኛ', flag: '🇪🇷' },
        { code: 'ts', name: 'Xitsonga', flag: '🇿🇦' },
        { code: 'uk', name: 'Українська', flag: '🇺🇦' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' },
        { code: 'ug', name: 'ئۇيغۇرଚە', flag: '🇨🇳' },
        { code: 'uz', name: 'Oʻzbekcha', flag: '🇺🇿' },
        { code: 'cy', name: 'Cymraeg', flag: '🇬🇧' },
        { code: 'xh', name: 'isiXhosa', flag: '🇿🇦' },
        { code: 'yi', name: 'ייִדיש', flag: '🌐' },
        { code: 'zu', name: 'isiZulu', flag: '🇿🇦' }
    ];

   const wrapper = document.getElementById("nxTranslator");
const triggerBtn = wrapper.querySelector(".nx-trans-trigger");
const activeFlag = wrapper.querySelector(".nx-active-flag");
const activeText = wrapper.querySelector(".nx-active-text");
const listContainer = document.getElementById("nxContainer");
const searchBar = document.getElementById("nxLangSearch");

triggerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.toggle("open");
});

document.addEventListener("click", () => {
    wrapper.classList.remove("open");
});

function setLanguage(langCode) {

    localStorage.setItem("selectedLanguage", langCode);

    document.cookie =
        "googtrans=/en/" + langCode +
        "; path=/";

    document.cookie =
        "googtrans=/en/" + langCode +
        "; domain=" + window.location.hostname +
        "; path=/";

    location.reload();
}

function buildDropdown(items) {

    listContainer.innerHTML = "";

    items.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.flag}</span>
            <span>${item.name}</span>
        `;

        li.addEventListener("click", () => {

            activeFlag.textContent = item.flag;
            activeText.textContent = item.name;

            localStorage.setItem(
                "selectedLanguageName",
                item.name
            );

            localStorage.setItem(
                "selectedLanguageFlag",
                item.flag
            );

            setLanguage(item.code);

        });

        listContainer.appendChild(li);

    });

}

searchBar.addEventListener("input", () => {

    const search = searchBar.value.toLowerCase();

    const filtered = languageMap.filter(lang =>
        lang.name.toLowerCase().includes(search)
    );

    buildDropdown(filtered);

});

buildDropdown(languageMap);

const savedFlag =
localStorage.getItem("selectedLanguageFlag");

const savedName =
localStorage.getItem("selectedLanguageName");

if(savedFlag) {
    activeFlag.textContent = savedFlag;
}

if(savedName) {
    activeText.textContent = savedName;
}

});





// ==========================================
// FINTECH SEARCH SUBMISSION ENGINE WIREFRAME
// ==========================================
const heroForm = document.querySelector(".nx-tracker-form");
const heroInput = document.getElementById("nxHeroTrackInput");

if (heroForm && heroInput) {
    heroForm.addEventListener("submit", (e) => {
        const trackingValue = heroInput.value.trim();
        
        if (trackingValue === "") {
            e.preventDefault();
            // Subtle shake animation cue feedback if input field is blank
            heroForm.style.animation = "none";
            setTimeout(() => {
                heroForm.style.style.transform = "translateX(5px)";
                // Reset standard tracking layout matrix states safely
            }, 10);
        }
    });
}

// Counter section starts here
// ==========================================
// FINTECH COUNTER RUNTIME METRIC CONTROLLER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.nx-counter-num');
    const animationSpeed = 120; // Lower numbers execute the loop faster

    const startCounterAnimation = (counterElement) => {
        const updateCount = () => {
            const target = +counterElement.getAttribute('data-target');
            const currentCount = +counterElement.innerText;
            
            // Calculate smooth progressive increment scale
            const increment = Math.ceil(target / animationSpeed);

            if (currentCount < target) {
                counterElement.innerText = Math.min(currentCount + increment, target);
                setTimeout(updateCount, 25);
            } else {
                counterElement.innerText = target;
            }
        };
        updateCount();
    };

    // Modern API Intersection Observer to trigger when elements enter viewport view
    const observerOptions = {
        root: null,
        threshold: 0.15, // Trigger when 15% of component structure is visible
        passive: true
    };

    const metricsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetCounter = entry.target.querySelector('.nx-counter-num');
                if (targetCounter) {
                    startCounterAnimation(targetCounter);
                }
                metricsObserver.unobserve(entry.target); // Unobserve after completion
            }
        });
    }, observerOptions);

    // Bind each diagnostic metric card structural block component target
    document.querySelectorAll('.nx-metric-card').forEach(card => {
        metricsObserver.observe(card);
    });
});

// Counter section ends here


// ==========================================
// FINTECH METRIC CARDS INTERACTIVE RUNTIME
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll('.nx-service-card');
    
    const cardIntersectionOptions = {
        root: null,
        threshold: 0.1,
        passive: true
    };
    
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Instantly inject a staggered cinematic transition delays hardware acceleration
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                cardObserver.unobserve(entry.target);
            }
        });
    }, cardIntersectionOptions);
    
    serviceCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease";
        cardObserver.observe(card);
    });
});


// ==========================================
// PIPELINE WORKFLOW STEP ACCELERATOR ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const workflowSection = document.querySelector('.nx-workflow-section');
    const stepCards = document.querySelectorAll('.nx-step-card');
    const progressFill = document.querySelector('.nx-line-fill');

    if (workflowSection) {
        const workflowObserverOptions = {
            root: null,
            threshold: 0.2,
            passive: true
        };

        const workflowObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 1. Fire desktop progressive timeline line trace animation vector
                    if (progressFill) {
                        progressFill.style.width = "100%";
                    }

                    // 2. Stagger cascade deployment of step interaction states smoothly
                    stepCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('is-active');
                        }, index * 250); // Stagger interval delay multiplier frame loop
                    });

                    // Terminate lookup loops tracking instances to protect performance limits
                    workflowObserver.unobserve(entry.target);
                }
            });
        }, workflowObserverOptions);

        workflowObserver.observe(workflowSection);
    }
});

// Global Network starts here

// ==========================================
// FINTECH INFRASTRUCTURE ROUTE FILTER ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.nx-mode-btn');
    const regionCards = document.querySelectorAll('.nx-region-card');

    if (filterButtons.length > 0 && regionCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active status class token parameters safely
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                regionCards.forEach(card => {
                    const cardRoutes = card.getAttribute('data-routes');

                    if (filterValue === 'all' || cardRoutes.includes(filterValue)) {
                        // Smoothly restore visibility via layout render passes
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                        card.style.pointerEvents = 'auto';
                        setTimeout(() => { card.style.display = 'flex'; }, 50);
                    } else {
                        // Apply fade masking out elements mismatched via filter loops
                        card.style.opacity = '0.15';
                        card.style.transform = 'scale(0.97) translateY(2px)';
                        card.style.pointerEvents = 'none';
                    }
                });
            });
        });
    }
});

// Global Network ends here

// Why us starts here 
// ==========================================
// FINTECH INTERACTIVE PROXIMITY CARD ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const stage = document.querySelector('.nx-graphic-stage');
    const boxInstance = document.querySelector('.nx-procedural-box');

    if (stage && boxInstance) {
        stage.addEventListener('mousemove', (e) => {
            const rect = stage.getBoundingClientRect();
            // Map coordinate offsets relative to center bounds
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);

            // Deflect components within structured physical safety angles
            const calcX = -(y / 15);
            const calcY = (x / 18);

            boxInstance.style.transform = `rotate(-5deg) rotateX(${calcX}deg) rotateY(${calcY}deg) translateY(-10px)`;
        });

        // Smoothly restore base resting animation positions when target cursor departs
        stage.addEventListener('mouseleave', () => {
            boxInstance.style.transform = `rotate(-5deg) rotateX(0deg) rotateY(0deg) translateY(-10px)`;
            boxInstance.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        });
    }
});

// Why us ends here

//  Testimonials starts here

// ==========================================
// FINTECH TESTIMONIAL DISPLAY MOTOR ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.nx-reviews-track');
    const dots = document.querySelectorAll('.nx-indicator-dot');
    
    if (track && dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                // Terminate actions if screen configuration defaults to wide layouts
                if (window.innerWidth > 768) return;

                const targetSlideIndex = parseInt(dot.getAttribute('data-slide'), 10);

                // Wipe matching active marker structures safely
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');

                // Shift matrix transform offsets linearly based on slide index metrics
                const translationOffset = targetSlideIndex * -100;
                track.style.transform = `translateX(${translationOffset}%)`;
            });
        });

        // Auto reset track mapping vectors upon window scaling cycles
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                track.style.transform = `translateX(0%)`;
                dots.forEach(d => d.classList.remove('active'));
                dots[0].classList.add('active');
            }
        }, { passive: true });
    }
});
//  Testimonials ends here


// ==========================================
// FINTECH CTA MOUSE-TRACKING SPOTLIGHT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const ctaCard = document.querySelector('.nx-cta-container');

    if (ctaCard) {
        ctaCard.addEventListener("mousemove", (e) => {
            const rect = ctaCard.getBoundingClientRect();
            // Calculate mouse coordinates relative to the container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Pipe coordinates into CSS variables for the radial gradient
            ctaCard.style.setProperty("--mouse-x", `${x}px`);
            ctaCard.style.setProperty("--mouse-y", `${y}px`);
        });
    }
});