$(document).ready(function() {
//EVERYTHING GOES BELOW THIS

var apiurl ="https://cors-anywhere.herokuapp.com/https://congress.api.sunlightfoundation.com/legislators";
var searchurl= "https://cors-anywhere.herokuapp.com/https://congress.api.sunlightfoundation.com/legislators/locate?zip="




// $.getJSON(apiurl,function(data){ console.log(data);});
// console.log(apiurl);
  var updatePage = function( resp ) {
    $.each(resp.results,function(results, value){
      // console.log(value.first_name);
      $('.firstname').append('<div class="col-sm-3 hey"<h3>'+value.first_name+'</h3></div>');
      var printout = '';
      printout = '<div class="col-sm-4 namediv"><h2>'+value.first_name+'   '+value.last_name+'</h2>';
      printout += '<ul><li> State: '+value.state_name+'</li>';
      printout += '<li> Email: '+value.oc_email+'</li>';
      printout += '<li> Phone: '+value.phone+'</li>';
      printout += '<li> Website: '+value.website+'</li></ul></div>';
      // printout += '<h1>'+value.last_name+'</h2></div>';
      $('.printoutgo').append(printout);

    });
  };
  //now need to make search bar
  // set up the ajax options!
var ajaxSearchOptions = {
 url: searchurl,
 dataType: 'json',
 success: updatePage,
 error: ajaxFailed
};


//try to figure out how to change zip code from searching
$('button').click(function(){
  var zipcode = $('input').val().substring(0, 5);
 			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
 $('.namediv').empty();
 ajaxSearchOptions.url = searchurl + zipcode;
 $.ajax(ajaxSearchOptions);
 console.log(zipcode);
});

  // error code when using letters
  //error also when using non working zip codes



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
