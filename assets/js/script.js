var navEl = $('<nav>');
var navAnchorEl = $('.nav-a');

$('a').on('mouseover', navAnchorEl, function() {
    $('nav a.active').removeClass('active');
    $(this).addClass('active');
});