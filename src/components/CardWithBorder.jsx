const CardWithBorder = ({ children, className }) => {
  return (
    <div
      className={`w-full border-4 border-transparent ${className}`}
      style={{
        borderImage:
          "linear-gradient(129deg, #0A63FD -24.13%, #01CFFC 1.43%, #0087FF 30.16%, #0069FF 58.59%, #01CFFC 88.34%, #0A84FF 111.41%, #0467F3 128.93%)",
        borderImageSlice: 2,
        boxShadow: "0px 4px 30px 0px rgba(65, 209, 255, 0.30)",
      }}
    >
      {children}
    </div>
  );
};
export default CardWithBorder;
