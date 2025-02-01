import { Link } from "react-router-dom";

const hi = [
  {
    title: "hellioi",
    id: "500",
  },
  {
    title: "hellioi 504 ",
    id: "504",
  },
];
const Shop = () => {
  return (
    <div>
      <h1>shop</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        {hi.map((v) => (
          <Link to={"/single/" + v.id} key={v.id}>
            {v.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
