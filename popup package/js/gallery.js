$(document).ready(function() {

    //Pop Up
    $('.details').on('click', function() {
        $('.package-pop').fadeIn();
    });
    // $('.details').click(function() {
    //     $('.package-pop').addClass("popup-active");
    // });
    $('.exit').on('click', function() {
        $('.package-pop').fadeOut();
    });

    /*********************************!!!!!!!!!!!!!!!!!!********************************/
    // $(document).on('click', function(e) {
    //     if (!$(".exit").is(e.target) && !$(".details").has(e.target).length && $('.package-pop').hasClass('popup-active')) {
    //         $('.popup-active').fadeOut("fast");
    //         $('.package-pop').removeClass("popup-active");
    //     }
    // });
    /*********************************!!!!!!!!!!!!!!!!!!********************************/


    // Slider
    var splide = new Splide('#main-carousel', {
        pagination: false,
    });


    var thumbnails = document.getElementsByClassName('thumbnail');
    var current;


    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }


    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            splide.go(index);
        });
    }


    splide.on('mounted move', function() {
        var thumbnail = thumbnails[splide.index];


        if (thumbnail) {
            if (current) {
                current.classList.remove('is-active');
            }


            thumbnail.classList.add('is-active');
            current = thumbnail;
        }
    });


    splide.mount();

});