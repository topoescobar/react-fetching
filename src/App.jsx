import "./styles.css";
import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

export default function App() {
  const [usersArr, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  //LLAMADO API CON FETCH
  // useEffect(() => {
  //   setLoading(true);
  //   // setTimeout para simular una carga asincrona
  //   setTimeout(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log("json", json);
  //         setUsers(json);
  //         setLoading(false);
  //       });
  //   }, 1200);
  // }, []);

  //LLAMADO API CON AXIOS
  useEffect(() => {
    setLoading(true);
    // setTimeout para simular una carga asincrona
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log("response", response.data);
          setUsers(response.data);
          setLoading(false);
        });
    }, 1200);
  }, []);

  return (
    <div className="App">
      <h1>Usuarios</h1>
      {loading && "Cargando..."}
      <ul>
        {usersArr.map((user) => (
          <li key={user.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
