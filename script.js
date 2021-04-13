$(".pick-movie").click(function () {
    let name = $(".name").val();
    console.log("name: " + name);
    
    let grade = $(".grade").val();
    console.log("grade: " + grade);
    
    let favoriteActor = $(".favorite-actor").val();
    console.log("favorite actor: " + favoriteActor);
   
    $(".questions").hide();
    
    $(".answer").append("<h2>Hey " + name + ", you should watch 👩‍🎤 <a href='https://www.imdb.com/title/tt0236348/'>Josie and the Pussycats</a> 🎸tonight!</h2><h3>It won 🏆 " + grade + " Oscars 🏆, and it's " + favoriteActor + "'s favorite movie! 🤩</h3></h2>");
    
    $(".retry").show();
   
});

$(".retry").click(function() {
    location.reload();
});