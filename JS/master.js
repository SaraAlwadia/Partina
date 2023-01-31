const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function() {



    /************ owlCarousel *************/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        //center: true,
        nav: true,
        // navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    /************ owlCarousel *************/


    /******     On Click toggle between company and team partenership request***/
    $("#team").click(function() {

        $("#co-info").slideUp("slow", function() {
            $("#team-info").slideDown("slow");
            $('#co').removeClass('active-btn');
            $('#team').removeClass('disactive-btn');
            $('#team').addClass('active-btn');
            $('#co').addClass('disactive-btn');
        });
    });
    $("#co").click(function() {
        $("#team-info").slideUp("slow", function() {
            $("#co-info").slideDown("slow");
            $('#team').removeClass('active-btn');
            $('#co').removeClass('disactive-btn');
            $('#co').addClass('active-btn');
            $('#team').addClass('disactive-btn');
        });
    });

    /******************** Slider Gallery ******************************/
    function displyPackage() {
        var popup = document.getElementById("package-gallery1");
        popup.classList.toggle("show");
    }
    /******************** Slider Gallery ******************************/

});