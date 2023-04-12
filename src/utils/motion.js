const background = {
  initial: {
    x: 800,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    x: 800,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const fadeIn = {
  initial: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeInList = (delay) => {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: delay,
      },
    },
  };
};

const fadeInLink = {
  initial: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.7,
    },
  },
};

export { background, fadeIn, fadeInList, fadeInLink };
