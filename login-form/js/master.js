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
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: responsive
    });
});

// On Click SignUp It Will Hide Login Form and Display Registration Form
$("#signup").click(function() {

    $("#first").slideUp("slow", function() {
        $("#second").slideDown("slow");
    });
});


// On Click SignIn It Will Hide Registration Form and Display Login Form
$("#signin").click(function() {
    $("#second").slideUp("slow", function() {
        $("#first").slideDown("slow");
    });
});


$("#sign").on('click', 'button', function() {

    // remove classname 'active' from all li who already has classname 'active'
    $("#sign button.active").removeClass("active");
    // adding classname 'active' to current click li 
    $(this).addClass("active");
});