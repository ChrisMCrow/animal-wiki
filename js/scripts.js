$(document).ready(function(){

  $("button").click(function() {

    var userChoice = $(this).attr("id");//some button id

    if (userChoice === "monkey") {
      $("#monkeyInfo").show();
      $("#giraffeInfo").hide();
    } else if (userChoice === "giraffe") {
      $("#giraffeInfo").show();
      $("#monkeyInfo").hide();
  };











});
