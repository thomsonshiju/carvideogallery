$(document).ready(function() {
    // Theme Toggle Functionality
    function toggleTheme() {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        $('#toggle-theme-car').text(isDark ? '☀️' : '🌙');
        $('.car-box').css('background-color', isDark ? '#555' : '#f0f0f0');
    }

    $('#toggle-theme-car').click(toggleTheme);
});