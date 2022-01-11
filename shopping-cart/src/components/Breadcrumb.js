import React from "react";

export default function Breadcrumb() {
  return (
    <div>
      <ul className="fsc-300 breadcrumb">
        <li className="pointer-cursor">Homepage</li> /
        <li className="pointer-cursor">Clothing Categories</li> /
        <li className="pointer-cursor" style={{ textDecoration: "underline" }}>
          My Shopping Cart
        </li>
      </ul>
    </div>
  );
}
