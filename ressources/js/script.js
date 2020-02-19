// tabs js
var TabBlock = {
    s: {
        animLen: 200
    },
    
    init: function() {
        TabBlock.bindUIActions();
        TabBlock.hideInactive();
    },
    
    bindUIActions: function() {
        $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
        TabBlock.switchTab($(this));
        });
    },
    
    hideInactive: function() {
        var $tabBlocks = $('.tabBlock');
            
        $tabBlocks.each(function(i) {
        var 
            $tabBlock = $($tabBlocks[i]),
            $panes = $tabBlock.find('.tabBlock-pane'),
            $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
            
        $panes.hide();
        $($panes[$activeTab.index()]).show();
        });
    },
    
    switchTab: function($tab) {
        var $context = $tab.closest('.tabBlock');
            
        if (!$tab.hasClass('is-active')) {
        $tab.siblings().removeClass('is-active');
        $tab.addClass('is-active');
    
        TabBlock.showPane($tab.index(), $context);
        }
    },
    
    showPane: function(i, $context) {
        var $panes = $context.find('.tabBlock-pane');
    
        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(TabBlock.s.animLen);
        $($panes[i]).slideDown(TabBlock.s.animLen);
    }
    };
    
    $(function() {
    TabBlock.init();
    });
    
    $(function () {
    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');
    
    });
    
});

// tabs card

var items = $('.ItemBox')
$(".ItemBox").on('mouseover',function(){

var dta = $(this).attr('data-id');
    $(".moreItemDetails"+dta).show();
})

$(".ItemBox").on('mouseout',function(){

    var dta = $(this).attr('data-id');

        $(".moreItemDetails"+dta).hide();
})



// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})




$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    
    // breakpoint and up  
    $(window).resize(function(){
        if ($(window).width() >= 980){	
    
        // when you hover a toggle show its dropdown menu
        $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
        });
    
            // hide the menu when the mouse leaves the dropdown
        $( ".navbar .dropdown-menu" ).mouseleave(function() {
            $(this).removeClass("show");  
        });
            // do something here
        }	
    });  
    
    // document ready  
});