'use strict';
$(document).ready(function(){
    function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-default').addClass("scrolled");
    }else{
        $('.navbar-default').removeClass("scrolled");
    }
}

    $(window).on("scroll load resize", function(){
        console.log('scrolling');
        checkScroll();
    });

    
});


$(document).ready(function() {
    $('#btn-offer').click(function() {  
         $('#show').slideToggle('slow');  
    });
        
    
});


$(document).ready(function() {
    $('div.language').click(function() {
        var opts = {language: "en", pathPrefix: "lang"};
        $("[data-localize]").localize("softCreation", opts);

    });







});

