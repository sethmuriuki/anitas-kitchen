$(document).ready(function () {
  $('form#mail').submit(function (event) {
    event.preventDefault();
    alert("Congratulations! You Have Succesfully been added to our mailing list.");
  });
});

$("#toggle").click(function(event){
  $("#sidebar").fadeToggle(500);
});
