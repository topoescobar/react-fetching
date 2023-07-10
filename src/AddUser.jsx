import { useState } from "react";
import { addUserService } from "./services/addUser";

export default function AddUser({ addUser }) {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log("changing", user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addUserService(user).then((response) => {
      console.log("data modificada", response);
      addUser(response);
      setUser({
        name: "",
        email: ""
      });
    });

    //addUser(user);
  };

  return (
    <div>
      <h2> Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button>Agregar usuario</button>
      </form>
    </div>
  );
}
