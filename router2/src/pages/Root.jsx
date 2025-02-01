import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "80vw",
        display: "grid",
        alignContent: "space-between",
      }}
    >
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
