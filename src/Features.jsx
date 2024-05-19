import img1 from "./assets/asset 1.svg";
import img2 from "./assets/asset 2.svg";
import img3 from "./assets/asset 3.svg";
import img4 from "./assets/asset 4.svg";
import Feat from "./components/Feat";

const Features = () => {
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="head">
          <span>Key features</span>
        </div>
        <div className="features-text">
          <h1>Why use Atomize React?</h1>
          <p>
            Atomize React helps you in building fully responsive websites and
            products that match your style.
          </p>
        </div>
        <div className="grid">
          <Feat
            img={img1}
            name="Flexible Grid"
            text="Change grid variables or give decimal column size."
            btn="see more"
            link="https://atomizecode.com/docs/react/theme#columnCount"
          />
          <Feat
            img={img2}
            name="Style guide"
            text="Update theme throughout the application easily."
            btn="see more"
            link="https://atomizecode.com/docs/react/theme#availableColors"
          />
          <Feat
            img={img3}
            name="Spacing"
            text="A better and controlled way of update spacing."
            btn="see more"
            link="https://atomizecode.com/docs/react/spacing"
          />
          <Feat
            img={img4}
            name="Responsive"
            text="Better control to make the app responsive."
            btn="see more"
            link="https://atomizecode.com/docs/react/responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
