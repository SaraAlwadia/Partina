$(document).ready(function() {


    /************Active class*************/
    $(".nav-elements").on('click', 'a', function() {

        // remove classname 'active' from all li who already has classname 'active'
        $(".nav-elements a.active").removeClass("active");

        // adding classname 'active' to current click li 
        $(this).addClass("active");
    });
    /************Active class*************/


    /************Toggle Menu*************ً*/

    $('.toggle-icons').click(function() {
        $('.nav-elements').toggle("fast");
    });

    $('.toggle-icons').click(function() {
        $('.nav-elements').addClass("toggle-active");
    });

    //Hide dropdown on page click

    $(document).on('click', function(e) {
        if (!$(".toggle-icons").is(e.target) && !$(".toggle-icons").has(e.target).length && $('.nav-elements').hasClass('toggle-active')) {
            $('.nav-elements').slideUp("fast");
            $('.nav-elements').removeClass("toggle-active");
        }
    });
    /************Toggle Menu*************ً*/


    // Dropdown toggle fuction
    $('.dropdown-toggle').click(function() {
        $('#myDropdown').toggle("fast");
    });

    //Hide dropdown on page click
    $(document).on('click', function(e) {
        if (!$(".dropdown-toggle").is(e.target) && !$(".dropdown-toggle").has(e.target).length) {
            $('#myDropdown').slideUp("fast");
        }
    });
    // Dropdown toggle fuction



    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});