My API key: SOzLKr3j1pWqwVmxwSh3BGFF8uekavtU

1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
    -- I think I'm going to do Cartoons, since I know there will be plenty of gifs on Giphy for cartoons
2. Your app should take the topics in this array and create buttons in your HTML.
    -- we did this in the OMDB movie activity from Week 3
    * week 3/day 4/working movie app
3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    -- we did two activities related to this
        -- one that summons gifs, from Week 3
        * week 3/day 5/dynamic elements
        -- one that makes gifs start and stop, also from week 3
        * week 3/day 5/pausing gifs
4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
        -- see above. This involved changing the value of the gif from static to animated
5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.
    -- in the video, they display the rating ABOVE the gifs, so I do not think the placement is crucial or worth losing sleep over
6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
    -- we did this also in week 3. This is how I made a Shrek button even though I do not like Shrek very much. It's just an easy to remember movie title.


You need to change your `queryURL` to `"https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=SOzLKr3j1pWqwVmxwSh3BGFF8uekavtU&limit=10"` otherwise the click function won't work.