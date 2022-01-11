import React, { useState } from "react";
import CreditCard from "../assets/credit-card.png";
import Network from "../assets/global-network.png";
import Wallet from "../assets/wallet.png";
import { Form, Input, Button } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarContainer } from "react-datepicker";
import CardHeader from "./CardHeader";

export default function PaymentMethods() {
  const headerDetails = [
    {
      title: "Debit / Credit Card",
      ImageSrc: CreditCard,
      alt: "debit/credit card",
      isActive: true,
    },
    {
      title: "Net Banking",
      ImageSrc: Network,
      alt: "net banking",
      isActive: false,
    },
    {
      title: "Google / Apple Wallet",
      ImageSrc: Wallet,
      alt: "google/apple wallet",
      isActive: false,
    },
  ];
  const [startDate, setStartDate] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [CVV, setCVV] = useState(null);

  const [form] = Form.useForm();

  let formattedDate = `${startDate?.toString()?.slice(3, 7)} ${startDate
    ?.toString()
    ?.slice(11, 16)}`;

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ zIndex: "5" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const onFinish = () => {
    form.resetFields();
    setStartDate(null);
    alert(
      `Card Number: ${cardNumber} || Expiry Date: ${formattedDate} || CVV: ${CVV}`
    );
  };

  const onFinishFailed = () => {
    console.log(`Failed`);
  };

  return (
    <>
      <div className="payment-header">
        {" "}
        <span id="payment-detail-number" className="detail-number">
          b
        </span>
        PAYMENT METHOD
      </div>
      <div className="payment-main">
        <CardHeader
          title={headerDetails[0].title}
          imageSrc={headerDetails[0].ImageSrc}
          alt={headerDetails[0].alt}
          isActive={headerDetails[0].isActive}
        />

        <div className="payment-forms">
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Enter Card Number"
              style={{ marginLeft: "5rem" }}
              name="card-number"
              rules={[
                { required: true, message: "Please input your card number!" },
                {
                  pattern: new RegExp("^[0-9]*$"),
                  message: "Wrong format!",
                },
                { min: 12, message: "Card number must be at least 12 figures" },
              ]}
            >
              <Input
                onChange={(e) => setCardNumber(e.target.value)}
                style={{
                  border: "1px solid black",
                  borderRadius: "0.5rem",
                  width: "65%",
                  height: "60px",
                  fontSize: "1.2rem",
                }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginLeft: "5rem",
                width: "80%",
              }}
            >
              <Form.Item
                label="Valid Date"
                style={{ flex: "3 40%" }}
                name="date"
                rules={[
                  {
                    required: true,
                    message: "Please input your card's expiry date",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholderText="MM / YYYY"
                  calendarContainer={MyContainer}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Form.Item>
              <Form.Item
                label="CVV"
                style={{ flex: "2 30%" }}
                name="cvv"
                rules={[
                  { required: true, message: "Please input your CVV!" },
                  {
                    pattern: new RegExp("^[0-9]*$"),
                    message: "Wrong format! ",
                  },
                  { len: 3, message: "CVV must be 3 figures" },
                ]}
              >
                <Input
                  onChange={(e) => setCVV(e.target.value)}
                  style={{
                    border: "1px solid black",
                    fontSize: "1.2rem",
                    borderRadius: "0.5rem",
                    width: "100%",
                    height: "60px",
                  }}
                />
              </Form.Item>

              <Form.Item style={{ flex: "3 40%" }}>
                <Button
                  style={{
                    border: "1px solid black",
                    borderRadius: "0.5rem",
                    width: "100%",
                    height: "60px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "1.4rem",
                    marginTop: "1.9rem",
                  }}
                  htmlType="submit"
                >
                  Pay $117.00
                </Button>
              </Form.Item>
            </div>
          </Form>
          <p className="fsc-200" style={{ margin: "1.4rem 2rem 1.9rem 5rem" }}>
            Your card details will be securely saved for faster payments. Your
            CVV wil not be stored.
          </p>
        </div>
        <CardHeader
          title={headerDetails[1].title}
          imageSrc={headerDetails[1].ImageSrc}
          alt={headerDetails[1].alt}
          isActive={headerDetails[1].isActive}
        />
        <CardHeader
          title={headerDetails[2].title}
          imageSrc={headerDetails[2].ImageSrc}
          alt={headerDetails[2].alt}
          isActive={headerDetails[2].isActive}
        />
      </div>
    </>
  );
}
