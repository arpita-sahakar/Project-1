//If statement

    
    
    
    
    
    // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var emotion = $(this).attr("data-covid");

      // Constructing a queryURL using data covid
      var apiKey = "n7cEZesxhqbz9GB5KiFEaznV05w1o02B"
    //   var apiKey2 = "dc6zaTOxFJmzC"
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        emotion + "&api_key=" + apiKey + "&limit=2";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            $("#display-gif").text(response);

            // Creating and storing a div tag
            var emotionDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var emotionImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            emotionImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the emotionDiv
            emotionDiv.append(p);
            emotionDiv.append(emotionImage);

            // Prependng the emotionDiv to the HTML page in the "#gifs-appear-here" div
            $("#display-gif").append(emotionDiv);
          }
        });
    });
