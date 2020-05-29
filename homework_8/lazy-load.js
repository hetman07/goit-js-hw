'use strict';

const lazyLoad = target => {
  const options = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.source;

        img.setAttribute('src', imageUrl);

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  lazyLoad(image);
});