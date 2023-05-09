const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  minitablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default responsive;
