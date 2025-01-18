import { Link } from "react-router-dom";
const SingleItem = ({ data }) => {
  const { title, body, userId, id } = data;
  return (
    <div className="bg-slate-400 p-4 rounded-2xl">
      <h3>userId : {userId} </h3>
      <h1 className="text-2xl"> {title} </h1>
      <Link
        className="float-end bg-blue-700 rounded-full py-2 px-4 mb-0 text-white font-bold"
        to={"/Details/" + id}
      >
        {" "}
        details{" "}
      </Link>
    </div>
  );
};

export default SingleItem;
