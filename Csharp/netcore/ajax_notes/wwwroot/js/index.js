$(document).ready(function(){
    $("textarea").focus(function() {        
    }).blur(function(){
        $(this).next().trigger("click");
    });
});