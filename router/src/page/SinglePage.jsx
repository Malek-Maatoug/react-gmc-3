import { useParams } from "react-router-dom";
const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>SinglePage id : {id} </div>;
};

export default SinglePage;
