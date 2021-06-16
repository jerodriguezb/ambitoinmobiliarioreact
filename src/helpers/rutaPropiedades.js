import axios from "axios";
import qs from "qs";

//Traer todos los cursos con el limite y desde que registro
export const getPropiedades = async (desde = 0, limite = 50) => {
  let url = `http://localhost:3004/propiedades?desde=${desde}&limite=${limite}`;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;

    return data;
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Traer un curso según su id
export const getPropiedadId = async (id) => {
  let url = `http://localhost:3004/propiedades/${id}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
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

//Crear nuevo curso
// export const addPropiedad = async (datos) => {
//   // console.log(datos);
//   const token = JSON.parse(localStorage.getItem("token")) || "";
//   let url = "http://localhost:3004/cursos";

//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       token: token,
//     },
//     data: qs.stringify(datos),
//   };
//   try {
//     const resp = await axios(url, options);
//     const { data } = resp;
//     console.log(resp);
//     return data;
//   } catch (error) {
//     // console.log(error.response.data);
//     return {
//       data: error.response.data,
//       loading: false,
//     };
//   }
// };

//Actualizar curso
// export const modifCurso = async (datos, id) => {
//   // console.log(datos);
//   const token = JSON.parse(localStorage.getItem("token")) || "";
//   let url = `http://localhost:3004/cursos/${id}`;

//   const options = {
//     method: "PUT",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       token: token,
//     },
//     data: qs.stringify(datos),
//   };
//   try {
//     const resp = await axios(url, options);
//     const { data } = resp;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.response.data);
//     return {
//       data: error.response.data,
//       loading: false,
//     };
//   }
// };

//Inactivar un curso
// export const delCurso = async (id) => {
//   const token = JSON.parse(localStorage.getItem("token")) || "";
//   let url = `http://localhost:3004/cursos/${id}`;

//   const options = {
//     method: "DELETE",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       token: token,
//     },
//   };
//   try {
//     const resp = await axios(url, options);
//     const { data } = resp;
//     // console.log(data);
//     return data;
//   } catch (error) {
//     // console.log(error.response.data);
//     return {
//       data: error.response.data,
//       loading: false,
//     };
//   }
// };
