$(function(){
  $(".cat").click(function(){
    $(".cat-shout").append("<p>Meow!!</p>");
    $(".dog-shout").append("<p>Woof!!</p>");

    $(".cat-shout p").css("background-color","yellow");
    $(".cat-shout p").click(function(){
      $(this).remove();
    });
  });
  $(".dog").click(function(){
    $(".cat-shout").append("<p>Meow!!</p>");
    $(".dog-shout").append("<p>Woof!!</p>");
    $("img").before("<h2>What's the big idea??</h2>");

    $(".dog-shout p").click(function(){
      $(this).remove();
    });
  });






});
