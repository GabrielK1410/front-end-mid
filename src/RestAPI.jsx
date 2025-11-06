import { useEffect, useState } from "react";
import axios from "axios";

const RestAPI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      {users.map((item) => (
        <div className="bg-red-300 m-4 p-4 border rounded-xl">
          {item.name}
          <img className="w-50 h-50" src={`./${item.image}`} />
        </div>
      ))}
    </>
  );
};

export default RestAPI;
