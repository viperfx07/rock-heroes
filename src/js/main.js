$(document).ready(function() {
    var $container = $('.heroes-container'),
            $items = $('.item--container.open');

    function sortOpenedHeroes(desc){
        var descFunc = function(a,b){
            var num1 = parseInt($(a).find('.episode--title span').text());
            var num2 = parseInt($(b).find('.episode--title span').text());
            return num2 - num1;
        }

        var ascFunc = function(a,b){
            var num1 = parseInt($(a).find('.episode--title span').text());
            var num2 = parseInt($(b).find('.episode--title span').text());
            return num1 - num2;
        }
        
        if(typeof desc !== 'undefined' && desc){
            $items.sort(descFunc);
        } else{
            $items.sort(ascFunc);
        }
        
        $items.detach().prependTo($container);
    }

    /* Top Menu on hover event */
    $(".nav")
        .mouseover(function() {
            $(this).find('div.navmenu').css('visibility', 'visible');
        })
        .mouseout(function() {
            $(this).find('div.navmenu').css('visibility', 'hidden');
        });

    /* Sidebar Menu */
    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#rock-menu'
    });

    $('body').click(function() {
        $.sidr('close', 'sidr-main');
    });

    $('.sidr-class-navtop').remove();

    /* Make the episode number and title text responsive */
    $('.episode--title').fitText(1, {
        minFontSize: '14px',
        maxFontSize: '21px'
    });
   
    /* Sort the episode based on the open*/
    enquire.register("screen and (max-width:1200px)", {
        match: function() {
            sortOpenedHeroes(true)
        },
        unmatch: function() {
            sortOpenedHeroes(false);
        },
        deferSetup: true,
    });
});
