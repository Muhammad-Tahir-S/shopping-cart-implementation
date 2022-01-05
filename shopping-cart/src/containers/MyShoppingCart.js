import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Details from "../components/Details";
import Order from "../components/Order";
import PaymentMethods from "../components/PaymentMethods";

export default function MyShoppingCart() {
  return (
    <div className="body">
      <div className="container">
        <h1 className="fs-700">Shopping Cart</h1>
        <Breadcrumb />
        <main className="main">
          <div className="left-main">
            <Details />
            <PaymentMethods />
          </div>
          <div className="right-main">
            <Order />
          </div>
        </main>
      </div>
    </div>
  );
}
