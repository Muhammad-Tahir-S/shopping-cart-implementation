import React from "react";
import CreditCard from "../assets/credit-card.png";
import Network from "../assets/global-network.png";
import Wallet from "../assets/wallet.png";

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
          <p className="fsc-500">Debit/Credit Card</p>
        </div>
        <div className="payment-forms">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="card-header">
          <img src={Network} alt="Internet" />
          <p className="fsc-500 disabled">Net Banking</p>
        </div>
        <div className="card-header ">
          <img src={Wallet} alt="Wallet" />
          <p className="fsc-500 disabled">Google/Apple Wallet</p>
        </div>
      </div>
    </div>
  );
}
