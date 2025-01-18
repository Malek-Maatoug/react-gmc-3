import Form from "../components/Form";
import GetUsers from "../components/GetUsers";
const Admin = () => {
  return (
    <div className="grid gap-6 w-screen">
      <h1 className="text-center text-4xl font-bold">Admin</h1>
      <Form />
      <GetUsers />
    </div>
  );
};

export default Admin;
