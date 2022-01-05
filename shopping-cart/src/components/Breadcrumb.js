import React from "react";

export default function Breadcrumb() {
  return (
    <div>
      <ul className="fs-300 breadcrumb">
        <li>Homepage</li> /<li>Clothing Categories</li> /
        <li style={{ textDecoration: "underline" }}>My Shopping Cart</li>
      </ul>
    </div>
  );
}
