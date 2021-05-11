import axios from "axios";

export const getBuscarEstado = async () => {
  const resp = await axios("http://localhost:3004/estadoprop");

  const { data } = resp;
  return data;
};


export const getBuscarTipo = async () => {
    const resp = await axios("http://localhost:3004/tipoprop");
  
    const { data } = resp;
    return data;
  };

export const getBuscarLugar = async () => {
    const resp = await axios("http://localhost:3004/lugar");
  
    const { data } = resp;
    return data;
  };