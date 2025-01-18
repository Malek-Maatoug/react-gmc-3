import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SingleItem from "../components/SingleItem";
const Details = () => {
  const [users, setUsers] = useState(null);
  const { id } = useParams();
  const getUsers = async () => {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    setUsers(res.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <div>
      {users ? <SingleItem key={users.id} data={users} /> : <h1>Loadiing </h1>}
    </div>
  );
};

export default Details;
