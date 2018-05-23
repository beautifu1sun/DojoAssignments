$(document).ready(function(){
    $("#feed").click(function(){
        $.get("/feed", function(response){
            if (response["error"]){
                $("#response").text(response["error"]);
            }
            else{
                $("#meals").text(response["meals"]);
                $("#fullness").text(response["fullness"]);
                $("#response").text(response["response"]);
                if (Number(response["fullness"]) >= 100 && Number(response["energy"]) >= 100 && Number(response["happiness"]) >= 100){
                    $("nav").css("display", "none");
                    $("#restart").css("display", "inline-block");
                    $("#restart").css("background-color", "green");
                    $("img").attr("src", "./img/win.png")
                    $("#response").text("Congratulations, sir! You won!");
                }
            } 
        })
    });

    $("#play").click(function(){
        $.get("/play", function(response){
            $("#energy").text(response["energy"]);
            $("#happiness").text(response["happiness"]);
            $("#response").text(response["response"]);
            if (Number(response["fullness"]) >= 100 && Number(response["energy"]) >= 100 && Number(response["happiness"]) >= 100){
                $("nav").css("display", "none");
                $("#restart").css("display", "inline-block");
                $("#restart").css("background-color", "green");
                $("img").attr("src", "./img/win.png")
                $("#response").text("Congratulations, sir! You won!");
            }
            else if (Number(response["energy"]) <= 0){
                $("nav").css("display", "none");
                $("#restart").css("display", "inline-block");
                $("#restart").css("background-color", "red");
                $("img").attr("src", "./img/lose.jpg")
                $("#response").text("Your Dojodachi has passed away...");
            }
        })
    });

    $("#work").click(function(){
        $.get("/work", function(response){
            $("#energy").text(response["energy"]);
            $("#meals").text(response["meals"]);
            $("#response").text(response["response"]);
            if (Number(response["energy"]) <= 0){
                $("nav").css("display", "none");
                $("#restart").css("display", "inline-block");
                $("#restart").css("background-color", "red");
                $("img").attr("src", "./img/lose.jpg")
                $("#response").text("Your Dojodachi has passed away...");
            }
        })
    });
    
    $("#sleep").click(function(){
        $.get("/sleep", function(response){
            $("#energy").text(response["energy"]);
            $("#fullness").text(response["fullness"]);
            $("#happiness").text(response["happiness"]);
            $("#response").text(response["response"]);
            if (Number(response["happiness"]) >= 100 && Number(response["fullness"]) >= 100 && Number(response["energy"]) >= 100){
                $("nav").css("display", "none");
                $("#restart").css("display", "inline-block");
                $("#restart").css("background-color", "green");
                $("img").attr("src", "./img/win.png")
                $("#response").text("Congratulations, sir! You won!");
            }
            else if(Number(response["fullness"]) <= 0 || Number(response["happiness"]) <= 0){
                $("nav").css("display", "none");
                $("#restart").css("display", "inline-block");
                $("#restart").css("background-color", "red");
                $("img").attr("src", "./img/lose.jpg")
                $("#response").text("Your Dojodachi has passed away...");
            }
        })
    });
});