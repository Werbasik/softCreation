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
        switchLanguage('en');
        localizaFormToEn();
    } else {
        switchLanguage('pl');
        localizeFormToPl();
    }




    $('div.language').click(function () {
        if ($('div.language span').html() === 'EN') {
            console.log('klik on EN!');
            switchLanguage('en');
            localizaFormToEn();


        } else if ($('div.language span').html() === 'PL') {
            console.log('klik on PL!');
            switchLanguage('pl');
            localizeFormToPl();
        }


    });








    // $('div.language').click(function () {
    //     if ($('div.language span').html() === 'EN') {
    //         var opts = {language: "en", pathPrefix: "lang"};
    //         $("[data-localize]").localize("softCreation", opts);
    //         $('div.language span').html('PL');
    //         // localiztaion plugin does not cover attributes, translating form manually
    //         $('#contactFormName').attr("placeholder","Name");
    //         $('#contactFormPhone').attr("placeholder","Phone");
    //         $('#contactFormMessage').attr("placeholder","Message");
    //         $('#contactFormSubmit').attr("value","Send");
    //
    //
    //     } else if ($('div.language span').html() === 'PL') {
    //         console.log('click on PL!');
    //         var opts = {language: "pl", pathPrefix: "lang"};
    //         $("[data-localize]").localize("softCreation", opts);
    //         $('div.language span').html('EN');
    //         // localiztaion plugin does not cover attributes, translating form manually
    //         $('#contactFormName').attr("placeholder","Imię");
    //         $('#contactFormPhone').attr("placeholder","Telefon");
    //         $('#contactFormMessage').attr("placeholder","Wiadomość");
    //         $('#contactFormSubmit').attr("value","Wyślij");
    //     }
    //
    //
    // });

    function switchLanguage(languageCode){
        var opts = {language: languageCode, pathPrefix: "lang"};
        console.log('Switching language to ' + languageCode);
        $("[data-localize]").localize("softCreation", opts);
        $('div.language span').html(languageCode.toUpperCase());
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

