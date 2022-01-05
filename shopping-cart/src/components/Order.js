import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
export default function Order() {
  return (
    <div className="order-box">
      <h1 className="fs-400">Your Order</h1>
      <div className="order-item">
        <img src={image2} />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <h2 className="fs-500">Jeans with sequins</h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <p className="fs-300">
              Size: <span>XL</span>
            </p>
            <p>
              Color: <span>Blue</span>
            </p>
          </div>
          <h2 className="fs-500">
            $39,00 <span>x2</span>
          </h2>
        </div>
      </div>
      <div className="order-item">
        <img src={image1} />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <h2 className="fs-500">Jeans with sequins</h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <p className="fs-300">
              Size: <span>XL</span>
            </p>
            <p>
              Color: <span>Blue</span>
            </p>
          </div>
          <h2 className="fs-500">
            $39,00 <span>x2</span>
          </h2>
        </div>
      </div>
      <div
        id="order-detail-1"
        className="order-detail"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>Delivery</p>
        <p>$20(Express)</p>
      </div>
      <div className="order-detail" style={{ display: "flex", gap: "8.8rem" }}>
        <p>Discount</p>
        <p>-$10</p>
      </div>
      <button
        className="fs-600 order-total-btn"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>Total</p>
        <span>$117,00</span>
      </button>
    </div>
  );
}
