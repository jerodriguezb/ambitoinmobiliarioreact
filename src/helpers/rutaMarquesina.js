import axios from "axios";

export const getMarquesina = async () => {
  const resp = await axios("http://localhost:3004/marquesina");

  const { data } = resp;
  return data;
};

