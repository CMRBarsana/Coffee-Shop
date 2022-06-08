// Fades in on Scroll
// place on component onMount
// [initClass - initial style, animateClass - new class to replace]
// initClass should be inside each target tag to be animated
export const animateOnScroll = (initClass, animateClass) => {
  var elements;
  var windowHeight;

  const init = () => {
    elements = document.querySelectorAll(`.${initClass}`);
    windowHeight = window.innerHeight;
  }
  const checkPosition = () => {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add(animateClass);
        element.classList.remove(initClass);
      } else {
        element.classList.remove(animateClass);
        element.classList.add(initClass);
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
};