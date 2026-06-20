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
        if (wrapper.classList.contains("open")) searchBar.focus();
    });

    document.addEventListener("click", () => wrapper.classList.remove("open"));

    function buildDropdown(items) {
        listContainer.innerHTML = "";
        items.forEach(item => {
            const row = document.createElement("li");
            row.innerHTML = `<span class="opt-flag">${item.flag}</span> <span class="opt-name">${item.name}</span>`;
            row.addEventListener("click", () => handleTranslation(item));
            listContainer.appendChild(row);
        });
    }

    function handleTranslation(item) {
        activeFlag.textContent = item.flag;
        activeText.textContent = item.name;
        wrapper.classList.remove("open");

        // Use Google Translate's translate method
        if (item.code === 'en') {
            // Reset to English
            location.reload();
        } else {
            // Use google's translate API to perform the translation
            function performTranslation() {
                try {
                    // Look for all possible Google Translate elements
                    const gteFrame = document.querySelector('iframe[src*="translate_a"]');
                    const gteCombo = document.querySelector('.goog-te-combo');
                    
                    // Try to access combo through different methods
                    let combo = null;
                    
                    // Method 1: Direct querySelector
                    combo = document.querySelector('.goog-te-combo');
                    
                    // Method 2: Try finding through parent div
                    if (!combo) {
                        const goolgeTranslateWrapper = document.querySelector('.goog-te-gadget-simple');
                        if (goolgeTranslateWrapper) {
                            combo = goolgeTranslateWrapper.querySelector('select');
                        }
                    }
                    
                    // Method 3: Find through body classes (sometimes Google Translate modifies body)
                    if (!combo) {
                        const allSelects = document.querySelectorAll('select');
                        for (let select of allSelects) {
                            if (select.className.includes('goog')) {
                                combo = select;
                                break;
                            }
                        }
                    }

                    if (combo) {
                        // Found the combo, now change language
                        combo.value = item.code;
                        combo.dispatchEvent(new Event('change', { bubbles: true }));
                        // Trigger additional events
                        setTimeout(() => {
                            combo.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                            combo.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
                            combo.dispatchEvent(new Event('input', { bubbles: true }));
                        }, 100);
                        return true;
                    }
                    
                    return false;
                } catch (e) {
                    console.error('Translation error:', e);
                    return false;
                }
            }

            // Try to perform translation, with retries
            let attempts = 0;
            const maxAttempts = 15;
            const retryTranslation = () => {
                if (performTranslation() || attempts >= maxAttempts) {
                    if (attempts >= maxAttempts) {
                        // Fallback: try using Google's built-in translation method if available
                        try {
                            if (window.google && window.google.translate) {
                                // Reload with language parameter in URL
                                const currentUrl = window.location.href;
                                if (currentUrl.includes('?')) {
                                    window.location.href = currentUrl + '&google_translate=' + item.code;
                                } else {
                                    window.location.href = currentUrl + '?google_translate=' + item.code;
                                }
                            }
                        } catch (e) {
                            console.error('Fallback translation failed:', e);
                        }
                    }
                    return;
                }
                attempts++;
                setTimeout(retryTranslation, 400);
            };
            
            retryTranslation();
        }
    }

    searchBar.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        const output = languageMap.filter(lang => lang.name.toLowerCase().includes(value));
        buildDropdown(output);
    });

    buildDropdown(languageMap);
});


