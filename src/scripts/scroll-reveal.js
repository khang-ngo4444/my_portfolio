import ScrollReveal from 'scrollreveal';

export const initScrollReveal = () => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: false
  });

  sr.reveal('.section-title', {
    delay: 300,
    distance: '0px',
    origin: 'bottom'
  });

  sr.reveal('.section-content', {
    delay: 500,
    distance: '0px',
    origin: 'bottom'
  });

  sr.reveal('.animate-slide-in-left', {
    origin: 'left'
  });

  sr.reveal('.animate-slide-in-right', {
    origin: 'right'
  });

  sr.reveal('.animate-fade-in', {
    opacity: 0,
    scale: 0.9
  });

  return sr;
};

export default initScrollReveal;
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
