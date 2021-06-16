import axios from "axios";

export const getPropiedades = async () => {
  const resp = await axios("http://localhost:3004/propiedades");

  // console.log(resp);

  const { data } = resp;

  return data;
};

export const getPropiedadId = async (id) => {
  const resp = await axios(`http://localhost:3004/propiedades/${id}`);

  const { data } = resp;

  return data;
};

export const getCarousel = async () => {
  const resp = await axios("http://localhost:3004");

  const { data } = resp;
  return data;
};

export const getMarquesina = async () => {
  const resp = await axios("http://localhost:3004");

  const { data } = resp;
  return data;
};
