const express = require("express");
const Propiedad = require("../modelos/propiedad");

// const {
//   verificaToken,
//   verificaAdmin_role,
// } = require("../middlewares/autenticacion");

const _ = require("underscore");
const app = express();

app.get("/propiedades", function (req, res) {
  // res.json("GET usuarios");

  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Propiedad.find({ activo: true })
    .limit(limite)
    .skip(desde)
    .sort("title") //ordenar alfabeticamente
    .populate("usuario", "nombre email")
    .exec((err, propiedades) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Propiedad.countDocuments({ activo: true }, (err, conteo) => {
        res.json({
          ok: true,
          propiedades,
          cantidad: conteo,
        });
      });
    });
});

app.get("/propiedades/:id", function (req, res) {
  // res.json("GET usuarios");

  let id = req.params.id;

  Propiedad.findById(id).exec((err, propiedad) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      propiedad,
    });
  });
});

app.post("/propiedades", function (req, res) {
  // res.json('POST usuarios')

  let body = req.body;

  let propiedad = new Propiedad({
    CodigoPropiedad: body.CodigoPropiedad,
    Titulo: body.Titulo,
    EstadoPropiedad: body.EstadoPropiedad,
    TipoPropiedad: body.TipoPropiedad,
    DireccionFisica: body.DireccionFisica,
    Descripcion: body.Descripcion,
    Barrio: body.Barrio,
    Lugar: body.Lugar,
    Valor: body.Valor,
    SuperficieTotal: body.SuperficieTotal,
    SuperficieComun: body.SuperficieComun,
    SuperficiePropia: body.SuperficiePropia,
    SuperficieCubierta: body.SuperficieCubierta,
    SuperficieSemiCubierta: body.SuperficieSemiCubierta,
    Ambientes: body.Ambientes,
    Dormitorio: body.Dormitorio,
    Baño: body.Baño,
    Cocina: body.Cocina,
    CocinaComedor: body.CocinaComedor,
    Placard: body.Placard,
    ComedorDiario: body.ComedorDiario,
    Dependencia: body.Dependencia,
    BañoServicio: body.BañoServicio,
    Lavadero: body.Lavadero,
    Living: body.Living,
    LivingComedor: body.LivingComedor,
    Escritorio: body.Escritorio,
    Toillette: body.Toillette,
    Balcon: body.Balcon,
    Baulera: body.Baulera,
    Jardin: body.Jardin,
    SUM: body.SUM,
    Solarium: body.Solarium,
    Patio: body.Patio,
    Quincho: body.Quincho,
    Pileta: body.Pileta,
    Galeria: body.Galeria,
    Asador: body.Asador,
    Cochera: body.Cochera,
    CocheraCubierta: body.CocheraCubierta,
    Suite: body.Suite,
    SalaEstarPlayroom: body.SalaEstarPlayroom,
    Internet: body.Internet,
    Electricidad: body.Electricidad,
    Gas: body.Gas,
    Agua: body.Agua,
    Cloacas: body.Cloacas,
    Cable: body.Cable,
    Seguridad: body.Seguridad,
    Expensas: body.Expensas,
    InformacionAdicional: body.InformacionAdicional,
    imag1: body.imag1,
    imag2: body.imag2,
    imag3: body.imag3,
    imag4: body.imag4,
    imag5: body.imag5,
    imag6: body.imag6,
    imag7: body.imag7,
    imag8: body.imag8,
    imag9: body.imag9,
    imag10: body.imag10,
    activo: body.activo,
    mostrar_portada: body.mostrar_portada,
    Latitud: body.Latitud,
    Longitud: body.Longitud,

    // usuario: req.usuario._id,
  });

  propiedad.save((err, propiedadDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      propiedad: propiedadDB,
    });
  });
});
// app.put(
//   "/propiedades/:id",
//   [verificaToken, verificaAdmin_role],
//   function (req, res) {
//     // res.json("PUT usuarios");
//     let id = req.params.id;
//     let body = req.body;

//     Propiedad.findByIdAndUpdate(
//       id,
//       body,
//       { new: true, runValidators: true },
//       (err, propiedadDB) => {
//         if (err) {
//           return res.status(400).json({
//             ok: false,
//             err,
//           });
//         }
//         res.json({
//           ok: true,
//           propiedad: propiedadDB,
//         });
//       }
//     );
//   }
// );

// app.delete(
//   "/propiedades/:id",
//   [verificaToken, verificaAdmin_role],
//   function (req, res) {
//     let id = req.params.id;

//     let estadoActualizado = {
//       activo: false,
//     };

//     Propiedad.findByIdAndUpdate(
//       id,
//       estadoActualizado,
//       { new: true },
//       (err, propiedadBorrado) => {
//         if (err) {
//           return res.status(400).json({
//             ok: false,
//             err,
//           });
//         }

//         if (!propiedadBorrado) {
//           return res.status(400).json({
//             ok: false,
//             err: {
//               message: "Propiedad no encontrado",
//             },
//           });
//         }

//         res.json({
//           ok: true,
//           propiedad: propiedadBorrado,
//         });
//       }
//     );
//   }
// );

module.exports = app;
