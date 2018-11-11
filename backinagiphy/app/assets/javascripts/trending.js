$(document).ready(function(){
$('.searchthemgifs').on("submit", function(e){
  e.preventDefault();

  var url = "http://api.giphy.com/v1/gifs/search?q="
  var input = $("#searchtext").val();
  var api = "&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30"
  var gifs = $.get(url + input + api);
  var response = gifs.status;
  console.log(gifs);
  console.log(response);

  for (i in gifs)
  {
  $('.gifsearchresults').append("<img src='"+gifs[i].images.original.url+"'/>")
  }
})
});