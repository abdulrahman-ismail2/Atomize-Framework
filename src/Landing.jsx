const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="landing-text">
          <h1>Design System for React JS</h1>
          <p>
            Atomize React is a UI framework that helps developers collaborate
            with designers and build consistent user interfaces effortlessly.
          </p>
        </div>
        <div className="landing-btns">
          <div className="btn-get-started">
            <span>
              <a href="https://atomizecode.com/docs/react/intro">
                get start now
              </a>
            </span>
          </div>
          <div className="btn-watch-video">
            <a
              href="https://www.youtube.com/watch?v=1uEJT3_M1Y0"
              target="_blank"
            >
              <i className="fa-solid fa-play"></i>
              <span>watch video</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
