$(document).ready(function() {
    // On Click SignUp It Will Hide profile Form and Display setting Form
    $("#account-edit").click(function() {

        $("#first").slideUp("slow", function() {
            $("#second").slideDown("slow");
        });
    });

    // On Click save It Will Hide save Form and Display profile Form
    $("#save-changes").click(function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });

    $("#cancel-changes").click(function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });



});