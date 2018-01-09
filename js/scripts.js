$(document).ready(function() {

//click the animal to make the animal noise and the other animal responds

  $("#meow").click(function() {
    $("ul#dog").append("<li>Bark</li>");
  })

  $("#woof").click(function() {
    $("ul#cat").append("<li>Meow</li>");
  })

  $("#rarr").click(function() {
    $(this).before('<p><img src="img/Gator-2.jpg" alt="picture of an alligator" class="alligator-img"></p>')
    $("ul#cat").append("<li>AHHHH</li>");
    $("ul#dog").append("<li>AHHHH</li>");
    $(".alligator-img").click(function() {
      $(this).remove();
    });
  });
});
