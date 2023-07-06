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

  const handleClick = () => {
    console.log("nuevo usuario", user);
    addUser(user);
  };

  return (
    <div>
      <h2> Agregar Usuario</h2>
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
      <button onClick={handleClick}>Agregar usuario</button>
    </div>
  );
}
