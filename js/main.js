$(window).load(function ($) {

$(document).ready(function(){
  prep(); 
});

    'use strict';

    $(document).ready(function () {

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                  $('body').removeClass('gallery-active'); 
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $site.scrollTop(0);
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                }
            },
            onAfter: function() {
    prep();
    $( '#list' ).masonry( { itemSelector: '.item' } );
  },
        }).data('smoothState');

    });

function prep(){


$( window ).load( function()
{


    $( '#list' ).masonry( { itemSelector: '.item' } );

    });

$( '#gallery-btn' ).click(function() {
  $('body').addClass('gallery-active'); 
});

$( '#close-gallery' ).click(function() {
  $('body').removeClass('gallery-active'); 
});

    $(".fancybox").fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade'
    });

    $('.fancybox-media').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });

$( '.toc span, .menu-slide' ).mouseenter(function() {
  $('.menu-slide').addClass('active'); 
});
$( '.menu-slide' ).mouseleave(function() {
  $('.menu-slide').removeClass('active'); 
});
 

    


} // prep

}(jQuery));