$(document).ready(function() {

//click the animal to make the animal noise and the other animal responds

  $("#meow").click(function() {
    $("ul#dog").append("<li>Bark</li>");
  })

  $("#woof").click(function() {
    $("ul#cat").append("<li>Meow</li>");
  })
});
