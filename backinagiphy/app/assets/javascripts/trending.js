$(document).ready(function(){
  console.log(window.location.href);
  if (window.location.href == "http://localhost:3000/") {
  alert("hey we loaded search!");
}
  if (window.location.href == "http://localhost:3000") {
  alert("hey we loaded search!");
}
  if (window.location.href == "http://localhost:3000/?") {
  alert("hey we loaded search!");
}

  $('.searchthemgifs').on("submit", function(e){
    e.preventDefault();

    var url = "http://api.giphy.com/v1/gifs/search?q="
    var input = $("#searchtext").val();
    var api = "&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30"
    var gifs = $.get(url + input + api);

    gifs.done(function(response) {
      $(".gifsearchresults").html("");
      giffs = response.data;
      for (i in giffs)
      {
        $('.gifsearchresults').append("<img src='"+giffs[i].images.original.url+"'/>")
      }
    });



  })
});

if (window.location.href == "http://localhost:3000/gifs/trending") {
var gifs2 = $.get("http://api.giphy.com/v1/gifs/trending?&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30");
console.log(gifs2);
    gifs2.done(function(response){
      $(".trendingsearchresults").html("");
      giffs2 = response.data

      for (i in giffs2)
      {
        $('.trendingsearchresults').append("<img src='"+giffs2[i].images.original.url+"'/>");
      }
    });
  }
