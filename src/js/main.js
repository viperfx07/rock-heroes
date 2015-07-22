$(document).ready(function() {
    $(".nav").mouseover(function() {
        $(this).find('div.navmenu').css('visibility', 'visible');
    });

    $(".nav").mouseout(function() {
        $(this).find('div.navmenu').css('visibility', 'hidden');
    });

    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#rock-menu'
    });

    $('body').click(function() {
        $.sidr('close', 'sidr-main');
    });

    $('.sidr-class-navtop').remove();
});
