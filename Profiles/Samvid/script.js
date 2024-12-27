// jQuery for Navbar Active Link
$(document).ready(function() {
    $('nav .nav-link').on('click', function() {
        // Remove 'active' class from all links
        $('nav .nav-link').removeClass('active');
        
        // Add 'active' class to clicked link
        $(this).addClass('active');
    });
});

// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,te'}, 'google_translate_element');
}

// Toggle Language Function
function toggleLanguage() {
    const translateCombo = document.querySelector('.goog-te-combo');

    if (translateCombo) {
        const currentLang = translateCombo.value;
        const newLang = currentLang === 'en' ? 'te' : 'en';
        translateCombo.value = newLang;
        translateCombo.dispatchEvent(new Event('change'));
    }
}

// Wait for Google Translate to load before binding events
window.addEventListener('load', function() {
    googleTranslateElementInit();

    function hideTranslateBar() {
        let translateBar = document.querySelector('.goog-te-banner-frame');
        if (translateBar) {
            translateBar.style.display = 'none';
        }
    }
    window.onload = hideTranslateBar;
});
