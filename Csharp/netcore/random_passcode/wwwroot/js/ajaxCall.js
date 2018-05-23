$(document).ready(function(){
    $("button").click(function(){
        $.get("new", function(response){
            console.log(response);
            $("#counter").text(response["counter"]);
            $("#passcode").text(response["passcode"]);
        });
    });
});