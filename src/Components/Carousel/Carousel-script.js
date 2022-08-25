function Sliders(o) {
  var time = o.time || 500,
    autoTime = o.autoTime || 5000,
    selector = o.selector,
    width_height = o.width_height || 100 / 70,
    sliders = document.querySelectorAll(selector),
    i;

  function css(elm, prop, val) {
    elm.style[prop] = val;
    prop = prop[0].toUpperCase() + prop.slice(1);
    elm.style["webkit" + prop] =
      elm.style["moz" + prop] =
      elm.style["ms" + prop] =
      elm.style["o" + prop] =
        val;
  }

  function anonimFunc(slider) {
    var buttonLeft = slider.children[2],
      buttonRight = slider.children[1],
      ul = slider.children[0],
      card = ul.children,
      activeIndex = 0,
      isAnimate = false,
      i,
      s;
    ul.style.paddingTop = 100 / width_height + "%";

    // for (i = 0; i < card.length; i += 1) {
    //   css(card[i], "animationDuration", time + "ms");
    // }

    card[activeIndex].classList.add("active");

    function left() {
      if (isAnimate) {
        return;
      }
      clearTimeout(s);
      isAnimate = true;
      var nextIndex = activeIndex < card.length - 1 ? activeIndex + 1 : 0;
      card[nextIndex].classList.add("next");
      card[activeIndex].classList.add("left");
      card[nextIndex].classList.add("active");
      setTimeout(function () {
        card[activeIndex].classList.remove("active");
        card[activeIndex].classList.remove("left");
        card[nextIndex].classList.remove("next");
        card[nextIndex].classList.add("active");
        activeIndex = nextIndex;
        isAnimate = false;
        // s = setTimeout(left, autoTime);
      }, time);
    }

    function right() {
      if (isAnimate) {
        return;
      }
      clearTimeout(s);
      isAnimate = true;
      var nextIndex = activeIndex > 0 ? activeIndex - 1 : card.length - 1;
      card[nextIndex].classList.add("previous");
      card[activeIndex].classList.add("right");
      card[nextIndex].classList.add("active");
      setTimeout(function () {
        card[activeIndex].classList.remove("active");
        card[activeIndex].classList.remove("right");
        card[nextIndex].classList.remove("previous");
        card[nextIndex].classList.add("active");
        activeIndex = nextIndex;
        isAnimate = false;
        // s = setTimeout(right, autoTime);
      }, time);
    }

    // buttonLeft.addEventListener("click", left);
    // buttonRight.addEventListener("click", right);

    // s = setTimeout(right, autoTime);
  }

  for (i = 0; i < sliders.length; i += 1) {
    anonimFunc(sliders[i]);
  }
}



/* -- how to use it ? -- */
var sliders = new Sliders({
  selector: ".slider",
  time: 500,
  autoTime: 3000,
  width_height: 350 / 250,
});
