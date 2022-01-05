import Checked from "../assets/check.png";
export default function Details() {
  return (
    <>
      <div className="details-box" style={{ marginTop: "2rem" }}>
        <span className="detail-number">a</span>
        <div className="main-details" style={{ gap: "0.5rem" }}>
          <span className="detail-title uppercase">
            Login <img src={Checked} alt="checked" />{" "}
          </span>
          <p style={{ fontWeight: "500" }}>Micheal Smith +806-445-4453</p>
        </div>
        <button className="change-btn uppercase fsc-200">change</button>
      </div>

      <div className="details-box">
        <span className="detail-number">b</span>
        <div className="main-details" style={{ gap: "0.5rem" }}>
          <span className="detail-title uppercase">
            Shipping Address <img src={Checked} alt="checked" />{" "}
          </span>
          <p style={{ fontWeight: "500" }}>
            Brady Cooper, New Civil Colony, Salt Lake City, Utah, United States,
            2971 Avenue.{" "}
          </p>
        </div>
        <button className="change-btn uppercase fsc-200">change</button>
      </div>
    </>
  );
}
