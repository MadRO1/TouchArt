$(function() {
    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $('.content').fadeToggle();
    });
    $('.carousel').carousel({
        interval: 1000 * 10
    });
   
});


        
    
