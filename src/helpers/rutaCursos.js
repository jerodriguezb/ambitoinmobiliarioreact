import axios from "axios";

export const getCursos = async () => {
  const resp = await axios("http://localhost:3004/cursos");

  // console.log(resp);

  const { data } = resp;

  return data;
};

export const getCursoId= async (id)=>{
  const resp = await axios(`http://localhost:3004/cursos/${id}`);

 
  const { data } = resp;

  return data;

}
