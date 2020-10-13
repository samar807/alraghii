$(function() {
    // toggleclass
    $(".nav-bar .toggle").click(function() {
        $(' .slide-bar').toggleClass('open-nav-bar');
        $(' .nav-bar .toggle').toggleClass('active');
        $(' .nav-bar .search').toggleClass('open-searh');
    });
    $(".nav-bar .toggle").click(function() {
        $('nav').toggleClass('active');
        $('li#open-search ').toggleClass('all')
    });
    $('.sa').click(function() {
        $('html', 'body').animate({
            scrolLTop: $('.imgeshover').offset().top - 18
        }, 2000)
    });

    // scrooltop
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('.nav-bar').addClass('add');
        } else {
            $('.nav-bar').removeClass('add')
        }
    });

    // client carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    // search large screen
    $("#open-search").click(function() {
        $(' #open-search').addClass('hide');
        $(' #search').addClass('show-search');
        $('.item-nav').addClass('nav-hide');
        $('#close').addClass('close-show');
        $('form').addClass('all');
    });
    $("#close").click(function() {
        $(' #open-search').removeClass('hide');
        $(' #search').removeClass('show-search');
        $('.item-nav').removeClass('nav-hide');
        $('#close').removeClass('close-show');
    });
    $("#close").click(function() {
        $('form').removeClass('show-close');
    });
    // search media screeen and small screen
    $('.close-nav').click(function() {
        $(' .slide-bar').toggleClass('open-nav-bar');
        $(' .nav-bar .toggle').removeClass('active');
        $(' .nav-bar .search').removeClass('open-searh');
    });

    $("#close-search").click(function() {
        $(' #close-search').addClass('hide');
        $(' #search-input').addClass('show-search');
        $('#close-btn').addClass('close-show');
        $('form').toggleClass('show-close');

    });

    $("#close-btn").click(function() {
        $('form').removeClass('show-close');

    });

    $("#close-btn").click(function() {
        $(' #close-search').removeClass('hide');
        $(' #search-input').removeClass('show-search');
        $('#close-btn').removeClass('close-show');

    });
})

// preload
$(window).on("load", function() {
    $('.load').fadeOut(3000,
        function() {
            $(this).parent().fadeOut(3000)
        });
    // Document Animation
    $(".scroll-btn").on("click", function() {
        $("html, body").animate({
            scrollTop: $(".layout").offset().top
        }, 1000)
    });
})