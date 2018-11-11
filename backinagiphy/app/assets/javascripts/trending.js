var url = "http://api.giphy.com/v1/gifs/search?q="
var input = $("#searchtext").val();
var api = "&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30"
var xhr = $.get(url + input + api);

xhr.done(function(response) { console.log("success got data", response);

var gifs = response.data;

$('.searchthemgifs').on("submit", function(e){
  e.preventDefault();

  for (i in gifs)
  {
  $('.gifsearchresults').append("<img src='"+gifs[i].images.original.url+"'/>")
  }
})
});