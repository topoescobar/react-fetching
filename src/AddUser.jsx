import { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    console.log("nuevo usuario", user);
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
