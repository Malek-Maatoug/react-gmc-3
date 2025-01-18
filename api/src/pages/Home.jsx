import SingleItem from "../components/SingleItem";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [users, setUsers] = useState(null);
  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1 className="w-full text-5xl py-8 font-extrabold text-center">Users</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {users ? (
          users.map((v) => <SingleItem key={v.id} data={v} />)
        ) : (
          <h1>Loadinng ......</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
