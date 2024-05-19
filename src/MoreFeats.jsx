import img from "./assets/asset 5.svg";
import icon6 from "./assets/asset 6.svg";
import icon7 from "./assets/asset 7.svg";
import icon8 from "./assets/asset 8.svg";
import icon9 from "./assets/asset 9.svg";
import icon10 from "./assets/asset 10.svg";
import icon11 from "./assets/asset 11.svg";

const MoreFeats = () => {
  return (
    <div className="more-feats">
      <div className="container">
        <div className="circles">
          <span className="big-circle">
            <span className="x-circle">
              <div className="btns">
                <div className="btn">
                  <a>sign in</a>
                </div>
                <div className="btn">
                  <a>sign up</a>
                </div>
                <div className="btn">
                  <a>+</a>
                </div>
                <div className="btn">
                  <a>switch</a>
                </div>
              </div>
              <span className="md-circle">
                <span className="sm-circle">
                  <img src={img} alt="" />
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className="right-side">
          <h1>
            Beautiful & consistant UI
            <br /> powered with <span>React</span>.
          </h1>
          <div className="grid2">
            <div className="item">
              <img src={icon6} alt="" />
              <h4>Atomic</h4>
              <p>Based on Atomic Design Methodology.</p>
            </div>
            <div className="item">
              <img src={icon7} alt="" />
              <h4>Theme Setup</h4>
              <p>Auto updating colors and Styleguide.</p>
            </div>
            <div className="item">
              <img src={icon8} alt="" />
              <h4>Components</h4>
              <p>Ever-increasing list of components.</p>
            </div>
            <div className="item">
              <img src={icon9} alt="" />
              <h4>Responsive</h4>
              <p>Build fully responsive structures easily.</p>
            </div>
            <div className="item">
              <img src={icon10} alt="" />
              <h4>Customisation</h4>
              <p>Multiple customisations to suit your style.</p>
            </div>
            <div className="item">
              <img src={icon11} alt="" />
              <h4>Icon System</h4>
              <p>An inbuilt Icon system for faster development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeats;
