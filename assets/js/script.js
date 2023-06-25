$("#prueba").hover(function(){
  $(".cls-1").addClass("move1");
  $(".cls-2").addClass("move2");
  $(".cls-3").addClass("move3");
  $(".cls-4").addClass("move4");
  $(".cls-5").addClass("move5");
  $(".cls-6").addClass("move6");
  $("#Capa_3").removeClass("pump");
}, function(){
  $(".cls-1").removeClass("move1");
  $(".cls-2").removeClass("move2");
  $(".cls-3").removeClass("move3");
  $(".cls-4").removeClass("move4");
  $(".cls-5").removeClass("move5");
  $(".cls-6").removeClass("move6");
  $("#Capa_3").addClass("pump");

  
})
$("#izda").hover(function(){
  $(".cls-7").addClass("move7");
  $(".cls-8").addClass("move8");
  $(".cls-9").addClass("move9");
  $(".cls-10").addClass("move10");
  $(".cls-11").addClass("move11");
  $(".cls-12").addClass("move12");
  $("#Capa_3").removeClass("pump");
}, function(){
  $(".cls-7").removeClass("move7");
  $(".cls-8").removeClass("move8");
  $(".cls-9").removeClass("move9");
  $(".cls-10").removeClass("move10");
  $(".cls-11").removeClass("move11");
  $(".cls-12").removeClass("move12");
  $("#Capa_3").addClass("pump");
})