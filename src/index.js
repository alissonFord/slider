function Slider(slider) {
  if(!(slider instanceof Element)) {
    throw new Error('No slider passed in!');
  }

  // variables for working iwth the slider
  let current;
  let prev;
  let next; 

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev')
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    // [prev, current, next].classList.remove(...classesToRemove);
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if(direction === 'back') {
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    }
    else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();
  // if we want to pass an argument to a function, use an arrow function
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const slider = new Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
