$(document).ready(function () {

    // just to start off I'm going to make an array with the buttons I want on the page
    var cartoonList = ["Adventure Time", "Steven Universe", "Spongebob", "Phineas and Ferb", "Regular Show", "The Powerpuff Girls", "Teen Titans", "Over The Garden Wall", "Gravity Falls"]


    // the following code is mostly taken from these activities we did in class:
    // week 3/day 4/10-WorkingMovieApp
    // week 3/day 5/13-ButtonTriggeredAJAX
    // week 3/day 5/14-DynamicElements

    // this function makes buttons for all the items in our array.
    function displayButton() {

        $("#buttons-here").empty();
        // Loops through the array of movies
        for (var i = 0; i < cartoonList.length; i++) {


            var a = $("<button>");
            a.addClass("cartoon btn btn-primary");
            a.attr("id", "custom-btn");
            a.attr("data-name", cartoonList[i]);
            a.text(cartoonList[i]);
            $("#buttons-here").append(a);
        }
    }
    displayButton();

    // this function is where we request data from the Giphy API
    function displayGifs() {
        $("#gifs-appear-here").empty();

        var cartoon = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=SOzLKr3j1pWqwVmxwSh3BGFF8uekavtU&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var results = response.data;
            console.log(results);

            // here's where we add the gifs to their corresponding div in the html
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var cartoonImage = $("<img>");
                cartoonImage.attr("data-still", results[i].images.fixed_height_still.url);
                cartoonImage.attr("data-animate", results[i].images.fixed_height.url);
                cartoonImage.attr("src", results[i].images.fixed_height_still.url);
                cartoonImage.attr("data-state", "still");
                cartoonImage.addClass("gif");


                gifDiv.prepend(p);
                gifDiv.prepend(cartoonImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        });
    }
    // this function listens for when the add-gif button is clicked
    $("#add-gif").on("click", function (event) {
        event.preventDefault();

        var userAdd = $("#gif-input").val().trim();
        console.log(userAdd);
        cartoonList.push(userAdd);
        // this dumps the already displayed buttons and re-adds them, along with a new button
        displayButton();
    });

    // now to make another on-click function
    // this one is from week 3/day 5/15-PausingGifs and should allow us to pause gifs
    $(document).on("click", ".gif", function () {
        var state = $("<img>");
        state.attr("data-state");
        console.log("we clicked the image");

        if ($(this).data().state === "still") {
            console.log("make this animated");
            $(this).data().state = "animated";
            $(this).attr("src", $(this).data().animate);
        }
        else if ($(this).data().state === "animated") {
            console.log("make this still")
            $(this).data().state = "still";
            $(this).attr("src", $(this).data().still);
        }
    });


    // this function listens for when I click on any of the buttons I made earlier, and displays the API Gifs
    $(document).on("click", ".cartoon", displayGifs);











});

