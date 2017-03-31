$(function() {

$('.get-gif').on("click", function() {
  $.get('http://localhost:3000/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  	.done(function(giphyResponse) {
  		console.log(data.data.image_rul);
  	})
  		$('.image-jumbotron').attr('src', data.data.image_url);
  		.fail(function(data) {
  			console.log(data.data.errorMessage);
  		});
 })

})
