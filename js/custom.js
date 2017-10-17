'use strict';
$(document).ready(function () {
    function checkScroll() {
        var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

        if ($(window).scrollTop() > startY) {
            $('.navbar-default').addClass("scrolled");
        } else {
            $('.navbar-default').removeClass("scrolled");
        }
    }

    $(window).on("scroll load resize", function () {
        console.log('scrolling');
        checkScroll();
    });
});

$(document).ready(function () {
    $('#btn-offer').click(function () {
        $('#show').slideToggle('slow');
    });
});

$(document).ready(function () {
    $('div.language').click(function () {
        if ($('div.language span').html() === 'EN') {
            var opts = {language: "en", pathPrefix: "lang"};
            $("[data-localize]").localize("softCreation", opts);
            $('div.language span').html('PL');
            // localiztaion plugin does not cover attributes, translating form manually
            $('#contactFormName').attr("placeholder","Name");
            $('#contactFormPhone').attr("placeholder","Phone");
            $('#contactFormMessage').attr("placeholder","Message");
            $('#contactFormSubmit').attr("value","Send");


        } else if ($('div.language span').html() === 'PL') {
            console.log('click on PL!');
            var opts = {language: "pl", pathPrefix: "lang"};
            $("[data-localize]").localize("softCreation", opts);
            $('div.language span').html('EN');
            // localiztaion plugin does not cover attributes, translating form manually
            $('#contactFormName').attr("placeholder","Imię");
            $('#contactFormPhone').attr("placeholder","Telefon");
            $('#contactFormMessage').attr("placeholder","Wiadomość");
            $('#contactFormSubmit').attr("value","Wyślij");
        }


    });


});

