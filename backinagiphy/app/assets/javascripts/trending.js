$(document).ready(function(){
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

var gifs2 = $.get("http://api.giphy.com/v1/gifs/trending?&api_key=CAj2qjW87gmnCf2At3tTexta2bhn3dLQ&limit=30");
console.log(gifs2);
    gifs2.done(function(response){
      giffs2 = response.data
      console.log(giffs2);
      for (i in giffs2)
      {
        $('.trendingsearchresults').append("<img src='"+giffs2[i].images.original.url+"'/>")
        console.log(giffs2[i].images.original.url);
      }
    });
