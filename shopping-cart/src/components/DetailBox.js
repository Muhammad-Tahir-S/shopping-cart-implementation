import Checked from "../assets/check.png";

export default function DetailBox({ title, detail }) {
  return (
    <div className="details-box">
      <span className="detail-number">a</span>
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
