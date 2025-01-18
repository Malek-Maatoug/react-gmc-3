import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex justify-center gap-2 w-screen list-none py-4">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/admin"}> Admin </Link>
      </li>
    </nav>
  );
};

export default Nav;
