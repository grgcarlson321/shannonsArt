/**
 * Created by grg3 on 1/15/17.
 */
$(document).ready(function () {

    var $gallery = $('.boxInner a').colorbox({rel:'.boxInner a', width:"80%", height:"80%"});

    $('#colorbox-group').click(function(e){
        //$.colorbox({rel:'group1', inline:true, width:"80%", height:"80%", href:".group1"});

        $(this).find("a:first").attr("href");
        $gallery.eq(0).click();
    });

});
