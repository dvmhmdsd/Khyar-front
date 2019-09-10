// the toggle tracker
var slide = false;

var toggleButtons = document.querySelectorAll(".faq-toggle-ans");

// attach click event to all togglers
toggleButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // toggle
    slide = !slide;

    if (slide) {
      // rotate the toggler button 180 deg to open
      this.style.transform = "rotateZ(180deg)";
      // change its bg-color
      this.style.backgroundColor = "#929292";

      // make the height of the answer equal to its original (rendered) height
      var p = this.parentElement.querySelector(".faq-qstn-ans");
      p.style.height = p.scrollHeight + "px";
    } else {
      this.style.transform = "rotateZ(0)";

      this.style.backgroundColor = "#58b83e";

      this.parentElement.querySelector(".faq-qstn-ans").style.height = "0";
    }
  });
});
