const handleScroll = (ref) => {
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export default handleScroll;
