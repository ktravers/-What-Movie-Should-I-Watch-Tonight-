// Click handler for the "Tell me!" button
// On click, hides the inputs and displays a personalized movie recommendation
$(".pick-movie").click(function() {
    // Store the values the user entered in local variables
    let name = $(".name").val();
    let grade = $(".grade").val();
    let favoriteActor = $(".favorite-actor").val();

    // Log the user inputs to console for easier debugging
    console.log("name: " + name);
    console.log("grade: " + grade);
    console.log("favorite actor: " + favoriteActor);

    // Hide the questions, inputs, and "Tell me!" button
    $(".questions").hide();

    // Build a personalized movie recommendation message from the values the user entered
    let movieRecommendation = "<h2>Hey " + name + ", you should watch 👩‍🎤 <a href='https://www.imdb.com/title/tt0236348/'>Josie and the Pussycats</a> 🎸tonight!</h2><h3>It won 🏆 " + grade + " Oscars 🏆, and it's " + favoriteActor + "'s favorite movie! 🤩</h3></h2>";

    // Add the movie recommendation to the page
    $(".answer").append(movieRecommendation);

    // Show the "Try again" button
    $(".retry").show();
});

// Click handler for the "Try again" button
// On click, reloads the page
$(".retry").click(function() {
    // Fancy JavaScript that reloads the page
    // https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    location.reload();
});