var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30");

xhr.done(function(response) { console.log("success got data", response);

var gifs = response.data;

$('.searchthemgifs').on("submit", function(e){
  e.preventDefault();
  console.log(this);
})


});