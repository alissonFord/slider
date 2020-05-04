function Slider(slider) {
  if(!(slider instanceof Element)) {
    throw new Error('No slider passed in!');
  }  

  this.slider = slider;
  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  // buttons are not used anywhere outside
  const prevButton = slider.querySelector('.goToPrev')
  const nextButton = slider.querySelector('.goToNext');

  this.startSlider();
  this.applyClasses();
  // if we want to pass an argument to a function, use an arrow function
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
}

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'current', 'next'];
  // [prev, current, next].classList.remove(...classesToRemove);
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if(direction === 'back') {
    [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
  }
  else {
    [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
  }
  this.applyClasses();
}

const slider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
