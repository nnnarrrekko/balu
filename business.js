let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    if(scroll_pos > 190){
        let posfix = document.querySelector(".position-fixed")
        posfix.position = ""
        posfix.classList.add("scrollAnim");
    }else{
        let posfix = document.querySelector(".position-fixed")
        posfix.classList.remove("scrollAnim");
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});