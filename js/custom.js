'use strict';
$(document).ready(function () {

    // check if users scrolls down for changing navbar style
    function checkScroll() {
        var startY = $('.navbar').height() * 2; //Point where nav changes style

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

// Handle reveal more text in offer section
$(document).ready(function () {
    $('#btn-offer').click(function () {
        $('#show').slideToggle('slow');
    });
});

$(document).ready(function () {

    console.log(navigator.language);
    console.log(navigator.languages);

    if(navigator.language != 'pl'){
        switchLanguage('en', 'pl');
        localizaFormToEn();
    } else {
        switchLanguage('pl', 'en');
        localizeFormToPl();
    }




    $('div.language').click(function () {
        if ($('div.language span').html() === 'EN') {
            console.log('klik on EN!');
            switchLanguage('en', 'pl');
            localizaFormToEn();


        } else if ($('div.language span').html() === 'PL') {
            console.log('klik on PL!');
            switchLanguage('pl', 'en');
            localizeFormToPl();
        }


    });



    function switchLanguage(languageCode, codeForButton){
        var opts = {language: languageCode, pathPrefix: "lang"};
        console.log('Switching language to ' + languageCode);
        $("[data-localize]").localize("softCreation", opts);
        $('div.language span').html(codeForButton.toUpperCase());
    }

    function localizeFormToPl(){
        $('#contactFormName').attr("placeholder","Imię");
        $('#contactFormPhone').attr("placeholder","Telefon");
        $('#contactFormMessage').attr("placeholder","Wiadomość");
        $('#contactFormSubmit').attr("value","Wyślij");
    }
    function localizaFormToEn(){
        $('#contactFormName').attr("placeholder","Name");
        $('#contactFormPhone').attr("placeholder","Phone");
        $('#contactFormMessage').attr("placeholder","Message");
        $('#contactFormSubmit').attr("value","Send");
    }

});

