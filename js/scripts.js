$(document).ready(function() {
  $("p").click(function() {
    $(".kitty-showing").toggle("");
  });
  $("button#meow").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#dog").append("<li>Bark!</li>");
    $(".kitty-showing").toggle("");
  });

  $("button#bark").click(function() {
    $("ul#cat").before("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $(".doggy-showing").toggle("");
  });
});