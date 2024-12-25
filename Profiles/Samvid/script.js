// jQuery for Navbar Active Link
$(document).ready(function() {
    $('nav .nav-link').on('click', function() {
        // Remove 'active' class from all links
        $('nav .nav-link').removeClass('active');
        
        // Add 'active' class to clicked link
        $(this).addClass('active');
    });
});
