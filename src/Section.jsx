import img1 from "./assets/asset 19.svg";
import img2 from "./assets/asset 20.svg";
import img3 from "./assets/asset 21.svg";
import img4 from "./assets/asset 22.svg";
import img5 from "./assets/asset 23.svg";
import img6 from "./assets/asset 24.svg";
import pfp from "./assets/asset 12.png";
import bg from "./assets/asset 15.png";

const Section = () => {
  return (
    <section>
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="icons">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
            <div className="card-details">
              <img src={pfp} alt="" />
              <h3>Meagan Fisher</h3>
              <p>Engineering Manager</p>
              <div className="btns">
                <div className="btn-follow">
                  <span>follow</span>
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="btn-message">
                  <span>message</span>
                  <i className="fa-regular fa-message"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="post">
              <div className="post-img">
                <img src={bg} alt="" />
              </div>
              <div className="user-info">
                <div className="left">
                  <img src={pfp} alt="" className="user-img" />
                  <h4 className="user-name">Meagan Fisher</h4>
                </div>
                <div className="right">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="login-text">
                <h3>Login into your account</h3>
                <p>
                  Don&#39;t have an account yet? <span>create new</span>
                </p>
              </div>
              <form>
                <div className="input-field">
                  <input type="email" placeholder="johndoe@gmail.com" />
                </div>
                <div className="input-field">
                  <input type="password" placeholder="Password" />
                </div>
                <button>
                    <span>login</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
