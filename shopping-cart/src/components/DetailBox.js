import Checked from "../assets/check.png";

export default function DetailBox({ title, detail, bullet }) {
  return (
    <div className="details-box">
      <span className="detail-number">{bullet}</span>
      <div className="main-details">
        <span className="detail-title uppercase">
          {title} <img src={Checked} alt="checked" />{" "}
        </span>
        <p>{detail}</p>
      </div>
      <button className="change-btn uppercase fsc-200">change</button>
    </div>
  );
}
