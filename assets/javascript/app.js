$(document).ready(function () {

    // just to start off I'm going to make an array with the buttons I want on the page
    var cartoonList = ["Adventure Time", "Steven Universe", "Spongebob", "Phineas and Ferb", "Regular Show", "The Powerpuff Girls", "Teen Titans", "Over The Garden Wall"]


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
            a.addClass("cartoon");
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
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=SOzLKr3j1pWqwVmxwSh3BGFF8uekavtU&limit=5"

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var results = response.data;
            console.log(response.data);

            // here's where we add the gifs to their corresponding div in the html
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var cartoonImage = $("<img>");
                cartoonImage.attr("src", results[i].images.fixed_height.url);

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

    // this function listens for when I click on any of the buttons I made earlier, and displays the API Gifs
    $(document).on("click", ".cartoon", displayGifs);
    // this calls the display button function so that it displays the initial buttons
    displayButton();









});

