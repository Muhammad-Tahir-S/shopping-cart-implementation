import OrderItem from "./OrderItem";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

export default function Order() {
  const orderDetails = [
    {
      name: "Jeans with sequins",
      imageSrc: image2,
      size: "XL",
      color: "Blue",
      price: "39,00",
      amount: "02",
    },
    {
      name: "Robinson Printed",
      imageSrc: image1,
      size: "XXL",
      color: "Blue",
      price: "29,00",
      amount: "01",
    },
  ];

  return (
    <div className="order-box">
      <h1 className="fsc-400">Your Order</h1>
      {orderDetails.map((orderDetail, index) => (
        <OrderItem
          key={index}
          name={orderDetail.name}
          imageSrc={orderDetail.imageSrc}
          size={orderDetail.size}
          color={orderDetail.color}
          price={orderDetail.price}
          amount={orderDetail.amount}
        />
      ))}
      <div>
        <div className="order-summary">
          <p className="order-charge">Delivery</p>
          <p className="order-fee">
            $20 <span className="text-grey">(Express)</span>
          </p>
        </div>
        <div className="order-summary">
          <p
            className="order-charge flex"
            style={{ justifyContent: "space-between" }}
          >
            Discount <span>-</span>
          </p>
          <p className="order-fee">$10</p>
        </div>
      </div>

      <button className="fsc-600 order-total-btn">
        <p>Total</p>
        <span>$117,00</span>
      </button>
    </div>
  );
}
