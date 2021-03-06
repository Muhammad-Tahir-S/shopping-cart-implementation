import DetailBox from "./DetailBox";

export default function Details() {
  const details = [
    { title: "Login", detail: "Micheal Smith +806-445-4453", bullet: "a" },
    {
      title: "Shipping Address",
      detail: `Brady Cooper, New Civil Colony, Salt Lake City, Utah, United States,
  2971 Avenue.`,
      bullet: "b",
    },
  ];
  return (
    <>
      {details.map((detail, index) => (
        <DetailBox
          key={index}
          title={detail.title}
          detail={detail.detail}
          bullet={detail.bullet}
        />
      ))}
    </>
  );
}
