const Hero = () => {
  return (
    <div className="h-full w-full">
      <h1 className="sm:text-8.5xl my-28 select-none text-center text-6xl font-extrabold leading-none tracking-tightest sm:my-10">
        <span
          data-content="Blog."
          className="relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
            Blog.
          </span>
        </span>
        <span
          data-content="Showcase."
          className="relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
            Showcase.
          </span>
        </span>
        <span
          data-content="Portfolio."
          className="relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
            Portfolio.
          </span>
        </span>
      </h1>
    </div>
  );
};

export default Hero;
