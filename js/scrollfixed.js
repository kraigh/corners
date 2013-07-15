$(document).ready(function() {
    var theLoc = 546;
    $(window).scroll(function() {
        if(theLoc >= $(window).scrollTop()) {
            $('body').css('background-attachment','scroll');
            $('body').css('background-position','center -1000px');
        } else {
            $('body').css('background-attachment','fixed');
            $('body').css('background-position','center -1546px');

        }
    });
});
