

var lat = "37.872044";
var lng = "-122.271269";

//Ride Pricing: passing in Latitude and Longitude
$.ajax({
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyCLL6O0oWy3bJobOIKYSS09GRPM0oFNKDQ'
,
  type: 'GET',
  success: function(response) {
    console.log(response);
  },
  error: function(error) {
    console.log(error);
  }
});

