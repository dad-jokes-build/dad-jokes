$(document).ready(function () {
    $.getJSON("https://icanhazdadjoke.com/", function (json) {
        $("#jokehere").html(json.joke)
    });

    $("#randomjoke").on("click", function () {
        $.getJSON("https://icanhazdadjoke.com/", function (json) {
            $("#jokehere").html(json.joke)
        });
    });
});


