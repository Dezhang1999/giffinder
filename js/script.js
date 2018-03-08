// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $("button").click(function(){
    imageclear();
    var search = $("input").val();
    giphyURLWithSearchTerm(search);
    callGiphyAPIWithSearchTerm(search);
    
});
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
      return "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
      $('body').append('<img src=' + srcURL + '>');
  }

  function callGiphyAPIWithSearchTerm(searchTerm,n) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
 var t = giphyURLWithSearchTerm(searchTerm);

    $.ajax({
      url: t,
      method: "GET",
      success: function(response) {console.log("success");
        for(var n=1;n <= Math.floor(Math.random()*Math.floor(response.data.length)); n++){
           var url = response.data[n].images.original.url;
           appendImageToBody(url);}
      },
    }); 
}


