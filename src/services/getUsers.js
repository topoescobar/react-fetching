import axios from "axios";

export const getUsers = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
};

//LLAMADO API CON FETCH
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    console.log("json", json);
    setUsers(json);
    setLoading(false);
  });
*/
