$(document).ready(function() {
    var $container = $('.heroes-container'),
            $items = $('.item--container.open');

    function sortOpenedHeroes(desc){
        var descFunc = function(a,b){
            var num1 = parseInt($(a).find('.episode--number span').text());
            var num2 = parseInt($(b).find('.episode--number span').text());
            return num2 - num1;
        }

        var ascFunc = function(a,b){
            var num1 = parseInt($(a).find('.episode--number span').text());
            var num2 = parseInt($(b).find('.episode--number span').text());
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
    $('.episode--number').fitText(1.1, {
        minFontSize: '10px',
        maxFontSize: '14px'
    });

    /* Sort the episode based on the open*/
    enquire.register("screen and (max-width:1200px)", {

        // OPTIONAL
        // If supplied, triggered when a media query matches.
        match: function() {
            sortOpenedHeroes(true)
        },

        // OPTIONAL
        // If supplied, triggered when the media query transitions 
        // *from a matched state to an unmatched state*.
        unmatch: function() {
            sortOpenedHeroes(false);
        },

        // OPTIONAL
        // If supplied, triggered once, when the handler is registered.
        setup: function() {},

        // OPTIONAL, defaults to false
        // If set to true, defers execution of the setup function 
        // until the first time the media query is matched
        deferSetup: true,

        // OPTIONAL
        // If supplied, triggered when handler is unregistered. 
        // Place cleanup code here
        destroy: function() {}

    });
    

});
