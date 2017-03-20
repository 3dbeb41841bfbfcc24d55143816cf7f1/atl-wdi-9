$(function() {
  $('.get-gif').click(getGif)
  $('.save-gif').click(saveGif)
  $('.saved-gifs').click(getSavedGifs)
})


var getGif = function(event) {
  var $el = $(this)
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(giphyResponse) {
    // $el.css('color', 'red')
    // console.log(giphyResponse);
    $('.image-jumbotron').attr('src', giphyResponse.data.image_url)
  });
};

var saveGif = function(event) {
  var urlLink = $('.image-jumbotron').attr('src');
  console.log(urlLink);
 /* $.post('/gifs', {
  	url : url
  })
  .done(function(response) {
  	console.log(response);
  });*/
}