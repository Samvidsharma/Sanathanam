
    const toggleSpans = document.querySelectorAll('.toggle-span');

    toggleSpans.forEach(function(span) {
        span.addEventListener('click', function() {
            const content = this.parentNode.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
