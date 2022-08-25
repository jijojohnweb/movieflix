import {React,useEffect} from 'react'
import './Carousel.css'
import pic1 from '../../Assets/pic1.webp'
import pic2 from '../../Assets/pic2.webp'
import pic3 from '../../Assets/pic3.webp'
import pic4 from '../../Assets/pic4.webp'
import pic5 from '../../Assets/pic5.webp'

function Carousel() {
  useEffect(() => {

  var doc = window.document,
  context = doc.querySelector('.carousel'),
  clones = context.querySelectorAll('.slider'),
  disableScroll = false,
  scrollHeight = 0,
  scrollPos = 0,
  clonesHeight = 0,
  i = 0;

function getScrollPos() {
  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
}

function setScrollPos(pos) {
  context.scrollTop = pos;
}

function getClonesHeight() {
  clonesHeight = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollHeight = context.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesHeight + scrollPos >= scrollHeight) {
      // Scroll to the top when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the top
      setScrollPos(scrollHeight - clonesHeight);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
    console.log("dddd")
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}









  }, [])
  
  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* slider area */}
        <div className="slider">
          <div className="slider-content">
            <h1>The Warrior</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam unde vel beatae at cum? Dolorum.</p>
          </div>
          <img src={pic1} alt="" />
        </div>

        <div className="slider">
          <div className="slider-content">
            <h1>The Warrior</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam unde vel beatae at cum? Dolorum.</p>
          </div>
          <img src={pic2} alt="" />
        </div>

        <div className="slider">
          <div className="slider-content">
            <h1>The Warrior</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam unde vel beatae at cum? Dolorum.</p>
          </div>
          <img src={pic3} alt="" />
        </div>

        <div className="slider">
          <div className="slider-content">
            <h1>The Warrior</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam unde vel beatae at cum? Dolorum.</p>
          </div>
          <img src={pic4} alt="" />
        </div>

        <div className="slider">
          <div className="slider-content">
            <h1>The Warrior</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam unde vel beatae at cum? Dolorum.</p>
          </div>
          <img src={pic5} alt="" />
        </div>
        {/* slider area */}
      </div>
    </div>
  )
}

export default Carousel