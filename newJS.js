
$(document).ready(function(){


if($(window).width() < 768){

  $("#topHeader").text("Hi, I'm Richie");
  $("#topHeader").css("font-Size", "2.2em");

  $("span").css("font-Size", "0.9em");
  $("#sub1").text("About Me");
  $("#sub2").text("Movies");
  $("#sub3").text("CSRF,XSS,SQL Atks");
  $("#sub4").text("Criminal Intent");
  $("#sub5").text("LED Panels");

  $("header").css("background-image", "url('./smallCover.png')");
}




  //**About Me *************************************//
  $("#closeBut1").click(function(){
    $("#aboutMeDetail").slideUp(1000);
  });
  $("#minBut1").click(function(){
    $("#aboutMeDetail").slideUp(1000);
  });
  $("#maxBut1").click(function(){
    $("#aboutMeDetail").slideDown(1000);
  });
//**PROJECT 1 *************************************//
  $("#closeBut2").click(function(){
    $("#proj1").slideUp(1000);
  });
  $("#minBut2").click(function(){
    $("#proj1").slideUp(1000);
  });
  $("#maxBut2").click(function(){
    $("#proj1").slideDown(1000);
  });
//**PROJECT 2 *************************************//
  $("#closeBut3").click(function(){
    $("#proj2").slideUp(1000);
  });
  $("#minBut3").click(function(){
    $("#proj2").slideUp(1000);
  });
  $("#maxBut3").click(function(){
    $("#proj2").slideDown(1000);
  });
//**PROJECT 3 *************************************//
  $("#closeBut4").click(function(){
    $("#proj3").slideUp(1000);
  });
  $("#minBut4").click(function(){
    $("#proj3").slideUp(1000);
  });
  $("#maxBut4").click(function(){
    $("#proj3").slideDown(1000);
  });
//**PROJECT 4 *************************************//
  $("#closeBut5").click(function(){
    $("#proj4").slideUp(1000);
  });
  $("#minBut5").click(function(){
    $("#proj4").slideUp(1000);
  });
  $("#maxBut5").click(function(){
    $("#proj4").slideDown(1000);
  });

});
