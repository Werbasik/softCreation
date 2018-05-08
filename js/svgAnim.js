$(document).ready(function(){
    console.log(sessionStorage.getItem('isSvgPlayed'));


    if(sessionStorage.getItem('isSvgPlayed') != 'true'){
        console.log('Showing svg wrapper!');
        $('#mainLogoWrapper').show();
        new Vivus('svgAnimatedLogo', {
            duration: 300,
            start: 'autostart',
            type: 'oneByOne',
            animTimingFunction: Vivus.EASE

        }, function() {
            console.log('animatied svg!');
            var shapes = document.querySelectorAll('.st0');
            var letters = document.querySelectorAll('.st2');
            for (var i = 0; i < shapes.length; i++) {
                shapes[i].style.fill = "white";
            }

            for (var i = 0; i < letters.length; i++) {
                letters[i].style.fill = "white";
            }
            //            $('#mainLogoWrapper').delay(1000).fadeOut("slow");
            $('#mainLogoWrapper').delay(1000).slideToggle("slow");
            $('#svgAnimatedLogo').delay(1000).fadeOut("slow");

            sessionStorage.setItem('isSvgPlayed','true');


        });



    }

    // else {
    //     console.log('Hiding logo wrapper!');
    //     $('#mainLogoWrapper').hide();
    // }


});