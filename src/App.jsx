import "./styles.css";
import { useEffect, useState } from "react";
import User from "./User";
import AddUser from "./AddUser";
import { getUsers } from "./services/getUsers";

export default function App() {
  const [usersArr, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  //LLAMADO API CON AXIOS
  useEffect(() => {
    setLoading(true);
    // setTimeout para simular una carga asincrona
    setTimeout(() => {
      getUsers().then((usersResponse) => {
        setUsers(usersResponse);
        setLoading(false);
      });
    }, 1200);
  }, []);

  const addUser = (user) => {
    setUsers([...usersArr, user]);
  };

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <AddUser addUser={addUser} />
      {loading && "Cargando..."}
      <ul>
        {usersArr.map((user) => (
          <li key={user.email}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
