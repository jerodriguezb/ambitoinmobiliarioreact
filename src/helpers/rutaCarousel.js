import axios from "axios";

export const getCarousel = async () => {
  const resp = await axios("http://localhost:3004/carousel");

  const { data } = resp;
  return data;
};
