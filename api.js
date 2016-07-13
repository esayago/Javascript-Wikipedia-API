$(document).ready(function(){
  $("#search").keypress(function(e){
    if(e.keyCode === 13){
      var search = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php";
    $.ajax({
        url: url,
        data: {
          action: 'opensearch',
          search: search,
          format: 'json'
        },
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp"
      })
      .done(function(data, status, jqXHR) {
     $("#search-result").html();
        for(i=0;i<data[1].length;i++){
          $("#search-result").prepend("<div><div class='docs'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
      });
    }
  })
  $("#button").on("click",function(){
    $("#c1").fadeToggle();
  });
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var search = $("#search").val();
    var url = "https://en.wikipedia.org/w/api.php";
    $.ajax({
        url: url,
        data: {
          action: 'opensearch',
          search: search,
          format: 'json'
        },
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp"
      })
      .done(function(data, status, jqXHR) {
     $("#search-result").html();
        for(i=0;i<data[1].length;i++){
          $("#search-result").prepend("<div><div class='docs'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
      });
  });
});
