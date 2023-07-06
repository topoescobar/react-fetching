import axios from "axios";
import { useState } from "react";

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
    //si devuelve status 201 la peticion se envio correctamente
    axios
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        console.log("data modificada", response.data);
        addUser(response.data);
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
