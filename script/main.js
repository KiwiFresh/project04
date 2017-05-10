$(document).ready(function() {
//EVERYTHING GOES BELOW THIS

var apiurl = "https://api.phila.gov/airport-parking/v1/";





// $.getJSON(apiurl,function(data){ console.log(data);});

  var updatePage = function( resp ) {
    $.each(resp.garages,function(garages, value){
      console.log(apiurl);

      var aftertext = '';
      if(value.spaces_available == 0){
         aftertext= "<p class='fullLot'>FULL</p>";

      }
      else if (value.spaces_available < 100) {
        aftertext= "<p>ALMOST FULL</p>";
      }

      else {

      }

// $('.garageA').append('<li>'+plzwork[0].display_name+"</li>");
//   console.log(plzwork[0].ada_spaces);
    var printout = '';
    printout = '<div class="col-sm-4 garagediv"><h1>Garage '+value.display_name+'</h1>';
    printout += '<ul><li> Available spaces: '+Math.trunc(value.spaces_available)+'</li>';
    printout += '<li> Total spaces: '+value.total_spaces+'</li></ul>'+aftertext+'</div>';
    $('.printoutgoes').append(printout);
    //$(".garageA").append('<h3>'+value.display_name+'</h3>');
      // $('#content').append(`<div class="movie movie${key}"><section class="poster"></section><section class="movie-info"></section></div>`);
      // console.log(movie);
      // $(`.movie${key} .movie-info`).append('<h3>'+movie.title+'</h3>');
      // //$(`.movie${key} .movie-info`).append('<p>'+movie.overview+'</p>');
      // $(`.movie${key} .poster`).append('<img src="https://image.tmdb.org/t/p/w500'+movie.poster_path+'" height="250px">');

    });
  };




  var ajaxFailed = function( req, status, err ){
      console.log('something went wrong', status , err );
  alert("Did not Work");
    };


  var ajaxOptions = {
    url: apiurl,
    dataType: 'json',
    success: updatePage,
    error: ajaxFailed
  };

$.ajax(ajaxOptions);














//EVERYTHING GOES ABOVE THIS
});

function initMap() {
      var garagesA = {lat: 39.8775100347, lng: -75.2472191649,};
      var garagesB = {lat: 39.877964439 , lng: -75.2456045136 ,};
      var garagesC = {lat: 39.878479289, lng: -75.2437663668 ,};
      var garagesD = {lat: 39.8788499486, lng: -75.243037793,};
      var garagesEF = {lat: 39.8792214437, lng: -75.2426930308,};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: garagesA
      });
      var marker = new google.maps.Marker({
        position: garagesA,
        map: map
      });
      var marker = new google.maps.Marker({
        position: garagesB,
        map: map
      });
      var marker = new google.maps.Marker({
        position: garagesC,
        map: map
      });
      var marker = new google.maps.Marker({
        position: garagesD,
        map: map
      });
      var marker = new google.maps.Marker({
        position: garagesEF,
        map: map
      });
    }
