export default function OrderItem({
  name,
  imageSrc,
  size,
  color,
  price,
  amount,
}) {
  return (
    <div className="order-item">
      <img src={imageSrc} alt="ordered item" />
      <div className="order-title">
        <h2 className="fsc-500 fw-500">{name}</h2>
        <div className="order-detail">
          <p className="fsc-300 text-grey">
            Size: <span className="text-black">{size}</span>
          </p>
          <p className="text-grey">
            Color: <span className="text-black">{color}</span>
          </p>
        </div>
        <h2 className="fsc-500 fw-500">
          ${price} <span className="text-grey fw-300">x {amount}</span>
        </h2>
      </div>
    </div>
  );
}
