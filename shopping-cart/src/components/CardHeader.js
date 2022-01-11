import React from "react";

export default function CardHeader({ title, imageSrc, alt, isActive }) {
  return (
    <div className="card-header">
      <img src={imageSrc} alt={alt} />
      <p className={isActive ? "" : "disabled"}>{title}</p>
    </div>
  );
}
