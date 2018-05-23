$(document).ready(function(){
    $("#movieSearch").on("submit", function (event) {
        event.preventDefault();
        var $this = $(this);
        var frmValues = $this.serialize();
        $.ajax({
            type: $this.attr('method'),
            url: $this.attr('action'),
            data: frmValues
        })
            .done(function () {
                $.get("get_movies", data=>{
                    $("#movieName").val("");
                    var addedMovie = data[0];
                    $("#movieList").prepend("<strong>" + addedMovie["name"] + "&nbsp;&nbsp;&nbsp;Rating:&nbsp;" + addedMovie["rating"] + "&nbsp;&nbsp;&nbsp;Released:&nbsp;" + addedMovie["released"] + "</strong>");
                });
        });
    });
});