import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const Root = () => {
  return (
    <div className="grid justify-between content-between">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
