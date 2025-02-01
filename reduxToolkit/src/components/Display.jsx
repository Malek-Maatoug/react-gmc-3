import { useSelector } from "react-redux";
const Display = () => {
  const { cake, caisse } = useSelector((state) => state.cake);

  return (
    <div>
      <h1> number : {cake} </h1>
      <h1> caisse : {caisse} </h1>
    </div>
  );
};

export default Display;
