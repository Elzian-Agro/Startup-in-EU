// function to detect when an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// select all arrow sections and SVG elements
const arrowSections = document.querySelectorAll('.arrow');
const arrowSVGS = document.querySelectorAll('.arrow svg');

// add an event listener to the window to detect when it's scrolled
window.addEventListener('scroll', () => {
  // loop through all arrow sections
  arrowSections.forEach((arrowSection, index) => {
    // check if the arrow section is in the viewport
    if (isInViewport(arrowSection)) {
      // add the 'animate' class to the path and arrow elements of the corresponding SVG
      arrowSVGS[index].querySelectorAll('.path, #arrow').forEach((el) => {
        el.classList.add('animate');
      });
    }
  });
});
