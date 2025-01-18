import GetUsers from "../components/GetUsers";

const Home = () => {
  return (
    <div>
      <h1 className="w-full text-5xl py-8 font-extrabold text-center">Users</h1>
      <GetUsers />
    </div>
  );
};

export default Home;
