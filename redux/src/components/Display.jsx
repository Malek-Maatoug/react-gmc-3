import { useSelector } from "react-redux";
const Display = () => {
  const cake = useSelector((state) => state.cake);
  const caisse = useSelector((state) => state.caisse);
  console.log(cake, caisse);
  return (
    <div>
      <h1> number : {cake} </h1>
      <h1> caisse : {caisse} </h1>
    </div>
  );
};

export default Display;
