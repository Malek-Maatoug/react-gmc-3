import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "end",
        padding: "1rem 2rem",
      }}
    >
      <Link to={"/"}>home</Link>
      <Link to={"/shop"}>shop</Link>
    </nav>
  );
};

export default Nav;
