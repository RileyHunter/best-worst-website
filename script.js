function imageShow(){
      var x = document.getElementById('image');
      if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }


}

$(document).ready(function() {
  $(".toggle-button").click(function() {
    $(this).parent().find("ul").slideToggle(function() {
    });
  });
})
