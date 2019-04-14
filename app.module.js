var app = angular.module('aol', [
	/*"firebase",*/
    'ngResource',
	 'ui.router'

]);

app.config( function($logProvider, $compileProvider, $urlRouterProvider, $stateProvider, $locationProvider) {
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false); // performance boost

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    //$locationProvider.html5Mode(true);
    
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('about', {
            url: "/about",
            templateUrl: "about_us.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "contact.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('services', {
            url: "/programs",
            templateUrl: "services.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('music', {
            url: "/programs/music",
            templateUrl: "programs/music.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('art', {
            url: "/programs/art",
            templateUrl: "programs/art.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('art-moms', {
            url: "/programs/art-expecting-moms",
            templateUrl: "programs/art_expecting_moms.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('dance', {
            url: "/programs/dance",
            templateUrl: "programs/dance.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('mindfulness', {
            url: "/programs/mindfulness",
            templateUrl: "programs/mindfulness.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('mindfulness-teens', {
            url: "/programs/mindfulness-teens",
            templateUrl: "programs/mindfulness_teens.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('events', {
            url: "/events",
            templateUrl: "events.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "blog.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('youth2016', {
            url: "/youthconcert2016",
            templateUrl: "concerts/youth2016.html",
            controller: "MainController",
            controllerAs: "ctrl"
            
        })
        .state('youth2017', {
            url: "/youthconcert2017",
            templateUrl: "concerts/youth2017.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('youth2018', {
            url: "/youthconcert2018",
            templateUrl: "concerts/youth2018.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
        .state('upcoming_events', {
            url: "/programs/upcoming_events",
            templateUrl: "/programs/upcoming_events",
            controller: "MainController",
            controllerAs: "ctrl"
        })

        .state('youthseries', {
            url: "/youthseries",
            templateUrl: "youth_series.html",
            controller: "MainController",
            controllerAs: "ctrl"
        })
});

app.run(function(DataService) {
    //DataService.loadSpecials();
    //DataService.loadPhrases();
});


app.controller('MainController', function(GuiService) {

    var ctrl = this;

    ctrl.initFlexSlider = function() {
        $(document).ready(function() {
            GuiService.initFlexSlider();
        });
    };

    ctrl.initPortfolioFlexSlider = function() {
        $(document).ready(function() {
            GuiService.initPortfolioFlexSlider();
        });
    }

});


app.service('GuiService', function() {
    var gui = this;

    gui.initPortfolioFlexSlider = function() {

        //----------------Portfolio Flexslider with carousel-------------------------
        jQuery('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 210,
            itemMargin: 10,
            asNavFor: '#portfolio_slider'
        });

        jQuery('#portfolio_slider').flexslider({
            namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
            selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
            animation: "slide",              //String: Select your animation type, "fade" or "slide"
            easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
            direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
            reverse: false,                 //{NEW} Boolean: Reverse the animation direction
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            slideshow: false,                //Boolean: Animate slider automatically
            slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
            initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
            randomize: false,               //Boolean: Randomize slide order

        // Usability features
            pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
            pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
            touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
            video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

        // Primary Controls
            controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",               //String: Set the text for the "next" directionNav item

        // Secondary Navigation
            keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
            multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
            mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
            pausePlay: false,               //Boolean: Create pause/play dynamic element
            pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
            playText: 'Play',               //String: Set the text for the "play" pausePlay item

        // Special properties
            controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
            manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
            sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
            asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

        // Carousel Options
            itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
            itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
            minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
            maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
            move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

        // Callback API
            start: function(){
                jQuery('.flex-active-slide .container .carousel-caption').addClass('show')
            },            //Callback: function(slider) - Fires when the slider loads the first slide
            before: function(){
                jQuery('.flex-active-slide .container .carousel-caption').removeClass('show')
            },           //Callback: function(slider) - Fires asynchronously with each slider animation
            after: function(slider){
                jQuery('.flex-active-slide .container .carousel-caption').addClass('show')
            },            //Callback: function(slider) - Fires after each slider animation completes
            end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
            added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
            removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed

        });


        //UI to Top
            jQuery().UItoTop({ easingType: 'easeOutQuart' });

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                // Yep, it's Safari =)
                jQuery('.portfolio_item figcaption p').addClass('safari');
            } else {
                // Nope, it's another browser =(
            }


            jQuery(window).load(function(){
                //ISOTOPE
                // cache container
                var container = jQuery('.isotope_portfolio_container');
                // initialize isotope
                container.isotope({
                });
                jQuery('.portfolio_filters a[data-filter="*"]').addClass('active');
                // filter items when filter link is clicked
                jQuery('.portfolio_filters a').click(function(){
                    jQuery('.portfolio_filters a').removeClass('active');
                    jQuery(this).addClass('active');
                    var selector = jQuery(this).attr('data-filter');
                    container.isotope({ filter: selector });
                    return false;
                });
                //WOW
                wow.init();
            });

            jQuery(window).resize(function() {
                //ISOTOPE Again, in order to fix the resizing bug
                var container = jQuery('.isotope_portfolio_container');
                container.isotope({ });
            });

            var speed = 330, easing = mina.backout;

            [].slice.call ( document.querySelectorAll( '.portfolio_item > a' ) ).forEach( function( el ) {
                var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                    pathConfig = {
                        from : path.attr( 'd' ),
                        to : el.getAttribute( 'data-path-hover' )
                    };

                el.addEventListener( 'mouseenter', function() {
                    path.animate( { 'path' : pathConfig.to }, speed, easing );
                } );

                el.addEventListener( 'mouseleave', function() {
                    path.animate( { 'path' : pathConfig.from }, speed, easing );
                } );
            } );
    };

    gui.initFlexSlider = function() {

            //PrettyPhoto
//jQuery("a[rel^='prettyPhoto']").prettyPhoto();
            jQuery("a.prettyPhoto").prettyPhoto();
            jQuery("a[rel^='prettyPhoto']").prettyPhoto();


//Collapsing Header Effect

            var header_height = jQuery('header').outerHeight();
            var full_page_photo_height = jQuery('.full_page_photo').outerHeight();
            var total_height = header_height + full_page_photo_height;
            var nav = jQuery('.collapsing_header header');

            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > full_page_photo_height) {
                    nav.addClass("absolute");
                    nav.css( "top", full_page_photo_height );
                } else {
                    nav.removeClass("absolute");
                    nav.css( "top", "0px" );
                }
            });

            var window_top = jQuery(window).scrollTop();

            if (window_top > full_page_photo_height) {
                nav.addClass("absolute");
                nav.css( "top", full_page_photo_height );
            } else {
                nav.removeClass("absolute");
                nav.css( "top", "0px" );
            }

            jQuery('.collapsing_header .full_page_photo').css( "top", header_height );
            jQuery('.collapsing_header .main').css( "top", total_height );




//------FLEXSLIDER homepage------------------

            jQuery('#main_flexslider').flexslider({
                namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
                selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
                animation: "slide",              //String: Select your animation type, "fade" or "slide"
                easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
                direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
                reverse: false,                 //{NEW} Boolean: Reverse the animation direction
                animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
                smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
                startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
                slideshow: true,                //Boolean: Animate slider automatically
                slideshowSpeed: 10000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
                initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
                randomize: false,               //Boolean: Randomize slide order

// Usability features
                pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
                pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
                useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
                touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
                video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

// Primary Controls
                controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
                directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
                prevText: "Previous",           //String: Set the text for the "previous" directionNav item
                nextText: "Next",               //String: Set the text for the "next" directionNav item

// Secondary Navigation
                keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
                multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
                mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
                pausePlay: false,               //Boolean: Create pause/play dynamic element
                pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
                playText: 'Play',               //String: Set the text for the "play" pausePlay item

// Special properties
                controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
                manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
                sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
                asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

// Carousel Options
                itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
                itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
                minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
                maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
                move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

// Callback API
                start: function(){
                    jQuery('.flex-active-slide .container .carousel-caption').addClass('show')
                },            //Callback: function(slider) - Fires when the slider loads the first slide
                before: function(){
                    jQuery('.flex-active-slide .container .carousel-caption').removeClass('show')
                },           //Callback: function(slider) - Fires asynchronously with each slider animation
                after: function(slider){
                    jQuery('.flex-active-slide .container .carousel-caption').addClass('show')
                },            //Callback: function(slider) - Fires after each slider animation completes
                end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
                added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
                removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed

            });

    }
});

app.service('DataService', function($log, $resource) {
    var service = this;
    var specials, phrases;

    service.loadSpecials = function() {
        $resource('assets/custom_data/specials.json').query(function(specialsList) {
            specials = specialsList;
        });
    };

    service.loadPhrases = function() {
        $resource('assets/custom_data/phrase-day.json').query(function(phrasesList) {
            phrases = phrasesList;
        });
    };


    service.getPhrase = function() {
        var randomIndex = _.random(0, _.size(phrases));
        return phrases[randomIndex].text;
    };

    service.getSpecials = function() {
        return specials;
    }

});
