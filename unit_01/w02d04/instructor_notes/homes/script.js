console.log('hey');

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

$(function(){
    //alert("Everything is ready, let's do this");
var textV = $('#addHome').removeClass('btn-danger').addClass('btn-success');

$('h1').addClass('text-center');

var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
// not clean code--feature of jQuery--the $ does too much
//this is a called a constructor--makes/returns an element (a jQuery event object in this case).
$newLink.appendTo('h1');

// $('#addHome').click(function($event){
    // console.log($event);
    // console.log(this);
// });      THIS IS THE SAME AS BELOW

$('#addHome').on('click', function() {

    var newLine = newHomes.pop();
    var $homeInfo = `<tr><td>${newLine.address}</td><td>${newLine.sf}</td><td>${newLine.bedrooms}</td><td>${newLine.baths}</td><td>${newLine.price}</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>`;
    $('tbody').append($homeInfo);
                
});

var removeHome = function () {
  $(this).fadeOut(200, function(){
    $(this).remove();
  });
}

$('#homes tbody').on('click', 'tr', removeHome);


//$('td, button').click(function($event){
  //  $(this).remove();
//});

});


/*
$(function() {
  console.log('Everything is ready!');

  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  $('.jumbotron').addClass('text-center');

  var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow</a>')

  $newLink.appendTo('body')

  $('#zillowLink').attr('target', '_blank');

  $('#addHome').click(function($event) {
    console.log($event);
    console.log(this)
  })

  var removeHome = function($event) {
    console.log($event.target)
    console.log(this)
    if($($event.target).is('button')) {
      $(this).fadeOut(1000, function() {
        $(this).remove()
      })
    }
  }

  $('#homes tbody').on('click', 'tr', removeHome)

  $('#addHome').click(function($event) {
    var home = newHomes.pop();

    var $homeTr = $(
      `
      <tr>
        <td>$()</td>
        <td>${home.sf}</td>
        <td>${home.bedrooms}</td>
        <td>${home.baths}</td>
        <td>${home.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>
      `
    );

    $homeTr.appendTo('tbody');
  })

  var newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];
})
*/