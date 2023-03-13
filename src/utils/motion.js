const background = {
  initial: {
    x: "100",
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
    x: "100",
    opacity: 0,
    transition: {
      duration: 0.2,
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
      duration: 0.5
    }
  }
}

export { background, fadeIn };
