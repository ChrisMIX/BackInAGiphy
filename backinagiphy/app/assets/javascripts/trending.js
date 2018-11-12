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