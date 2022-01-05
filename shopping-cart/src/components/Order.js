import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
export default function Order() {
  return (
    <div className="order-box">
      <h1 className="fsc-400">Your Order</h1>
      <div className="order-item">
        <img src={image2} alt="ordered item" />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <h2 style={{ fontWeight: 500 }} className="fsc-500">
            Jeans with sequins
          </h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <p className="fsc-300" style={{ color: "grey" }}>
              Size: <span style={{ color: "black" }}>XL</span>
            </p>
            <p style={{ color: "grey" }}>
              Color: <span style={{ color: "black" }}>Blue</span>
            </p>
          </div>
          <h2 className="fsc-500" style={{ fontWeight: 500 }}>
            $39,00 <span style={{ fontWeight: 300, color: "grey" }}>x 02</span>
          </h2>
        </div>
      </div>
      <div className="order-item">
        <img src={image1} alt="ordered item" />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <h2 style={{ fontWeight: 500 }} className="fsc-500">
            Robinson Printed
          </h2>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <p className="fsc-300" style={{ color: "grey" }}>
              Size: <span style={{ color: "black" }}>XXL</span>
            </p>
            <p style={{ color: "grey" }}>
              Color: <span style={{ color: "black" }}>Blue</span>
            </p>
          </div>
          <h2 className="fsc-500" style={{ fontWeight: 500 }}>
            $39,00 <span style={{ fontWeight: 300, color: "grey" }}>x 01</span>
          </h2>
        </div>
      </div>
      <div
        id="order-detail-1"
        className="order-detail"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>Delivery</p>
        <p>
          $20 <span style={{ color: "grey" }}>(Express)</span>
        </p>
      </div>
      <div className="order-detail" style={{ display: "flex", gap: "9.4rem" }}>
        <p>Discount</p>
        <p>-$10</p>
      </div>
      <button
        className="fsc-600 order-total-btn"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
        }}
      >
        <p>Total</p>
        <span>$117,00</span>
      </button>
    </div>
  );
}
