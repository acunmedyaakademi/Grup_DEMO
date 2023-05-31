const imagePadding = 14;
let scrollAmount = 0;

export const sliderScrollLeft = (sliderContainer) => {
  let scrollPerClick = sliderContainer.children[0]?.clientWidth + imagePadding;

  sliderContainer.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: 'smooth',
  });

  if (scrollAmount < 0) {
    sliderContainer.scrollTo({
      top: 0,
      left: sliderContainer.scrollWidth - sliderContainer.clientWidth + 200,
      behavior: 'smooth',
    });
    scrollAmount = sliderContainer.scrollWidth - sliderContainer.clientWidth;
  }
};

export const sliderScrollRight = (sliderContainer) => {
  let scrollPerClick = sliderContainer.children[0]?.clientWidth + imagePadding;

  if (
    scrollAmount <=
    sliderContainer.scrollWidth - sliderContainer.clientWidth
  ) {
    sliderContainer.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: 'smooth',
    });
  } else {
    sliderContainer.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    scrollAmount = 0;
  }
};
