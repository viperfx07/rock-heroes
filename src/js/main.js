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

    $('.episode--title').fitText(1, {
        minFontSize: '14px',
        maxFontSize: '21px'
    });
    $('.episode--number').fitText(1.1, {
        minFontSize: '10px',
        maxFontSize: '14px'
    });

    var $container = $('.isotope--container'),
        $items = $('.isotope--item');

    $items.sort(function(a,b){
        var num1 = parseInt($(a).find('.episode--number span').text());
        var num2 = parseInt($(b).find('.episode--number span').text());

        return num2-num1;
    });
    $items.detach().appendTo($container);
});
