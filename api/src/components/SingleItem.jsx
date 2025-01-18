import { Link } from "react-router-dom";
import axios from "axios";
const SingleItem = ({ data, admin }) => {
  const { title, body, userId, id } = data;
  const deleteFn = async () => {
    await axios.delete("http://localhost:3000/users/" + id);
  };
  return (
    <div className="bg-slate-400 p-4 rounded-2xl">
      <div className="flex justify-between">
        <h3>userId : {userId} </h3>
        {admin ? (
          <button
            onClick={deleteFn}
            className="bg-red-800 text-white rounded-[50%] w-10 h-10"
          >
            X
          </button>
        ) : (
          ""
        )}
      </div>

      <h1 className="text-2xl"> {title} </h1>
      {admin ? (
        <Link
          className="float-end bg-green-700 rounded-full py-2 px-4 mb-0 text-white font-bold"
          to={"/admin/edit/" + id}
        >
          {" "}
          edit{" "}
        </Link>
      ) : (
        <Link
          className="float-end bg-blue-700 rounded-full py-2 px-4 mb-0 text-white font-bold"
          to={"/Details/" + id}
        >
          {" "}
          details{" "}
        </Link>
      )}
    </div>
  );
};

export default SingleItem;
