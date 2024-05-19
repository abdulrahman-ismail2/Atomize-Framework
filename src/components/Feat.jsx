/* eslint-disable react/prop-types */
const Feat = (props) => {
  return (
    <div className="feat">
      <div className="feat-img">
        <img src={props.img} alt="" />
      </div>
      <h2 className="feat-name">{props.name}</h2>
      <p>{props.text}</p>
      <div className="feat-btn">
        <span>
          {props.btn}
          <a href={props.link}></a>
        </span>
      </div>
    </div>
  );
};

export default Feat;
