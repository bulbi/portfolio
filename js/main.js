$(function()
{
  console.log("welcome my poupi");

  resetSticky(86+12);
  function resetSticky(s)
  {
    var hh = $("header").height();
    $("nav").css("top", s);
  }
  // setTimeout(function(){resetSticky();}, 600);

  var top = true;
  $(document).scroll(function()
  {
    // console.log($("body").scrollTop());
    var y = $("body").scrollTop();
    if (y > 180 && top == true) {
      $(".head").toggleClass("sm");
      top = false;
      resetSticky(48+12);
    }
    if (y < 180 && top == false) {
      $(".head").toggleClass("sm");
      top = true;
      resetSticky(48+12);
    }
  });
});
