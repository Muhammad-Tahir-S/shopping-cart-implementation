import React from "react";
import CreditCard from "../assets/credit-card.png";

export default function PaymentMethods() {
  return (
    <div>
      <div className="payment-header">
        {" "}
        <span id="payment-detail-number" className="detail-number">
          b
        </span>
        PAYMENT METHOD
      </div>
      <div className="payment-main">
        <div className="card-header">
          <img src={CreditCard} alt="debit/credit card" />
          <p className="fs-500">Debit/Credit Card</p>
        </div>
      </div>
    </div>
  );
}
