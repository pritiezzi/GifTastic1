
 console.log("here");
$(document).ready(function() {
 
    //Array for searched topics to be added
    var topics = [];
    
        //Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
      //Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
        //  function displayNetflixShow() {
    
        // var x = $(this).data("search");
        // console.log(x);
    
        // var queryURL = "https://api.giphy.com/GET/v1/gifs/trending" + x + "Jcvz9EURc6cnkzapLdbRhWP7p8XQjPgl";
        var q = "queer eye";
        var APIkey = "Jcvz9EURc6cnkzapLdbRhWP7p8XQjPgl";
        var queryURL = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${APIkey}&limit=10`;
    //("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5")

        
  
            $.ajax({
              url: queryURL,
              method: "GET"
            }).then(function(results) {
                
              var results = response.data;
              console.log(results);
            });
            // results();

            //get this result working first, try to get the data from giphy to show up on your console first
          
  
                // for (var i = 0; i < results.length; i++) {
                
                // var showDiv = $("<div class='col-md-4'>");
    
                // var rating = results[i].rating;
                // var defaultAnimatedSrc = results[i].images.fixed_height.url;
                // var staticSrc = results[i].images.fixed_height_still.url;
                // var showImage = $("<img>");
                // var p = $("<p>").text("Rating: " + rating);
    
                // showImage.attr("src", staticSrc);
                // showImage.addClass("netflixGiphy");
                // showImage.attr("data-state", "still");
                // showImage.attr("data-still", staticSrc);
                // showImage.attr("data-animate", defaultAnimatedSrc);
                // showDiv.append(p);
                // showDiv.append(showImage);
                // $("#gifArea").prepend(showDiv);
    
            // }
        // });
    // }
    
      //Submit button click event , displays button
       // $("#addShow").on("click", function(event) {
        //     event.preventDefault();
        //     var newShow = $("#netflixInput").val().trim();
        //     topics.push(newShow);
        //     console.log(topics);
        //     $("#netflixInput").val('');
        //     displayButtons();
        //   });
    
      //Function display button with array values in "myButtons" section of HTML
    //     function displayButtons() {
    //     $("#myButtons").empty();
    //     for (var i = 0; i < topics.length; i++) {
    //       var a = $('<button class="btn btn-primary">');
    //       a.attr("id", "show");
    //       a.attr("data-search", topics[i]);
    //       a.text(topics[i]);
    //       $("#myButtons").append(a);
    //     }
    //   }
    
    
    //   displayButtons();
    
    //   //Click event on button with id of "show" executes displayNetflixShow function
    //   $(document).on("click", "#show", displayNetflixShow);
    
    //   //Click event on gifs with class of "netflixGiphy" executes pausePlayGifs function
    //   $(document).on("click", ".netflixGiphy", pausePlayGifs);
    
    //   //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
    //   function pausePlayGifs() {
    //        var state = $(this).attr("data-state");
    //       if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");
    //       } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //   }
    // }
            
    });