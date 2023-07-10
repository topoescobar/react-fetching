import axios from "axios";

//si devuelve status 201 la peticion se envio correctamente
export const addUserService = async (user) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/users", user)
    .then((response) => {
      return response.data;
    });
};
