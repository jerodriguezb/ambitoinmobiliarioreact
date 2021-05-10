import axios from "axios";

export const getPropiedades = async () => {
  const resp = await axios("http://localhost:3004/propiedades");

  const { data } = resp;
  return data;
};
