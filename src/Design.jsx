import Feat from "./components/Feat";
import img1 from "./assets/asset 1.svg";
import img2 from "./assets/asset 2.svg";

const Design = () => {
  return (
    <div className="design">
      <div className="container">
        <h1>
          A combination of tools to design and develop
          <br /> modern applications at ease.
        </h1>
        <div className="grid">
          <Feat
            img={img1}
            name="Design"
            text="Design your website by using Atomize for Sketch App."
            btn="Design Resource"
          />
          <Feat
            img={img2}
            name="Development"
            text="Bring your designs to life with Atomize for React JS."
            btn="documentation"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
