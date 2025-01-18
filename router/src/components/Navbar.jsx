import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "2rem",
        fontSize: "28px",
        padding: "1rem",
        color: "inherit",
      }}
    >
      <Link to={"/"}>home</Link>
      <Link to={"/contact"}>contact</Link>
    </nav>
  );
};

export default Navbar;
