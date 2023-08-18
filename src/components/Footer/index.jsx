const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ color: "#e0ebe8" }}
    >
      Copyright @ {years}
    </div>
  );
};
export default Footer;
